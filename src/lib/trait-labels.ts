/**
 * MBTI 코드 각 알파벳별 설명
 * E축: A / L  |  S축: H / I  |  R축: S / B  |  T축: R / F
 */

export const TRAIT_LABELS = {
  A: { label: "활발", desc: "에너지 넘치고 활동적인 타입" },
  L: { label: "차분", desc: "온화하고 여유로운 타입" },
  H: { label: "사람 친화", desc: "보호자·사람과 함께하는 것을 좋아해요" },
  I: { label: "독립적", desc: "혼자만의 시간도 잘 즐겨요" },
  S: { label: "예민·센스", desc: "환경·감정에 민감하고 센스 있어요" },
  B: { label: "대범·뻔뻔", desc: "쉽게 적응하고 두려움이 적어요" },
  R: { label: "루틴", desc: "일정한 패턴과 규칙을 선호해요" },
  F: { label: "유연", desc: "변화에 잘 맞추고 융통성이 있어요" },
} as const;

export type TraitLetter = keyof typeof TRAIT_LABELS;

/** 대비되는 쌍 (1축~4축 순서) */
export const TRAIT_PAIRS: [TraitLetter, TraitLetter][] = [
  ["A", "L"], // 에너지
  ["H", "I"], // 사회성
  ["S", "B"], // 민감도
  ["R", "F"], // 일상
];
