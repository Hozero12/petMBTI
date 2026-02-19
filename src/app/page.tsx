import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] min-h-screen flex-col items-center justify-center bg-gradient-to-b from-amber-50 to-orange-50 dark:from-zinc-900 dark:to-zinc-950">
      <main className="flex w-full max-w-2xl flex-col items-center justify-center gap-6 px-4 py-8 sm:gap-8 sm:px-6 sm:py-12 md:gap-10 md:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl md:text-6xl">
          aaa{/* Pet MBTI */}
        </h1>
        <p className="text-center text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg md:text-xl">
          {/* 당신의 반려동물 MBTI를 찾고 공유해보세요. */}
        </p>
        <div className="flex w-full max-w-xs flex-col gap-3 sm:max-w-md sm:flex-row sm:gap-4">
          <Link
            href="/test_mbti/dog"
            className="flex min-h-[44px] flex-1 items-center justify-center rounded-full bg-amber-500 px-8 py-3 text-base font-semibold text-white shadow-md transition-colors hover:bg-amber-600 active:bg-amber-700"
          >
            강아지용
          </Link>
          <Link
            href="/test_mbti/cat"
            className="flex min-h-[44px] flex-1 items-center justify-center rounded-full bg-orange-500 px-8 py-3 text-base font-semibold text-white shadow-md transition-colors hover:bg-orange-600 active:bg-orange-700"
          >
            고양이용
          </Link>
        </div>
      </main>
    </div>
  );
}
