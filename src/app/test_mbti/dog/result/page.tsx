import { ShareButton } from "@/components/ShareButton";
import { TraitExplainerButton } from "@/components/TraitExplainerButton";
import { getDogResult } from "@/lib/dog-results";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type Props = {
  searchParams: Promise<{ code?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { code } = await searchParams;
  const result = code ? getDogResult(code.toUpperCase()) : null;
  const title = result ? `강아지 MBTI ${code?.toUpperCase()} 결과 | Pet BTI` : "강아지 MBTI 결과 | Pet BTI";
  const description = result
    ? `내 반려강아지 MBTI는 ${code?.toUpperCase()} (${result.title})! 자세한 해설을 Pet BTI에서 확인해보세요...`
    : "당신의 반려강아지 MBTI를 알아보세요.";
  const imageUrl = code ? `/images/dog/${code.toLowerCase()}.png` : undefined;

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

export default async function DogResultPage({ searchParams }: Props) {
  const { code } = await searchParams;
  const result = code ? getDogResult(code.toUpperCase()) : null;

  return (
    <div className="flex min-h-[100dvh] min-h-screen flex-col items-center overflow-x-hidden bg-gradient-to-b from-amber-50 to-orange-50 dark:from-zinc-900 dark:to-zinc-950">
      <main className="flex w-full max-w-2xl flex-col gap-8 px-4 py-8 sm:gap-10 sm:px-6 sm:py-12 md:gap-12 md:px-8">
        <header className="text-center">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white sm:text-3xl">
            강아지 MBTI 결과
          </h1>
          {code ? (
            <>
              {result && (
                <div className="relative -mx-4 mt-4 aspect-square w-[100vw] max-w-[calc(100%+2rem)] sm:mx-auto sm:max-w-none sm:w-56">
                  <Image
                    src={`/images/dog/${code.toLowerCase()}.png`}
                    alt={result.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, 224px"
                  />
                </div>
              )}
              <p className="mt-4 text-3xl font-bold text-amber-600 dark:text-amber-500 sm:text-4xl">
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

        {code && result && (
          <>
            <TraitExplainerButton variant="dog" code={code} />
            <ShareButton
            variant="dog"
            title={`강아지 MBTI ${code.toUpperCase()} 결과`}
            text={`내 반려강아지 MBTI는 ${code.toUpperCase()} (${result.title})! Pet BTI에서 확인해보세요.`}
            url={`/test_mbti/dog/result?code=${code}`}
            imageUrl={`/images/dog/${code.toLowerCase()}.png`}
          />
          </>
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
