import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const Container = styled.div`
  width: 90vw;
  margin: 0 auto;
  padding-bottom: 20px;
`;

const TodoList = ({
  todos,
  onCheckedToggle,
  onInsertToggle,
  onChangeSelectedTodo,
}) => {
  return (
    <Container>
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
    </Container>
  );
};

export default TodoList;
