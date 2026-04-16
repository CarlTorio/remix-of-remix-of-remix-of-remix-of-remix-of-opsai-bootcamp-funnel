import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { sendMetaEvent } from "@/lib/metaCapi";

export const usePageView = (page: string = "/") => {
  useEffect(() => {
    supabase.from("page_views").insert({ page }).then(() => {});
    sendMetaEvent("PageView");
  }, [page]);
};
