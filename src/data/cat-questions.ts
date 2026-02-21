/**
 * 고양이 MBTI 검사 질문
 * 형식: "질문 내용/알파벳" - 슬래시 뒤 알파벳(E/S/R/T)별로 점수 합산
 */

function parseQuestion(str: string) {
  const lastSlash = str.lastIndexOf("/");
  if (lastSlash === -1) return { text: str, type: "?" };
  const text = str.slice(0, lastSlash).trim();
  const type = str.slice(lastSlash + 1).trim().toUpperCase();
  return type ? { text, type } : { text: str, type: "?" };
}

/*
해설
 E(Energy) → A(Active) / L(Low-energy)
 S(Social) → H(Human-oriented) / I(Independent)
 R(Reactivity) → S(Sensitive) / B(Bold)
 T(Routine) → R(Routine) / F(Flexible)
*/
export const CAT_QUESTION_STRINGS = [
  "작은 소리에도 귀를 세우거나 숨는다./R",
  "보호자 근처에 자주 머무른다./S",
  "사료 급여 시간이 달라지면 반응한다./T",
  "하루 중 뛰거나 사냥 놀이를 자주 한다./E",
  "환경 변화 후 식사량이 변한다./R",
  "쓰다듬거나 스킨십을 먼저 요청한다./S",
  "움직이는 물체에 즉각 반응한다./E",
  "특정 장소(캣타워, 창가 등)를 고집한다./T",
  "낯선 사람에게 비교적 경계가 적다./S",
  "새로운 물건이 들어오면 경계한다./R",
  "밤 시간에 활동량이 많다./E",
  "가구 배치 변경에 민감하다./T",
  "보호자가 외출하면 행동 변화가 있다./S",
  "동물병원 방문 후 스트레스가 오래 간다./R",
  "장난감에 대한 흥미가 오래 유지된다./E",
  "익숙한 공간에서 더 안정적으로 행동한다./T",
  "혼자보다 함께 있는 상황에서 더 안정적이다./S",
  "자신의 영역 침범에 민감하다./R",
  "가만히 있기보다 주변을 탐색하는 시간이 많다./E",
  "이사 후 적응하는 데 시간이 오래 걸린다./T",
  "높은 곳을 오르내리는 활동을 자주 시도한다./E",
  "혼자 있을 때도 뛰거나 갑작스럽게 질주하는 행동을 한다./E",
  "사냥 놀이를 시작하면 쉽게 멈추지 않는다./E", 
  "보호자가 이동하면 뒤따라 이동하는 경우가 많다./S",
  "스스로 무릎이나 옆자리로 올라오려 한다./S",
  "낯선 환경에서도 보호자 곁에 있으면 비교적 안정적이다./S",
  "새로운 냄새나 물건을 오래 경계한다./R",
  "다른 동물의 소리에 예민하게 반응한다./R",
  "예상치 못한 접촉에 과하게 놀라는 편이다./R",
  "화장실 위치나 모래 종류가 바뀌면 행동 변화가 있다./T",
  "특정 시간대에 반복적인 행동 패턴이 있다./T",
  "급여 방식이 바뀌면 적응하는 데 시간이 필요하다./T"
] as const;

export const CAT_QUESTIONS = CAT_QUESTION_STRINGS.map((q) => parseQuestion(q));
