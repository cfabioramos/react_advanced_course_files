import counterReducer from './counter'
import logginReducer from './loggin'
import { combineReducers } from 'redux'

const reducers = combineReducers({
    counterReducer, logginReducer
})

export default reducers