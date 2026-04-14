
-- Drop the old restrictive SELECT policy
DROP POLICY IF EXISTS "Authenticated users can view receipts" ON public.receipts;

-- Allow anyone to read receipts (admin panel uses hardcoded password, not Supabase auth)
CREATE POLICY "Anyone can view receipts"
ON public.receipts
FOR SELECT
TO public
USING (true);
