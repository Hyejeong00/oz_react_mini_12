import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY
console.log(supabaseKey, supabaseUrl)
export const supabase = createClient(supabaseUrl, supabaseKey)
