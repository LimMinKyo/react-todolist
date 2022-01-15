import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({
  todos,
  onCheckedToggle,
  onInsertToggle,
  onChangeSelectedTodo,
}) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onCheckedToggle={onCheckedToggle}
            onInsertToggle={onInsertToggle}
            onChangeSelectedTodo={onChangeSelectedTodo}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
