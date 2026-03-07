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
  ownerMbtiDescription: string; // 잘 맞는 집사 MBTI 섹션 설명 (추후 입력)
  traits: string[];
}

export const CAT_RESULTS: Record<CatResultCode, CatResult> = {
  AHSR: {
    title: "집사 한정 사냥꾼",
    description: "활발하지만 루틴과 집사는 꼭 지켜요",
    ownerMbti: ["ENFP", "ENFJ", "ESFJ"],
    ownerMbtiDescription: "사람과 교감하는 것을 좋아하는 고양이라 외향적이고 애정 표현이 많은 집사와 잘 맞아요. 함께 놀아주고 반응을 자주 해줄수록 안정감을 느낍니다.",
    traits: ["활동적", "집사 따라다님", "루틴 중요", "사냥놀이 좋아함"],
  },
  AHSF: {
    title: "애교 많은 모험가",
    description: "사람 좋아하고 적응력 좋은 에너지러에요",
    ownerMbti: ["ESFP", "ENFP", "ESFJ"],
    ownerMbtiDescription: "사교적인 성향이라 밝고 표현이 풍부한 집사와 잘 맞아요. 다양한 상호작용을 즐기는 집사일수록 고양이의 애교와 활동성이 살아납니다.",
    traits: ["사람 좋아함", "애교 많음", "환경 적응 빠름", "활발함"],
  },
  AHBR: {
    title: "용감한 무릎 점령자",
    description: "대담하지만 집사 품은 내 자리",
    ownerMbti: ["ENTJ", "ESTJ", "INFJ"],
    ownerMbtiDescription: "신뢰할 수 있는 집사를 중심으로 행동하는 타입이에요. 규칙적이고 책임감 있는 집사가 안정적인 환경을 만들어주면 잘 적응합니다.",
    traits: ["대담함", "집사 중심", "낯선 것 경계", "영역 지킴"],
  },
  AHBF: {
    title: "세상은 나의 캣타워",
    description: "활발 사교 적응력 MAX인 완성형이에요",
    ownerMbti: ["ENTP", "ESTP", "ENFP"],
    ownerMbtiDescription: "호기심이 많고 활동적인 고양이라 다양한 자극을 주는 집사와 잘 맞아요. 새로운 놀이와 경험을 즐기는 집사와 궁합이 좋습니다.",
    traits: ["활동성 최고", "호기심 많음", "장난꾸러기", "사교적"],
  },
  AISR: {
    title: "예민한 탐험 본능냥",
    description: "활발하지만 환경엔 민감해요",
    ownerMbti: ["INTJ", "INTP", "INFJ"],
    ownerMbtiDescription: "환경 변화에 민감한 고양이라 조용하고 배려심 있는 집사가 잘 맞아요. 관찰력이 높은 집사가 작은 신호를 이해해 줄 때 스트레스가 줄어듭니다.",
    traits: ["활발하지만 민감", "환경 변화 예민", "혼자 탐색"],
  },
  AISF: {
    title: "기분파 사냥 장인",
    description: "에너지 넘치지만 컨디션 따라 좀 달라요",
    ownerMbti: ["ENFP", "INFP", "ENTP"],
    ownerMbtiDescription: "기분 변화가 있는 타입이라 유연한 성향의 집사가 잘 맞아요. 억지로 통제하기보다 자유롭게 두는 집사가 편안함을 줍니다.",
    traits: ["활동적", "독립적", "기분파", "호기심 많음"],
  },
  AIBR: {
    title: "자유로운 영역 지배자",
    description: "독립적이고 대담한 액티브 리더",
    ownerMbti: ["ISTP", "ENTJ", "ESTP"],
    ownerMbtiDescription: "독립적이고 자기 방식이 확실한 고양이에요. 개인 공간을 존중해주고 간섭이 적은 집사와 잘 맞습니다.",
    traits: ["독립적", "대담함", "활동성 높음", "영역 의식 강함"],
  },
  AIBF: {
    title: "바람 고양이",
    description: "활발 독립 적응력 모두 갖춘 자유형 냥이에요",
    ownerMbti: ["ENTP", "ESTP", "ENFP"],
    ownerMbtiDescription: "자유롭고 활동적인 고양이라 즉흥적이고 유연한 집사와 잘 맞아요. 다양한 환경과 놀이를 즐길 수 있는 집사가 좋습니다.",
    traits: ["활발", "독립적", "적응력 좋음", "어디든 잘 탐험"],
  },
  LHSR: {
    title: "루틴을 사랑하는 무릎냥",
    description: "차분하고 집사 중심적인 안정형 냥이에요",
    ownerMbti: ["ISFJ", "INFJ", "ESFJ"],
    ownerMbtiDescription: "차분하고 집사와 교감하는 것을 좋아하는 타입이에요. 안정적인 루틴을 유지하고 애정을 꾸준히 표현하는 집사와 잘 맞습니다.",
    traits: ["조용함", "집사 의존", "루틴 좋아함", "안정 추구"],
  },
  LHSF: {
    title: "따뜻한 힐링 냥이",
    description: "온화하고 애정 표현하는 감성형 냥이에요",
    ownerMbti: ["INFP", "ISFJ", "ESFJ"],
    ownerMbtiDescription: "사람과 조용히 함께 있는 것을 좋아하는 고양이에요. 공감 능력이 높은 집사가 정서적 교감을 잘 만들어 줍니다.",
    traits: ["애정 표현 많음", "사람 좋아함", "온화함"],
  },
  LHBR: {
    title: "조용한 카리스마 고영희",
    description: "얌전하지만 당당한 존재감",
    ownerMbti: ["ISTJ", "INFJ", "ESTJ"],
    ownerMbtiDescription: "신중하고 영역 의식이 있는 고양이라 일관된 생활 패턴을 가진 집사와 잘 맞아요. 예측 가능한 환경이 안정감을 줍니다.",
    traits: ["조용함", "낯선 것 경계", "신뢰 깊음", "안정적"],
  },
  LHBF: {
    title: "느긋한 마이웨이 냥냥이",
    description: "차분하지만 사람과도 잘 지내요",
    ownerMbti: ["ISFP", "ESFP", "ENFP"],
    ownerMbtiDescription: "느긋하고 스트레스가 적은 성향이에요. 밝고 편안한 분위기를 만들어주는 집사와 잘 어울립니다.",
    traits: ["차분함", "친화적", "스트레스 적음", "온순"],
  },
  LISR: {
    title: "섬세한 영역 수호자",
    description: "독립적이고 예민한 루틴 냥이에요",
    ownerMbti: ["INTJ", "INFJ", "ISTJ"],
    ownerMbtiDescription: "주변을 조용히 관찰하는 타입이라 차분하고 안정적인 집사와 잘 맞아요. 조용한 환경을 유지해 주는 집사가 좋습니다.",
    traits: ["조용함", "예민함", "루틴 중요", "혼자 시간 선호"],
  },
  LISF: {
    title: "은근히 다정한 관찰자",
    description: "조용하지만 적응력 있는 냥이에요",
    ownerMbti: ["INFP", "ISFP", "INFJ"],
    ownerMbtiDescription: "크게 애정을 표현하지는 않지만 교감을 좋아해요. 감성적이고 배려심 있는 집사가 관계를 편안하게 만들어 줍니다.",
    traits: ["차분함", "독립적", "은근한 애정 표현"],
  },
  LIBR: {
    title: "도도한 지배자",
    description: "독립적이고 대범한 평온형",
    ownerMbti: ["INTJ", "ISTP", "ENTJ"],
    ownerMbtiDescription: "독립성이 강한 고양이라 간섭이 적은 집사와 잘 맞아요. 개인 공간을 존중해주는 집사가 가장 편합니다.",
    traits: ["독립적", "감정 표현 적음", "영역 강함"],
  },
  LIBF: {
    title: "평온한 자유 냥이",
    description: "차분 독립 적응력 MAX에요",
    ownerMbti: ["INFP", "ISFP", "ENTP"],
    ownerMbtiDescription: "여유롭고 자유로운 성향이라 유연한 집사와 잘 맞아요. 스트레스 없이 편안한 환경을 만들어주는 집사가 좋습니다.",
    traits: ["느긋함", "독립적", "스트레스 적음", "유연함"],
  },
};

export function getCatResult(code: string): CatResult | null {
  if (code in CAT_RESULTS) {
    return CAT_RESULTS[code as CatResultCode];
  }
  return null;
}
