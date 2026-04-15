
-- Create enrollments table
CREATE TABLE public.enrollments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  enrollment_reference TEXT NOT NULL UNIQUE,
  first_name TEXT NOT NULL,
  surname TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  payment_method TEXT NOT NULL DEFAULT 'gcash',
  amount NUMERIC NOT NULL DEFAULT 4886,
  batch_month TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  enrolled_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;

-- Public insert policy (no auth required for enrollment)
CREATE POLICY "Anyone can enroll"
  ON public.enrollments FOR INSERT
  WITH CHECK (true);

-- Public read policy
CREATE POLICY "Anyone can read enrollments"
  ON public.enrollments FOR SELECT
  USING (true);

-- Function to generate enrollment reference
CREATE OR REPLACE FUNCTION public.generate_enrollment_reference()
RETURNS TRIGGER AS $$
DECLARE
  month_str TEXT;
  seq_num INT;
  new_ref TEXT;
BEGIN
  month_str := to_char(NOW(), 'YYYYMM');
  SELECT COALESCE(MAX(
    CAST(SUBSTRING(enrollment_reference FROM 13) AS INT)
  ), 0) + 1
  INTO seq_num
  FROM public.enrollments
  WHERE enrollment_reference LIKE 'SMEB-' || month_str || '-%';
  
  new_ref := 'SMEB-' || month_str || '-' || LPAD(seq_num::TEXT, 4, '0');
  NEW.enrollment_reference := new_ref;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Trigger to auto-generate reference
CREATE TRIGGER set_enrollment_reference
  BEFORE INSERT ON public.enrollments
  FOR EACH ROW
  EXECUTE FUNCTION public.generate_enrollment_reference();
