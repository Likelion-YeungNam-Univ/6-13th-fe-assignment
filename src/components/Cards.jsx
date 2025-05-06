import Category from "./Category";
import image from "../assets/image.png";

const CardList = [
  {
    id: 1,
    image: image,
    title: "게스트 선호",
    location: "한국 Ongryong-myeon, Gwangyan...",
    rating: 4.97,
    distance: "134km 거리",
    date: "6월 6일~11일",
    comment: "따뜻하게 맞아주셔서 감사합니다",
    price: "₩136,941 /박",
  },
  {
    id: 2,
    image: image,
    location: "한국 Bonghwa-eup, Bonghwa-gun",
    rating: 4.92,
    distance: "120km 거리",
    date: "5월 6일~11일",
    price: "₩218,000 /박",
  },
  {
    id: 3,
    image: image,
    location: "한국 Pungcheon-myeon, Andong",
    rating: 4.87,
    distance: "82km 거리",
    date: "5월 24일~29일",
    price: "₩176,882 / 박",
  },
  {
    id: 4,
    image: image,
    title: "게스트 선호",
    location: "한국 Gyo-dong, Gyeongju",
    rating: 4.91,
    distance: "43km 거리",
    date: "6월 18일~23일",
    comment: "욕실 깔끔하고 온돌 잘 됩니다",
    price: "₩260,188 /박",
  },
  {
    id: 5,
    image: image,
    title: "게스트 선호",
    location: "한국 Ongryong-myeon, Gwangyan...",
    rating: 4.97,
    distance: "134km 거리",
    date: "6월 6일~11일",
    comment: "따뜻하게 맞아주셔서 감사합니다",
    price: "₩136,941 /박",
  },
  {
    id: 6,
    image: image,
    title: "게스트 선호",
    location: "한국 Bonghwa-eup, Bonghwa-gun",
    rating: 4.92,
    distance: "120km 거리",
    date: "5월 6일~11일",
    price: "₩218,000 /박",
  },
  {
    id: 7,
    image: image,
    title: "게스트 선호",
    location: "한국 Pungcheon-myeon, Andong",
    rating: 4.87,
    distance: "82km 거리",
    date: "5월 24일~29일",
    price: "₩176,882 / 박",
  },
  {
    id: 8,
    image: image,
    location: "한국 Gyo-dong, Gyeongju",
    rating: 4.91,
    distance: "43km 거리",
    date: "6월 18일~23일",
    comment: "욕실 깔끔하고 온돌 잘 됩니다",
    price: "₩260,188 /박",
  },
];

function Cards() {
  const printBox = () => {
    const boxes = Array.from({ length: 8 }, (_, i) => (
      <div key={i} className="bg-blue-400">
        0{i + 1}
      </div>
    ));
    return boxes;
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {CardList.map((card) => (
        <div
          id={card.id}
          className="w-80 bg-white rounded-xl overflow-hidden transition"
        >
          <div className="relative">
            <img
              className="w-full h-80 object-cover rounded-xl"
              src={card.image}
              alt="숙소이미지"
            />
            {card.title && (
              <div className="absolute top-2 left-2 bg-white text-black text-xs px-3 py-1 rounded-full">
                {card.title}
              </div>
            )}
            <div className="absolute top-2 right-2 text-black text-xl">♥</div>
          </div>

          <div className="text-sm mb-2 space-y-1">
            <div className="flex justify-between items-center">
              <div className="text-black font-semibold: 600">
                {card.location}
              </div>
              <div className="text-black text-sm">★ {card.rating}</div>
            </div>
            <div className="mb-1">
              <div className="text-gray-500">{card.distance}</div>
              <div className="text-gray-500">{card.date}</div>
              {card.comment && (
                <div className="text-sm">
                  <span className="text-gray-500">게스트 한마디: </span>
                  <span className="text-black">"{card.comment}"</span>
                </div>
              )}
            </div>
            <div className="mt-2 font-semibold: 600">
              <span className="text-black">
                {card.price.toString().split("/")[0]}
              </span>
              <span className="text-gray-500"> /박</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
