import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export const usePageView = (page: string = "/") => {
  useEffect(() => {
    const key = `pv_tracked_${page}`;
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(key)) return;
    sessionStorage.setItem(key, "1");
    supabase.from("page_views").insert({ page }).then(() => {});
  }, [page]);
};
