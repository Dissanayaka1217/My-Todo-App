// singleInput
//addbtn

import React from "react";
import SingleInput from "../../components/inputSection/SingleInput";
import AddBtn from "../../components/inputSection/AddBtn";

export default function InputSection() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <SingleInput />
      <SingleInput />
      <AddBtn />
    </div>
  );
}
