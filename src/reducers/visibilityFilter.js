const visibility = (state = 'all', action) => {
    switch(action.type){
        case 'SET_FILTER':
            return state = action.payload
        default:
            return state;
    }
}

export default visibility