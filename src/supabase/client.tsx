import { createClient } from '@supabase/supabase-js';

// Get the public URL and key from the environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Check that the environment variables are set
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase URL or Anon Key is missing from environment variables.');
}

export const supabase = createClient(supabaseUrl!, supabaseAnonKey!);
