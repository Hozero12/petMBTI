/**
 * 내부 채점 기준 (서비스 로직용)
 * 각 축 25점 만점
 * 0–12점 → L / I / B / F
 * 13–25점 → A / H / S / R
 */

const HIGH_THRESHOLD = 13; // 0-12 → low, 13-25 → high

/** 출력 순서: 항상 E, S, R, T */
export const MBTI_ORDER = ["E", "S", "R", "T"] as const;

export const MBTI_SCORE_CRITERIA = {
  E: { high: "A", low: "L" }, // Active / Low-energy
  S: { high: "H", low: "I" }, // Human-oriented / Independent
  R: { high: "S", low: "B" },  // Sensitive / Bold
  T: { high: "R", low: "F" }, // Routine / Flexible
} as const;

export type MbtiType = keyof typeof MBTI_SCORE_CRITERIA;

/** 점수 합계로 특성 결정: 0-12 → low, 13-25 → high */
export function getTraitFromScore(type: MbtiType, sum: number): string {
  const criteria = MBTI_SCORE_CRITERIA[type];
  return sum >= HIGH_THRESHOLD ? criteria.high : criteria.low;
}

/** typeSums로 MBTI 결과 객체 생성 */
export function calculateMbtiResult(
  typeSums: Record<string, number>
): Record<string, string> {
  const result: Record<string, string> = {};
  for (const type of Object.keys(MBTI_SCORE_CRITERIA) as MbtiType[]) {
    const sum = typeSums[type] ?? 0;
    result[type] = getTraitFromScore(type, sum);
  }
  return result;
}
