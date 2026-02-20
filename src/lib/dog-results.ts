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
}

export const DOG_RESULTS: Record<DogResultCode, DogResult> = {
  AHSR: {
    title: "에너지 넘치는 충성 러버",
    description: "활발하고 보호자 중심적인 루틴 지킴이에요",
  },
  AHSF: {
    title: "어디서든 사랑받는 핵인싸",
    description: "사람 좋아하고 적응력 좋은 분위기 메이커에요",
  },
  AHBR: {
    title: "용감한 보호자 바라기",
    description: "대범하지만 마음은 한 사람에게",
  },
  AHBF: {
    title: "세상은 내 놀이터",
    description: "활발 사교 적응력 끝판왕이에요",
  },
  AISR: {
    title: "예민한 에너지 탐험가",
    description: "활발하지만 환경엔 민감해요",
  },
  AISF: {
    title: "변덕 많은 갈댕",
    description: "에너지 넘치지만 기분파에요",
  },
  AIBR: {
    title: "자유로운 모험 대장",
    description: "독립적이고 대담한 리더 댕댕이에요",
  },
  AIBF: {
    title: "타고난 자유 영혼",
    description: "활발 독립 적응력까지 완벽해요",
  },
  LHSR: {
    title: "루틴을 사랑하는 껌딱지",
    description: "차분하고 보호자 중심적인 안정형이에요",
  },
  LHSF: {
    title: "따뜻한 감성 동반자",
    description: "온화하고 사람 좋아하는 힐링형이에요",
  },
  LHBR: {
    title: "조용한 수호자",
    description: "얌전하지만 속은 단단한 타입",
  },
  LHBF: {
    title: "느긋한 사교댕",
    description: "차분하지만 친화력 좋은 스타일이에요",
  },
  LISR: {
    title: "섬세하고 똑 부러지는 관찰댕",
    description: "독립적이고 예민한 루틴러에요",
  },
  LISF: {
    title: "은근한 매력 부자",
    description: "조용하지만 적응력 있는 타입이에요",
  },
  LIBR: {
    title: "무심한 카리스마",
    description: "독립적이고 대범한 평온형이에요",
  },
  LIBF: {
    title: "평화로운 자유 댕댕이",
    description: "차분 독립 유연함 MAX 댕댕이에요",
  },
};

export function getDogResult(code: string): DogResult | null {
  if (code in DOG_RESULTS) {
    return DOG_RESULTS[code as DogResultCode];
  }
  return null;
}
