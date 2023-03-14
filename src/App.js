import "./App.css";
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function onChangeFirst(e) {
    console.log(e.target.value);
    setFirstName(e.target.value);
  }

  function onChangeLast(e) {
    setLastName(e.target.value);
  }

  function onClickSubmit() {
    const obj = {
      FirstName: firstName,
      LastName: lastName,
    };
    console.log(obj);
  }

  function DynamicForm() {
    return (
      <>
        <input
          placeholder="FirstName"
          // value={firstName}
          onChange={onChangeFirst}
        />
        <input
          placeholder="LastName"
          // value={lastName}
          onChange={onChangeLast}
        />
        <button onClick={onClickSubmit}>Sumbit</button>
      </>
    );
  }

  return (
    <div className="App">
      <DynamicForm />
    </div>
  );
}

export default App;
