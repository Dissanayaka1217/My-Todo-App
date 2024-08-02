// HeadTitle
// InputSection
// ShowTodoSection

import React, { useState } from "react";
import HeadingTitle from "../components/home/HeadingTitle";
import InputSection from "./home/InputSection";
import ShowTodoSection from "./home/ShowTodoSection";

export default function Home() {
  const [titleInputValue, setTitleInputValue] = useState("");
  const [descriptionInputValue, setDescriptionInputValue] = useState("");

  const handleTitleOnchange = (event) => {
    const value = event.target.value;
    setTitleInputValue(value);
  };
  const handleDescriptionOnchange = (event) => {
    setDescriptionInputValue(event.target.value);
  };

  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: "fit-content",
        margin: "auto",
      }}
    >
      <HeadingTitle />
      <div
        style={{
          backgroundColor: "#353434",
          padding: "5%",
          width: "fit-content",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "3%",
          maxHeight: "80vh",
          overflowY: "auto",
          boxShadow: "0px 5px 7px rgb(27, 27, 27)",
        }}
      >
        <InputSection
          handleTitleOnchange={handleTitleOnchange}
          titleInputValue={titleInputValue}
          handleDescriptionOnchange={handleDescriptionOnchange}
          descriptionInputValue={descriptionInputValue}
        />
        <ShowTodoSection />
      </div>
    </div>
  );
}
