import {  createStore } from 'redux'
import reducer from '../reducers'
import {SET_USER} from '../reducers/appReducer' 

export const initStore = () => createStore(reducer);


 const store = initStore()

 store.dispatch({
  type: SET_USER,
})


 store.subscribe(()=>{

console.log('state updated');
console.log(store.getState());
 })






// const store = createStore(reducer)
// console.log(store.getState())
// // {
// //   counter: 0,
// //   todos: []
// // }

// store.dispatch({
//   type: 'ADD_TODO',
//   text: 'Use Redux'
// })
// console.log(store.getState())