const imgLink1 =
  "https://a0.muscache.com/pictures/51f5cf64-5821-400c-8033-8a10c7787d69.jpg";

const imgLink2 =
  "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg";

const categoryList = [
  { id: 1, category: "한옥", imgLink: imgLink1 },
  { id: 2, category: "컬처", imgLink: imgLink2 },
  { id: 3, category: "해변 바로 앞", imgLink: imgLink1 },
  { id: 4, category: "멋진 수영장", imgLink: imgLink2 },
  { id: 5, category: "유서 깊은 주택", imgLink: imgLink1 },
  { id: 6, category: "Luxe", imgLink: imgLink2 },
  { id: 7, category: "한적한 시골", imgLink: imgLink1 },
  { id: 8, category: "최고의 전망", imgLink: imgLink2 },
  { id: 9, category: "기상천외한 숙소", imgLink: imgLink1 },
  { id: 10, category: "방", imgLink: imgLink2 },
  { id: 11, category: "초소형 주택", imgLink: imgLink1 },
  { id: 12, category: "호수 근처", imgLink: imgLink2 },
];

function Category() {
  return (
    // 아이콘은 신경쓰지 않고 카테고리명만 사용해서 구현해주세요.
    // 아이콘도 사용하고 싶으시면 모든 코드 완성 후 마지막에 시간 남을 때 추가하시는 걸 추천드립니다.
    <div className="flex px-6 justify-between gap-6">
      <div className="grid grid-cols-12 flex-1">
        {categoryList.map((category) => (
          <div
            id={category.id}
            className="flex flex-col items-center justify-center gap-2 py-1 my-3 text-xs"
          >
            <img src={category.imgLink} className="w-6 h-6" />
            <span>{category.category}</span>
          </div>
        ))}
      </div>

      {/* 화살표 버튼이랑 필터 버튼을 묶어줍시다 */}
      <span className="flex items-center justify-center gap-4">
        {/* 화살표 버튼 */}
        <button className="flex items-center justify-center w-8 h-8 border rounded-full">
          <img
            className="w-4 h-4"
            src="https://img.icons8.com/ios/50/forward--v1.png"
          />
        </button>

        {/* 필터 버튼 */}
        <button className="flex items-center px-4 py-3 border rounded-xl">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              className="block w-4 h-4 fill-none stroke-current overflow-visible"
              strokeWidth="3"
            >
              <path
                fill="none"
                d="M7 16H3m26 0H15M29 6h-4m-8 0H3m26 20h-4M7 16a4 4 0 1 0 8 0 4 4 0 0 0-8 0zM17 6a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 20a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 0H3"
              />
            </svg>
          </span>
          필터
        </button>
      </span>
    </div>
  );
}

export default Category;
