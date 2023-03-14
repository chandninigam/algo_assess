import "./App.css";
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [field, setField] = useState([
    {
      firstName: "",
      lastName: "",
    },
  ]);

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

  return (
    <div className="App">
      {field.map((each) => {
        return (
          <div>
            <input
              placeholder="FirstName"
              value={firstName}
              onChange={onChangeFirst}
            />
            <input
              placeholder="LastName"
              value={lastName}
              onChange={onChangeLast}
            />
          </div>
        );
      })}
      <button onClick={onClickSubmit}>Sumbit</button>
    </div>
  );
}

export default App;
