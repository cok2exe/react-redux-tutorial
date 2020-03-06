import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeInput, insert, toggle, remove } from "../modules/todos";
import Todos from "../components/Todos";

const TodosContainer = () => {
  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos
  }));
  const dispatch = useDispatch();
  console.log("input", input);
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={value => dispatch(changeInput(value))}
      onInsert={value => dispatch(insert(value))}
      onToggle={id => dispatch(toggle(id))}
      onRemove={id => dispatch(remove(id))}
    />
  );
};

export default TodosContainer;
