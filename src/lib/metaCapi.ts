import { supabase } from "@/integrations/supabase/client";

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? match[2] : null;
}

export async function sendMetaEvent(
  eventName: string,
  customData?: Record<string, unknown>
) {
  const eventId = crypto.randomUUID();

  // Fire browser pixel with event_id for deduplication
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", eventName, customData ?? {}, {
      eventID: eventId,
    });
  }

  // Send server-side via edge function
  try {
    await supabase.functions.invoke("meta-capi", {
      body: {
        event_name: eventName,
        event_id: eventId,
        user_data: {
          fbp: getCookie("_fbp"),
          fbc: getCookie("_fbc"),
        },
        custom_data: customData ?? {},
      },
    });
  } catch (e) {
    console.error("Meta CAPI call failed:", e);
  }
}
