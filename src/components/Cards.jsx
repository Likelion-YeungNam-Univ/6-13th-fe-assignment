import card from "../assets/cardImg.png";

function Cards() {
  const printBox = () => {
    const boxes = Array.from({ length: 8 }, (_, i) => (
      <div key={i}>
        {/* 숙소 이미지 */}
        <img src={card} className="w-full h-[270px] rounded-2xl" />

        {/* Bottom */}
        <div className="mt-2">
          {/* 장소, 평점 */}
          <div className="flex justify-between">
            <span>한국 Gyo-dong, Daegu</span>
            <span>★4.99</span>
          </div>
          {/* 거리 */}
          <div className="text-sm text-gray-600">134km 거리</div>
          {/* 날짜 */}
          <div className="text-sm text-gray-600">5월 5일~6일</div>
          {/* 게스트 한마디 */}
          <div>
            <span className="text-sm text-gray-600">게스트 한마디</span>
            <span className="text-sm"> "멋져요ㅎvㅎ"</span>
          </div>
          {/* 가격 */}
          <div>
            <span className="text-sm font-bold">\136,941</span>
            <span className="text-sm"> /박</span>
          </div>
        </div>
      </div>
    ));
    return boxes;
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-7 mt-5 ml-24 mr-24">
        {printBox()}
      </div>
    </div>
  );
}

export default Cards;
