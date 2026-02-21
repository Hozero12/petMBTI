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

export const metadata: Metadata = {
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
