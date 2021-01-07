import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import Visibility from './components/Visibility'
import './App.css';

function TodoApp() {
  return (
    <div className="container">
      <h1>TO-DO App with React</h1>
      <AddTodo/>
      <TodoList/>
      <Visibility/>
    </div>
  );
}

export default TodoApp;
