"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { DOG_RESULTS } from "@/lib/dog-results";
import { CAT_RESULTS } from "@/lib/cat-results";
import type { DogResultCode } from "@/lib/dog-results";
import type { CatResultCode } from "@/lib/cat-results";

const HERO_SLIDE_COUNT = 5;

function HeroImageCarousel() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      <Carousel opts={{ loop: true }} setApi={setApi} className="w-full h-full">
        <CarouselContent className="h-full -ml-0">
          {[1, 2, 3, 4, 5].map((n) => (
            <CarouselItem key={n} className="pl-0 basis-full h-full">
              <div className="relative w-full h-[500px] md:h-[600px] bg-gray-50">
                <Image
                  src={`/images/code_explain/${n}.jpeg`}
                  alt={`코드 설명 ${n}`}
                  fill
                  className="object-contain object-center"
                  sizes="100vw"
                  priority={n === 1}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 hidden md:flex" />
        <CarouselNext className="right-2 hidden md:flex" />
      </Carousel>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/25 backdrop-blur-sm">
        <div className="flex-1 min-w-[80px] h-1 bg-white/40 rounded-full overflow-hidden">
          <div
            className="h-full bg-white rounded-full transition-all duration-300"
            style={{ width: `${((current + 1) / HERO_SLIDE_COUNT) * 100}%` }}
          />
        </div>
        <span className="text-xs font-medium text-white/90 tabular-nums">
          {current + 1}/{HERO_SLIDE_COUNT}
        </span>
      </div>
    </div>
  );
}

const RESULT_CODES: DogResultCode[] = [
  "AHSR", "AHSF", "AHBR", "AHBF",
  "AISR", "AISF", "AIBR", "AIBF",
  "LHSR", "LHSF", "LHBR", "LHBF",
  "LISR", "LISF", "LIBR", "LIBF",
];

function ResultBrowseContent() {
  return (
    <Tabs defaultValue="dog" className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-4">
        <TabsTrigger value="dog">🐕 강아지</TabsTrigger>
        <TabsTrigger value="cat">🐱 고양이</TabsTrigger>
      </TabsList>
      <TabsContent value="dog" className="mt-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-h-[60vh] overflow-y-auto pr-1">
          {RESULT_CODES.map((code) => {
            const r = DOG_RESULTS[code];
            return (
              <Link
                key={code}
                href={`/test_mbti/dog/result?code=${code.toLowerCase()}`}
                className="block p-3 rounded-lg border border-gray-200 hover:border-purple-400 hover:bg-purple-50/50 transition-colors text-left"
              >
                <span className="text-xs font-mono font-semibold text-purple-600">{code}</span>
                <p className="text-sm font-bold text-gray-900 mt-0.5 line-clamp-2">{r.title}</p>
                <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">{r.description}</p>
              </Link>
            );
          })}
        </div>
      </TabsContent>
      <TabsContent value="cat" className="mt-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-h-[60vh] overflow-y-auto pr-1">
          {RESULT_CODES.map((code) => {
            const r = CAT_RESULTS[code as CatResultCode];
            return (
              <Link
                key={code}
                href={`/test_mbti/cat/result?code=${code.toLowerCase()}`}
                className="block p-3 rounded-lg border border-gray-200 hover:border-emerald-400 hover:bg-emerald-50/50 transition-colors text-left"
              >
                <span className="text-xs font-mono font-semibold text-emerald-600">{code}</span>
                <p className="text-sm font-bold text-gray-900 mt-0.5 line-clamp-2">{r.title}</p>
                <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">{r.description}</p>
              </Link>
            );
          })}
        </div>
      </TabsContent>
    </Tabs>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Top Image Section - 슬라이드 */}
      <HeroImageCarousel />

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
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 text-lg px-8 py-3 rounded-xl"
                >
                  결과 둘러보기
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col">
                <DialogHeader>
                  <DialogTitle>16가지 유형 결과 둘러보기</DialogTitle>
                </DialogHeader>
                <ResultBrowseContent />
              </DialogContent>
            </Dialog>
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