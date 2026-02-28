const baseUrl =
  process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : process.env.NEXT_PUBLIC_SITE_URL ?? "https://pet-bti.vercel.app";

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Pet BTI",
  description: "반려동물 MBTI 검사 - 강아지, 고양이 성향 테스트",
  url: baseUrl,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${baseUrl}/test_mbti/dog`,
    },
    "query-input": "required name=search_term_string",
  },
};

export function WebSiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
    />
  );
}
