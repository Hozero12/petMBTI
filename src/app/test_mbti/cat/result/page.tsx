import { ShareButton } from "@/components/ShareButton";
import { TraitExplainerButton } from "@/components/TraitExplainerButton";
import { getCatResult } from "@/lib/cat-results";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type Props = {
  searchParams: Promise<{ code?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { code } = await searchParams;
  const result = code ? getCatResult(code.toUpperCase()) : null;
  const title = result ? `고양이 MBTI ${code?.toUpperCase()} 결과 | Pet BTI` : "고양이 MBTI 결과 | Pet BTI";
  const description = result
    ? `내 반려고양이 MBTI는 ${code?.toUpperCase()} (${result.title})! 자세한 해설을 Pet BTI에서 확인해보세요.`
    : "당신의 반려고양이 MBTI를 알아보세요.";
  const imageUrl = code ? `/images/cat/${code.toLowerCase()}.png` : undefined;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: imageUrl ? [{ url: imageUrl, width: 512, height: 512 }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export default async function CatResultPage({ searchParams }: Props) {
  const { code } = await searchParams;
  const result = code ? getCatResult(code.toUpperCase()) : null;

  return (
    <div className="flex min-h-[100dvh] min-h-screen flex-col items-center overflow-x-hidden bg-gradient-to-b from-orange-50 to-amber-50 dark:from-zinc-900 dark:to-zinc-950">
      <main className="flex w-full max-w-2xl flex-col gap-3 px-4 pt-0 pb-24 sm:gap-5 sm:px-6 sm:pt-1 md:gap-6 md:px-8 md:pb-28">
        <Link
          href="/"
          className="self-start rounded-lg px-3 py-1.5 text-sm font-medium text-orange-600 transition-colors hover:bg-orange-100 dark:text-orange-500 dark:hover:bg-orange-900/30"
        >
          ← 홈으로
        </Link>
        <header className="text-center">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white sm:text-3xl">
            고양이 MBTI 결과
          </h1>
          {code ? (
            <>
              {result && (
                <div className="relative -mx-4 mt-4 aspect-square w-[100vw] max-w-[calc(100%+2rem)] sm:mx-auto sm:max-w-none sm:w-56">
                  <Image
                    src={`/images/cat/${code.toLowerCase()}.png`}
                    alt={result.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, 224px"
                  />
                </div>
              )}
              <div className="mt-4 flex flex-col items-center gap-2">
                <p className="text-3xl font-bold text-orange-600 dark:text-orange-500 sm:text-4xl">
                  {code.toUpperCase()}
                </p>
                <TraitExplainerButton variant="cat" code={code} compact />
              </div>
              {result && (
                <div className="mt-6 w-full space-y-6 text-left">
                  <div className="space-y-2 text-center">
                    <p className="text-xl font-bold text-zinc-900 dark:text-white sm:text-2xl">
                      {result.title}
                    </p>
                    <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {result.description}
                    </p>
                  </div>
                  <section className="overflow-hidden rounded-2xl border-2 border-orange-200/80 bg-orange-50 p-5 shadow-sm dark:border-orange-800/50 dark:bg-orange-900/25">
                    <h2 className="mb-3 text-xl font-bold text-orange-800 dark:text-orange-200">
                      잘 맞는 집사 MBTI
                    </h2>
                    <p className="pl-0.5 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                      {result.ownerMbti.join(", ")}
                    </p>
                  </section>
                  <section className="overflow-hidden rounded-2xl border-2 border-orange-200/80 bg-orange-50 p-5 shadow-sm dark:border-orange-800/50 dark:bg-orange-900/25">
                    <h2 className="mb-3 text-xl font-bold text-orange-800 dark:text-orange-200">
                      이 유형 고양이 특징
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {result.traits.map((trait, i) => (
                        <span
                          key={i}
                          className="rounded-full bg-emerald-100 px-4 py-2 text-base font-semibold text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </section>
                </div>
              )}
            </>
          ) : (
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              검사를 먼저 완료해주세요.
            </p>
          )}
        </header>

        {code && result && (
          <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-orange-200/50 bg-orange-50/95 px-4 pt-3 pb-2 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/95 sm:px-6 md:max-w-2xl md:left-1/2 md:right-auto md:-translate-x-1/2 md:px-8">
            <div className="mx-auto flex w-full max-w-2xl flex-col gap-1.5">
              <div className="flex gap-3">
              <div className="min-w-0 flex-1">
                <ShareButton
                  variant="cat"
                  title={`고양이 MBTI ${code.toUpperCase()} 결과`}
                  text={`내 반려고양이 MBTI는 ${code.toUpperCase()} (${result.title})! Pet BTI에서 확인해보세요.`}
                  url={`/test_mbti/cat/result?code=${code}`}
                  imageUrl={`/images/cat/${code.toLowerCase()}.png`}
                />
              </div>
              <Link
                href="/test_mbti/cat"
                className="flex min-h-[48px] flex-1 items-center justify-center rounded-full bg-emerald-500 text-base font-semibold text-white transition-colors hover:bg-emerald-600 sm:min-h-[52px]"
              >
                검사하기
              </Link>
            </div>
            <p className="text-center text-xs text-zinc-500 dark:text-zinc-400">
              © {new Date().getFullYear()} 냉댱연구소. All rights reserved.
            </p>
            </div>
          </div>
        )}

        {(!code || !result) && (
          <div className="fixed bottom-0 left-0 right-0 z-30 flex flex-col gap-1.5 border-t border-orange-200/50 bg-orange-50/95 px-4 pt-3 pb-2 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/95 sm:px-6 md:max-w-2xl md:left-1/2 md:right-auto md:-translate-x-1/2 md:px-8">
            <Link
              href="/test_mbti/cat"
              className="flex min-h-[48px] w-full items-center justify-center rounded-full bg-orange-500 text-base font-semibold text-white transition-colors hover:bg-orange-600 sm:min-h-[52px]"
            >
              검사하기
            </Link>
            <p className="text-center text-xs text-zinc-500 dark:text-zinc-400">
              © {new Date().getFullYear()} 냉댱연구소. All rights reserved.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
