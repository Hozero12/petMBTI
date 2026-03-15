import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="px-4 py-20 bg-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-blue-600 p-12 md:p-16 shadow-2xl">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 opacity-20">
            <Sparkles className="w-32 h-32 text-white" />
          </div>
          <div className="absolute bottom-0 left-0 opacity-10">
            <div className="w-64 h-64 bg-white rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              우리 아이의 진짜 모습,
              <br />
              지금 만나보세요! 🐾
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              단 3분이면 반려동물의 성격을 알아볼 수 있어요.
              <br />
              더 깊은 유대감을 만들어가는 첫 걸음을 시작하세요.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 shadow-xl text-lg px-8 py-6 group"
                asChild
              >
                <Link href="/test_mbti/dog" className="flex items-center">
                  무료로 시작하기
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <p className="text-white/80 text-sm">
                ✨ 이미 <span className="font-bold">50,000명</span>이 참여했어요
              </p>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full" />
                <span>100% 무료</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full" />
                <span>3분 소요</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full" />
                <span>회원가입 불필요</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}