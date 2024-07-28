// HeadTitle
// InputSection
// ShowTodoSection

import React from "react";
import HeadingTitle from "../components/home/HeadingTitle";
import InputSection from "./home/InputSection";
import ShowTodoSection from "./home/ShowTodoSection";

export default function Home() {
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
        <InputSection />
        <ShowTodoSection />
      </div>
    </div>
  );
}
