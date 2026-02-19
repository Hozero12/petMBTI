import type { Metadata } from "next";
import Link from "next/link";

type Props = {
  searchParams: Promise<{ code?: string }>;
};

export const metadata: Metadata = {
  title: "강아지 MBTI 결과 | Pet MBTI",
};

export default async function DogResultPage({ searchParams }: Props) {
  const { code } = await searchParams;

  return (
    <div className="flex min-h-[100dvh] min-h-screen flex-col items-center bg-gradient-to-b from-amber-50 to-orange-50 dark:from-zinc-900 dark:to-zinc-950">
      <main className="flex w-full max-w-2xl flex-col gap-8 px-4 py-8 sm:gap-10 sm:px-6 sm:py-12 md:gap-12 md:px-8">
        <header className="text-center">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white sm:text-3xl">
            강아지 MBTI 결과
          </h1>
          {code ? (
            <p className="mt-4 text-3xl font-bold text-amber-600 dark:text-amber-500 sm:text-4xl">
              {code}
            </p>
          ) : (
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              검사를 먼저 완료해주세요.
            </p>
          )}
        </header>

        {code && (
          <section className="rounded-2xl bg-white/80 p-6 shadow-sm dark:bg-zinc-800/80">
            <p className="text-center text-zinc-600 dark:text-zinc-400">
              결과 분석 페이지입니다. (준비 중)
            </p>
          </section>
        )}

        <Link
          href="/test_mbti/dog"
          className="flex min-h-[48px] w-full items-center justify-center rounded-full bg-amber-500 text-base font-semibold text-white transition-colors hover:bg-amber-600 sm:min-h-[52px]"
        >
          다시 검사하기
        </Link>
      </main>
    </div>
  );
}
