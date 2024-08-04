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
  const [isAddBtnDisable, setIsAddBtnDisable] = useState(true);
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [todoData, setTodoData] = useState([
    {
      id: 1,
      title: "title 01",
      description: "discription 01",
      isComplete: false,
    },
    {
      id: 2,
      title: "title 02",
      description: "discription 02",
      isComplete: false,
    },
  ]);
  const [todoId, setTodoId] = useState(3);
  const [completedTodoData, setCompletedTodoData] = useState([
    {
      id: 20,
      title: " comp title 05",
      description: " com discription 01",
      isComplete: false,
    },
    {
      id: 21,
      title: " com title 02",
      description: "com discription 02",
      isComplete: false,
    },
  ]);

  const handleTitleOnchange = (event) => {
    const value = event.target.value;
    setTitleInputValue(value);
    setIsAddBtnDisable(!value.length);
    setIsErrorVisible(false);
  };

  const handleDescriptionOnchange = (event) => {
    setDescriptionInputValue(event.target.value);
  };

  const handleAddBtn = () => {
    if (titleInputValue.trim().length) {
      setTodoData([
        ...todoData,
        {
          id: todoId,
          title: titleInputValue,
          description: descriptionInputValue,
          isComplete: false,
        },
      ]);
      setTodoId(todoId + 1);
    } else {
      setIsErrorVisible(true);
    }

    setTitleInputValue("");
    setDescriptionInputValue("");
    setIsAddBtnDisable(true);
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
          isAddBtnDisable={isAddBtnDisable}
          isErrorVisible={isErrorVisible}
          handleAddBtn={handleAddBtn}
        />
        <ShowTodoSection
          todoData={todoData}
          completedTodoData={completedTodoData}
        />
      </div>
    </div>
  );
}
