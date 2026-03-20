-- results 테이블 RLS 정책 설정
-- Supabase SQL Editor에서 실행하세요

-- 기존 정책 제거 (있다면)
DROP POLICY IF EXISTS "Allow anonymous insert on results" ON public.results;
DROP POLICY IF EXISTS "Enable insert for anon" ON public.results;

-- RLS 활성화 (이미 되어있을 수 있음)
ALTER TABLE public.results ENABLE ROW LEVEL SECURITY;

-- anon 역할로 INSERT 허용
CREATE POLICY "Allow anonymous insert on results"
ON public.results
FOR INSERT
TO anon
WITH CHECK (true);
