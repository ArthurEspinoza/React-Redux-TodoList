import {  toggleTodo } from '../actions'
import { useDispatch } from 'react-redux'
const Todo = (props) => {
    const dispatch = useDispatch();
    const todo = props.todo
    const colorSwitch = (filter) => {
        switch (filter) {
            case 'Incomplete':
                return 'status btnIncomplete'
            case 'Completed':
                return 'status btnComplete'
            default:
                break;
        }
    }
    return(
        <div className="todoContainer">
            <div className='col'>{todo.content}</div>
            <div className="col">
                <div className={colorSwitch(todo.status)}>{todo.status}</div>
            </div>
            <div className='col'>
                <button onClick={()=>dispatch(toggleTodo(todo._id))}
                        className='btnAll'>
                    Mark as complete
                </button>
            </div>
        </div>
    )
}
export default Todo;