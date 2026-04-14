
CREATE TABLE public.page_views (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page text NOT NULL DEFAULT '/',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.page_views ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert page views"
ON public.page_views FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "Anyone can read page views"
ON public.page_views FOR SELECT
TO public
USING (true);
