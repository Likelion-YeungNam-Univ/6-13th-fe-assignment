import thumbnail from "../assets/thumbnail.png";
import thumbnail2 from "../assets/thumbnail2.png";
import heart from "../assets/heart.png";

const moreImg = "https://img.icons8.com/ios/50/more.png";

const cardList = [
  {
    id: 1,
    thumbnail: thumbnail,
    favorMark: "게스트 선호",
    heart: heart,
    moreImg: moreImg,
    name: "한국",
    star: "4.97",
    distance: "134km",
    date: "5월 6일~11일",
    guestReview: "따뜻하게 맞아주셔서 감사합니다.",
    price: "123,941",
  },
  {
    id: 2,
    thumbnail: thumbnail,
    favorMark: "",
    heart: heart,
    moreImg: moreImg,
    name: "한국",
    star: "4.92",
    distance: "120km",
    date: "5월 6일~11일",
    guestReview: "",
    price: "218,000",
  },
  {
    id: 3,
    thumbnail: thumbnail2,
    favorMark: "",
    heart: heart,
    moreImg: moreImg,
    name: "한국",
    star: "4.87",
    distance: "82km",
    date: "5월 24일~29일",
    guestReview: "",
    price: "176,882",
  },
  {
    id: 4,
    thumbnail: thumbnail2,
    favorMark: "게스트 선호",
    heart: heart,
    moreImg: moreImg,
    name: "한국",
    star: "4.91",
    distance: "43km",
    date: "6월 18일~23일",
    guestReview: "욕실 깔끔하고 온돌 잘 됩니다.",
    price: "260,188",
  },
  {
    id: 5,
    thumbnail: thumbnail,
    favorMark: "게스트 선호",
    heart: heart,
    moreImg: moreImg,
    name: "한국",
    star: "4.97",
    distance: "134km",
    date: "5월 6일~11일",
    guestReview: "따뜻하게 맞아주셔서 감사합니다.",
    price: "123,941",
  },
  {
    id: 6,
    thumbnail: thumbnail,
    favorMark: "",
    heart: heart,
    moreImg: moreImg,
    name: "한국",
    star: "4.92",
    distance: "120km",
    date: "5월 6일~11일",
    guestReview: "",
    price: "218,000",
  },
  {
    id: 7,
    thumbnail: thumbnail2,
    favorMark: "",
    heart: heart,
    moreImg: moreImg,
    name: "한국",
    star: "4.87",
    distance: "82km",
    date: "5월 24일~29일",
    guestReview: "",
    price: "176,882",
  },
  {
    id: 8,
    thumbnail: thumbnail2,
    favorMark: "게스트 선호",
    heart: heart,
    moreImg: moreImg,
    name: "한국",
    star: "4.91",
    distance: "43km",
    date: "6월 18일~23일",
    guestReview: "욕실 깔끔하고 온돌 잘 됩니다.",
    price: "260,188",
  },
];

function Cards() {
  const printBox = () => {
    const boxes = cardList.map((cardList) => (
      <div id={cardList.id}>
        {/* top img */}
        <div className="relative">
          <img className="rounded-3xl" src={cardList.thumbnail} />
          {cardList.favorMark && (
            <div className="absolute top-3 left-3 text-xs bg-white px-3 p-1.5 rounded-full">
              {cardList.favorMark}
            </div>
          )}
          <img
            className="absolute top-2 right-2 size-12"
            src={cardList.heart}
          />
          <img
            className="absolute bottom-2 left-1/2 -translate-x-1/2 size-9"
            src={cardList.moreImg}
          />
        </div>
        {/* bottom info */}
        <div className="flex justify-between">
          {/* right */}
          <div>
            <div>{cardList.name}</div>
            <div className="text-gray-400">{cardList.distance} 거리</div>
            <div className="text-gray-400">{cardList.date}</div>
            {cardList.guestReview && (
              <div>
                <span className="text-gray-400">게스트 한마디 </span>
                <span>"{cardList.guestReview}"</span>
              </div>
            )}
            <div>
              <span>{cardList.price}</span>
              <span className="text-gray-400">/박</span>
            </div>
          </div>
          {/* left */}
          <div>
            <div>★{cardList.star}</div>
          </div>
        </div>
      </div>
    ));
    return boxes;
  };

  return (
    // 세션 때 구조 분석한 것처럼 컴포넌트 구조 분석하여(이름도 지어주세요) pr에 사진 첨부 꼭 해주세요.
    <div className="mx-12">
      {/* grid 클래스 활용해서 컴포넌트 만들기 */}
      {/* 아래는 예시 코드입니다 */}
      <div class="grid grid-cols-4 gap-4 my-2">{printBox()}</div>
    </div>
  );
}

export default Cards;
