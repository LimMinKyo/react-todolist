import React, { useEffect, useState } from 'react';
import { MdAddCircle } from 'react-icons/md';
import { TiTrash, TiPencil } from 'react-icons/ti';
import styled from 'styled-components';

const Background = styled.div`
  position: fixed;
  z-index: 980;
  top: 0;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #4f5d75;
  opacity: 0.8;
`;

const FormLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  margin: 0 auto;
  position: fixed;
  top: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 990;
  width: 300px;
  height: 150px;
  border-radius: 5px;
  box-shadow: 1px 2px 5px 1px ${(props) => props.theme.bgColor};
  background: white;
  input {
    background: none;
    outline: none;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.pointColor};
    padding: 0.5rem;
    font-size: 1.125rem;
    line-height: 1.5;
  }
  button {
    padding-top: 20px;
    background: none;
    outline: none;
    border: none;
    color: ${(props) => props.theme.pointColor};
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.1s background ease-in;
  }
`;

const ReWrite = styled.div`
  svg {
    padding-top: 20px;
    color: ${(props) => props.theme.pointColor};
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.5rem;
  }
`;

const TodoInsert = ({
  onInsertToggle,
  onInsertTodo,
  selectedTodo,
  onRemove,
  onUpdate,
}) => {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onInsertTodo(value);
    setValue('');
    onInsertToggle();
  };

  useEffect(() => {
    if (selectedTodo) {
      setValue(selectedTodo.text);
    }
  }, [selectedTodo]);

  return (
    <>
      <Background onClick={onInsertToggle} />
      <FormLayout>
        <Form
          onSubmit={
            selectedTodo
              ? () => {
                  onUpdate(selectedTodo.id, value);
                }
              : onSubmit
          }
        >
          <input placeholder="please type" value={value} onChange={onChange} />
          {selectedTodo ? (
            <ReWrite>
              <TiPencil
                onClick={() => {
                  onUpdate(selectedTodo.id, value);
                }}
              />
              <TiTrash
                onClick={() => {
                  onRemove(selectedTodo.id);
                }}
              />
            </ReWrite>
          ) : (
            <button type="submit">
              <MdAddCircle />
            </button>
          )}
        </Form>
      </FormLayout>
    </>
  );
};

export default TodoInsert;
