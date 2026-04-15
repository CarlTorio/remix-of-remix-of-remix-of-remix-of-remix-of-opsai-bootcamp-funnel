-- Allow updating receipt status
CREATE POLICY "Anyone can update receipts"
ON public.receipts
FOR UPDATE
USING (true)
WITH CHECK (true);

-- Allow deleting receipts
CREATE POLICY "Anyone can delete receipts"
ON public.receipts
FOR DELETE
USING (true);