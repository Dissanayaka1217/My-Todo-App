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
      <InputSection />
      <ShowTodoSection />
    </div>
  );
}
