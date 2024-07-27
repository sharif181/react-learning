export const TodoList = ({ todos }) => {
  return todos.map((todo) => <div key={todo.date}>{todo.title}</div>);
};
