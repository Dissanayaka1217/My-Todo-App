// single todo

import React from "react";
import SingleTodo from "./todoList/SingleTodo";

export default function TodoList({ todoData }) {
  return (
    <div>
      {todoData.map((val, key) => {
        return <SingleTodo key={key} todoData={val} />;
      })}
    </div>
  );
}
