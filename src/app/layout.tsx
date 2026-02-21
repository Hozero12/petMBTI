import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Pet BTI",
  description: "당신의 반려동물과 잘 맞는 MBTI를 알아보세요",
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
      {process.env.NEXT_PUBLIC_KAKAO_JS_KEY && (
        <>
          <Script
            src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js"
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
          <Script id="kakao-init" strategy="afterInteractive">
            {`Kakao.init('${process.env.NEXT_PUBLIC_KAKAO_JS_KEY}');`}
          </Script>
        </>
      )}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-[100dvh] w-full max-w-[100vw] flex flex-col`}
      >
        <div className="flex-1">{children}</div>
        <footer className="fixed bottom-0 left-0 right-0 py-2 text-center text-xs text-zinc-600 dark:text-zinc-400 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm">
          © {new Date().getFullYear()} Pet BTI. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
