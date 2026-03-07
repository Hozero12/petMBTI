/**
 * 고양이 MBTI 검사 질문
 * 형식: "질문 내용/알파벳" - 슬래시 뒤 알파벳(E/S/R/T)별로 점수 합산
 *
 * E(Energy) → A(Active) / L(Low-energy)
 * S(Social) → H(Human-oriented) / I(Independent)
 * R(Reactivity) → S(Sensitive) / B(Bold)
 * T(Routine) → R(Routine) / F(Flexible)
 */

function parseQuestion(str: string) {
  const lastSlash = str.lastIndexOf("/");
  if (lastSlash === -1) return { text: str, type: "?" };
  const text = str.slice(0, lastSlash).trim();
  const type = str.slice(lastSlash + 1).trim().toUpperCase();
  return type ? { text, type } : { text: str, type: "?" };
}

/** E: 에너지 (활발 A / 차분 L) */
const CAT_E = [
  "하루 중 뛰거나 사냥 놀이를 자주 한다./E",
  "움직이는 물체를 발견하면 즉시 추격하거나 사냥하려는 행동을 보인다./E",
  "밤 시간에 활동량이 많다./E",
  "캣타워를 단순 휴식 공간보다 뛰고 오르는 활동 공간으로 주로 사용한다./E",
  "가만히 있기보다 주변을 탐색하는 시간이 많다./E",
  "높은 곳을 오르내리는 활동을 자주 시도한다./E",
  "혼자 있을 때도 뛰거나 갑작스럽게 질주하는 행동을 한다./E",
  "사냥 놀이를 시작하면 쉽게 멈추지 않는다./E",
] as const;

/** S: 사회성 (사람 친화 H / 독립적 I) */
const CAT_S = [
  "집사와 잘때 얼굴 근처에서 잠든다./S",
  "쓰다듬거나 스킨십을 먼저 요청한다./S",
  "밤에 집사와 함께 잠든다/S",
  "보호자가 외출 준비를 시작하면 따라다니거나 문 앞에서 기다리는 행동을 한다./S",
  "집사가 2일 이상 집을 비우면 울다가 목이 쉰다/S",
  "보호자가 이동하면 뒤따라 이동하는 경우가 많다./S",
  "스스로 무릎이나 옆자리로 올라오려 한다./S",
  "낯선 환경에서도 보호자 곁에 있으면 비교적 안정적이다./S",
] as const;

/** R: 반응성 (예민 S / 대범 B) */
const CAT_R = [
  "작은 소리에도 귀를 세우거나 숨는다./R",
  "스트레스를 받으면 밥을 잘 먹지 않는다./R",
  "새로운 장난감을 주면 경계한다./R",
  "동물병원 방문 후 스트레스가 오래 간다./R",
  "천둥소리가 들리면 가구나 집사 뒤에 숨는다/R",
  "새로운 냄새나 물건을 오래 경계한다./R",
  "다른 동물의 소리에 예민하게 반응한다./R",
  "다른 고양이가 집에 오면 무서워한다./R",
] as const;

/** T: 루틴 (루틴 R / 유연 F) */
const CAT_T = [
  "보호자의 귀가 시간이 달라지면 평소와 다른 행동을 보인다./T",
  "캣타워, 창가 등 특정 장소를 반복적으로 찾는다./T",
  "가구 배치가 바뀌면 익숙한 자리를 다시 찾으려 한다./T",
  "집 안에서 자주 머무는 장소가 정해져 있다./T",
  "이사나 환경 변화 후 적응하는 데 시간이 걸린다./T",
  "화장실 위치나 모래가 바뀌면 사용 행동이 달라진다./T",
  "매일 비슷한 시간에 밥을 달라고 보채거나 깨운다./T",
  "밥을 주는 시간이 조금만 늦어져도 반응을 보인다./T"
] as const;

export const CAT_QUESTION_STRINGS = [...CAT_E, ...CAT_S, ...CAT_R, ...CAT_T] as const;

export const CAT_QUESTIONS = CAT_QUESTION_STRINGS.map((q) => parseQuestion(q));
