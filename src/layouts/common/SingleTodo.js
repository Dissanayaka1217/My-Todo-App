// Todotitle
// todoDescription
// TodoCheckBtn
// TodoDeleteBtn

import React from "react";
import TodoTitle from "../../components/singleTodo/TodoTitle";
import TodoDescription from "../../components/singleTodo/TodoDescription";
import TodoCheckBtn from "../../components/singleTodo/TodoCheckBtn";
import TodoDeleteBtn from "../../components/singleTodo/TodoDeleteBtn";

export default function SingleTodo({ data }) {
  console.log(data);
  const { title, description } = data;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "rgb(71, 69, 69)",
        padding: "10px",
        paddingLeft: "15px",
        paddingTop: "10px",
        paddingBottom: "10px",
        borderRadius: "8px",
        marginBottom: "12px",
      }}
    >
      <div>
        <TodoTitle title={title} />
        <TodoDescription description={description} />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <TodoCheckBtn />
        <TodoDeleteBtn />
      </div>
    </div>
  );
}
