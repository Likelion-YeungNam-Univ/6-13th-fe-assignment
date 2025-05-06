import photo from "../assets/photo.jpeg";

function Cards() {
  const Card = () => {
    const boxes = Array.from({ length: 8 }, (_, i) => (
      <div key={i} className="bg-blue-400 h-96">
        0{i + 1}
      </div>
    ));
    return boxes;
  };

  return (
    <>
      // 세션 때 구조 분석한 것처럼 컴포넌트 구조 분석하여(이름도 지어주세요)
      pr에 사진 첨부 꼭 해주세요.
      <div>
        <div className="grid grid-cols-4 gap-4">{Card()}</div>
        {/* main */}
        <div>
          <img src={photo} />
          <div>Satisfaction</div>
        </div>
        <div>
          {/*중간*/}
          <div>
            <div>Title</div>
            <div>Information</div>
            <div>Comment</div>
            <div>Money</div>
          </div>
          {/*오른쪽*/}
          <div>Point</div>
        </div>
      </div>
    </>
  );
}

export default Cards;
