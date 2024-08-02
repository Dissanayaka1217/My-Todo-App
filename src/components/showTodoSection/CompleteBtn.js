import React from "react";

export default function CompleteBtn() {
  return (
    <div>
      <button
        // onClick={handleCompleteButtonClick}
        style={{
          background: "rgb(82, 87, 85)",
          //  background: isCompleteButtonClicked
          //     ? "rgb(5,197,108)"
          //     : "rgb(82, 87, 85)",
          padding: "10px",
          color: "white",
          border: "none",
          borderRadius: "5px",
          width: "fit-content",
          cursor: "pointer",
        }}
      >
        Completed
      </button>
    </div>
  );
}
