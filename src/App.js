import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [addValue, setAddValue] = useState("");

  const handleAddition = (a, b) => {
    let additionValue = parseInt(a) + parseInt(b);
    return additionValue;
  };

  const handleClick = () => {
    if (firstValue && secondValue) {
      setAddValue(handleAddition(firstValue, secondValue));
    }
  };

  return (
    <div className="App">
      <div className="App-header">
        <div className="items">
          <label style={{ width: "170px", fontWeight: "600" }}>
            First Number
          </label>
          <input
            type="number"
            value={firstValue}
            onChange={(e) => setFirstValue(e.target.value)}
          />
        </div>
        <div className="items">
          <label style={{ width: "170px", fontWeight: "600" }}>
            Second Number
          </label>
          <input
            type="number"
            value={secondValue}
            onChange={(e) => setSecondValue(e.target.value)}
          />
        </div>
        <div style={{ marginTop: "14px" }}>
          <button
            onClick={handleClick}
            style={{
              width: "70px",
              border: "none",
              fontWeight: "600",
              fontSize: "14px",
              height: "27px",
              borderRadius: "14px",
            }}
          >
            Add
          </button>
        </div>
        <div>
          <input
            type="number"
            value={addValue}
            style={{
              border: "none",
              background: "border-box",
              textAlign: "center",
              fontSize: "53px",
              fontWeight: "600",
              width: "50%",
              marginTop: "24px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
