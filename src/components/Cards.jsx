// Cards.jsx

const dummyData = [
  {
    title: "4월 10일~15일",
    location: "서귀포시, 한국",
    price: "120,000",
    rating: 4.88,
  },
  {
    title: "5월 1일~6일",
    location: "강릉시, 한국",
    price: "100,000",
    rating: 4.91,
  },
  {
    title: "6월 10일~15일",
    location: "부산시, 한국",
    price: "150,000",
    rating: 4.92,
  },
  {
    title: "7월 1일~6일",
    location: "전주시, 한국",
    price: "90,000",
    rating: 4.87,
  },
  {
    title: "8월 3일~8일",
    location: "서울시, 한국",
    price: "200,000",
    rating: 4.95,
  },
  {
    title: "9월 12일~17일",
    location: "제주시, 한국",
    price: "130,000",
    rating: 4.89,
  },
  {
    title: "10월 20일~25일",
    location: "포항시, 한국",
    price: "110,000",
    rating: 4.83,
  },
  {
    title: "11월 15일~20일",
    location: "여수시, 한국",
    price: "95,000",
    rating: 4.86,
  }
];

function Cards() {
  return (
    // 세션 때 구조 분석한 것처럼 컴포넌트 구조 분석하여(이름도 지어주세요) pr에 사진 첨부 꼭 해주세요.
    <div className="py-6">
      <div className="text-xl font-bold mb-4">숙소 리스트</div>
      {/* grid 클래스 활용해서 컴포넌트 만들기 */}
      <div className="grid grid-cols-4 gap-6">
        {dummyData.map((item, idx) => (
          <div key={idx} className="w-full">
            <div className="bg-gray-200 h-40 rounded-xl mb-2"></div>
            <div className="font-semibold">{item.location}</div>
            <div className="text-sm text-gray-600">{item.title}</div>
            <div className="mt-1">₩{item.price} / 박</div>
            <div>⭐ {item.rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;