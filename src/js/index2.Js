import {createStore} from 'redux';
import React, {Component} from 'react';
import {combineReducers} from 'redux';
import ReactDom from 'react-dom';


import AddToDo from './Container-cs/AddToDo.js';
import ToDoList from './Container-cs/ToDoList.js';
import Footer from './Container-cs/Footer.js';



import rootReducer from './Reducers-cs/RootReducer.js';

import {Provider} from 'react-redux';





let store = createStore(rootReducer);





class App extends Component {
    render () {
        return (
            <div>
                <AddToDo></AddToDo>
                <ToDoList></ToDoList>
                <Footer></Footer>
            </div>
        )
    }
}


// Provier
// class Provider extends Component {
//     getChildContext() {
//         return {store: this.props.store};
//     }
//     render () {
//         return (
//             this.props.children
//         )
//     }
// }

// Provider.childContextTypes = {
//   store: React.PropTypes.object
// };

const render = () => {
    ReactDom.render(
        <Provider store={store}>
            <App></App>
        </Provider>,
        document.getElementById('root')
    )
}

render();

// store.subscribe(render);











