import React from "react";

export default function TodoTitle( {title}) {
  return (
    <div>
      {" "}
      <h3
        style={{
          fontSize: "25px",
          color: "rgb(0, 230, 122)",
          fontWeight: "bold",
        }}
      >
        {title}
      </h3>
    </div>
  );
}
