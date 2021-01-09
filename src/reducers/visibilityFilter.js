const visibility = (state = 'All', action) => {
    switch(action.type){
        case 'SET_FILTER':
            //console.log(action)
            return state = action.payload
        default:
            return state;
    }
}

export default visibility