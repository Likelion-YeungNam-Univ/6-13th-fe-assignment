import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

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
    <div className="flex justify-center border-b border-gray-200 pb-2">
      {categoryList.map((category) => (
        <div id={category.id} className="bg-white px-4 py-2 text-sm rounded-lg">
          {category.category}
        </div>
      ))}
      <div className="flex items-center space-x-5 ml-4">
        <button
          onClick={() => {}}
          className="bg-white border border-gray-300 px-3 py-1 rounded-full"
        >
          &gt;
        </button>
        <button
          onClick={() => {}}
          className="bg-white border border-gray-300 px-4 py-2 rounded-xl text-sm"
        >
          <FontAwesomeIcon icon={faList} className="mr-2" />
          필터
        </button>
      </div>
    </div>
  );
}

export default Category;
