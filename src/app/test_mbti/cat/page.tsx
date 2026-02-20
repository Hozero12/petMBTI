"use client";

import { CAT_QUESTIONS } from "@/data/cat-questions";
import { calculateMbtiResult, MBTI_ORDER } from "@/lib/mbti-scoring";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const QUESTIONS_PER_TYPE = 5;
const TOTAL_QUESTIONS = 20;

function shuffle<T>(array: readonly T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/** 각 분류별 5개씩 랜덤 선택 후 전체 셔플 (총 20문항) */
function pick20Questions<T extends { type: string }>(questions: T[]): T[] {
  const byType: Record<string, T[]> = {};
  for (const q of questions) {
    if (!byType[q.type]) byType[q.type] = [];
    byType[q.type].push(q);
  }

  const selected: T[] = [];
  for (const type of MBTI_ORDER) {
    const pool = byType[type] ?? [];
    const shuffled = shuffle(pool);
    const pickCount = Math.min(QUESTIONS_PER_TYPE, shuffled.length);
    selected.push(...shuffled.slice(0, pickCount));
  }

  return shuffle(selected);
}

const SCALE_LABELS = {
  1: "매우 아니다",
  2: "아니다",
  3: "보통",
  4: "그렇다",
  5: "매우 그렇다",
} as const;

type Question = { text: string; type: string };

export default function CatTestPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [scores, setScores] = useState<Record<number, number>>({});

  useEffect(() => {
    setQuestions(pick20Questions(CAT_QUESTIONS));
  }, []);

  const typeSums = useMemo(() => {
    const sums: Record<string, number> = {};
    questions.forEach((q, i) => {
      const score = scores[i];
      if (score !== undefined) {
        sums[q.type] = (sums[q.type] ?? 0) + score;
      }
    });
    return sums;
  }, [scores]);

  const mbtiResult = useMemo(
    () => calculateMbtiResult(typeSums),
    [typeSums]
  );

  const isAllAnswered = questions.length > 0 && Object.keys(scores).length === questions.length;
  const resultCode = MBTI_ORDER.map((t) => mbtiResult[t]).join("");

  const handleScoreSelect = (questionIndex: number, score: number) => {
    setScores((prev) => {
      const newScores = { ...prev, [questionIndex]: score };
      const sums: Record<string, number> = {};
      questions.forEach((q, i) => {
        const s = newScores[i];
        if (s !== undefined) {
          sums[q.type] = (sums[q.type] ?? 0) + s;
        }
      });
      const result = calculateMbtiResult(sums);
      console.log("알파벳별 합계 (E S R T 순):", sums);
      console.log("채점 결과 (E S R T 순):", result);
      return newScores;
    });
  };

  return (
    <div className="flex min-h-[100dvh] min-h-screen flex-col items-center bg-gradient-to-b from-orange-50 to-amber-50 dark:from-zinc-900 dark:to-zinc-950">
      <main className="flex w-full max-w-2xl flex-col gap-8 px-4 py-8 sm:gap-10 sm:px-6 sm:py-12 md:gap-12 md:px-8">
        <header className="text-center">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white sm:text-3xl">
            고양이 MBTI 검사
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            모든 문항을 체크해주세요.
          </p>
        </header>

        <div className="flex flex-col gap-8 sm:gap-10">
          {questions.length === 0 ? (
            <div className="flex flex-col gap-8">
              {Array.from({ length: TOTAL_QUESTIONS }).map((_, i) => (
                <div
                  key={i}
                  className="h-40 animate-pulse rounded-2xl bg-white/80 dark:bg-zinc-800/80"
                />
              ))}
            </div>
          ) : (
            questions.map((question, questionIndex) => (
              <section
                key={questionIndex}
                className="rounded-2xl bg-white/80 p-5 shadow-sm dark:bg-zinc-800/80 sm:p-6"
              >
                <p className="mb-4 text-base font-medium text-zinc-900 dark:text-white sm:text-lg">
                  <span className="text-orange-600 dark:text-orange-500">
                    {questionIndex + 1}.
                  </span>{" "}
                  {question.text}{" "}
                </p>
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
                            ? "bg-orange-500 text-white shadow-md ring-2 ring-orange-600 ring-offset-2 dark:ring-orange-400 dark:ring-offset-zinc-900"
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
                  <p className="mt-3 text-sm text-orange-600 dark:text-orange-500">
                    선택: {SCALE_LABELS[scores[questionIndex] as keyof typeof SCALE_LABELS]}
                  </p>
                )}
              </section>
            ))
          )}
        </div>

        <div className="w-full max-w-2xl pb-8">
          <Link
            href={isAllAnswered ? `/test_mbti/cat/result?code=${resultCode}` : "#"}
            aria-disabled={!isAllAnswered}
            className={`flex min-h-[52px] w-full items-center justify-center rounded-full text-base font-semibold transition-colors sm:min-h-[56px] ${
              isAllAnswered
                ? "bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700"
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
