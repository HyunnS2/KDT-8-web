import Book from "./Book";
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";
// import Larva from "./Larva";
import Test from "./Test";
import Test2 from "./Test2";

function App() {
  return (
    <>
      {/* <h1>컴포넌트</h1> */}
      {/* <ClassComponent></ClassComponent> */}
      {/* <FunctionComponent /> */}
      {/* <ClassComponent /> */}
      {/* <Larva /> */}
      {/* <Test />
      <Test2 /> */}
      {/* <ClassComponent name="hyun"></ClassComponent>
      <ClassComponent /> */}
      {/* <FunctionComponent name="kdt8" age={18}>
        안녕
      </FunctionComponent>
      <FunctionComponent /> */}
      {/* <ClassComponent></ClassComponent> */}
      {/* <FunctionComponent
        title="나의 하루는 4시 40분에 시작된다"
        author="김유진"
        price="13,000"
        type="자기계발서"
      /> */}
      <Book
        title={"나의하루는 4시40분에 시작된다"}
        author={"김유진"}
        price={"13,000"}
        type={"자기계발서"}
      />
    </>
  );
}

export default App;
