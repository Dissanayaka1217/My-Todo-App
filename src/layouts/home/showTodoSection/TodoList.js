// single todo

import React from "react";
import SingleTodo from "./todoList/SingleTodo";

export default function TodoList() {
  const todoData = [
    { title: "title 01", description: "discription 01" },
    { title: "title 02", description: "discription 02" },
  ];

  return (
    <div>
      {todoData.map((val, key) => {
        return <SingleTodo key={key} todoData={val} />;
      })}
    </div>
  );
}
