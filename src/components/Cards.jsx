import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"
import img5 from "../assets/img5.png"
import img6 from "../assets/img6.png"
import img7 from "../assets/img7.png"
import img8 from "../assets/img8.png"

const airList = [
  {id: 1, img: img1, view: "게스트 선호", place: "한국 Ongryong-myeon, Gwangyang", score: "4.97", distance: "134km 거리", date: "6월 6일~11일", talk: "따듯하게 맞아주셔서 감사합니다", cost: "136,941"},
  {id: 2, img: img2, view: "", place: "한국 Bonghwa-eup, Bongwa-gun", score: "4.92", distance: "120km 거리", date: "5월 6일~11일",  talk: "",  cost: "218,000"},
  {id: 3, img: img3, view: "", place: "한국 Pungcheon0myeon, Andong", score: "4.87", distance: "82km 거리",  date: "5월 24일~29일", talk: "", cost: "176,882"},
  {id: 4, img: img4, view: "게스트 선호", place: "한국 Gyo-dong, Gyeongju", score: "4.91", distance: "43km 거리",  date: "6월 18일~23일", talk: "욕실 깔끔하고 온돌 잘 됩니다", cost: "260,188"},
  {id: 5, img: img5, view: "게스트 선호", place: "한국 Hanok stay, Gyeongju", score: "4.95", distance: "129km 거리", date: "6월 3일~11일",  talk: "따듯하게 맞아주셔서 감사합니다", cost: "116,941"},
  {id: 6, img: img6, view: "게스트 선호", place: "한국 Bonghwa-eup, Bongwa-gun", score: "4.92", distance: "120km 거리", date: "5월 6일~11일",  talk: "", cost: "218,000"},
  {id: 7, img: img7, view: "게스트 선호", place: "한국 Pungcheon0myeon, Andong", score: "4.87", distance: "85km 거리",  date: "5월 24일~29일", talk: "", cost: "176,882"},
  {id: 8, img: img8, view: "", place: "한국 Gyo-dong, Gyeongju", score: "4.91", distance: "43km 거리",  date: "7월 18일~23일", talk: "거실 깔끔하고 온돌 잘 됩니다", cost: "290,188"},
];

function Cards() {
  const printBox = () => {
    return airList.map(item => (
      <div key={item.id} className="group cursor-pointer mx-10 my-6">
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={item.img}
            alt={item.place}
            className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"  
          />
          <AiOutlineHeart className="absolute top-3 right-3 text-white text-xl opacity-0 group-hover:opacity-100 transition-opacity" /> 
          {item.view && (
            <span className="absolute top-3 left-3 bg-white text-xs font-semibold px-3 py-2 rounded-full"> 
              {item.view}
            </span>
          )}
        </div>

        <div className="mt-2 text-gray-800 text-sm">
          <div className="flex justify-between items-center">
            <p className="font-bold">{item.place}</p>
            {item.score && (
              <p className="flex items-center text-gray-900">
                ★<span className="ml-1 text-gray-900">{item.score}</span>
              </p>
            )}
          </div>
          <p className="text-gray-500">{item.distance}</p>
          <p className="text-gray-500">{item.date}</p>
          {item.talk && (
            <p className="mt-1 text-gray-900">
               <span className="font-bold">게스트 한마디 </span>
              “{item.talk}”
            </p>
          )}
        </div>

        <div className="mt-2 text-gray-900 font-semibold">
          ₩{item.cost} <span className="font-normal text-gray-500">/박</span>
        </div>
      </div>

    ))
  }

  return (
    <div className="flex space-x-2">
      <div className="grid grid-cols-4 gap-4">
        {printBox()}
      </div>
    </div>
  )
}

export default Cards
