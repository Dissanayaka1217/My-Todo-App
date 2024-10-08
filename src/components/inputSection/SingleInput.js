// Input Title
// input field

import React from "react";

export default function SingleInput({ inputData ,handleKeyDown }) {
  const { title, placeholder, handleOnchange, inputValue } = inputData;

  return (
    <div>
      <p
        style={{
          fontWeight: "bold",
          color: "white",
        }}
      >
        {" "}
        {title}
      </p>

      <input
        style={{
          width: "250px",
          padding: "8px",
          border: "none",
          borderRadius: "5px",
          marginTop: "10px",
          outline: "none",
          fontSize: "15px",
        }}
        type="text"
        placeholder={placeholder}
        onChange={handleOnchange}
        value={inputValue}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
