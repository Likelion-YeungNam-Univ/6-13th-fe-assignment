import house1 from "../assets/house1.png";
import house2 from "../assets/house2.png";
import house3 from "../assets/house3.png";
import house4 from "../assets/house4.png";
import house5 from "../assets/house5.png";
import house6 from "../assets/house6.png";
import house7 from "../assets/house7.png";
import house8 from "../assets/house8.png";
import heart from "../assets/heart.png";

const cardinfo = [
  {
    id: 1,
    image: house1,
    location: "한국 Ongryoung-myeon, Gwangyan...",
    rating: "★4.97",
    distance: "134km 거리",
    date: "6월 6일~11일",
    guest: '"따뜻하게 맞아주셔서 감사합니다"',
    price: "₩136,941",
  },
  {
    id: 2,
    image: house2,
    location: "한국 Bonghwa-eup, Bonghwa-gun",
    rating: "★4.92",
    distance: "120km 거리",
    date: "5월 6일~11일",
    guest: '"아늑합니다"',
    price: "₩218,000",
  },
  {
    id: 3,
    image: house3,
    location: "한국 Pungcheon-myeon, Andongsi...",
    rating: "★4.87",
    distance: "82km 거리",
    date: "5월 24일~29일",
    guest: '"공기 좋아요"',
    price: "₩176,882",
  },
  {
    id: 4,
    image: house4,
    location: "한국 Hwangridan-gil, Gyodong, G...",
    rating: "★4.91",
    distance: "43km 거리",
    date: "6월 18일~23일",
    guest: '"욕실 깔끔하고 온돌 잘 됩니다"',
    price: "₩260,188",
  },
  {
    id: 5,
    image: house5,
    location: "한국 Ongryoung-myeon, Gwangyan...",
    rating: "★4.97",
    distance: "134km 거리",
    date: "6월 6일~11일",
    guest: '"따뜻하게 맞아주셔서 감사합니다"',
    price: "₩136,941",
  },
  {
    id: 6,
    image: house6,
    location: "한국 Bonghwa-eup, Bonghwa-gun",
    rating: "★4.92",
    distance: "120km 거리",
    date: "5월 6일~11일",
    guest: '"뷰 좋아요"',
    price: "₩218,000",
  },
  {
    id: 7,
    image: house7,
    location: "한국 Pungcheon-myeon, Andongeup",
    rating: "★4.87",
    distance: "82km 거리",
    date: "5월 24일~29일",
    guest: '"아늑합니다"',
    price: "₩176,882",
  },
  {
    id: 8,
    image: house8,
    location: "한국 Hwangridan-gil, Gyodong, G...",
    rating: "★4.91",
    distance: "43km 거리",
    date: "6월 18일~23일",
    guest: '"욕실 깔끔하고 온돌 잘 됩니다"',
    price: "₩260,188",
  },
];

function Cards() {
  const printBox = () => {
    const boxes = cardinfo.map((card) => (
      <div key={card.id}>
        <div className="relative">
          <img src={card.image} className="w-[320px] h-[300px] rounded-2xl" />
          <img src={heart} className="absolute top-2 right-2 w-7 h-7" />
        </div>

        <div className="mt-4">
          <span className="font-medium">{card.location}</span>
          <span> {card.rating}</span>
          <div className="text-gray-500">{card.distance}</div>
          <div className="text-gray-500">{card.date}</div>
          <span className="text-gray-500">게스트 한마디 </span>
          <span className="text-black">{card.guest}</span>
        </div>

        <div className="mt-1">
          <span className="text-black font-medium">{card.price}</span>
          <span className="text-gray-500">/박 </span>
        </div>
      </div>
    ));
    return boxes;
  };

  return (
    <div className="grid place-items-center min-h-screen">
      <div className="grid grid-cols-4 gap-4">{printBox()}</div>
      {/* 세션 때 구조 분석한 것처럼 컴포넌트 구조 분석하여(이름도 지어주세요) pr에 사진 첨부 꼭 해주세요. */}
      {/* grid 클래스 활용해서 컴포넌트 만들기 */}
      {/* 아래는 예시 코드입니다 */}
    </div>
  );
}

export default Cards;
