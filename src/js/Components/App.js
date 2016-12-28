import React, {Component} from 'react';
import AddToDo from '../Containers/AddToDo.js';
import ToDoList from '../Containers/ToDoList.js';
import Footer from '../Containers/Footer.js';

class App extends Component {
    render () {
        return (
            <div>
                <AddToDo/>
                <ToDoList/>
                <Footer/>
            </div>
        )
    }
}

export default App;