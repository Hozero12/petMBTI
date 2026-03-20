"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

/**
 * 결과 페이지에서 from=test 파라미터 제거
 * 공유 시 깔끔한 URL이 전달되도록 함
 */
export function CleanResultUrl() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const from = searchParams.get("from");
    if (from !== "test") return;

    const params = new URLSearchParams(searchParams.toString());
    params.delete("from");
    const cleanSearch = params.toString();
    const newUrl = cleanSearch ? `${pathname}?${cleanSearch}` : pathname;
    router.replace(newUrl, { scroll: false });
  }, [pathname, router, searchParams]);

  return null;
}
