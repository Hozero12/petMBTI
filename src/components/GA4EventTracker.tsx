"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, Suspense } from "react";
import { trackEvent } from "@/lib/ga";

type Props = {
  measurementId: string;
};

function GA4EventTrackerInner({ measurementId }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const trackedRef = useRef<string>("");

  useEffect(() => {
    const key = `${pathname}?${searchParams.toString()}`;
    if (trackedRef.current === key) return;
    trackedRef.current = key;

    const fireEvent = () => {
      if (typeof window === "undefined" || !window.gtag) {
        setTimeout(fireEvent, 100);
        return;
      }

      // 홈 페이지
      if (pathname === "/") {
        trackEvent(measurementId, "view_home", {
          page_location: pathname,
        });
        return;
      }

      // 강아지 결과 페이지
      if (pathname === "/test_mbti/dog/result") {
        const code = searchParams.get("code")?.toUpperCase() || "";
        trackEvent(measurementId, "view_result", {
          variant: "dog",
          result_code: code,
          page_location: pathname,
        });
        return;
      }

      // 고양이 결과 페이지
      if (pathname === "/test_mbti/cat/result") {
        const code = searchParams.get("code")?.toUpperCase() || "";
        trackEvent(measurementId, "view_result", {
          variant: "cat",
          result_code: code,
          page_location: pathname,
        });
      }
    };

    fireEvent();
  }, [pathname, searchParams, measurementId]);

  return null;
}

export function GA4EventTracker({ measurementId }: Props) {
  return (
    <Suspense fallback={null}>
      <GA4EventTrackerInner measurementId={measurementId} />
    </Suspense>
  );
}
