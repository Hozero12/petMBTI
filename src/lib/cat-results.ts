/**
 * 고양이 MBTI 결과별 정의와 설명
 * 코드 순서: A/L - H/I - S/B - R/F
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
    description: "놀아달라고 발로 툭툭 치는 타입이에요 🐾 장난감만 꺼내면 눈이 초롱초롱해지고, 보호자가 집에 오면 현관까지 마중 나와요. 낯선 소리엔 예민하게 반응하지만, 익숙한 루틴 안에서는 세상 편안한 고양이예요.",
    ownerMbti: ["ENFP", "ENFJ", "ESFJ"],
    ownerMbtiDescription: "사람과 교감하는 것을 좋아하는 고양이라 외향적이고 애정 표현이 많은 집사와 잘 맞아요. 함께 놀아주고 반응을 자주 해줄수록 안정감을 느낍니다.",
    traits: ["활동적", "집사 따라다님", "루틴 중요", "사냥놀이 좋아함"],
  },
  AHSF: {
    title: "애교 많은 모험가",
    description: "새로운 박스, 새로운 냄새, 새로운 사람 — 일단 다가가고 보는 타입이에요 🐾 보호자한테 잘 붙어 있고, 낯선 환경에도 생각보다 빨리 적응해요. 예민한 편이라 큰 소리엔 움츠러들지만 금방 회복해요.",
    ownerMbti: ["ESFP", "ENFP", "ESFJ"],
    ownerMbtiDescription: "사교적인 성향이라 밝고 표현이 풍부한 집사와 잘 맞아요. 다양한 상호작용을 즐기는 집사일수록 고양이의 애교와 활동성이 살아납니다.",
    traits: ["사람 좋아함", "애교 많음", "환경 적응 빠름", "활발함"],
  },
  AHBR: {
    title: "용감한 무릎 점령자",
    description: "겁도 없고 애교도 많은 희귀한 조합이에요 🐾 처음 보는 사람한테도 먼저 다가가고, 큰 소리에도 꿈쩍 안 해요. 매일 같은 시간에 밥 달라고 울고, 정해진 자리에서 자는 루틴파예요.",
    ownerMbti: ["ENTJ", "ESTJ", "INFJ"],
    ownerMbtiDescription: "신뢰할 수 있는 집사를 중심으로 행동하는 타입이에요. 규칙적이고 책임감 있는 집사가 안정적인 환경을 만들어주면 잘 적응합니다.",
    traits: ["대담함", "집사 중심", "낯선 것 경계", "영역 지킴"],
  },
  AHBF: {
    title: "에너지 넘치는 사교 냥이",
    description: "집 안을 가장 빠른 속도로 달리는 타입이에요 🐾 모든 것에 호기심, 모든 사람에게 친근함. 보호자 무릎에 올라왔다가 5초 만에 뛰어내리고, 또 올라와요. 심심하면 스스로 놀거리를 찾아요 (대부분 위험한 곳이에요).",
    ownerMbti: ["ENTP", "ESTP", "ENFP"],
    ownerMbtiDescription: "호기심이 많고 활동적인 고양이라 다양한 자극을 주는 집사와 잘 맞아요. 새로운 놀이와 경험을 즐기는 집사와 궁합이 좋습니다.",
    traits: ["활동성 최고", "호기심 많음", "장난꾸러기", "사교적"],
  },
  AISR: {
    title: "예민한 탐험 본능냥",
    description: "보호자한테만 마음을 여는 진짜 츤데레예요 🐾 낯선 사람이 오면 방에 숨지만, 둘만 있을 땐 슬그머니 무릎에 올라와요. 루틴이 바뀌면 며칠은 예민해지고, 익숙한 환경에서 제일 편안해해요.",
    ownerMbti: ["INTJ", "INTP", "INFJ"],
    ownerMbtiDescription: "환경 변화에 민감한 고양이라 조용하고 배려심 있는 집사가 잘 맞아요. 관찰력이 높은 집사가 작은 신호를 이해해 줄 때 스트레스가 줄어듭니다.",
    traits: ["활발하지만 민감", "환경 변화 예민", "혼자 탐색"],
  },
  AISF: {
    title: "기분파 사냥 장인",
    description: "보호자 기분을 제일 먼저 알아채는 예민한 레이더 🐾 보호자가 슬플 때 옆에 와서 가만히 있어주는 타입이에요. 갑작스러운 변화엔 약하지만, 천천히 적응하면 어디서든 잘 지내요.",
    ownerMbti: ["ENFP", "INFP", "ENTP"],
    ownerMbtiDescription: "기분 변화가 있는 타입이라 유연한 성향의 집사가 잘 맞아요. 억지로 통제하기보다 자유롭게 두는 집사가 편안함을 줍니다.",
    traits: ["활동적", "독립적", "기분파", "호기심 많음"],
  },
  AIBR: {
    title: "자유로운 영역 지배자",
    description: "혼자 노는 것도, 같이 노는 것도 다 좋은 타입이에요 🐾 보호자 곁에 있긴 한데 딱히 스킨십을 요구하진 않아요. 겁이 없어서 높은 곳도 좁은 곳도 일단 들어가 보고, 루틴이 있으면 컨디션이 제일 좋아요.",
    ownerMbti: ["ISTP", "ENTJ", "ESTP"],
    ownerMbtiDescription: "독립적이고 자기 방식이 확실한 고양이에요. 개인 공간을 존중해주고 간섭이 적은 집사와 잘 맞습니다.",
    traits: ["독립적", "대담함", "활동성 높음", "영역 의식 강함"],
  },
  AIBF: {
    title: "바람처럼 자유로운 탐험냥",
    description: "규칙도, 틀도, 정해진 자리도 싫은 타입이에요 🐾 오늘은 소파, 내일은 냉장고 위, 모레는 화장실. 어디서든 잘 자고 뭐든 잘 먹어요. 스킨십은 본인이 원할 때만 허용이에요.",
    ownerMbti: ["ENTP", "ESTP", "ENFP"],
    ownerMbtiDescription: "자유롭고 활동적인 고양이라 즉흥적이고 유연한 집사와 잘 맞아요. 다양한 환경과 놀이를 즐길 수 있는 집사가 좋습니다.",
    traits: ["활발", "독립적", "적응력 좋음", "어디든 잘 탐험"],
  },
  LHSR: {
    title: "루틴을 사랑하는 무릎냥",
    description: "격렬하게 놀진 않지만 보호자 옆은 꼭 지키는 타입이에요 🐾 무릎 위에서 꾹꾹이 하는 게 일과고, 갑자기 손님이 오면 제일 먼저 숨어요. 칭찬받으면 눈을 천천히 깜빡여줘요.",
    ownerMbti: ["ISFJ", "INFJ", "ESFJ"],
    ownerMbtiDescription: "차분하고 집사와 교감하는 것을 좋아하는 타입이에요. 안정적인 루틴을 유지하고 애정을 꾸준히 표현하는 집사와 잘 맞습니다.",
    traits: ["조용함", "집사 의존", "루틴 좋아함", "안정 추구"],
  },
  LHSF: {
    title: "따뜻한 힐링 냥이",
    description: "조용하고 다정하고 적응도 잘 해요 🐾 이사를 가도 금방 새 집에 익숙해지고, 낯선 사람에게도 천천히 마음을 열어요. 예민한 편이라 큰 소리엔 잠깐 움츠러들지만 금방 돌아와요.",
    ownerMbti: ["INFP", "ISFJ", "ESFJ"],
    ownerMbtiDescription: "사람과 조용히 함께 있는 것을 좋아하는 고양이에요. 공감 능력이 높은 집사가 정서적 교감을 잘 만들어 줍니다.",
    traits: ["애정 표현 많음", "사람 좋아함", "온화함"],
  },
  LHBR: {
    title: "조용한 카리스마 냥이",
    description: "겁도 없고 붙임성도 좋은데 에너지는 낮은 타입이에요 🐾 낯선 사람도 금방 친해지고 새로운 환경에도 덤덤해요. 하루 루틴이 잡혀 있으면 제일 안정적이고, 집사 무릎을 제일 좋아해요.",
    ownerMbti: ["ISTJ", "INFJ", "ESTJ"],
    ownerMbtiDescription: "신중하고 영역 의식이 있는 고양이라 일관된 생활 패턴을 가진 집사와 잘 맞아요. 예측 가능한 환경이 안정감을 줍니다.",
    traits: ["조용함", "낯선 것 경계", "신뢰 깊음", "안정적"],
  },
  LHBF: {
    title: "느긋한 마이웨이 냥이",
    description: "어디서든 잘 어울리고 뭐든 적당히 즐기는 타입이에요 🐾 낮잠도 좋고 놀이도 좋고 새 친구도 금방 사귀어요. 스트레스를 거의 받지 않아서 함께 살기 제일 편한 고양이예요.",
    ownerMbti: ["ISFP", "ESFP", "ENFP"],
    ownerMbtiDescription: "느긋하고 스트레스가 적은 성향이에요. 밝고 편안한 분위기를 만들어주는 집사와 잘 어울립니다.",
    traits: ["차분함", "친화적", "스트레스 적음", "온순"],
  },
  LISR: {
    title: "섬세한 영역 수호자",
    description: "구석에서 다 보고 있는 타입이에요 🐾 낯선 상황에선 한발 물러서 관찰하고, 익숙해지면 조심스럽게 다가와요. 루틴이 바뀌면 며칠은 밥도 잘 안 먹어요. 조용하지만 자기 페이스가 확실한 냥이예요.",
    ownerMbti: ["INTJ", "INFJ", "ISTJ"],
    ownerMbtiDescription: "주변을 조용히 관찰하는 타입이라 차분하고 안정적인 집사와 잘 맞아요. 조용한 환경을 유지해 주는 집사가 좋습니다.",
    traits: ["조용함", "예민함", "루틴 중요", "혼자 시간 선호"],
  },
  LISF: {
    title: "은근히 다정한 관찰자",
    description: "보호자한테만 배를 보여주는 타입이에요 🐾 낯선 곳이나 사람에겐 경계심이 강하지만, 둘만 있을 땐 의외로 애교가 넘쳐요. 자기만의 안전한 공간이 꼭 필요하고, 그 안에서는 세상 편안해요.",
    ownerMbti: ["INFP", "ISFP", "INFJ"],
    ownerMbtiDescription: "크게 애정을 표현하지는 않지만 교감을 좋아해요. 감성적이고 배려심 있는 집사가 관계를 편안하게 만들어 줍니다.",
    traits: ["차분함", "독립적", "은근한 애정 표현"],
  },
  LIBR: {
    title: "도도한 지배자",
    description: "혼자도 잘 놀고, 같이 있어도 적당한 거리를 좋아해요 🐾 낯선 것에 겁이 없고, 루틴이 있으면 더 안정적이에요. 안기는 건 별로지만 같은 방에 있는 건 좋아하는 진짜 고양이 스타일이에요.",
    ownerMbti: ["INTJ", "ISTP", "ENTJ"],
    ownerMbtiDescription: "독립성이 강한 고양이라 간섭이 적은 집사와 잘 맞아요. 개인 공간을 존중해주는 집사가 가장 편합니다.",
    traits: ["독립적", "감정 표현 적음", "영역 강함"],
  },
  LIBF: {
    title: "평온한 자유 냥이",
    description: "혼자 있어도 심심하지 않고, 같이 있어도 방해받기 싫은 타입이에요 🐾 새로운 환경에도 금방 적응하고, 겁도 별로 없어요. 안아달라고 조르지 않지만 슬쩍 옆에 와서 눕는 건 좋아해요. 가장 고양이다운 고양이예요.",
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
