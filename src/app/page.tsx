import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "반려동물 MBTI 검사",
  description:
    "강아지, 고양이 MBTI 검사로 우리 반려동물의 성향을 알아보세요. 20문항 검사 후 16가지 유형별 맞춤 해설을 확인할 수 있습니다.",
  openGraph: {
    title: "Pet BTI | 반려동물 MBTI 검사",
    description:
      "강아지, 고양이 MBTI 검사로 우리 반려동물의 성향을 알아보세요. 20문항 검사 후 16가지 유형별 맞춤 해설을 확인할 수 있습니다.",
    url: "/",
  },
};

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] min-h-screen flex-col items-center overflow-x-hidden bg-gradient-to-b from-amber-50 to-orange-50 dark:from-zinc-900 dark:to-zinc-950 sm:justify-center">
      <h1 className="sr-only">Pet BTI - 반려동물 MBTI 검사, 강아지·고양이 성향 테스트</h1>
      {/* 모바일: 이미지 + 버튼 이미지 하단에 오버레이 */}
      <div className="relative h-[100dvh] w-screen sm:hidden">
        <Image
          src="/images/main/main_ph2.jpeg"
          alt="Pet BTI"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 flex-row gap-3 px-4">
          <Link
            href="/test_mbti/dog"
            className="flex min-h-[56px] flex-1 items-center justify-center rounded-xl border-2 border-violet-900/50 bg-violet-500 px-10 py-4 text-xl font-bold text-white shadow-[0_5px_0_#5b21b6,0_8px_25px_rgba(0,0,0,0.35)] transition-all active:translate-y-[3px] active:shadow-[0_2px_0_#5b21b6,0_4px_15px_rgba(0,0,0,0.25)]"
          >
            강아지용
          </Link>
          <Link
            href="/test_mbti/cat"
            className="flex min-h-[56px] flex-1 items-center justify-center rounded-xl border-2 border-emerald-900/50 bg-emerald-600 px-10 py-4 text-xl font-bold text-white shadow-[0_5px_0_#064e3b,0_8px_25px_rgba(0,0,0,0.35)] transition-all active:translate-y-[3px] active:shadow-[0_2px_0_#064e3b,0_4px_15px_rgba(0,0,0,0.25)]"
          >
            고양이용
          </Link>
        </div>
      </div>
      {/* 웹: 이미지 전체화면 + 버튼 중앙 오버레이 */}
      <div className="relative hidden h-[100dvh] w-screen sm:block">
        <Image
          src="/images/main/main.png"
          alt="Pet BTI"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute left-0 right-0 top-[85%] flex -translate-y-1/2 flex-row justify-center gap-4 px-8">
          <Link
            href="/test_mbti/dog"
            className="flex min-h-[56px] min-w-[160px] flex-1 max-w-[200px] items-center justify-center rounded-xl border-2 border-violet-900/50 bg-violet-500 px-10 py-4 text-xl font-bold text-white shadow-[0_5px_0_#5b21b6,0_8px_25px_rgba(0,0,0,0.35)] transition-all hover:bg-violet-400 active:translate-y-[3px] active:shadow-[0_2px_0_#5b21b6,0_4px_15px_rgba(0,0,0,0.25)]"
          >
            강아지 태스트 시작
          </Link>
          <Link
            href="/test_mbti/cat"
            className="flex min-h-[56px] min-w-[160px] flex-1 max-w-[200px] items-center justify-center rounded-xl border-2 border-emerald-900/50 bg-emerald-600 px-10 py-4 text-xl font-bold text-white shadow-[0_5px_0_#064e3b,0_8px_25px_rgba(0,0,0,0.35)] transition-all hover:bg-emerald-500 active:translate-y-[3px] active:shadow-[0_2px_0_#064e3b,0_4px_15px_rgba(0,0,0,0.25)]"
          >
            고양이 테스트 시작
          </Link>
        </div>
      </div>
    </div>
  );
}
