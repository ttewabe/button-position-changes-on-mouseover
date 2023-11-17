import React, { useState } from "react";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [isMoved, setIsMoved] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleMouseOver = () => {
    if (!isValidEmail(email) || !isValidPhoneNumber(number)) {
      if (!isMoved) {
        setIsMoved(true);
      } else {
        setIsMoved(false);
      }
    }
  };

  // Check validation on form submit
  const isValidEmail = (email) => {
    return email.includes("@");
  };

  const isValidPhoneNumber = (number) => {
    return /^\d+$/.test(number);
  };

  return (
    <div className="App">
      <form>
        <ul>
        <input type="text" placeholder="first name" />
        <br />

        <input type="text" placeholder="last name" />
        <br />

        <input
          type="text"
          placeholder="email"
          id="emailInput"
          value={email}
          onChange={handleEmailChange}
          style={{
            border: `2px solid
          ${isValidEmail(email) || email === "" ? "green" : "red"}`,
          }}
        />
        <br />
        {/* <label htmlFor="password">pass</label> */}
        <div className="password-container">
          <input
            placeholder="password"
            type={visible ? "text" : "password"}
            id="password"
            value={number}
            onChange={handleNumberChange}
            style={{
              border: `2px solid ${
                isValidPhoneNumber(number) || number === "" ? "green" : "red"
              }`,
            }}
          />
          <span
            className="visibleIcon"
            onClick={() => setVisible(!visible)}
            style={{
              position: "absolute",
              top: "60%",
              right: "5px", // Adjust as needed
              transform: "translateY(-50%)",
              cursor: "pointer",
            }}
          >
            {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
          </span>
        </div>
        <br />

        <button
          type="submit"
          id="submitButton"
          onMouseOver={handleMouseOver}
          style={{
            transform: isMoved ? `translateX(${100}px)` : "translateX(0)",
          }}
        >
          Submit
        </button>
        </ul>
      </form>
    </div>
  );
}

export default App;
