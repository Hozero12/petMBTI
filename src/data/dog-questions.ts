/**
 * 강아지 MBTI 검사 질문
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
export const DOG_QUESTION_STRINGS = [
  "보호자가 보이지 않으면 찾으러 다닌다./S",
  "산책 시간이 바뀌면 평소보다 들뜨거나 보채는 행동을 보인다./T",
  "낯선 사람이 갑자기 만지려 하면 움츠리거나 피하는 반응을 보인다./R",
  "집 안에서도 장난감 놀이를 자주 요구한다./E",
  "병원 방문 시 스트레스 반응이 크다./R",
  "낯선 사람에게 먼저 다가가려 한다./S",
  "흥분 상태로 전환되는 속도가 빠르다./E",
  "가구 위치가 바뀌면 탐색하거나 불안해한다./T",
  "다른 강아지보다 사람에게 더 관심을 보인다./S",
  "소리·접촉·냄새 등 자극에 떨림, 헐떡임, 굳음 같은 신체 반응이 나타난다./R",  // 10
  "정해진 자리에 잠자기를 선호한다./T",
  "산책 시간이 길어져도 쉽게 지치지 않는다./E",
  "혼자 있는 시간을 힘들어한다./S",
  "스트레스를 받으면 짖음이나 행동이 늘어난다./R",
  "하루 중 가만히 쉬는 시간이 적은 편이다./E",
  "일정한 하루 패턴을 유지하면 안정적이다./T",
  "보호자가 슬프거나 힘들어 보일 때 곁을 지키거나 위로하는 행동을 한다./S",
  "외출이나 산책 준비가 시작되면 즉시 흥분 상태가 된다./E",
  "새로운 장소에 가면 긴장하는 모습이 보인다./R",
  "여행 후 며칠간 행동 패턴이 달라진다./T",                           //20
  "산책 중에도 주변 자극을 계속 탐색하며 움직이려 한다./E",
  "놀이가 끝나도 쉽게 흥분이 가라앉지 않는다./E",
  "활동이 시작되면 끝까지 높은 에너지를 유지하며 쉽게 멈추지 않는다./E",
  "보호자가 앉거나 쉬면 가까이 붙어 있으려 한다./S",
  "새로운 사람과 금방 친해지는 편이다./S",
  "혼자 두면 문 앞이나 창가에서 기다리는 행동을 보인다./S",
  "천둥, 공사 소리 등 큰 소리에 불안 반응을 보인다./R",
  "낯선 강아지를 만나면 긴장하거나 경계한다./R",
  "예상치 못한 상황에서 쉽게 흥분하거나 위축된다./R",
  "산책 코스가 달라지면 탐색보다 경계 반응이 먼저 나온다./T",
  "평소와 다른 사람이 돌봐줄 때 식사나 수면 패턴이 달라진다./T",
  "식사·배변 등 생활 루틴이 바뀌면 적응하는 데 시간이 걸린다./T"
] as const;

export const DOG_QUESTIONS = DOG_QUESTION_STRINGS.map((q) => parseQuestion(q));
