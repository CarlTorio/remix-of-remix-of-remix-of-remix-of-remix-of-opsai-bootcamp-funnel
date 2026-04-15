import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { first_name, surname, email, phone, payment_method, enrollment_reference, batch_month } = await req.json();

    const shopId = Deno.env.get("PANCAKE_SHOP_ID");
    const apiKey = Deno.env.get("PANCAKE_API_KEY");
    const variationId = Deno.env.get("PANCAKE_VARIATION_ID");

    if (!shopId || !apiKey || !variationId) {
      throw new Error("Missing Pancake configuration");
    }

    const body = {
      bill_full_name: `${first_name} ${surname}`,
      bill_phone_number: phone,
      bill_email: email,
      is_free_shipping: true,
      received_at_shop: true,
      items: [
        {
          product_id: "db4cf24d-fed6-460b-a47f-783b2aa0799f",
          variation_id: variationId,
          quantity: 1,
          price: 4886,
          is_wholesale: false,
        },
      ],
      note: `Enrollment Ref: ${enrollment_reference} | Payment: ${payment_method} | Batch: ${batch_month}`,
      payment_method: payment_method === "gcash" ? "1" : "2",
    };

    const res = await fetch(
      `https://pos.pages.fm/api/v1/shops/${shopId}/orders?api_key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      console.error("Pancake API error:", JSON.stringify(data));
      throw new Error(`Pancake API error [${res.status}]: ${JSON.stringify(data)}`);
    }

    return new Response(JSON.stringify({ success: true, data }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ success: false, error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
