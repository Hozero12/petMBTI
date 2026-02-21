"use client";

import Script from "next/script";

type Props = {
  apiKey: string;
};

export function KakaoScript({ apiKey }: Props) {
  return (
    <Script
      src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js"
      crossOrigin="anonymous"
      strategy="afterInteractive"
      onLoad={() => {
        if (typeof window !== "undefined") {
          const w = window as unknown as { Kakao?: { init: (k: string) => void } };
          if (w.Kakao) w.Kakao.init(apiKey);
        }
      }}
    />
  );
}
