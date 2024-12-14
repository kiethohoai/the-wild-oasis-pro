import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lgqroqhfwyzolpyyvjhp.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxncXJvcWhmd3l6b2xweXl2amhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQwOTcwNDcsImV4cCI6MjA0OTY3MzA0N30.DyEC9MMC5aq0gBsz3g8YiwPvQ-xuwF1W2cNMMixJXe8';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
