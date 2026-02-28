import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { KakaoScript } from "@/components/KakaoScript";
import { WebSiteJsonLd } from "@/components/JsonLd";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl =
  process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const kakaoKey = process.env.NEXT_PUBLIC_KAKAO_JS_KEY;
const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Pet BTI | 반려동물 MBTI 검사",
    template: "%s | Pet BTI",
  },
  description:
    "강아지, 고양이 MBTI 검사로 우리 반려동물의 성향을 알아보세요. 20문항 검사 후 16가지 유형별 맞춤 해설을 확인할 수 있습니다.",
  keywords: [
    "반려동물 MBTI",
    "강아지 MBTI",
    "고양이 MBTI",
    "펫 MBTI",
    "반려견 성격",
    "반려묘 성격",
    "Pet BTI",
  ],
  authors: [{ name: "Pet BTI" }],
  creator: "Pet BTI",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "Pet BTI",
    title: "Pet BTI | 반려동물 MBTI 검사",
    description:
      "강아지, 고양이 MBTI 검사로 우리 반려동물의 성향을 알아보세요. 20문항 검사 후 16가지 유형별 맞춤 해설을 확인할 수 있습니다.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet BTI | 반려동물 MBTI 검사",
    description:
      "강아지, 고양이 MBTI 검사로 우리 반려동물의 성향을 알아보세요.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fffbeb" },
    { media: "(prefers-color-scheme: dark)", color: "#18181b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-[100dvh] w-full max-w-[100vw] flex flex-col`}
      >
        <WebSiteJsonLd />
        {kakaoKey && <KakaoScript apiKey={kakaoKey} />}
        {gaId && <GoogleAnalytics measurementId={gaId} />}
        <div className="flex-1">{children}</div>
        <footer className="fixed bottom-0 left-0 right-0 py-2 text-center text-xs text-zinc-600 dark:text-zinc-400 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm">
          © {new Date().getFullYear()} Pet BTI. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
