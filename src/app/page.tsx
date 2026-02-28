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
      {/* 모바일: 이미지 + 멘트 + 버튼 오버레이 */}
      <div className="relative h-[100dvh] w-screen sm:hidden">
        <Image
          src="/images/main/main_ph2.jpeg"
          alt="Pet BTI"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute left-0 right-0 top-[42%] flex -translate-y-1/2 flex-col items-center gap-4 px-4">
          <div className="w-full max-w-[340px] self-start rounded-2xl bg-black/55 px-5 py-4 backdrop-blur-sm">
            <p className="text-lg font-bold text-white">
              우리 집 댕냥이, 혹시 전략가형? 🐾
            </p>
            <p className="mt-1.5 text-[15px] font-semibold leading-snug text-white/95">
              PetBTI로 알아보는 반려동물 성격 테스트
            </p>
            <p className="mt-1 text-sm font-medium text-white/90">
              테스트 하고 공유해보세요.
            </p>
          </div>
          <div className="flex w-full max-w-[340px] flex-row gap-3">
            <Link
              href="/test_mbti/dog"
              className="flex min-h-[52px] min-w-0 flex-1 items-center justify-center rounded-xl border-2 border-violet-900/50 bg-violet-500 px-4 py-3 text-base font-bold text-white shadow-[0_5px_0_#5b21b6,0_8px_25px_rgba(0,0,0,0.35)] transition-all active:translate-y-[3px] active:shadow-[0_2px_0_#5b21b6,0_4px_15px_rgba(0,0,0,0.25)]"
            >
              강아지 테스트 시작
            </Link>
            <Link
              href="/test_mbti/cat"
              className="flex min-h-[52px] min-w-0 flex-1 items-center justify-center rounded-xl border-2 border-emerald-900/50 bg-emerald-600 px-4 py-3 text-base font-bold text-white shadow-[0_5px_0_#064e3b,0_8px_25px_rgba(0,0,0,0.35)] transition-all active:translate-y-[3px] active:shadow-[0_2px_0_#064e3b,0_4px_15px_rgba(0,0,0,0.25)]"
            >
              고양이 테스트 시작
            </Link>
          </div>
        </div>
      </div>
      {/* 웹: 이미지 전체화면 + 멘트 + 버튼 오버레이 */}
      <div className="relative hidden h-[100dvh] w-screen sm:block">
        <Image
          src="/images/main/main.png"
          alt="Pet BTI"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute left-0 right-0 top-[78%] flex -translate-y-1/2 flex-col items-center gap-5 px-8">
          <div className="w-full max-w-[400px] self-start rounded-2xl bg-black/50 px-6 py-5 backdrop-blur-sm sm:ml-8 sm:mr-auto">
            <p className="text-xl font-bold text-white">
              우리 집 댕냥이, 혹시 전략가형? 🐾
            </p>
            <p className="mt-2 text-lg font-semibold leading-snug text-white/95">
              PetBTI로 알아보는 반려동물 성격 테스트
            </p>
            <p className="mt-1.5 text-base font-medium text-white/90">
              테스트 하고 공유해보세요.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Link
              href="/test_mbti/dog"
              className="flex min-h-[56px] min-w-[200px] items-center justify-center whitespace-nowrap rounded-xl border-2 border-violet-900/50 bg-violet-500 px-8 py-4 text-lg font-bold text-white shadow-[0_5px_0_#5b21b6,0_8px_25px_rgba(0,0,0,0.35)] transition-all hover:bg-violet-400 active:translate-y-[3px] active:shadow-[0_2px_0_#5b21b6,0_4px_15px_rgba(0,0,0,0.25)]"
            >
              강아지 테스트 시작
            </Link>
            <Link
              href="/test_mbti/cat"
              className="flex min-h-[56px] min-w-[200px] items-center justify-center whitespace-nowrap rounded-xl border-2 border-emerald-900/50 bg-emerald-600 px-8 py-4 text-lg font-bold text-white shadow-[0_5px_0_#064e3b,0_8px_25px_rgba(0,0,0,0.35)] transition-all hover:bg-emerald-500 active:translate-y-[3px] active:shadow-[0_2px_0_#064e3b,0_4px_15px_rgba(0,0,0,0.25)]"
            >
              고양이 테스트 시작
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
