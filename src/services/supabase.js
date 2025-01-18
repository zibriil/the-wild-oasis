import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://gnlnvnjrwsbzphwvsmlv.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdubG52bmpyd3NienBod3ZzbWx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE5Mzc3MTksImV4cCI6MjA0NzUxMzcxOX0.iYhTaPkgPz-TuUUapadlgteixX3Mr-qJpKpWMscQ8YU';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
