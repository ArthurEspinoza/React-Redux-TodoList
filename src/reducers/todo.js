const myState = {
    byIds: [],//contienen los objetos todo{content, status, id}
    allIds: []//Lista de todos los id
}
const todos = (state=myState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            let _id = 1;
            let todo = {
                content: action.payload
            }
            // console.log(state.byIds)
            // console.log(state.allIds)
            if(state.allIds.length === 0){
                console.log("esta vacio")
                todo._id = _id
            }else{
                console.log("No esta vacio")
                _id = state.allIds[state.allIds.length - 1] + 1;
                todo._id = _id;
            }
            // console.log(todo)
            // console.log(_id)
            state.byIds.push(todo)
            state.allIds.push(_id)
            return state;
        case 'GET_TODOS':
            return state;
        case 'TOGGLE_TODO':
            return state.byIds = state.byIds.map(todo => {
                if(todo._id === action.payload._id){
                    todo.status = 'completed'
                    return todo
                }else{
                    return todo
                }
            })
        default:
            return state;
    }
}
export default todos;