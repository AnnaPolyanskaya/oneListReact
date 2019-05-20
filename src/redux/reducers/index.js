import { combineReducers } from 'redux'
import { executorReducer } from './reducers'

const reducers = combineReducers({
    executor: executorReducer
})

export default reducers