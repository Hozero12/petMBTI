import { createClient } from "@/lib/supabase/server";

const TABLE_NAME = "results";

export async function saveTestResult(petType: "dog" | "cat", code: string) {
  console.log("[saveTestResult] 호출됨:", { petType, code });

  const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
  const supabaseAnonKey =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn(
      "[saveTestResult] Supabase env 미설정 (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY)"
    );
    return;
  }

  try {
    const supabase = await createClient();
    console.log("[saveTestResult] Supabase 클라이언트 연결됨");

    const { data, error } = await supabase
      .from(TABLE_NAME)
      .insert({
        pet_type: petType,
        code: code.toUpperCase(),
      })
      .select();

    if (error) {
      console.error(
        "[saveTestResult] Supabase insert 실패:",
        error.message,
        error.details
      );
      return;
    }
    console.log("[saveTestResult] 저장 성공:", data);
  } catch (err) {
    console.error(
      "[saveTestResult] 오류:",
      err instanceof Error ? err.message : err
    );
  }
}
