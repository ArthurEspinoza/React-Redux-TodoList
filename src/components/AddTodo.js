import { useDispatch } from 'react-redux'
import { addTodo } from '../actions'
import { useState } from 'react'
const AddTodo = () => {
    const dispatch = useDispatch()
    const [input, setInput] = useState('')
    const handleChange = (e) => {
        e.preventDefault();
        setInput(e.target.value);
    }
    const handleAddTodo = () => {
        dispatch(addTodo(input))
        setInput('');
    }
    return(
        <div className="addContainer">
            <input type="text" id="addTodo" value={input} onChange={e => handleChange(e)}/>
            <button onClick={handleAddTodo}>ADD TO-DO</button>
        </div>
    )
}
export default AddTodo;
// export default connect(
//     null,
//     { addTodo }
// )(AddTodo)