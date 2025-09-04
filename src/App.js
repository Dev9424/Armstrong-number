import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const checkArmstrong = () => {
    const num = parseInt(number);
    if (isNaN(num)) {
      setResult("❌ Please enter a valid number");
      return;
    }

    const digits = num.toString().split("").map(Number);
    const power = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);

    if (sum === num) {
      setResult(`✅ ${num} is an Armstrong Number`);
    } else {
      setResult(`❌ ${num} is NOT an Armstrong Number`);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>🔢 Armstrong Number Checker</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter a number"
        style={{ padding: "10px", fontSize: "16px", marginRight: "10px" }}
      />
      <button
        onClick={checkArmstrong}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          background: "#9370db",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Check
      </button>
      <p style={{ marginTop: "20px", fontSize: "18px", fontWeight: "bold" }}>
        {result}
      </p>
    </div>
  );
}

export default App;
