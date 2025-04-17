
// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://egxwfadepisahwbsdxjl.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVneHdmYWRlcGlzYWh3YnNkeGpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4OTQ0NDYsImV4cCI6MjA2MDQ3MDQ0Nn0.rRmk-J1tgIFj0LJcrZ_cBLIBroI2iVJd_Ozs1UAHBSI";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(
  SUPABASE_URL, 
  SUPABASE_PUBLISHABLE_KEY,
  {
    auth: {
      storage: localStorage,
      persistSession: true,
      autoRefreshToken: true,
    }
  }
);
