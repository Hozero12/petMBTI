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
  ownerMbti: string[];
  traits: string[];
}

export const CAT_RESULTS: Record<CatResultCode, CatResult> = {
  AHSR: {
    title: "집사 한정 사냥꾼",
    description: "활발하지만 루틴과 집사는 꼭 지켜요",
    ownerMbti: ["ENFP", "ENFJ", "ESFJ"],
    traits: ["활동적", "집사 따라다님", "루틴 중요", "사냥놀이 좋아함"],
  },
  AHSF: {
    title: "애교 많은 모험가",
    description: "사람 좋아하고 적응력 좋은 에너지러에요",
    ownerMbti: ["ESFP", "ENFP", "ESFJ"],
    traits: ["사람 좋아함", "애교 많음", "환경 적응 빠름", "활발"],
  },
  AHBR: {
    title: "용감한 무릎 점령자",
    description: "대담하지만 집사 품은 내 자리",
    ownerMbti: ["ENTJ", "ESTJ", "INFJ"],
    traits: ["대담함", "집사 중심", "낯선 것 경계", "영역 지킴"],
  },
  AHBF: {
    title: "세상은 나의 캣타워",
    description: "활발 사교 적응력 MAX인 완성형이에요",
    ownerMbti: ["ENTP", "ESTP", "ENFP"],
    traits: ["활동성 최고", "호기심 많음", "장난꾸러기", "사교적"],
  },
  AISR: {
    title: "예민한 탐험 본능냥",
    description: "활발하지만 환경엔 민감해요",
    ownerMbti: ["INTJ", "INTP", "INFJ"],
    traits: ["활발하지만 민감", "환경 변화 예민", "혼자 탐색"],
  },
  AISF: {
    title: "기분파 사냥 장인",
    description: "에너지 넘치지만 컨디션 따라 좀 달라요",
    ownerMbti: ["ENFP", "INFP", "ENTP"],
    traits: ["활동적", "독립적", "기분파", "호기심 많음"],
  },
  AIBR: {
    title: "자유로운 영역 지배자",
    description: "독립적이고 대담한 액티브 리더",
    ownerMbti: ["ISTP", "ENTJ", "ESTP"],
    traits: ["독립적", "대담함", "활동성 높음", "영역 의식 강함"],
  },
  AIBF: {
    title: "바람 고양이",
    description: "활발 독립 적응력 모두 갖춘 자유형 냥이에요",
    ownerMbti: ["ENTP", "ESTP", "ENFP"],
    traits: ["활발", "독립적", "적응력 좋음", "어디든 잘 탐험"],
  },
  LHSR: {
    title: "루틴을 사랑하는 무릎냥",
    description: "차분하고 집사 중심적인 안정형 냥이에요",
    ownerMbti: ["ISFJ", "INFJ", "ESFJ"],
    traits: ["조용함", "집사 의존", "루틴 좋아함", "안정 추구"],
  },
  LHSF: {
    title: "따뜻한 힐링 냥이",
    description: "온화하고 애정 표현하는 감성형 냥이에요",
    ownerMbti: ["INFP", "ISFJ", "ESFJ"],
    traits: ["애정 표현 많음", "사람 좋아함", "온화함"],
  },
  LHBR: {
    title: "조용한 카리스마 고영희",
    description: "얌전하지만 당당한 존재감",
    ownerMbti: ["ISTJ", "INFJ", "ESTJ"],
    traits: ["조용함", "낯선 것 경계", "신뢰 깊음", "안정적"],
  },
  LHBF: {
    title: "느긋한 마이웨이 냥냥이",
    description: "차분하지만 사람과도 잘 지내요",
    ownerMbti: ["ISFP", "ESFP", "ENFP"],
    traits: ["차분함", "친화적", "스트레스 적음", "온순"],
  },
  LISR: {
    title: "섬세한 영역 수호자",
    description: "독립적이고 예민한 루틴 냥이에요",
    ownerMbti: ["INTJ", "INFJ", "ISTJ"],
    traits: ["조용함", "예민함", "루틴 중요", "혼자 시간 선호"],
  },
  LISF: {
    title: "은근히 다정한 관찰자",
    description: "조용하지만 적응력 있는 냥이에요",
    ownerMbti: ["INFP", "ISFP", "INFJ"],
    traits: ["차분함", "독립적", "은근한 애정 표현"],
  },
  LIBR: {
    title: "도도한 지배자",
    description: "독립적이고 대범한 평온형",
    ownerMbti: ["INTJ", "ISTP", "ENTJ"],
    traits: ["독립적", "감정 표현 적음", "영역 강함"],
  },
  LIBF: {
    title: "평온한 자유 냥이",
    description: "차분 독립 적응력 MAX에요",
    ownerMbti: ["INFP", "ISFP", "ENTP"],
    traits: ["느긋함", "독립적", "스트레스 적음", "유연함"],
  },
};

export function getCatResult(code: string): CatResult | null {
  if (code in CAT_RESULTS) {
    return CAT_RESULTS[code as CatResultCode];
  }
  return null;
}
