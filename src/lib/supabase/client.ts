import { createBrowserClient } from "@supabase/ssr";
import type { SupabaseClient } from "@supabase/supabase-js";

export function createClient(): SupabaseClient {
  const supabaseUrl = process.env.SUPABASE_URL!;
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Supabase 연동을 위해 .env.local에 SUPABASE_URL과 SUPABASE_ANON_KEY를 설정해주세요."
    );
  }

  return createBrowserClient(supabaseUrl, supabaseAnonKey);
}
