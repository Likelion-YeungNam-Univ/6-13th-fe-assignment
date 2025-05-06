import React from 'react';
import Items from './Items';

function Category({ itemCount = 13 }) {
  const itemsArray = Array.from({ length: itemCount });

  return (
    <div className="grid grid-cols-[1fr_auto] m-2 p-2 border-b border-gray-200">
      {/* 왼쪽: grid-flow-col + 8px gap + 좌우 20px 마진 */}
      <div className="grid grid-flow-col gap-2 mx-5">
        {itemsArray.map((_, idx) => (
          <Items key={idx} />
        ))}
      </div>

      {/* 오른쪽 컨트롤 영역 */}
      <div className="flex justify-end gap-4">
        <div className="flex items-center justify-center hover:bg-gray-100 rounded-full w-14 h-14 p-3 border-gray-300 border-[1.5px]">
          &gt;
        </div>
        <div className="flex items-center justify-center hover:bg-gray-100 w-24 px-2 py-1 h-14 rounded-full text-sm text-center border-gray-300 border-[1.5px]">
          필터
        </div>
      </div>
    </div>
  );
}

export default Category;
