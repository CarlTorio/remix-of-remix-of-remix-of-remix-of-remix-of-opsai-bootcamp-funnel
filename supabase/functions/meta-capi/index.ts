import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const PIXEL_ID = "2037457086832729";
const ACCESS_TOKEN =
  "EAAIz0iMOSbcBRGF2smCQLZCkSiZCQetjY5J0vaZAX0A0JTDtGaJlq8iHmhTJtl3ZAHdSb5PAMZCrPycLgunZCsYOZBp1ZBZBoueo9tBoTdczbz7MJEBquEOKWCRkNm0aQ4Jws3MTs6ClPIsUSwqeaoQMraivPwf8rSGIye2rJPRmOeZCZAMJZBSAxqZCoxDqiEiZAn0gZDZD";

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { event_name, event_id, user_data, custom_data } = await req.json();

    const payload = {
      data: [
        {
          event_name,
          event_time: Math.floor(Date.now() / 1000),
          event_id,
          action_source: "website",
          user_data: {
            client_ip_address: req.headers.get("x-forwarded-for"),
            client_user_agent: req.headers.get("user-agent"),
            fbp: user_data?.fbp ?? null,
            fbc: user_data?.fbc ?? null,
          },
          custom_data: custom_data ?? {},
        },
      ],
    };

    console.log("Sending to Meta CAPI:", JSON.stringify(payload));

    const res = await fetch(
      `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    const result = await res.json();
    console.log("Meta CAPI response:", JSON.stringify(result));

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Meta CAPI error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
