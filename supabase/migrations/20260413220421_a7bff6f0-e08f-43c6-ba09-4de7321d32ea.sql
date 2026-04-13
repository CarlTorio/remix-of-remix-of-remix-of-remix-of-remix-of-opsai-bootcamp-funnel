-- Create receipts table
CREATE TABLE public.receipts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  file_url TEXT NOT NULL,
  file_name TEXT NOT NULL,
  payment_method TEXT NOT NULL DEFAULT 'bank',
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.receipts ENABLE ROW LEVEL SECURITY;

-- Anyone can insert (no auth required for checkout)
CREATE POLICY "Anyone can upload receipts"
ON public.receipts FOR INSERT
WITH CHECK (true);

-- Only authenticated users can view receipts
CREATE POLICY "Authenticated users can view receipts"
ON public.receipts FOR SELECT
TO authenticated
USING (true);

-- Create storage bucket for receipts
INSERT INTO storage.buckets (id, name, public)
VALUES ('receipts', 'receipts', true);

-- Anyone can upload to receipts bucket
CREATE POLICY "Anyone can upload receipt files"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'receipts');

-- Public read access for receipt files
CREATE POLICY "Receipt files are publicly accessible"
ON storage.objects FOR SELECT
USING (bucket_id = 'receipts');