import photo from "../assets/photo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const cardList = [
  {
    id: 1,
    photo: photo,
    title: "한국 Ongryong-Gwangyan...",
    distance: "134km 거리",
    date: "6월 6일~11일",
    comment: '게스트 한마디 "따뜻하게 맞아주셔서 감사합니다"',
    money: "₩136,941/박",
    point: "4.97",
  },
  {
    id: 2,
    photo: photo,
    title: "한국 Bonghwa-eup, Bonghwa-gun",
    distance: "120km 거리",
    date: "5월 6일~11일",
    money: "₩218,000/박",
    point: "4.92",
  },
  {
    id: 3,
    photo: photo,
    title: "한국 Pungcheon-myeon, Andong",
    distance: "82km 거리",
    date: "5월 24일~29일",
    money: "₩176,882/박",
    point: "4.87",
  },
  {
    id: 4,
    photo: photo,
    title: "한국 Gyo-dong, Gyeongju",
    distance: "43km 거리",
    date: "6월 18일~23일",
    comment: '게스트 한마디 "욕실 깔끔하고 온돌 잘 됩니다다"',
    money: "₩260,188/박",
    point: "4.91",
  },
  {
    id: 5,
    photo: photo,
    title: "한국 Gyo-dong, Daegu",
    distance: "15km 거리",
    date: "5월 8일~11일",
    money: "₩102,355/박",
    point: "4.98",
  },
  {
    id: 6,
    photo: photo,
    title: "한국 Dong-sungro, Daegu",
    distance: "13km 거리",
    date: "5월 10일~13일",
    money: "₩100,758/박",
    point: "4.97",
  },
  {
    id: 7,
    photo: photo,
    title: "한국 Gyo-dong, Seoul",
    distance: "155km 거리",
    date: "5월 18일~21일",
    money: "₩172,355/박",
    point: "4.95",
  },
  {
    id: 8,
    photo: photo,
    title: "한국 Gyo-dong, Daegu",
    distance: "15km 거리",
    date: "5월 15일~21일",
    money: "₩102,755/박",
    point: "4.95",
  },
];

function Cards() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {cardList.map((form) => (
          <div id={form.id}>
            {/* main */}
            <div className="relative">
              <img className="rounded-xl m-2" src={form.photo} />
              <div className="absolute top-2 right-5 z-20">
                <FontAwesomeIcon icon={faHeart} className="text-white" />
              </div>
            </div>
            <div className="flex justify-between m-3">
              {/*중간*/}
              <div className="flex flex-col space-y-1">
                <div>{form.title}</div>
                <div>{form.distance}</div>
                <div>{form.date}</div>
                <div>{form.comment}</div>
                <div>{form.money}</div>
              </div>
              {/*오른쪽*/}
              <div className="font-semibold">{form.point}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cards;
