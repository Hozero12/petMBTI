import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const petTypes = [
  {
    emoji: "🐶",
    type: "ENFP",
    title: "활발한 사교왕",
    description:
      "사람을 만나면 꼬리가 떨어져라 흔드는 우리 아이",
    image:
      "https://images.unsplash.com/photo-1651212508936-dfb6f6ea3d81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGdvbGRlbiUyMHJldHJpZXZlcnxlbnwxfHx8fDE3NzM0NjQ4NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-orange-400 to-amber-500",
  },
  {
    emoji: "🐱",
    type: "INTJ",
    title: "도도한 전략가",
    description: "혼자만의 시간을 즐기는 우아한 고양이",
    image:
      "https://images.unsplash.com/photo-1768660632474-a7b0fea89ece?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGF5ZnVsJTIwY2F0JTIwa2l0dGVufGVufDF8fHx8MTc3MzQ4MzUxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-purple-400 to-indigo-500",
  },
  {
    emoji: "🐕",
    type: "ISFJ",
    title: "충성스런 수호자",
    description: "가족을 지키는 든든한 우리집 보호자",
    image:
      "https://images.unsplash.com/photo-1706745262357-5ecaa3154433?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZG9yYWJsZSUyMHB1cHB5JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczNDgzNTIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-blue-400 to-cyan-500",
  },
];

export function PetTypes() {
  return (
    <section className="px-4 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            대표 성격 유형
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            우리 아이는 어떤 유형일까요? 지금 바로 확인해보세요!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {petTypes.map((pet, index) => (
            <Card
              key={index}
              className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={pet.image}
                  alt={pet.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${pet.color} opacity-20 group-hover:opacity-30 transition-opacity`}
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-4 py-2 shadow-lg">
                  <p className="font-bold text-gray-900">
                    {pet.type}
                  </p>
                </div>
              </div>

              <div className="p-6 bg-white">
                <div className="text-4xl mb-3">{pet.emoji}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {pet.title}
                </h3>
                <p className="text-gray-600">
                  {pet.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500">
            이 외에도{" "}
            <span className="font-bold text-purple-600">
              13개
            </span>
            의 성격 유형이 기다리고 있어요!
          </p>
        </div>
      </div>
    </section>
  );
}