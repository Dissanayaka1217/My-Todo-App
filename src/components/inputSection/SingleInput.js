// Input Title
// input field

import React from "react";

export default function SingleInput() {
  return (
    <div>
      <p
        style={{
          fontWeight: "bold",
          color: "white",
        }}
      >
        {" "}
        Title
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
      />
    </div>
  );
}
