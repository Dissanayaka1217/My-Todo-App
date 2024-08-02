import React from "react";

export default function TodoDescription({description}) {
  return (
    <div>
      <p
        style={{
          fontSize: "14px",
          color: "rgb(161, 161, 161)",
        }}
      >
        {description}
      </p>
    </div>
  );
}
