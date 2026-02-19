"use client";

import { calculateMbtiResult, MBTI_ORDER } from "@/lib/mbti-scoring";
import Link from "next/link";
import { useMemo, useState } from "react";

// 질문 형식: "질문 내용/알파벳" - 슬래시 뒤 알파벳별로 점수 합산
function parseQuestion(str: string) {
  const lastSlash = str.lastIndexOf("/");
  if (lastSlash === -1) return { text: str, type: "?" };
  const text = str.slice(0, lastSlash).trim();
  const type = str.slice(lastSlash + 1).trim().toUpperCase();
  return type ? { text, type } : { text: str, type: "?" };
}

const QUESTION_STRINGS = [
  "보호자가 보이지 않으면 찾으러 다닌다./S",
  "산책 시간이 달라지면 반응한다./T",
  "갑작스러운 소리에 쉽게 놀란다./R",
  "집 안에서도 장난감 놀이를 자주 요구한다./E",
  "병원 방문 시 스트레스 반응이 크다./R", 
  "낯선 사람에게 먼저 다가가려 한다./S",
  "흥분 상태로 전환되는 속도가 빠르다./E",  
  "가구 위치가 바뀌면 탐색하거나 불안해한다./T",
  "다른 강아지보다 사람에게 더 관심을 보인다./S",
  "작은 환경 변화에도 예민하게 반응한다./R",
  "정해진 자리에 잠자기를 선호한다./T",
  "산책 시간이 길어져도 쉽게 지치지 않는다./E",
  "혼자 있는 시간을 힘들어한다./S",
  "스트레스를 받으면 짖음이나 행동이 늘어난다./R",
  "하루 중 가만히 쉬는 시간이 적은 편이다./E",
  "일정한 하루 패턴을 유지하면 안정적이다./T",
  "보호자의 감정 변화에 민감하게 반응한다./S",
  "초인종이나 외부 소리에 즉각 반응한다./E",
  "새로운 장소에 가면 긴장하는 모습이 보인다./R",
  "여행 후 며칠간 행동 패턴이 달라진다./T"
] as const;

const QUESTIONS = QUESTION_STRINGS.map((q) => parseQuestion(q));

const SCALE_LABELS = {
  1: "매우 아니다",
  2: "아니다",
  3: "보통",
  4: "그렇다",
  5: "매우 그렇다",
} as const;

