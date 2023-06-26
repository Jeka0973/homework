import {promiseReducer} from './PromiseReducer'
import {configureStore} from '@reduxjs/toolkit'
// import {combineReducers} from 'redux'
import {combineReducers} from '@reduxjs/toolkit'

const reducer = combineReducers({
  allGoods: promiseReducer,
})

const store = configureStore({
  reducer,
})

export default store

// const reducers = {
//   allGoods: promiseReducer,
//   auth: localStoredReducer(authReducer, 'authToken'),
//   busk: localStoredReducer(cartReducer, 'basket'),
// }
