import { IoIosArrowForward } from "react-icons/io";

function Category() {
  const categoryList = [
    { id: 1, category: "한옥" },
    { id: 2, category: "컬처 아이콘" },
    { id: 3, category: "해변 바로 앞" },
    { id: 4, category: "멋진 수영장" },
    { id: 5, category: "유서 깊은 주택" },
    { id: 6, category: "Luxe" },
    { id: 7, category: "한적한 시골" },
    { id: 8, category: "최고의 전망" },
    { id: 9, category: "기상천외한 숙소" },
    { id: 10, category: "방" },
    { id: 11, category: "초소형 주택" },
    { id: 12, category: "호수 근처" },
    { id: 13, category: "키즈" },
  ];
  return (
    // 아이콘은 신경쓰지 않고 카테고리명만 사용해서 구현해주세요.
    // 아이콘도 사용하고 싶으시면 모든 코드 완성 후 마지막에 시간 남을 때 추가하시는 걸 추천드립니다.
    <div className="flex space-x border-b border-gray-200 shadow-md px-24 h-24 justify-between ">
      <div className="flex space-x-10 items-center">
        {categoryList.map((cl) => (
          <div
            className="flex flex-col justify-end w-fit h-full text-sm py-4 
          text-[#6b6b6b] font-semibold border-b-2 border-transparent cursor-pointer transition-all duration-200 
          hover:border-b-black hover:text-black"
          >
            {cl.category}
          </div>
        ))}
      </div>
      <div className="flex items-center space-x-4">
        <div
          className="h-10 w-10 border-[1.5px] rounded-full flex items-center justify-center cursor-pointer 
        transition-all duration-100 hover:scale-110 hover:shadow-lg"
        >
          <IoIosArrowForward className="h-5 w-5" />
        </div>
        <div
          className="flex items-center border-[1.5px] rounded-2xl h-16 w-24 p-3 cursor-pointer
        transition-all duration-100 hover:border-black"
        >
          <div className="text-sm font-semibold">필터</div>
        </div>
      </div>
    </div>
  );
}

export default Category;
