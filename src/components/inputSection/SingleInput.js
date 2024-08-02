// Input Title
// input field

import React from "react";

export default function SingleInput({ inputData }) {

  const { title, placeholder } = inputData;

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
      />
    </div>
  );
}
