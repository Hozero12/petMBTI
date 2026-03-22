/**
 * 내부 채점 기준 (서비스 로직용)
 * 각 축에서 두 성향의 점수를 비교해, 점수가 높은 쪽이 결과에 반영됨
 */

/** 8개 성향 타입 */
export const QUESTION_TYPES = ["A", "L", "H", "I", "S", "B", "R", "F"] as const;

/** 카테고리당 선택 문항 수 */
export const QUESTIONS_PER_CATEGORY = 4;

/** 축당 문항 수 (카테고리 2개 × QUESTIONS_PER_CATEGORY) */
export const QUESTIONS_PER_AXIS = QUESTIONS_PER_CATEGORY * 2;

/** 총 문항 수 */
export const TOTAL_QUESTIONS = QUESTIONS_PER_CATEGORY * QUESTION_TYPES.length;

/** 축별 대립 성향 쌍 [양극1, 양극2] */
export const AXIS_PAIRS = [
  ["A", "L"], // Active / Low-energy
  ["H", "I"], // Human-oriented / Independent
  ["S", "B"], // Sensitive / Bold
  ["R", "F"], // Routine / Flexible
] as const;

/** 결과 코드 출력 순서 (각 축의 대표 키) */
export const MBTI_ORDER = ["A", "H", "S", "R"] as const;

/** typeSums로 MBTI 결과 객체 생성 - 각 축에서 점수가 높은 성향이 결과 */
export function calculateMbtiResult(
  typeSums: Record<string, number>
): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [t1, t2] of AXIS_PAIRS) {
    const axisKey = t1; // A, H, S, R
    const s1 = typeSums[t1] ?? 0;
    const s2 = typeSums[t2] ?? 0;
    result[axisKey] = s1 >= s2 ? t1 : t2;
  }
  return result;
}
