/**
 * 강아지 MBTI 결과별 정의와 설명
 * 코드 순서: E(A/L) - S(H/I) - R(S/B) - T(R/F)
 */

export type DogResultCode =
  | "AHSR" | "AHSF" | "AHBR" | "AHBF"
  | "AISR" | "AISF" | "AIBR" | "AIBF"
  | "LHSR" | "LHSF" | "LHBR" | "LHBF"
  | "LISR" | "LISF" | "LIBR" | "LIBF";

export interface DogResult {
  title: string;
  description: string;
  ownerMbti: string[];
  ownerMbtiDescription: string; // 잘 맞는 집사 MBTI 섹션 설명 (추후 입력)
  traits: string[];
}

export const DOG_RESULTS: Record<DogResultCode, DogResult> = {
  AHSR: {
    title: "에너지 넘치는 충성 러버",
    description: "활발하고 보호자 중심적인 루틴 지킴이에요",
    ownerMbti: ["ENFJ", "ESFJ", "ENFP"],
    ownerMbtiDescription: "사람과 교감하는 것을 매우 좋아하는 강아지라 외향적이고 애정 표현이 많은 집사와 잘 맞아요. 함께 놀아주고 반응을 자주 해줄수록 유대감이 깊어집니다.",
    traits: ["집사 껌딱지", "활동량 높음", "루틴 중요", "보호자 중심 행동"],
  },
  AHSF: {
    title: "어디서든 사랑받는 핵인싸",
    description: "사람 좋아하고 적응력 좋은 분위기 메이커에요",
    ownerMbti: ["ENFP", "ESFP", "ESFJ"],
    ownerMbtiDescription: "사교적이고 밝은 성향이라 활동적이고 사람 만나는 것을 좋아하는 집사와 잘 맞아요. 다양한 경험과 놀이를 함께할 때 가장 행복해합니다.",
    traits: ["사람 좋아함", "낯가림 적음", "환경 적응 빠름", "놀이 좋아함"],
  },
  AHBR: {
    title: "용감한 보호자 바라기",
    description: "대범하지만 마음은 한 사람에게",
    ownerMbti: ["ENTJ", "ESTJ", "ENFJ"],
    ownerMbtiDescription: "보호자를 중심으로 행동하는 충성형이라 리더십이 있는 집사와 궁합이 좋아요. 규칙과 훈련을 일관되게 해주는 집사가 안정감을 줍니다.",
    traits: ["대범함", "집사 충성도 높음", "경계심 있음", "보호 본능"],
  },
  AHBF: {
    title: "세상은 내 놀이터",
    description: "활발 사교 적응력 끝판왕이에요",
    ownerMbti: ["ESFP", "ENFP", "ESTP"],
    ownerMbtiDescription: "에너지가 넘치고 활동적인 강아지라 즉흥적이고 활발한 집사와 잘 맞아요. 산책, 여행, 놀이를 자주 함께할 수 있는 집사가 좋습니다.",
    traits: ["활동성 최고", "사교성 높음", "낯선 환경도 OK", "장난꾸러기"],
  },
  AISR: {
    title: "예민한 에너지 탐험가",
    description: "활발하지만 환경엔 민감해요",
    ownerMbti: ["INTJ", "INTP", "INFJ"],
    ownerMbtiDescription: "에너지는 많지만 예민한 편이라 배려심 있고 관찰력이 높은 집사와 잘 맞아요. 강아지의 신호를 잘 이해해 줄수록 스트레스가 줄어듭니다.",
    traits: ["활동적", "환경 변화 민감", "혼자 탐색 좋아함", "루틴 중요"],
  },
  AISF: {
    title: "변덕 많은 갈댕",
    description: "에너지 넘치지만 기분파에요",
    ownerMbti: ["ENFP", "INFP", "ENTP"],
    ownerMbtiDescription: "활발하지만 기분 변화가 있는 타입이라 유연한 집사와 잘 맞아요. 엄격하게 통제하기보다 자연스럽게 맞춰주는 집사가 편합니다.",
    traits: ["에너지 높음", "기분파", "독립적", "새로운 것 관심 많음"],
  },
  AIBR: {
    title: "자유로운 모험 대장",
    description: "독립적이고 대담한 리더 댕댕이에요",
    ownerMbti: ["ESTP", "ENTJ", "ENTP"],
    ownerMbtiDescription: "독립적이고 활동적인 강아지라 간섭이 적고 자유로운 환경을 주는 집사와 잘 맞아요. 새로운 활동을 함께 즐길 수 있는 집사가 좋습니다.",
    traits: ["독립적", "대담함", "활동성 높음", "자기 방식 강함"],
  },
  AIBF: {
    title: "타고난 자유 영혼",
    description: "활발 독립 적응력까지 완벽해요",
    ownerMbti: ["ENTP", "ESTP", "ENFP"],
    ownerMbtiDescription: "자유롭고 모험을 좋아하는 강아지라 즉흥적이고 활동적인 집사와 궁합이 좋아요. 다양한 경험을 함께할 때 만족도가 높습니다.",
    traits: ["활발", "독립적", "적응력 높음", "어디서든 잘 지냄"],
  },
  LHSR: {
    title: "루틴을 사랑하는 껌딱지",
    description: "차분하고 보호자 중심적인 안정형이에요",
    ownerMbti: ["ISFJ", "INFJ", "ESFJ"],
    ownerMbtiDescription: "차분하고 보호자 중심적인 강아지라 책임감 있고 안정적인 집사와 잘 맞아요. 일정한 루틴과 꾸준한 애정을 주는 집사가 좋습니다.",
    traits: ["차분함", "집사 중심", "루틴 선호", "안정적인 성격"],
  },
  LHSF: {
    title: "따뜻한 감성 동반자",
    description: "온화하고 사람 좋아하는 힐링형이에요",
    ownerMbti: ["INFP", "ISFJ", "ESFJ"],
    ownerMbtiDescription: "온화하고 사람을 좋아하는 성격이라 공감 능력이 높은 집사와 잘 맞아요. 함께 조용히 시간을 보내며 교감하는 관계를 좋아합니다.",
    traits: ["온화함", "사람 좋아함", "조용한 애정 표현", "안정적"],
  },
  LHBR: {
    title: "조용한 수호자",
    description: "얌전하지만 속은 단단한 타입",
    ownerMbti: ["ISTJ", "ESTJ", "INFJ"],
    ownerMbtiDescription: "얌전하지만 자기 기준이 있는 강아지라 신중하고 규칙적인 집사와 잘 맞아요. 안정적인 환경과 일관된 훈련이 도움이 됩니다.",
    traits: ["조용함", "보호 본능", "낯선 사람 경계", "신뢰 깊음"],
  },
  LHBF: {
    title: "느긋한 사교댕",
    description: "차분하지만 친화력 좋은 스타일이에요",
    ownerMbti: ["ESFP", "ISFP", "ENFP"],
    ownerMbtiDescription: "차분하지만 친화력 있는 강아지라 밝고 여유로운 집사와 잘 어울립니다. 스트레스 없는 환경에서 편안하게 지낼 수 있어요.",
    traits: ["차분함", "친화력 있음", "스트레스 적음", "온순"],
  },
  LISR: {
    title: "섬세하고 똑 부러지는 관찰댕",
    description: "독립적이고 예민한 루틴러에요",
    ownerMbti: ["INTJ", "INFJ", "ISTJ"],
    ownerMbtiDescription: "예민하고 관찰력이 높은 강아지라 조용하고 세심한 집사와 잘 맞아요. 작은 변화도 이해해 줄 수 있는 집사가 좋습니다.",
    traits: ["조용함", "예민함", "루틴 선호", "독립적인 성향"],
  },
  LISF: {
    title: "은근한 매력 부자",
    description: "조용하지만 적응력 있는 타입이에요",
    ownerMbti: ["INFP", "ISFP", "INFJ"],
    ownerMbtiDescription: "조용하지만 적응력이 있는 강아지라 부드럽고 감성적인 집사와 잘 맞아요. 편안한 환경에서 자연스럽게 교감하는 관계를 선호합니다.",
    traits: ["차분함", "독립적", "적응력 있음", "조용한 애정"],
  },
  LIBR: {
    title: "무심한 카리스마",
    description: "독립적이고 대범한 평온형이에요",
    ownerMbti: ["INTJ", "ISTP", "ENTJ"],
    ownerMbtiDescription: "독립적이고 대범한 성향이라 개인 공간을 존중해주는 집사와 잘 맞아요. 과한 간섭 없이 함께 지내는 관계를 선호합니다.",
    traits: ["독립적", "대담함", "감정 표현 적음", "자기 영역 확실"],
  },
  LIBF: {
    title: "평화로운 자유 댕댕이",
    description: "차분 독립 유연함 MAX에요",
    ownerMbti: ["ISFP", "INFP", "ENTP"],
    ownerMbtiDescription: "느긋하고 자유로운 강아지라 여유로운 집사와 잘 맞아요. 규칙에 지나치게 얽매이지 않는 환경에서 편안하게 지냅니다.",
    traits: ["느긋함", "독립적", "스트레스 적음", "환경 적응력 좋음"],
  },
};

export function getDogResult(code: string): DogResult | null {
  if (code in DOG_RESULTS) {
    return DOG_RESULTS[code as DogResultCode];
  }
  return null;
}
