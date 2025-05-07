// Category.jsx

function Category() {
  const categories = [
    "한옥", "컬처", "해변", "캠핑", "디자인", "럭셔리", "숲속", "도심", "전망 좋은"
  ];

  return (
    // 아이콘은 신경쓰지 않고 카테고리명만 사용해서 구현해주세요.
    // 아이콘도 사용하고 싶으시면 모든 코드 완성 후 마지막에 시간 남을 때 추가하시는 걸 추천드립니다.
    <div className="py-4 border-b">
      <div className="text-xl font-bold mb-2">Category</div>
      <div className="flex gap-4 overflow-x-auto">
        {categories.map((name, idx) => (
          <div
            key={idx}
            className="min-w-max px-3 py-1 border-b-2 border-transparent hover:border-black cursor-pointer"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
