import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  const PANCAKE_API_KEY = Deno.env.get("PANCAKE_API_KEY");
  const PANCAKE_SHOP_ID = Deno.env.get("PANCAKE_SHOP_ID");

  const url = `https://pos.pages.fm/api/v1/shops/${PANCAKE_SHOP_ID}/products?api_key=${PANCAKE_API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();

  return new Response(JSON.stringify(data, null, 2), {
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
});
