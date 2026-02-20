/**
 * 고양이 MBTI 결과별 정의와 설명
 * 코드 순서: E(A/L) - S(H/I) - R(S/B) - T(R/F)
 */

export type CatResultCode =
  | "AHSR" | "AHSF" | "AHBR" | "AHBF"
  | "AISR" | "AISF" | "AIBR" | "AIBF"
  | "LHSR" | "LHSF" | "LHBR" | "LHBF"
  | "LISR" | "LISF" | "LIBR" | "LIBF";

export interface CatResult {
  title: string;
  description: string;
}

export const CAT_RESULTS: Record<CatResultCode, CatResult> = {
  AHSR: {
    title: "집사 한정 사냥꾼",
    description: "활발하지만 루틴과 집사는 꼭 지켜요",
  },
  AHSF: {
    title: "애교 많은 모험가",
    description: "사람 좋아하고 적응력 좋은 에너지러에요",
  },
  AHBR: {
    title: "용감한 무릎 점령자",
    description: "대담하지만 집사 품은 내 자리",
  },
  AHBF: {
    title: "세상은 나의 캣타워",
    description: "활발 사교 적응력 MAX인 완성형이에요",
  },
  AISR: {
    title: "예민한 탐험 본능냥",
    description: "활발하지만 환경엔 민감해요",
  },
  AISF: {
    title: "기분파 사냥 장인",
    description: "에너지 넘치지만 컨디션 따라 좀 달라요",
  },
  AIBR: {
    title: "자유로운 영역 지배자",
    description: "독립적이고 대담한 액티브 리더",
  },
  AIBF: {
    title: "바람 고양이",
    description: "활발 독립 적응력 모두 갖춘 자유형 냥이에요",
  },
  LHSR: {
    title: "루틴을 사랑하는 무릎냥",
    description: "차분하고 집사 중심적인 안정형 냥이에요",
  },
  LHSF: {
    title: "따뜻한 힐링 냥이",
    description: "온화하고 애정 표현하는 감성형 냥이에요",
  },
  LHBR: {
    title: "조용한 카리스마 고영희",
    description: "얌전하지만 당당한 존재감",
  },
  LHBF: {
    title: "느긋한 마이웨이 냥냥이",
    description: "차분하지만 사람과도 잘 지내요",
  },
  LISR: {
    title: "섬세한 영역 수호자",
    description: "독립적이고 예민한 루틴 냥이에요",
  },
  LISF: {
    title: "은근히 다정한 관찰자",
    description: "조용하지만 적응력 있는 냥이에요",
  },
  LIBR: {
    title: "도도한 지배자",
    description: "독립적이고 대범한 평온형",
  },
  LIBF: {
    title: "평온한 자유 냥이",
    description: "차분 독립 적응력 MAX에요",
  },
};

export function getCatResult(code: string): CatResult | null {
  if (code in CAT_RESULTS) {
    return CAT_RESULTS[code as CatResultCode];
  }
  return null;
}
