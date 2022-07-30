import TodoItem from './TodoItem';

const TodoList = ({ todos, delTodo, modTodo }) => {
  const todosNodeList = todos.map(({ content, isCompleted }, index) => {
    return (
      <TodoItem
        key={`${content}-{index}`}
        content={content}
        isCompleted={isCompleted}
        index={index}
        delTodo={delTodo}
        modTodo={modTodo}
      />
    );
  });

  return <ul>{todosNodeList}</ul>;
};

export default TodoList;
