import image from "../assets/image.png";
import { FaStar } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
function Cards() {
  const cardList = [
    {
      id: 1,
      image: image,
      guest: "게스트 선호",
      region: "한국",
      title: "Gyo-dong, Gyeongju",
      star: "4.91",
      distance: "41km 거리",
      date: "5월 24일~29일",
      guestSay: "따뜻하게 맞아주셔서 감사합니다.",
      price: "218,000",
    },
    {
      id: 2,
      image: image,
      guest: "",
      region: "일본",
      title: "Shibuya, Tokyo",
      star: "4.78",
      distance: "500km 거리",
      date: "6월 1일~6일",
      guestSay: "도쿄의 중심에서 최고의 위치였어요!",
      price: "350,000",
    },
    {
      id: 3,
      image: image,
      guest: "게스트 선호",
      region: "한국",
      title: "Seogwipo, Jeju",
      star: "4.96",
      distance: "300km 거리",
      date: "6월 10일~15일",
      guestSay: "조용하고 편안했어요.",
      price: "180,000",
    },
    {
      id: 4,
      image: image,
      guest: "",
      region: "베트남",
      title: "Da Nang",
      star: "4.80",
      distance: "2200km 거리",
      date: "7월 3일~8일",
      guestSay: "해변이 정말 아름다웠어요.",
      price: "160,000",
    },
    {
      id: 5,
      image: image,
      guest: "게스트 선호",
      region: "한국",
      title: "Mapo-gu, Seoul",
      star: "4.93",
      distance: "5km 거리",
      date: "5월 20일~22일",
      guestSay: "홍대랑 가까워서 너무 좋았어요!",
      price: "210,000",
    },
    {
      id: 6,
      image: image,
      guest: "",
      region: "태국",
      title: "Chiang Mai",
      star: "4.70",
      distance: "2700km 거리",
      date: "7월 15일~20일",
      guestSay: "현지 분위기를 제대로 느꼈어요.",
      price: "120,000",
    },
    {
      id: 7,
      image: image,
      guest: "게스트 선호",
      region: "한국",
      title: "Gangneung, Gangwon",
      star: "4.88",
      distance: "180km 거리",
      date: "6월 3일~6일",
      guestSay: "바다 뷰가 예술이었어요!",
      price: "190,000",
    },
    {
      id: 8,
      image: image,
      guest: "",
      region: "중국",
      title: "Shanghai",
      star: "4.75",
      distance: "1300km 거리",
      date: "8월 10일~15일",
      guestSay: "도시 전망이 끝내줬어요.",
      price: "240,000",
    },
  ];

  return (
    // 세션 때 구조 분석한 것처럼 컴포넌트 구조 분석하여(이름도 지어주세요) pr에 사진 첨부 꼭 해주세요.
    <div className="px-24 py-5">
      {/* grid 클래스 활용해서 컴포넌트 만들기 */}
      {/* 아래는 예시 코드입니다 */}
      <div class="grid grid-cols-4 gap-x-7 gap-y-11">
        {cardList.map((cd) => (
          <div id={cd.id} className="cursor-pointer">
            <div
              className="flex flex-col justify-between bg-cover bg-center w-full aspect-[1/1] rounded-3xl p-4"
              style={{ backgroundImage: `url(${cd.image})` }}
            >
              <div className="flex justify-between w-full items-center">
                {cd.guest != "" ? (
                  <div className="bg-white py-1.5 px-3 rounded-full font-medium h-10 flex items-center justify-center shadow-lg">
                    {cd.guest}
                  </div>
                ) : (
                  <div className="h-10"></div>
                )}
                <div>
                  <IoIosHeartEmpty className="h-7 w-7 text-white  transition-all duration-200 hover:scale-110 " />
                </div>
              </div>
              <div className="flex space-x-2 justify-center items-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                {[...Array(3)].map((_, index) => (
                  <div
                    key={index}
                    className="w-2 h-2 bg-gray-500 rounded-full"
                  ></div>
                ))}
                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
              </div>
            </div>

            <div className="flex justify-between mt-3">
              <div className="flex space-x-2 items-center">
                <div className="font-medium">{cd.region}</div>
                <div className="font-semibold">{cd.title}</div>
              </div>
              <div className="flex items-center">
                <FaStar className="mx-1" />
                {cd.star}
              </div>
            </div>
            <div className="text-[#6b6b6b] text-base">{cd.distance}</div>
            <div className="text-[#6b6b6b] text-base">{cd.date}</div>
            {cd.guest != "" ? (
              <div>
                <span className="text-[#6b6b6b]">게스트 한마디</span> "
                {cd.guestSay}"
              </div>
            ) : null}
            <div className="flex mt-2">
              <span className="font-extrabold">₩{cd.price}</span>
              <span className="text-[#6b6b6b] ml-2">/박</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
