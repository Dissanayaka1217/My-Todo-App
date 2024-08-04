import React from "react";
import SingleTodo from "../../common/SingleTodo";

export default function CompletedTodoList({ completedTodoData }) {
  console.log(completedTodoData);

  return (
    <div>
      {completedTodoData.map((val, key) => {
        return <SingleTodo key={key} data={val} />;
      })}
    </div>
  );
}
