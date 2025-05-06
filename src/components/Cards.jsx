import sea from "../assets/sea.png";

function Cards() {
	const printBox = () => {
		const boxes = Array.from({ length: 8 }, (_, i) => (
			<div key={i}>
				{/* 카드 이미지 */}
				<img src={sea} className="w-full h-[400px] object-cover rounded-xl" />

				{/* 카드 설명 */}
				<div className="mt-3">
					<div className="flex justify-between">
						<h3>영남대학교</h3>
						<span>⭐ 4.99</span>
					</div>
					<p>1,000km 거리</p>
					<p className="text-gray-500">6월 1일 ~ 30일</p>
					<p className="text-gray-500">게스트 한마디 "멋사화이팅”</p>
					<p>₩999,999,999/박</p>
				</div>
			</div>
		));
		return boxes;
	};

	return (
		// box 컴포넌트들 추가
		<div className="grid grid-cols-4 gap-4 ml-20 mr-20">{printBox()}</div>
	);
}

export default Cards;
