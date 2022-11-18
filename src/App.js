import styles from "./App.module.css";
import Button from "./Button";
import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("created");
    return () => console.log("destroyed!"); // component가 destroy될때 실행될 함수를 구현 : clean up function 이라고도 함
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((current) => !current);
  };
  return (
    <div>
      {showing ? <Hello /> : null}
      <Button text={showing ? "Hide" : "Show"} onClick={onClick}></Button>
    </div>
  );
}

export default App;
