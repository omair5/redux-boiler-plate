import CounterReducer from './counter'
import IsloggedReducer from './islogged'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    CounterReducer,
    IsloggedReducer
})

export default allReducers;