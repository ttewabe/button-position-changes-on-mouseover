import React, { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === "emailInput") {
      setEmail(value);
    } else if (id === "numberInput") {
      setNumber(value);
    }

    // Check validation on input change
    validateInputs();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check validation on form submit
    validateInputs();
  };

  const validateInputs = () => {
    const isValidEmail = email.includes("@");
    const isValidPhoneNumber = /^\d+$/.test(number);

    setIsInvalid(!isValidEmail || !isValidPhoneNumber);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="first name"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="last name"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="email"
          id="emailInput"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="number"
          id="numberInput"
          value={number}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          id="submitButton"
          className={isInvalid ? "invalid" : ""}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
