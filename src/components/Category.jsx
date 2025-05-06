import {
	Bed,
	Building2Icon,
	Castle,
	CookingPotIcon,
	Filter,
	Home,
	Tent,
	Ticket,
	ToyBrick,
	TreePalm,
	Trees,
	View,
	WalletCardsIcon,
	Waves,
} from "lucide-react";

function Category() {
	// 카테고리 목록 리스트
	const categories = [
		{ id: "hanok", name: "한옥", icon: Home },
		{ id: "luxury", name: "컬처 아이콘", icon: Ticket },
		{ id: "beach", name: "해변 바로 앞", icon: Waves },
		{ id: "countryside", name: "멋진 수영장", icon: TreePalm },
		{ id: "historical", name: "유서 깊은 주택", icon: Castle },
		{ id: "luxe", name: "Luxe", icon: CookingPotIcon },
		{ id: "traditional", name: "한적한 시골", icon: Trees },
		{ id: "unique", name: "최고의 전망", icon: View },
		{ id: "camping", name: "기상천외한 숙소", icon: Tent },
		{ id: "rooms", name: "방", icon: Bed },
		{ id: "tropical", name: "초소형 주택", icon: Building2Icon },
		{ id: "skiing", name: "호수 근처", icon: WalletCardsIcon },
		{ id: "boats", name: "키즈", icon: ToyBrick },
	];

	return (
		<div className="flex justify-center w-full border-b py-4 gap-6">
			{/* 카테고리 버튼들 추가 */}
			{categories.map(({ id, name, icon: Icon }) => (
				<button
					key={id}
					className="flex flex-col items-center w-[100px] gap-2 text-gray-500 hover:text-black hover:border-b-2 hover:border-black"
				>
					<Icon className="w-6 h-6" />
					<span className="text-xs">{name}</span>
				</button>
			))}

			{/* '>' 버튼 */}
			<button className="flex justify-center border rounded-full w-[50px]">
				<span className="text-3xl">&gt;</span>
			</button>

			{/* 필터링 버튼 */}
			<button className="flex justify-center items-center border rounded-xl w-[100px]">
				<Filter />
				&nbsp;필터
			</button>
		</div>
	);
}

export default Category;
