import { useEffect, useRef, useState } from 'react';
import TodoHeader from './components/TodoHeader';
import InputTodo from './components/InputTodo';
import TodoList from './components/TodoList';
import './App.css';

// array => todo: [{content: "abafdafa", isCompleted: false}, {content: "abafdafa", isCompleted: false}]

//1. component dispatch an action to one reducer
//2. reducer will upate the global state by the action
//3. global state update will trigger the component's update

function App() {
  const [todos, setTodos] = useState([]);

  const delTodo = (index) => {
    setTodos((prevState) => {
      return [...prevState.slice(0, index), ...prevState.slice(index + 1)];
    });
  };

  const modTodo = (index) => {
    setTodos((prevState) => {
      return prevState.map((todo, i) => {
        if (index !== i) {
          return todo;
        }
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      });
    });
  };

  return (
    <div className='App'>
      <TodoHeader headTextContent='Todos' />
      <InputTodo setTodos={setTodos} />
      <hr />
      <TodoList todos={todos} delTodo={delTodo} modTodo={modTodo} />
    </div>
  );
}

export default App;
