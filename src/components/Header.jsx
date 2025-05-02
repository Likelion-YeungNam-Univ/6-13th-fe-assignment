import Logo from "../assets/airbnbLogo.png";
const searchIcon ="https://img.icons8.com/?size=100&id=2sWrwEXiaegS&format=png&color=FFFFFF";
const world = "https://img.icons8.com/?size=100&id=BWuc2Bh5ht4f&format=png&color=000000";

function Header() {
  return (
    <div className="flex justify-between m-2 p-2 border-b border-gray-200 max-h-24">
      {/* Logo */}
      <img src={Logo} className="h-16 mx-14" />
      {/* Select & Search */}
      <div className="flex items-center shadow-md overflow-hidden w-max h-14 rounded-full border-[1.5px] border-gray-300 px-4">
        <div className="px-2 text-sm">어디든지</div>
        <div className="border-l-2 h-5 mx-2"></div>
        <div className="px-2 text-sm">언제든 일주일</div>
        <div className="border-l-2 h-5 mx-2"></div>
        <div className="px-2 text-sm text-gray-400">게스트 추가</div>
        <img
          src={searchIcon}
          className="bg-rose-500 w-10 h-10 rounded-full p-2 ml-2"
        />
      </div>
      {/* Right */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center hover:bg-gray-100 w-max h-14 px-4 rounded-full">당신의 공간을 에어비앤비하세요</div>
        <img src={world} className="hover:bg-gray-100 rounded-full w-12 h-12 p-3"/>
        <div className="flex items-center overflow-hidden w-max h-14 rounded-full border-[1.5px] border-gray-300 px-4 space-x-2">
            <img src="https://img.icons8.com/?size=100&id=8113&format=png&color=000000" className="h-5"/>
            <img src="https://img.icons8.com/?size=100&id=85147&format=png&color=000000" className="h-10"/>
        </div>
      </div>
    </div>
  );
}

export default Header;
