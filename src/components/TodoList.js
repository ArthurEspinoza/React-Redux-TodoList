import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import Todo from './Todo'
const TodoList = () => {
    const [todos, setTodos] = useState([])
    const storeTodos = useSelector(store => store.todosReducer.allIds)
    useEffect(()=>{
        if(storeTodos.lenght !== todos.length){
            setTodos(storeTodos);
        }
    }, [todos])
    const checkTodos = todos.lenght === 0 ? todos.map(todo => {
        return(
            <Todo todo={todo}></Todo>
        )
    }) : <h3>All todos completed</h3>
    return(
        <div className="todosContainer">
            {todos}
        </div>
    )
}
export default TodoList;