// TodoBtn
// CompletBtn
// TodoList
// CompletedTodoList

import React from "react";
import TodoBtn from "../../components/showTodoSection/TodoBtn";
import CompleteBtn from "../../components/showTodoSection/CompleteBtn";
import TodoList from "./showTodoSection/TodoList";

export default function ShowTodoSection({todoData}) {
  return (
    <div>
      <div style={{ display: "flex", gap: "15px", margin: "20px 0px" }}>
        <TodoBtn />
        <CompleteBtn />
      </div>
      <TodoList todoData={todoData} />
    </div>
  );
}
