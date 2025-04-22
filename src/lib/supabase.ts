import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zdwocrynyumemmethcll.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpkd29jcnlueXVtZW1tZXRoY2xsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzNTEzNjQsImV4cCI6MjA2MDkyNzM2NH0.uzfIvI8wR0MNW-hj6vQVRpLLbOG64NWUnNt2V7dZXlI';

export const supabase = createClient(supabaseUrl, supabaseKey);