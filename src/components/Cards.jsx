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
    // 세션 때 구조 분석한 것처럼 컴포넌트 구조 분석하여(이름도 지어주세요) pr에 사진 첨부 꼭 해주세요.
    <div>
      {/* grid 클래스 활용해서 컴포넌트 만들기 */}
      {/* 아래는 예시 코드입니다 */}
      <div>Cards</div>
      <div class="grid grid-cols-4 gap-4">
        {printBox()}
      </div>
    </div>
  );
}

export default Cards;
