import React, { useState } from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import './TodoItem.css';

const TodoItem = ({
  todo,
  onCheckedToggle,
  onInsertToggle,
  onChangeSelectedTodo,
}) => {
  const { id, text, checked } = todo;

  return (
    <div className="TodoItem">
      <div className={`content ${checked ? 'checked' : ''}`}>
        {checked ? (
          <MdCheckBox
            onClick={() => {
              onCheckedToggle(id);
            }}
          />
        ) : (
          <MdCheckBoxOutlineBlank
            onClick={() => {
              onCheckedToggle(id);
            }}
          />
        )}
        <div className="text" onClick={() => {
          onChangeSelectedTodo(todo);
          onInsertToggle();
        }}>
          {text}
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
