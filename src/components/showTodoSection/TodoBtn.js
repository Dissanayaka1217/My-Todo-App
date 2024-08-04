import React from "react";

export default function TodoBtn({ todoButtonClick , handleTodoButtonClick }) {
  return (
    <div>
      <button
        onClick={handleTodoButtonClick}
        style={{
          background: todoButtonClick ? "rgb(5,197,108)" : "rgb(82, 87, 85)",
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
