import { useSelector } from 'react-redux'
import Todo from './Todo'
const TodoList = () => {
    //const [todos, setTodos] = useState([])
    const todos = useSelector(store => store.todosReducer.byIds)
    const filter = useSelector(store => store.visibilityReducer)
    const filteredTodos = filter === 'All' ? todos : todos.filter(todo => todo.status === filter)
    // console.log(filteredTodos)
    const checkTodos = filteredTodos.length !== 0 ? filteredTodos.map(todo => {
        return(
            <div key={todo._id}>
                <Todo todo={todo}></Todo>
            </div>
        )
    }) : <h3>There is not To-Do's yet.</h3>
    return(
        <div className="todosContainer">
            {checkTodos}
        </div>
    )
}
export default TodoList;