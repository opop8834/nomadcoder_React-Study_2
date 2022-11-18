import styles from "./App.module.css";
import Button from "./Button";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  console.log("test");
  useEffect(() => {
    console.log("API");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5)
      // value입력 받는데 5의 길이를 넘어가면 이제 랜더링을 한다
      console.log("Search For", keyword, " ", counter);
  }, [keyword, counter]);
  const onClick = () => {
    setCounter((current) => current + 1);
  };
  const onClick_m = () => {
    setCounter((current) => current - 1);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search here..."
        onChange={onChange}
        value={keyword}
      />
      <h1 className={styles.title}>{counter}</h1>
      <Button text="+" onClick={onClick} />
      <Button text="-" onClick={onClick_m} />
    </div>
  );
}

export default App;
