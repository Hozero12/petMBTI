import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Sparkles, Heart } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Top Image Section */}
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        {/* Mobile image - 세로형 */}
        <Image
          src="/images/main/main_ph2.jpeg"
          alt="Pet MBTI"
          fill
          className="md:hidden object-cover object-center"
          sizes="100vw"
          priority
        />

        {/* Desktop image - 가로형 */}
        <Image
          src="/images/main/main.png"
          alt="Pet MBTI"
          fill
          className="hidden md:block object-cover object-center"
          sizes="100vw"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="px-4 py-8 md:py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            우리 반려동물
            <br />
            <span style={{ color: "#009966" }}>
              성격 유형은?
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            우리 아이의 성격을 알아보고,
            <br />더 깊이 이해해보세요!
          </p>

          <div className="flex flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              style={{ backgroundColor: "#8E51FF" }}
              className="text-white text-lg px-8 py-10 flex-1 max-w-xs rounded-xl font-semibold"
              asChild
            >
              <Link href="/test_mbti/dog">
                강아지 <br />
                테스트 시작
              </Link>
            </Button>
            <Button
              size="lg"
              style={{ backgroundColor: "#009966" }}
              className="text-white text-lg px-8 py-10 flex-1 max-w-xs rounded-xl font-semibold"
              asChild
            >
              <Link href="/test_mbti/cat">
                고양이 <br />
                테스트 시작
              </Link>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 text-lg px-8 py-3 rounded-xl"
              asChild
            >
              <Link href="/test_mbti/dog/result">결과 둘러보기</Link>
            </Button>
          </div>

          <div className="flex items-center gap-6 justify-center">
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-600">
                16가지
              </p>
              <p className="text-sm text-gray-500">성격 유형</p>
            </div>
            <div className="w-px h-12 bg-gray-300" />
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">
                5K+
              </p>
              <p className="text-sm text-gray-500">참여자</p>
            </div>
            <div className="w-px h-12 bg-gray-300" />
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-600">
                20개
              </p>
              <p className="text-sm text-gray-500">질문</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}