import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://epttdofgvpfbmjbrrcas.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwdHRkb2ZndnBmYm1qYnJyY2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzODE4MTQsImV4cCI6MjA3Nzk1NzgxNH0.Rb925tXBk4YMJsZAGtN2AeXIHKCpXnA69qiaMYkqc6M"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
