import {createStore} from 'redux';
import React, {Component} from 'react';
import ReactDom from 'react-dom';


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


const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREASE':
            return state + 1;
        case 'DECREASE':
            return state - 1;
        default: 
            return state;
    }
}

const store = createStore(reducer);

class App extends Component {
    render () {
        return (
            <div>
                <h1>{store.getState()}</h1>
                <button onClick={() => { store.dispatch({type: 'INCREASE'}) }}>+</button>
                <button onClick={ () =>{ store.dispatch({type: 'DECREASE'}) }}>-</button>
            </div>
        )
    }
}

const render = () => {
    ReactDom.render(
        <App/>,
        document.getElementById('root')
    )
}

render();

store.subscribe(render);


