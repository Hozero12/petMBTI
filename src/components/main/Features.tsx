import {
  Brain,
  HeartHandshake,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "과학적 분석",
    description:
      "MBTI 이론을 기반으로 반려동물의 행동 패턴을 분석합니다",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    icon: HeartHandshake,
    title: "깊은 이해",
    description:
      "우리 아이의 성격을 이해하고 더 나은 관계를 만들어가요",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: Sparkles,
    title: "재미있는 결과",
    description:
      "귀여운 일러스트와 함께 즐거운 결과를 확인하세요",
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
  },
  {
    icon: TrendingUp,
    title: "맞춤 조언",
    description:
      "성격 유형에 맞는 양육 팁과 소통 방법을 제공합니다",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
];

export function Features() {
  return (
    <section className="px-4 py-10 bg-teal-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2
            className="text-4xl md:text-5xl font-bold mb-2 text-white"
          >
            왜 PetBTI일까요?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-teal-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`${feature.bgColor} w-14 h-14 rounded-xl flex items-center justify-center shrink-0`}
                  >
                    <Icon
                      className={`w-7 h-7 ${feature.color}`}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}