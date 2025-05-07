import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";
import pic6 from "../assets/pic6.jpg";
import pic7 from "../assets/pic7.jpg";
import pic8 from "../assets/pic8.jpg";

const cardData = [
  { pic: pic1, name: "미국, 워싱턴, George Town", rate: 4.92, distance: "11294km 거리", date: "5월 6일~11일", price: "₩218,000", tag: "게스트 선호", comment: "집들이 너무 이뻐요!"},
  { pic: pic2, name: "제주도, 서귀포시, 남원읍", rate: 4.5, distance: "339.4.km 거리", date: "5월 15일~17일", price: "₩150,000"},
  { pic: pic3, name: "미국, SanDiego, La Jolla", rate: 4.73, distance: "9775.5km 거리", date: "5월 20일~22일", price: "₩310,000", comment: "경치가 좋았어요!"},
  { pic: pic4, name: "제주도, 서귀포시, 성산읍", rate: 4.42, distance: "336.8km 거리", date: "5월 25일~27일", price: "₩130,000", tag: "게스트 선호"},
  { pic: pic5, name: "강원도, 속초", rate: 4.3, distance: "265.8km 거리", date: "5월 25일~27일", price: "₩180,000", tag: "게스트 선호", comment: "근처에 갈 곳이 많아요!"},
  { pic: pic6, name: "미국, SanDiego, La Jolla", rate: 4.68, distance: "9776.8km 거리", date: "6월 25일~27일", price: "₩330,000", tag: "게스트 선호"},
  { pic: pic7, name: "전라남도, 여수", rate: 4.35, distance: "141km 거리", date: "7월 25일~27일", price: "₩240,000", tag: "게스트 선호"},
  { pic: pic8, name: "강원도, 강릉", rate: 4.4, distance: "200km 거리", date: "8월 25일~27일", price: "₩150,000", comment: "바다랑 가까워서 좋았어요!"}
];

function Cards() {
  const printBox = () => {
    return cardData.map((card, i) => (
      <div key={i} className="bg-white rounded-xl overflow-hidden space-y-2 mt-4">
        {/* 카드 사진 */}
        <div className="relative">
          <img src={card.pic} alt={card.name} className="w-full h-60 object-cover rounded-xl" />

          {card.tag && (
            <div className="absolute top-2 left-2 bg-white text-xs font-semibold px-2 py-1 rounded-2xl">
              {card.tag}
            </div>
          )}

          <button className="absolute top-2 right-2 p-1 rounded-full hover:bg-red-400 hover : text-white">
          ♡
          </button>
        </div>

        {/* Info */}
        <div className="px-2 space-y-0.5">
          <div className="flex justify-between text-sm font-semibold">
            <span className="text-black">{card.name}</span>
            <span>★ {card.rate}</span>
          </div>
          <div className="text-sm text-gray-500">{card.distance}</div>
          <div className="text-sm text-gray-500">{card.date}</div>
        
          {/* 한마디 있을 경우 */}
          {card.comment && (
            <div className="text-sm text-gray-600">
            게스트 한마디: "<span className="font-bold">{card.comment}</span>"
            </div>
          )}
          
          <div className="text-sm text-black">
            <span className="font-bold">{card.price}</span>
            <span className="font-normal"> /박</span>
          </div>
        </div>
      </div>
    ));
  };

  return (
    // 세션 때 구조 분석한 것처럼 컴포넌트 구조 분석하여(이름도 지어주세요) pr에 사진 첨부 꼭 해주세요.
    <div className="px-4 md:px-8">
      {/* grid 클래스 활용해서 컴포넌트 만들기 */}
      {/* 아래는 예시 코드입니다 */}

      <div class="grid grid-cols-4 gap-4">
        {printBox()}
      </div>
    </div>
  );
}

export default Cards;
