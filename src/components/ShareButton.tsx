"use client";

import { useState } from "react";

declare global {
  interface Window {
    Kakao?: {
      init: (key: string) => void;
      isInitialized: () => boolean;
      Share: {
        sendDefault: (options: {
          objectType: string;
          content: {
            title: string;
            description: string;
            imageUrl: string;
            link: { mobileWebUrl: string; webUrl: string };
          };
        }) => Promise<unknown>;
      };
    };
  }
}

type Props = {
  title: string;
  text: string;
  url: string;
  imageUrl?: string;
  variant?: "dog" | "cat";
};

export function ShareButton({ title, text, url, imageUrl, variant = "dog" }: Props) {
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);

  const hasKakao = !!process.env.NEXT_PUBLIC_KAKAO_JS_KEY;

  const fullUrl =
    typeof window !== "undefined" && url.startsWith("/")
      ? `${window.location.origin}${url}`
      : url;
  const mainUrl =
    typeof window !== "undefined" ? `${window.location.origin}/` : "/";
  const shareTextWithMain = `${text}\n\n결과 보기: ${fullUrl}\n\n나도 Pet BTI 검사해보기: ${mainUrl}`;
  const fullImageUrl =
    imageUrl && typeof window !== "undefined" && imageUrl.startsWith("/")
      ? `${window.location.origin}${imageUrl}`
      : imageUrl;

  const baseClass =
    "flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full text-base font-semibold text-white transition-colors sm:min-h-[52px]";
  const dogClass = "bg-amber-500 hover:bg-amber-600 active:bg-amber-700";
  const catClass = "bg-orange-500 hover:bg-orange-600 active:bg-orange-700";
  const variantClass = variant === "dog" ? dogClass : catClass;

  const handleKakaoShare = () => {
    if (typeof window === "undefined" || !window.Kakao?.Share) {
      handleCopyLink();
      return;
    }
    try {
      window.Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title,
          description: shareTextWithMain,
          imageUrl: fullImageUrl || `${window.location.origin}/images/main/main.png`,
          link: {
            mobileWebUrl: fullUrl,
            webUrl: fullUrl,
          },
        },
      });
      setShowModal(false);
    } catch {
      handleCopyLink();
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareTextWithMain);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      setShowModal(false);
    } catch {
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTextWithMain)}`,
        "_blank",
      );
      setShowModal(false);
    }
  };

  const handleSaveImage = async () => {
    if (!fullImageUrl) return;
    try {
      const res = await fetch(fullImageUrl);
      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = "pet-bti-result.png";
      a.click();
      URL.revokeObjectURL(blobUrl);
      setSaved(true);
      setTimeout(() => {
        setSaved(false);
        setShowModal(false);
      }, 1500);
    } catch {
      setShowModal(false);
    }
  };

  const handleNativeShare = async () => {
    try {
      if (typeof navigator !== "undefined" && "share" in navigator && typeof navigator.share === "function") {
        const shareData: ShareData & { files?: File[] } = {
          title,
          text: shareTextWithMain,
          url: fullUrl,
        };

        if (fullImageUrl && navigator.canShare) {
          try {
            const res = await fetch(fullImageUrl);
            const blob = await res.blob();
            const file = new File([blob], "pet-bti-result.png", { type: blob.type });
            if (navigator.canShare({ files: [file] })) {
              shareData.files = [file];
            }
          } catch {
            /* fallback */
          }
        }

        await navigator.share(shareData);
      } else {
        await handleCopyLink();
      }
      setShowModal(false);
    } catch {
      handleCopyLink();
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className={`${baseClass} ${variantClass}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
          <polyline points="16 6 12 2 8 6" />
          <line x1="12" y1="2" x2="12" y2="15" />
        </svg>
        공유하기
      </button>

      {showModal && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50"
            onClick={() => setShowModal(false)}
            onKeyDown={(e) => e.key === "Escape" && setShowModal(false)}
            role="button"
            tabIndex={0}
            aria-label="닫기"
          />
          <div className="fixed inset-x-0 bottom-0 z-50 rounded-t-2xl bg-white p-4 pb-8 dark:bg-zinc-900">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-zinc-300" />
            <p className="mb-4 text-center font-semibold text-zinc-900 dark:text-white">
              공유하기
            </p>
            <div className="flex flex-col gap-2">
              {hasKakao && (
                <button
                  type="button"
                  onClick={handleKakaoShare}
                  className="flex min-h-[52px] items-center justify-center gap-3 rounded-xl bg-[#FEE500] font-semibold text-[#191919] transition-opacity active:opacity-80"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 0 1-1.727-.11 10.31 10.31 0 0 0 1.006-1.668c.242-.368.516-.765.788-1.193.06-.094.12-.189.178-.282.315-.494.595-1.002.783-1.47a8.42 8.42 0 0 0 .535-2.619c-.084-.63-.217-1.228-.403-1.794-.333-.99-.835-1.85-1.488-2.568-.656-.72-1.466-1.304-2.402-1.728C14.963 3.815 13.517 3.5 12 3.5zm-6.5 6.5c0-1.084.277-2.082.79-2.97.515-.888 1.247-1.599 2.16-2.127C8.87 4.005 10.39 3.5 12 3.5c1.61 0 3.13.505 4.55 1.403.913.528 1.645 1.24 2.16 2.127.513.888.79 1.886.79 2.97 0 1.084-.277 2.082-.79 2.97-.515.888-1.247 1.6-2.16 2.127C15.13 16.995 13.61 17.5 12 17.5c-1.61 0-3.13-.505-4.55-1.403-.913-.528-1.645-1.24-2.16-2.127-.513-.888-.79-1.886-.79-2.97z" />
                  </svg>
                  카카오톡으로 공유
                </button>
              )}
              {typeof navigator !== "undefined" && "share" in navigator && typeof navigator.share === "function" && (
                <button
                  type="button"
                  onClick={handleNativeShare}
                  className="flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-zinc-100 font-semibold text-zinc-900 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                  </svg>
                  다른 앱으로 공유
                </button>
              )}
              {fullImageUrl && (
                <button
                  type="button"
                  onClick={handleSaveImage}
                  className="flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-zinc-100 font-semibold text-zinc-900 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  {saved ? "저장됨!" : "이미지 저장 (인스타그램)"}
                </button>
              )}
              <button
                type="button"
                onClick={handleCopyLink}
                className="flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-zinc-100 font-semibold text-zinc-900 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                  <path d="M4 16V4a2 2 0 0 1 2-2h12" />
                </svg>
                {copied ? "복사됨!" : "링크 복사"}
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
