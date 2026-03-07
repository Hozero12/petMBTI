/**
 * 강아지 MBTI 검사 질문
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
const DOG_E = [
  "집 안에서도 장난감을 물고 와 놀이를 자주 요구한다./E",
  "놀이가 시작되면 쉽게 멈추지 않고 오래 이어가려 한다./E",
  "산책 시간이 길어져도 지치기보다 더 움직이려 한다./E",
  "집에서 가만히 쉬기보다 돌아다니거나 놀거리를 찾는 시간이 많다./E",
  "산책 준비(목줄, 신발 등)를 시작하면 바로 흥분하거나 뛰어다닌다./E",
  "산책 중에도 계속 냄새를 맡거나 방향을 바꾸며 적극적으로 탐색한다./E",
  "놀이가 끝난 뒤에도 흥분 상태가 쉽게 가라앉지 않는다./E",
  "공놀이나 추격 놀이를 시작하면 스스로 멈추기보다 계속 이어가려 한다./E",
] as const;

/** S: 사회성 (사람 친화 H / 독립적 I) */
const DOG_S = [
  "보호자가 보이지 않으면 집 안을 돌아다니며 찾으려 한다./S",
  "낯선 사람이 오면 경계하기보다 먼저 다가가려 한다./S",
  "다른 강아지보다 사람에게 더 관심을 보이며 다가간다./S",
  "혼자 남겨지면 짖거나 문 앞에서 기다리는 행동을 보인다./S",
  "보호자가 슬퍼 보이거나 아플 때 곁에 머무르려 한다./S",
  "보호자가 앉거나 누워 있으면 가까이 와서 붙어 있으려 한다./S",
  "새로운 사람을 만나도 금방 긴장을 풀고 친해지는 편이다./S",
  "외출 후 집에 돌아오면 과하게 반가움을 표현한다./S",
] as const;

/** R: 반응성 (예민 S / 대범 B) */
const DOG_R = [
  "낯선 사람이 갑자기 만지려 하면 뒤로 물러나거나 몸을 피한다./R",
  "동물병원에 가면 떨거나 숨으려 하는 반응을 보인다./R",
  "큰 소리(천둥, 공사 소리 등)가 나면 불안해하거나 짖는다./R",
  "갑작스러운 접촉이나 움직임에 깜짝 놀라는 편이다./R",
  "새로운 장소에 가면 주변을 경계하며 행동이 조심스러워진다./R",
  "낯선 강아지를 만나면 먼저 다가가기보다 긴장하거나 멈춘다./R",
  "스트레스를 받으면 짖거나 계속 움직이는 행동이 늘어난다./R",
  "환경이 바뀌면 식욕이나 행동 패턴이 달라지는 경우가 있다./R",
] as const;

/** T: 루틴 (루틴 R / 유연 F) */
const DOG_T = [
  "산책 시간이 평소보다 늦어지면 보채거나 기다리는 행동을 보인다./T",
  "가구 위치가 바뀌면 냄새를 맡거나 다시 확인하는 행동을 한다./T",
  "평소 자던 자리에서 잠자는 것을 선호한다./T",
  "하루 일정(산책, 식사 등)이 일정하면 더 안정적으로 행동한다./T",
  "여행이나 외출 후 며칠 동안 행동 패턴이 달라진다./T",
  "평소와 다른 산책 코스에 가면 탐색보다 경계 반응이 먼저 나온다./T",
  "다른 사람이 돌봐주면 식사나 수면 패턴이 달라진다./T",
  "식사 시간이나 배변 루틴이 바뀌면 적응하는 데 시간이 걸린다./T",
] as const;

export const DOG_QUESTION_STRINGS = [...DOG_E, ...DOG_S, ...DOG_R, ...DOG_T] as const;

export const DOG_QUESTIONS = DOG_QUESTION_STRINGS.map((q) => parseQuestion(q));
