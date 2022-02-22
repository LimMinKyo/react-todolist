import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 1px 2px 5px 1px ${(props) => props.theme.pointColor};
  padding: 1rem;
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
  svg {
    font-size: 1.5rem;
    color: ${(props) => props.theme.pointColor};
  }
`;

const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1;
`;

const TextChecked = styled(Text)`
  color: ${(props) => props.theme.pointColor};
  text-decoration: line-through;
  cursor: pointer;
  opacity: 0.6;
`;

const TodoItem = ({
  todo,
  onCheckedToggle,
  onInsertToggle,
  onChangeSelectedTodo,
}) => {
  const { id, text, checked } = todo;

  return (
    <Container>
      <Content>
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

        {checked ? (
          <TextChecked
            onClick={() => {
              onChangeSelectedTodo(todo);
              onInsertToggle();
            }}
          >
            {text}
          </TextChecked>
        ) : (
          <Text
            onClick={() => {
              onChangeSelectedTodo(todo);
              onInsertToggle();
            }}
          >
            {text}
          </Text>
        )}
      </Content>
    </Container>
  );
};

export default TodoItem;
