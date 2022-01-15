import { useState } from 'react';
import { MdAddCircle } from 'react-icons/md';
import Template from './components/Template';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';
import './App.css';

let nextId = 4;

const App = () => {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '할일 1',
      checked: true,
    },
    {
      id: 2,
      text: '할일 2',
      checked: false,
    },
    {
      id: 3,
      text: '할일 3',
      checked: true,
    },
  ]);

  const onInsertToggle = () => {
    if(selectedTodo){
      setSelectedTodo(null);
    }
    setInsertToggle((prev) => !prev);
  };

  const onInsertTodo = (text) => {
    if (text === '') {
      alert('할 일을 입력해주세요.');
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId++;
    }
  };

  const onCheckedToggle = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo);
  };
  
  const onRemove = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
    onInsertToggle();
  };

  const onUpdate = (id, text) => {
    setTodos(todos => todos.map(todo => todo.id === id ? {...todo, text} : todo ));
    onInsertToggle();
  }

  return (
    <div>
      <Template todosLength={todos.length}>
        <TodoList
          todos={todos}
          onCheckedToggle={onCheckedToggle}
          onInsertToggle={onInsertToggle}
          onChangeSelectedTodo={onChangeSelectedTodo}
        />
        <div className="add-todo-button" onClick={onInsertToggle}>
          <MdAddCircle />
        </div>
        {insertToggle && (
          <TodoInsert
            todos={todos}
            setTodos={setTodos}
            onInsertToggle={onInsertToggle}
            onInsertTodo={onInsertTodo}
            selectedTodo={selectedTodo}
            onRemove={onRemove}
            onUpdate={onUpdate}
          />
        )}
      </Template>
    </div>
  );
};

export default App;
