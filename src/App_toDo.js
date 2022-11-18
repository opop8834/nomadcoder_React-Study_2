import styles from "./App.module.css";
import Button from "./Button";
import { useState, useEffect } from "react";
function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const deleteBtn = (index) => {
    // 원하는 index에 있는 배열 값 삭제
    setToDos((curtoDos) =>
      curtoDos.filter((item, todoIndex) => index !== todoIndex)
    );
  };
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => {
      const newArray = [...currentArray, toDo];
      console.log(newArray);
      return newArray;
    }); //  ...을 써서 todo를 currnt배열에 추가하는 함수를 만든다
    setToDo("");
  };
  return (
    <div>
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="Write your to do..."
        />
        <Button text="add to button"></Button>
      </form>
      <hr />
      {toDos.map((item, index) => (
        <li key={index}>
          {index + 1}번 {item}
          <Button text="❌" onClick={() => deleteBtn(index)}></Button>
        </li>
      ))}
    </div>
  );
}

export default App;
