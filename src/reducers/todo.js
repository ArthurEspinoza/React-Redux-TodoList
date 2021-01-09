const myState = {
    byIds: [],//contienen los objetos todo{content, status, id}
    allIds: []//Lista de todos los id
}
const todos = (state=myState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            let _id = 1;
            let todo = {
                content: action.payload,
                status: 'Incomplete'
            }
            if(state.allIds.length === 0){
                //console.log("esta vacio")
                todo._id = _id
            }else{
                //console.log("No esta vacio")
                _id = state.allIds[state.allIds.length - 1] + 1;
                todo._id = _id;
            }
            state.byIds = [...state.byIds, todo]
            state.allIds = [...state.allIds, _id]
            return state;
        case 'GET_TODOS':
            return state;
        case 'TOGGLE_TODO':
            //console.log(action.payload)
            state.byIds = state.byIds.map(todo => {
                if(action.payload === todo._id){
                    todo.status = 'Completed'
                    return todo
                }
                return todo
            })
            return state
        default:
            return state;
    }
}
export default todos;