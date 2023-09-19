import { Component } from "react";
// import "./Test.css";
import cat from "./cat.JPG";

class Test2 extends Component {
  render() {
    const name = "홍길동";
    const style = {
      color: "orange",
      fontSize: "40px",
      marginTop: "20px",
    };
    return (
      <>
        <div style={style}>
          <h2>안녕하세요</h2>
          <img src={cat} alt="로고" width={200}></img>
        </div>
      </>
    );
  }
}

export default Test2;
