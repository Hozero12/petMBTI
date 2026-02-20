import { getCatResult } from "@/lib/cat-results";
import type { Metadata } from "next";
import Link from "next/link";

type Props = {
  searchParams: Promise<{ code?: string }>;
};

export const metadata: Metadata = {
  title: "고양이 MBTI 결과 | Pet MBTI",
};

export default async function CatResultPage({ searchParams }: Props) {
  const { code } = await searchParams;
  const result = code ? getCatResult(code.toUpperCase()) : null;

  return (
    <div className="flex min-h-[100dvh] min-h-screen flex-col items-center bg-gradient-to-b from-orange-50 to-amber-50 dark:from-zinc-900 dark:to-zinc-950">
      <main className="flex w-full max-w-2xl flex-col gap-8 px-4 py-8 sm:gap-10 sm:px-6 sm:py-12 md:gap-12 md:px-8">
        <header className="text-center">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white sm:text-3xl">
            고양이 MBTI 결과
          </h1>
          {code ? (
            <>
              <p className="mt-4 text-3xl font-bold text-orange-600 dark:text-orange-500 sm:text-4xl">
                {code.toUpperCase()}
              </p>
              {result && (
                <div className="mt-6 space-y-2">
                  <p className="text-xl font-semibold text-zinc-900 dark:text-white">
                    {result.title}
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {result.description}
                  </p>
                </div>
              )}
            </>
          ) : (
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              검사를 먼저 완료해주세요.
            </p>
          )}
        </header>

        <Link
          href="/test_mbti/cat"
          className="flex min-h-[48px] w-full items-center justify-center rounded-full bg-orange-500 text-base font-semibold text-white transition-colors hover:bg-orange-600 sm:min-h-[52px]"
        >
          다시 검사하기
        </Link>
      </main>
    </div>
  );
}
