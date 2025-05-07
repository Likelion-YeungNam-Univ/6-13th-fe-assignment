import card from "../assets/cardImg.png";

function Cards() {
  const printBox = () => {
    const boxes = Array.from({ length: 8 }, (_, i) => (
      <div key={i} className="">
        {/* 숙소 이미지 */}
        <img src={card} />
        {/* Bottom */}
        <div>
          <span>한국-Korea....</span>
          <span>★4.99</span>
          <div>134km 거리</div>
          <div>5월 5일~6일</div>
          <div>
            <span>게스트 한마디</span>
            <span> "멋져요ㅎvㅎ"</span>
          </div>
          <div>
            <span>\136,941</span>
            <span> /박</span>
          </div>
        </div>
      </div>
    ));
    return boxes;
  };

  return (
    <div>
      <div class="grid grid-cols-4 gap-4">{printBox()}</div>
    </div>
  );
}

export default Cards;
