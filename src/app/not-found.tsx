import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] min-h-screen flex-col items-center justify-center bg-gradient-to-b from-amber-50 to-orange-50 px-4 dark:from-zinc-900 dark:to-zinc-950">
      <main className="flex max-w-md flex-col items-center gap-8 text-center">
        <h1 className="text-8xl font-bold text-amber-500 dark:text-amber-500">
          404
        </h1>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
            페이지를 찾을 수 없어요
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
          </p>
        </div>
        <Link
          href="/"
          className="flex min-h-[48px] w-full items-center justify-center rounded-full bg-amber-500 px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-amber-600 active:bg-amber-700 sm:w-auto sm:min-w-[200px]"
        >
          홈으로 돌아가기
        </Link>
      </main>
    </div>
  );
}