export default function DogTestPage() {
  const [scores, setScores] = useState<Record<number, number>>({});

  // 알파벳별 점수 합계
  const typeSums = useMemo(() => {
    const sums: Record<string, number> = {};
    QUESTIONS.forEach((q, i) => {
      const score = scores[i];
      if (score !== undefined) {
        sums[q.type] = (sums[q.type] ?? 0) + score;
      }
    });
    return sums;
  }, [scores]);

  // 채점 결과 (각 축 25점 만점, 0-12→L/I/B/F, 13-25→A/H/S/R)
  const mbtiResult = useMemo(
    () => calculateMbtiResult(typeSums),
    [typeSums]
  );

  // 전체 문항 필수 선택 완료 여부
  const isAllAnswered = Object.keys(scores).length === QUESTIONS.length;
  const resultCode = MBTI_ORDER.map((t) => mbtiResult[t]).join("");

  const handleScoreSelect = (questionIndex: number, score: number) => {
    setScores((prev) => {
      const newScores = { ...prev, [questionIndex]: score };
      // 알파벳별 합계 계산
      const sums: Record<string, number> = {};
      QUESTIONS.forEach((q, i) => {
        const s = newScores[i];
        if (s !== undefined) {
          sums[q.type] = (sums[q.type] ?? 0) + s;
        }
      });
    
      const result = calculateMbtiResult(sums);
      const sumsOrdered = MBTI_ORDER.reduce(
        (acc, t) => (sums[t] !== undefined ? { ...acc, [t]: sums[t] } : acc),
        {} as Record<string, number>
      );
      const resultOrdered = MBTI_ORDER.reduce(
        (acc, t) => ({ ...acc, [t]: result[t] }),
        {} as Record<string, string>
      );
      console.log("알파벳별 합계 (E S R T 순):", sumsOrdered);
      console.log("채점 결과 (E S R T 순):", resultOrdered);
      return newScores;
    });
  };

  return (
    <div className="flex min-h-[100dvh] min-h-screen flex-col items-center bg-gradient-to-b from-amber-50 to-orange-50 dark:from-zinc-900 dark:to-zinc-950">
      <main className="flex w-full max-w-2xl flex-col gap-8 px-4 py-8 sm:gap-10 sm:px-6 sm:py-12 md:gap-12 md:px-8">
        <header className="text-center">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white sm:text-3xl">
            강아지 MBTI 검사
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            각 문항은 필수입니다. 모두 선택해주세요.
          </p>
        </header>

        <div className="flex flex-col gap-8 sm:gap-10">
          {QUESTIONS.map((question, questionIndex) => (
            <section
              key={questionIndex}
              className="rounded-2xl bg-white/80 p-5 shadow-sm dark:bg-zinc-800/80 sm:p-6"
            >
              <p className="mb-4 text-base font-medium text-zinc-900 dark:text-white sm:text-lg">
                <span className="text-amber-600 dark:text-amber-500">
                  {questionIndex + 1}. <span className="text-xs text-red-500">*</span>
                </span>{" "}
                {QUESTIONS[questionIndex].text}{" "}
              </p>
              {/* 점수 기준 레이블 - 한 번만 표시 */}
              <div className="mb-2 flex justify-between text-[10px] text-zinc-500 dark:text-zinc-400 sm:text-xs">
                <span>매우 아니다</span>
                <span>매우 그렇다</span>
              </div>
              <div className="grid grid-cols-5 gap-2 sm:gap-3">
                {([1, 2, 3, 4, 5] as const).map((score) => {
                  const isSelected = scores[questionIndex] === score;
                  return (
                    <button
                      key={score}
                      type="button"
                      onClick={() => handleScoreSelect(questionIndex, score)}
                      className={`flex min-h-[48px] flex-col items-center justify-center rounded-xl py-2 transition-all sm:min-h-[52px] sm:px-2 ${
                        isSelected
                          ? "bg-amber-500 text-white shadow-md ring-2 ring-amber-600 ring-offset-2 dark:ring-amber-400 dark:ring-offset-zinc-900"
                          : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-600"
                      }`}
                    >
                      <span className="text-2xl font-bold sm:text-3xl">
                        {score}
                      </span>
                    </button>
                  );
                })}
              </div>
              {scores[questionIndex] !== undefined && (
                <p className="mt-3 text-sm text-amber-600 dark:text-amber-500">
                  선택: {SCALE_LABELS[scores[questionIndex] as keyof typeof SCALE_LABELS]}
                </p>
              )}
            </section>
          ))}
        </div>

        <div className="w-full max-w-2xl pb-8">
          <Link
            href={isAllAnswered ? `/test_mbti/dog/result?code=${resultCode}` : "#"}
            aria-disabled={!isAllAnswered}
            className={`flex min-h-[52px] w-full items-center justify-center rounded-full text-base font-semibold transition-colors sm:min-h-[56px] ${
              isAllAnswered
                ? "bg-amber-500 text-white hover:bg-amber-600 active:bg-amber-700"
                : "cursor-not-allowed bg-zinc-300 text-zinc-500 dark:bg-zinc-700 dark:text-zinc-500"
            }`}
            onClick={(e) => !isAllAnswered && e.preventDefault()}
          >
            결과 분석
          </Link>
          {!isAllAnswered && (
            <p className="mt-2 text-center text-sm text-zinc-500 dark:text-zinc-400">
              모든 문항을 선택하면 결과를 확인할 수 있습니다.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
