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

function Category() {
  return (
    // 아이콘은 신경쓰지 않고 카테고리명만 사용해서 구현해주세요.
    // 아이콘도 사용하고 싶으시면 모든 코드 완성 후 마지막에 시간 남을 때 추가하시는 걸 추천드립니다.
    <div className="flex h-20 justify-center gap-4 px-4 py-6 border-b border-gray-300 mb-4">
      <div className="flex items-center space-x-8 text-gray-500">
        {categoryList.map((category) => (
          <div key={category.id}>{category.category}</div>
        ))}
        <div className="flex space-x-2">
          <button className="w-8 h-8 m-2 flex items-center justify-center border border-gray-300 rounded-full text-gray-600">
            &gt;
          </button>
          <button className="h-8 flex items-center border border-gray-300 rounded-xl px-6 py-6 text-gray-600">
            필터
          </button>
        </div>
      </div>
    </div>
  );
}

export default Category;
