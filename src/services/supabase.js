import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://okxacvdbrsjrtsdtaujq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9reGFjdmRicnNqcnRzZHRhdWpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEzMTgwNTcsImV4cCI6MjAwNjg5NDA1N30.3MW8U6NZs_JjoxBxFxUekoK3bOKUOBseQeab0r9K9O8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
