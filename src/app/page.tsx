import { Hero } from "@/components/main/Hero";
import { Features } from "@/components/main/Features";
import { PetTypes } from "@/components/main/PetTypes";
import { CTA } from "@/components/main/CTA";
import { Footer } from "@/components/main/Footer";

export const metadata = {
  title: "반려동물 MBTI 검사",
  description:
    "강아지, 고양이 MBTI 검사로 우리 반려동물의 성향을 알아보세요. 20문항 검사 후 16가지 유형별 맞춤 해설을 확인할 수 있습니다.",
  openGraph: {
    title: "Pet BTI | 반려동물 MBTI 검사",
    description:
      "강아지, 고양이 MBTI 검사로 우리 반려동물의 성향을 알아보세요. 20문항 검사 후 16가지 유형별 맞춤 해설을 확인할 수 있습니다.",
    url: "/",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <h1 className="sr-only">Pet BTI - 반려동물 MBTI 검사, 강아지·고양이 성향 테스트</h1>
      <Hero />
      <Features />
      <PetTypes />
      {/* <CTA /> */}
      <Footer />
    </div>
  );
}
