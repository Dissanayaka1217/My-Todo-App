import React from "react";
import SingleTodo from "../../common/SingleTodo";

export default function CompletedTodoList({
  completedTodoData,
  handleDeleteBtn,
}) {
  return (
    <div>
      {completedTodoData.map((val, key) => {
        return (
          <SingleTodo key={key} data={val} handleDeleteBtn={handleDeleteBtn} />
        );
      })}
    </div>
  );
}
