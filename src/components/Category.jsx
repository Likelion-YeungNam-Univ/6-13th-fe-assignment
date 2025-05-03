const categoryList = [
  { id: 1, category: "한적한 시골" },
  { id: 2, category: "컬처 아이콘" },
  { id: 3, category: "한옥" },
  { id: 4, category: "해변 바로 앞" },
  { id: 5, category: "호숫가" },
  { id: 6, category: "북극" },
  { id: 7, category: "멋진 수영장" },
  { id: 8, category: "최고의 전망" },
  { id: 9, category: "기상천외한 숙소" },
  { id: 10, category: "방" },
  { id: 11, category: "초소형 주택" },
  { id: 12, category: "호수 근처" },
  { id: 13, category: "키즈" },
  { id: 14, category: "통나무집" },
  { id: 15, category: "캐슬" },
];

function Category() {
  return (
    // 아이콘은 신경쓰지 않고 카테고리명만 사용해서 구현해주세요.
    // 아이콘도 사용하고 싶으시면 모든 코드 완성 후 마지막에 시간 남을 때 추가하시는 걸 추천드립니다.
    <div className="flex flex-row items-center justify-center ">
      {/* 카테고리 바 */}
      <div className="flex flex-row justify-center items-center">
        {categoryList.map((category) => (
          <button id={category.id} className=" text-gray-800 px-4 py-2 text-xs">
            {category.category}
          </button>
        ))}
      </div>
      {/* 더보기 버튼 */}
      <button className="flex justify-center items-center w-8 h-8 mr-4 border border-gray-200 rounded-full text-base hover:bg-gray-300">
        {">"}
      </button>
      {/* 필터 버튼 */}
      <button className="flex justify-center items-center w-20 h-10 bg-white border border-gray-200 rounded-xl text-sm hover:bg-gray-300">
        필터
      </button>
    </div>
  );
}

export default Category;
