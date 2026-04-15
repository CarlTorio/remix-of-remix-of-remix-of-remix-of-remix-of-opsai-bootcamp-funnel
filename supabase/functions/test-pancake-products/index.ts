import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  const shopId = Deno.env.get("PANCAKE_SHOP_ID");
  const apiKey = Deno.env.get("PANCAKE_API_KEY");

  if (!shopId || !apiKey) {
    return new Response(JSON.stringify({ error: "Missing PANCAKE_SHOP_ID or PANCAKE_API_KEY" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const res = await fetch(`https://pos.pages.fm/api/v1/shops/${shopId}/products?api_key=${apiKey}`);
  const data = await res.json();

  return new Response(JSON.stringify(data, null, 2), {
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
});
