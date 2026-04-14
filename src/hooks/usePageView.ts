import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export const usePageView = (page: string = "/") => {
  useEffect(() => {
    supabase.from("page_views").insert({ page }).then(() => {});
  }, [page]);
};
