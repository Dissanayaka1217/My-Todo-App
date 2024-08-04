// single todo

import React from "react";
import SingleTodo from "../../common/SingleTodo";

export default function TodoList({ todoData }) {
  return (
    <div>
      {todoData.map((val, key) => {
        return <SingleTodo key={key} data={val} />;
      })}
    </div>
  );
}
