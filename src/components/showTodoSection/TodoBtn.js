import React from "react";

export default function TodoBtn() {
  return (
    <div>
      <button
        // onClick={handleTodoButtonClick}
        style={{
          background :"rgb(5,197,108)",
          //  background: isTodoButtonClicked ? "rgb(5,197,108)" : "rgb(82, 87, 85)",
          padding: "10px",
          color: "white",
          border: "none",
          borderRadius: "5px",
          width: "fit-content",
          cursor: "pointer",
        }}
      >
        Todo
      </button>
    </div>
  );
}
