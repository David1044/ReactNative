import React, { useState } from "react";
import ReactDOM from "react-dom";

const Input = () => {
  return <input placeholder="New" />;
};

const Form = () => {
  const [inputList, setInputList] = useState([]);

  const onAddBtnClick = event => {
    setInputList(inputList.concat(<Input key={inputList.length} />));
  };

  return (
    <div>
      <button onClick={onAddBtnClick}>Click</button>
      {inputList}
    </div>
  );
};

ReactDOM.render(<Form />, document.getElementById("form"));
