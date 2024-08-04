// TodoBtn
// CompletBtn
// TodoList
// CompletedTodoList

import React, { useState } from "react";
import TodoBtn from "../../components/showTodoSection/TodoBtn";
import CompleteBtn from "../../components/showTodoSection/CompleteBtn";
import TodoList from "./showTodoSection/TodoList";
import CompletedTodoList from "./showTodoSection/CompletedTodoList";

export default function ShowTodoSection({ todoData, completedTodoData }) {
  const [todoButtonClick, setTodoButtonClick] = useState(true);
  const [completedButtonClick, setCompletedButtonClick] = useState(false);
  const [showTodoList, setShowTodoList] = useState("block");
  const [showCompletedTodoList, setShowCompletedTodoList] = useState("none");

  const handleTodoButtonClick = () => {
    setTodoButtonClick(true);
    setCompletedButtonClick(false);
    setShowTodoList("block");
    setShowCompletedTodoList("none");
  };

  const handleCompletedButtonClick = () => {
    setCompletedButtonClick(true);
    setTodoButtonClick(false);
    setShowTodoList("none");
    setShowCompletedTodoList("block");
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "15px", margin: "20px 0px" }}>
        <TodoBtn
          todoButtonClick={todoButtonClick}
          handleTodoButtonClick={handleTodoButtonClick}
        />
        <CompleteBtn
          completedButtonClick={completedButtonClick}
          handleCompletedButtonClick={handleCompletedButtonClick}
        />
      </div>
      <div style={{ display: showTodoList }}>
        <TodoList todoData={todoData} />
      </div>
      <div style={{ display: showCompletedTodoList }}>
        <CompletedTodoList completedTodoData={completedTodoData} />
      </div>
    </div>
  );
}
