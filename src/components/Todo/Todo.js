import React from "react";

const Todo = ({ todoList, setDelete }) => {
  const handleDelete = e => {
    const index = Number(e.target.id);
    setDelete(index);
  };

  const lists = todoList.map((todo, index) => (
    <li id={index} key={index} onClick={handleDelete}>
      {todo.text}
    </li>
  ));

  return <ul>{lists}</ul>;
};

export default Todo;
