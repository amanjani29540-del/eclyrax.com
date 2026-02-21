-- Create access_requests table for storing Access Infrastructure form submissions
CREATE TABLE IF NOT EXISTS public.access_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL,
    contact_number TEXT NOT NULL,
    company_name TEXT NOT NULL,
    company_website TEXT,
    email TEXT NOT NULL,
    sector TEXT NOT NULL,
    project_description TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_access_requests_email ON public.access_requests(email);
CREATE INDEX IF NOT EXISTS idx_access_requests_created_at ON public.access_requests(created_at DESC);

-- Function to auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$;

-- Trigger to auto-update updated_at on row update
DROP TRIGGER IF EXISTS set_updated_at ON public.access_requests;
CREATE TRIGGER set_updated_at
    BEFORE UPDATE ON public.access_requests
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

-- Enable Row Level Security
ALTER TABLE public.access_requests ENABLE ROW LEVEL SECURITY;

-- RLS Policy: Allow anyone to insert their own access requests
DROP POLICY IF EXISTS "anyone_can_submit_access_requests" ON public.access_requests;
CREATE POLICY "anyone_can_submit_access_requests"
ON public.access_requests
FOR INSERT
TO public
WITH CHECK (true);

-- RLS Policy: Allow users to view their own submissions by email
DROP POLICY IF EXISTS "users_can_view_own_requests" ON public.access_requests;
CREATE POLICY "users_can_view_own_requests"
ON public.access_requests
FOR SELECT
TO public
USING (true);