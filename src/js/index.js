import React, {Component} from 'react';
import ReactDom from 'react-dom';
import store from './configStore.js';
import Root from './Components/Root.js';

ReactDom.render(
    <Root store={store}/>,
    document.getElementById('root')
)

































// import {combineReducers} from 'redux';
// let gid = 0;
// const toDosReducer = (state = [], action) => {
//     switch (action.type) {
//         case 'ADD_TODO':
//                 let newState = [...state];
//                 newState.push({
//                     text: action.text,
//                     id: gid++,
//                     completed: false
//                 })
//             return newState;
//         case 'TOUCH_TODO':
//                 let newState2 = state.map((ele, index) => {
//                     if (ele.id === action.id) {
//                         return Object.assign({}, ele, {completed: !ele.completed})
//                     }
//                     return ele;
//                 })
//             return newState2;
//         default:
//             return state;
//     }
// }

// const filterReducer = (state = 'SHOW_ALL', action) => {
//     switch (action.type) {
//         case 'SET_VISIABLEFILTER':
//             return action.filterText;
//         default: 
//             return state;
//     }
// }
// let rootReducer = combineReducers({toDoList: toDosReducer, filterText: filterReducer});

// let store = createStore(rootReducer);

// const filterFunc = (toDoList, filterText) => {
//     switch (filterText) {
//         case 'SHOW_COMPLETE':
//             return toDoList.filter((ele) => {
//                 return !ele.completed
//             }) 
//         case 'SHOW_ACTIVE':
//             return toDoList.filter( (ele) => {
//                 return ele.completed
//             })
//         case 'SHOW_ALL':
//             return toDoList;
//     }
// }

//  class App extends Component {
//      render () {
//          let {toDoList, filterText} = store.getState();

//          toDoList = filterFunc(toDoList, filterText);
//          console.log(toDoList)
//          return (
//              <div>
//                 <input type="text" ref='inp'/>
//                 <button onClick={() => {
//                     store.dispatch({
//                         type: 'ADD_TODO',
//                         text: this.refs.inp.value,
//                     })
//                 }}>add</button>
//                 <ul>
//                     {
//                         toDoList.map( (ele, index) => {
//                         return <li style={ {textDecoration: ele.completed ? 'line-through': 'none'} } onClick={()=>{
//                                 store.dispatch({type: 'TOUCH_TODO', id: ele.id})
//                             }} key={ele.id}>{ele.text}</li>;
//                         } )
//                     }
//                 </ul>
//                 <div>

//                     <span>
//                         <a href='#' onClick={ ()=> {
//                             store.dispatch({type: 'SET_VISIABLEFILTER', filterText: 'SHOW_ALL'});
//                         }}>SHOW_ALL</a>
//                     </span>
//                     <span>
//                         <a href='#' onClick={ ()=> {
//                             store.dispatch({type: 'SET_VISIABLEFILTER', filterText: 'SHOW_COMPLETE'});
//                         }}>SHOW_COMPLETE</a>
//                     </span>
//                     <span>
//                         <a href='#' onClick={ ()=> {
//                             store.dispatch({type: 'SET_VISIABLEFILTER', filterText: 'SHOW_ACTIVE'});
//                         }}>SHOW_ACTIVE</a>
//                     </span>        
//                 </div>
//              </div>
//          )
//      }
//  }

// const render = () => {
//     ReactDom.render(
//         <App></App>,
//         document.getElementById('root')
//     )
// }
// render();
// store.subscribe(render);









// reducer 1.很纯 2. state action

// function add (arr, ele) {
//     arr.push(ele);
// }

// var arr = [];

// add(arr, 1);

// function add (x, y) {
//     return x + y;
// }

// add(1, 2);


// const reducer = (state = 0, action) => {
//     switch (action.type) {
//         case 'INCREASE':
//             return state + 1;
//         case 'DECREASE':
//             return state - 1;
//         default: 
//             return state;
//     }
// }

// const createStore = (reducer) => {
//     let state;
//     let list = [];
//     const getState = () => {
//         return state;
//     }

//     const dispatch = (action) => {
//         state = reducer(state, action);
//         list.forEach((func) => {
//             func();
//         })
//     }

//     const subscribe = (func) => {
//         list.push(func);
//         return (fn) => {
//             list = list.filter((cb) => {
//                 if (cb === fn) {
//                     return false;
//                 }
//                 return true;
//             })
//         }
//     }
//     return {
//         getState,
//         dispatch,
//         subscribe
//     }
// }


// let store = createStore(reducer);

// store.dispatch({
//     type: 'INIT'
// });


// const render = () => {
//     document.body.innerHTML = store.getState();
// }

// render();

// let filterFunc = store.subscribe(render);

// document.onclick = function () {
//     store.dispatch({type: 'INCREASE'});
//     // filterFunc(render);
// }


// const reducer = (state = 0, action) => {
//     switch (action.type) {
//         case 'INCREASE':
//             return state + 1;
//         case 'DECREASE':
//             return state - 1;
//         default: 
//             return state;
//     }
// }

// const store = createStore(reducer);

// class App extends Component {
//     render () {
//         return (
//             <div>
//                 <h1>{store.getState()}</h1>
//                 <button onClick={() => { store.dispatch({type: 'INCREASE'}) }}>+</button>
//                 <button onClick={ () =>{ store.dispatch({type: 'DECREASE'}) }}>-</button>
//             </div>
//         )
//     }
// }

// const render = () => {
//     ReactDom.render(
//         <App/>,
//         document.getElementById('root')
//     )
// }

// render();

// store.subscribe(render);



