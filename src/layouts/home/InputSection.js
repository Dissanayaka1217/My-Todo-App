// singleInput
//addbtn

import React from "react";
import SingleInput from "../../components/inputSection/SingleInput";
import AddBtn from "../../components/inputSection/AddBtn";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function InputSection({
  handleTitleOnchange,
  titleInputValue,
  handleDescriptionOnchange,
  descriptionInputValue,
  isAddBtnDisable,
  isErrorVisible,
  handleAddBtn
}) {
  const inputdata = [
    {
      title: "Title",
      placeholder: "Enter Todo Title",
      handleOnchange: handleTitleOnchange,
      inputValue: titleInputValue,
    },
    {
      title: "Desription",
      placeholder: "Enter Todo Description (Optional)",
      handleOnchange: handleDescriptionOnchange,
      inputValue: descriptionInputValue,
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
          {inputdata.map((val, key) => {
            return <SingleInput key={key} inputData={val} />;
          })}
        </div>
        <AddBtn isAddBtnDisable={isAddBtnDisable}  handleAddBtn={handleAddBtn} />
      </div>
      <Stack
        sx={{
          width: "100%",
          visibility: isErrorVisible ? "visible" : "hidden",
        }}
      >
        <Alert
          icon={false}
          sx={{ mb: 2, background: "#FF0000", color: "white" }}
        >
          Oops! You missed "Title". Please fill it out before continuing!
        </Alert>
      </Stack>
    </div>
  );
}
