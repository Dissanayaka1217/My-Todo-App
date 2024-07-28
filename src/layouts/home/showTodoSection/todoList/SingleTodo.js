// Todotitle
// todoDescription
// TodoCheckBtn
// TodoDeleteBtn

import React from "react";
import TodoTitle from "../../../../components/singleTodo/TodoTitle";
import TodoDescription from "../../../../components/singleTodo/TodoDescription";
import TodoCheckBtn from "../../../../components/singleTodo/TodoCheckBtn";
import TodoDeleteBtn from "../../../../components/singleTodo/TodoDeleteBtn";

export default function SingleTodo() {
  return (
    <div>
      <TodoTitle />
      <TodoDescription />
      <TodoCheckBtn />
      <TodoDeleteBtn />
    </div>
  );
}
