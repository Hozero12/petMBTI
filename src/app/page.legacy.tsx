/**
 * 메인 페이지 이전 버전 (백업)
 * - 이미지 + 멘트 + CTA 버튼 오버레이
 * - Contact Us 고정 오버레이 (냉댱연구소, 인스타, 이메일)
 *
 * 복원 방법: 이 파일 내용을 page.tsx에 복사
 */
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

      {/* Contact Us - 고정 오버레이 (스크롤 없이 바로 보임) */}
      <div className="fixed bottom-12 left-0 right-0 z-30 flex justify-center px-4 sm:bottom-14 sm:justify-start sm:pl-8">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 rounded-full bg-black/50 px-4 py-2.5 text-sm backdrop-blur-sm sm:gap-x-5 sm:px-5 sm:py-3">
          <span className="font-semibold text-white">냉댱연구소</span>
          <a
            href="https://www.instagram.com/petbti"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-amber-300 hover:text-amber-200 hover:underline"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            @petbti
          </a>
          <a
            href="mailto:contact@naengddang.com"
            className="flex items-center gap-1.5 text-amber-300 hover:text-amber-200 hover:underline"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            nangdanglab@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
