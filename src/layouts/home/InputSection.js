// singleInput
//addbtn

import React from "react";
import SingleInput from "../../components/inputSection/SingleInput";
import AddBtn from "../../components/inputSection/AddBtn";

export default function InputSection() {
  return (
    <div style={{ borderBottom: "1px solid gray", paddingBottom: "8px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
          paddingBottom: "5px",
          gap: "25px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "25px",
          }}
        >
          <SingleInput />
          <SingleInput />
        </div>
        <AddBtn />
      </div>
    </div>
  );
}
