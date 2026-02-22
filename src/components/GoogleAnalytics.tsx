"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, Suspense } from "react";

type Props = {
  measurementId: string;
};

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

function PageViewTracker({ measurementId }: { measurementId: string }) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag && pathname) {
      window.gtag("config", measurementId, {
        page_path: pathname,
      });
    }
  }, [pathname, measurementId]);

  return null;
}

export function GoogleAnalytics({ measurementId }: Props) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
      <Suspense fallback={null}>
        <PageViewTracker measurementId={measurementId} />
      </Suspense>
    </>
  );
}
