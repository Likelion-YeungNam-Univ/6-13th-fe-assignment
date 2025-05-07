import thumbnail1 from "../assets/Yesan.png";
import thumbnail2 from "../assets/Hongcheon1.png";
import thumbnail3 from "../assets/Gapyeong.png";
import thumbnail4 from "../assets/Cheorwon.png";
import thumbnail5 from "../assets/Hongcheon2.png";
import thumbnail6 from "../assets/Gyeongju.png";
import thumbnail7 from "../assets/Hamyang.png";
import thumbnail8 from "../assets/Jinju.png";

const like = "https://img.icons8.com/?size=100&id=87&format=png&color=ffffff";

const cardInfo = [
  {
    id: 1,
    picture: thumbnail1,
    prefer: 1,
    location: "Yesan-gun",
    rate: "4.92",
    dist: "94",
    term: "6월 8일~13일",
    review: "한적한 동네라 오히려 편안했고",
    price: "216,824",
  },
  {
    id: 2,
    picture: thumbnail2,
    prefer: 1,
    location: "Hongcheon-gun",
    rate: "4.9",
    dist: "60",
    term: "5월 12일~17일",
    review: "깔끔하고 아늑하고 다 좋았어요",
    price: "141,506",
  },
  {
    id: 3,
    picture: thumbnail3,
    prefer: 1,
    location: "가평군",
    rate: "5.0",
    dist: "44",
    term: "5월 18일~23일",
    review: "다시 오고 싶은 숙소입니다!",
    price: "187,153",
  },
  {
    id: 4,
    picture: thumbnail4,
    prefer: 0,
    location: "Cheorwon-gun",
    rate: "5.0",
    dist: "72",
    term: "5월 12일~17일",
    review: "",
    price: "159,765",
  },
  {
    id: 5,
    picture: thumbnail5,
    prefer: 1,
    location: "Hongcheon-gun",
    rate: "",
    dist: "68",
    term: "5월 12일~17일",
    review: "",
    price: "878,706",
  },
  {
    id: 6,
    picture: thumbnail6,
    prefer: 1,
    location: "Gyeongju-si",
    rate: "4.96",
    dist: "57",
    term: "5월 11일~16일",
    review: "다음에도 꼭 갈거 같아요!!",
    price: "204,271",
  },
  {
    id: 7,
    picture: thumbnail7,
    prefer: 1,
    location: "Anui-myeon, Hamyang-gun",
    rate: "4.88",
    dist: "73",
    term: "5월 7일~12일",
    review: "아름다운 산 전망과 친절한 개",
    price: "205,412",
  },
  {
    id: 8,
    picture: thumbnail8,
    prefer: 1,
    location: "Jinju-si",
    rate: "4.95",
    dist: "77",
    term: "5월 6일~11일",
    review: "아늑하고 깨끗해서 좋았어요",
    price: "314,965",
  },
];

function Cards() {
  const printBox = () => {
    const boxes = cardInfo.map((card) => (
      <div>
        <div className="relative">
          <img
            className="w-96 h-96 object-cover mb-2 rounded-3xl"
            src={card.picture}
          />
          <div>
            {card.prefer == 1 && (
              <span className="absolute top-4 left-3 bg-white text-black font-bold text-base px-3 py-1.5 rounded-full">
                게스트 선호
              </span>
            )}
            <button className="absolute top-4 right-8">
              <img src={like} className="w-7 h-7"></img>
            </button>
          </div>
        </div>
        <div className="mb-1 flex justify-between">
          <div className="font-bold">한국 {card.location}</div>
          <div className="font-bold mr-2">★ {card.rate}</div>
        </div>
        <div className="text-gray-500 text-sm">
          <div>{card.dist}km 거리</div>
          <div>{card.term}</div>
          <div>
            게스트 한마디 "<span className="text-black">{card.review}</span>"
          </div>
        </div>
        <div className="mt-1 text-gray-500">
          <span className="font-bold text-black">\{card.price}</span>
          /박
        </div>
      </div>
    ));

    // Array.from({ length: 8 }, (_, i) => (
    //   <div key={i} className="bg-blue-500">
    //     {i}
    //   </div>
    // ));

    return boxes;
  };

  return (
    // 세션 때 구조 분석한 것처럼 컴포넌트 구조 분석하여(이름도 지어주세요) pr에 사진 첨부 꼭 해주세요.
    <div>
      {/* grid 클래스 활용해서 컴포넌트 만들기 */}
      {/* 아래는 예시 코드입니다 */}

      <div className="grid grid-cols-4 gap-4 m-5">{printBox()}</div>
    </div>
  );
}

export default Cards;
