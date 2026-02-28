import type { MetadataRoute } from "next";
import { DOG_RESULTS } from "@/lib/dog-results";
import { CAT_RESULTS } from "@/lib/cat-results";

const baseUrl =
  process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : process.env.NEXT_PUBLIC_SITE_URL ?? "https://pet-bti.vercel.app";

const DOG_CODES = Object.keys(DOG_RESULTS);
const CAT_CODES = Object.keys(CAT_RESULTS);

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/test_mbti/dog`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/test_mbti/cat`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  ];

  const dogResults = DOG_CODES.map((code) => ({
    url: `${baseUrl}/test_mbti/dog/result?code=${code.toLowerCase()}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const catResults = CAT_CODES.map((code) => ({
    url: `${baseUrl}/test_mbti/cat/result?code=${code.toLowerCase()}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...dogResults, ...catResults];
}
