import todosReducer from './todo'
import visibilityReducer from './visibilityFilter'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todosReducer,
    visibilityReducer
})

export default rootReducer;