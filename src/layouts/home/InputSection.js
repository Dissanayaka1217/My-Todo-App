// singleInput
//addbtn

import React from "react";
import SingleInput from "../../components/inputSection/SingleInput";
import AddBtn from "../../components/inputSection/AddBtn";

export default function InputSection() {
  const inputdata = [
    {
      title: "Title",
      placeholder: "Enter Todo Title",
    },
    {
      title: "Desription",
      placeholder: "Enter Todo Description (Optional)",
    },
  ];

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
          {inputdata.map((val,key) => {
            return <SingleInput key={key} inputData = {val} />;
          })}
        </div>
        <AddBtn />
      </div>
    </div>
  );
}
