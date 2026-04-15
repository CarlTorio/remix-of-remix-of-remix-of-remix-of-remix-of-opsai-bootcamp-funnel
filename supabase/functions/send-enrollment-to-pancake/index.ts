import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const PANCAKE_API_KEY = Deno.env.get("PANCAKE_API_KEY");
    const PANCAKE_SHOP_ID = Deno.env.get("PANCAKE_SHOP_ID");
    const PANCAKE_VARIATION_ID = Deno.env.get("PANCAKE_VARIATION_ID");

    if (!PANCAKE_API_KEY || !PANCAKE_SHOP_ID || !PANCAKE_VARIATION_ID) {
      throw new Error("Missing Pancake configuration secrets");
    }

    const {
      first_name,
      surname,
      phone,
      email,
      enrollment_reference,
      payment_method,
      batch_month,
    } = await req.json();

    if (!first_name || !surname || !email || !phone || !enrollment_reference || !payment_method || !batch_month) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const pancakePaymentMethod = payment_method === "gcash" ? "1" : "2";

    const body = {
      bill_full_name: `${first_name} ${surname}`,
      bill_phone_number: phone,
      bill_email: email,
      is_free_shipping: true,
      received_at_shop: true,
      items: [
        {
          product_id: "SMEB-4886",
          variation_id: PANCAKE_VARIATION_ID,
          quantity: 1,
          discount_each_product: 0,
          is_bonus_product: false,
          is_discount_percent: false,
          is_wholesale: false,
          one_time_product: false,
        },
      ],
      note: `Enrollment Ref: ${enrollment_reference} | Payment: ${payment_method} | Batch: ${batch_month}`,
      payment_method: pancakePaymentMethod,
    };

    const url = `https://pos.pages.fm/api/v1/shops/${PANCAKE_SHOP_ID}/orders?api_key=${PANCAKE_API_KEY}`;

    console.log("Sending to Pancake:", JSON.stringify(body));

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Pancake API error:", JSON.stringify(data));
      return new Response(
        JSON.stringify({ error: "Pancake API error", details: data }),
        { status: response.status, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Pancake success:", JSON.stringify(data));

    return new Response(
      JSON.stringify({ success: true, data }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error.message);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
