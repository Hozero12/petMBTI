"use client";

import { useState } from "react";
import { TRAIT_LABELS, TRAIT_PAIRS } from "@/lib/trait-labels";

type Props = {
  variant?: "dog" | "cat";
  code?: string;
};

export function TraitExplainerButton({ variant = "dog", code }: Props) {
  const [open, setOpen] = useState(false);

  const letters = code?.toUpperCase().split("") ?? [];
  const isDog = variant === "dog";
  const activeClass = isDog
    ? "border-amber-500 bg-amber-50 dark:border-amber-400 dark:bg-amber-900/40"
    : "border-orange-500 bg-orange-50 dark:border-orange-400 dark:bg-orange-900/40";
  const inactiveClass = "border-transparent bg-zinc-100/80 dark:bg-zinc-800/50";
  const textClass = isDog
    ? "text-amber-800 dark:text-amber-200"
    : "text-orange-800 dark:text-orange-200";
  const buttonClass = isDog
    ? "border-amber-200 bg-amber-100 hover:bg-amber-200 dark:border-amber-800/50 dark:bg-amber-900/40 dark:hover:bg-amber-900/60 text-amber-800 dark:text-amber-200"
    : "border-orange-200 bg-orange-100 hover:bg-orange-200 dark:border-orange-800/50 dark:bg-orange-900/40 dark:hover:bg-orange-900/60 text-orange-800 dark:text-orange-200";

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl border px-4 font-semibold transition-colors ${buttonClass} sm:min-h-[52px]`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
        MBTI 해설 보기
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/50"
            onClick={() => setOpen(false)}
            onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
            role="button"
            tabIndex={0}
            aria-label="닫기"
          />
          <div
            className="fixed left-1/2 top-1/2 z-50 max-h-[90vh] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl bg-white p-5 shadow-xl dark:bg-zinc-900"
            role="dialog"
            aria-modal="true"
            aria-labelledby="trait-explainer-title"
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 id="trait-explainer-title" className={`text-lg font-bold ${textClass}`}>
                코드 설명
              </h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full p-1 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-white"
                aria-label="닫기"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            {code && (
              <p className="mb-5 text-center text-2xl font-bold text-zinc-900 dark:text-white">
                {code.toUpperCase()}
              </p>
            )}

            <div className="space-y-4">
              {TRAIT_PAIRS.map(([left, right]) => {
                const leftTrait = TRAIT_LABELS[left];
                const rightTrait = TRAIT_LABELS[right];
                const userLeft = letters.includes(left);
                const userRight = letters.includes(right);

                return (
                  <div key={`${left}-${right}`} className="rounded-xl border border-zinc-200 p-3 dark:border-zinc-700">
                    <div className="flex items-stretch gap-2">
                      <div
                        className={`flex min-w-0 flex-1 flex-col rounded-lg border-2 p-2.5 transition-colors ${
                          userLeft ? activeClass : inactiveClass
                        }`}
                      >
                        <span className="text-center text-lg font-bold text-zinc-900 dark:text-white">
                          {left}
                        </span>
                        <span className="text-center text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                          {leftTrait.label}
                        </span>
                        <p className="mt-1 text-center text-xs leading-snug text-zinc-500 dark:text-zinc-400">
                          {leftTrait.desc}
                        </p>
                      </div>
                      <div className="flex flex-shrink-0 items-center text-zinc-400">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M7 17L17 7" />
                          <path d="M17 17L7 7" />
                        </svg>
                      </div>
                      <div
                        className={`flex min-w-0 flex-1 flex-col rounded-lg border-2 p-2.5 transition-colors ${
                          userRight ? activeClass : inactiveClass
                        }`}
                      >
                        <span className="text-center text-lg font-bold text-zinc-900 dark:text-white">
                          {right}
                        </span>
                        <span className="text-center text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                          {rightTrait.label}
                        </span>
                        <p className="mt-1 text-center text-xs leading-snug text-zinc-500 dark:text-zinc-400">
                          {rightTrait.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
}
