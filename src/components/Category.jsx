const categoryList = [
  { id: 1, category: "한옥" },
  { id: 2, category: "컬쳐 아이콘" },
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

function Category() {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
      {/* 카테고리 */}
      <div className="flex items-center space-x-10 text-gray-700">
        {categoryList.map((category) => (
          <div id={category.id} className="text-sm">
            {category.category}
          </div>
        ))}
      </div>
      {/* 더보기, 필터*/}
      <div className="flex items-center space-x-6">
        <div className="px-3 py-2 border border-gray-400 text-md rounded-full">
          {">"}
        </div>
        <div className="px-3 py-1.5 border border-gray-400 text-sm rounded-xl">
          필터
        </div>
      </div>
    </div>
  );
}

export default Category;
