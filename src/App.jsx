import Cards from "./components/Cards";
import Category from "./components/Category";
import Header from "./components/Header";

function App() {
  return (
    // 모두 구현 후 구현 완료한 페이지 캡쳐하여 pr에 완성본 항목에 사진 첨부 부탁드립니다.
    <>
      <Header />
      <div className="mx-24">
        <Category />
        <Cards />
      </div>
    </>
    //branch생성
  );
}

export default App;
