import React, { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [isMoved, setIsMoved] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNumber(e.target.value)
  }
  const handleMouseOver = () => {
    if (!isValidEmail(email) || !isValidPhoneNumber(number)) {
      if (!isMoved) {
        setIsMoved(true);
      } else {
        setIsMoved(false);
      }
    }
  }

  //color change 
  const handleColorChange = () => {
    if (isValidEmail(email) && isValidPhoneNumber(number)) {
      return 'green'
    }else{
      return 'red';
    }
  }

// Check validation on form submit
  const isValidEmail = (email) => {
    return email.includes("@");
  }

  const isValidPhoneNumber = (email) => {
    return /^\d+$/.test(number);
  };

  return (
    <div className="App">
      <form>
        <input
          type="text"
          placeholder="first name"
        />
        <br />

        <input
          type="text"
          placeholder="last name"
        />
        <br /> 

        <input
          type="text"
          placeholder="email"
          id="emailInput"
          value={email}
          onChange={handleEmailChange}
        />
        <br />

        <input
          type="text"
          placeholder="number"
          id="numberInput"
          value={number}
          onChange={handleNumberChange}
        />
        <br />

        <button
          type="submit"
          id="submitButton"
          onMouseOver={handleMouseOver}
          style={{
            transform: isMoved ? `translateX(${100}px)` : 'translateX(0)',
            backgroundColor: handleColorChange(),
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
