import { useState } from 'react';

const InputTodo = ({ setTodos }) => {
  const [inputTodoValue, setInputTodoValue] = useState('');
  const handleOnAddTodo = () => {
    //if user's input is empty
    if (!inputTodoValue.trim()) {
      setInputTodoValue('');
      return;
    }
    setTodos((prevState) => {
      return [
        ...prevState,
        {
          content: inputTodoValue,
          isCompleted: false,
        },
      ];
    });
    setInputTodoValue('');
  };

  return (
    <div>
      <input
        type='text'
        value={inputTodoValue}
        onChange={(e) => setInputTodoValue(e.target.value)}
      />
      <button onClick={handleOnAddTodo}>Add</button>
    </div>
  );
};

export default InputTodo;
