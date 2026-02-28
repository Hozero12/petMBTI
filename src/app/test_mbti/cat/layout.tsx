import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "고양이 MBTI 검사",
  description:
    "고양이 MBTI 검사로 우리 냥이의 성향을 알아보세요. 총 20문항 검사 후 16가지 유형별 맞춤 해설을 확인할 수 있습니다.",
  openGraph: {
    title: "고양이 MBTI 검사 | Pet BTI",
    description: "고양이 MBTI 검사로 우리 냥이의 성향을 알아보세요. 20문항 검사 후 16가지 유형별 맞춤 해설.",
    url: "/test_mbti/cat",
  },
};

export default function CatTestLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
