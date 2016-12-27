import React, {Component} from 'react';
import AddToDo from '../Container-cs/AddToDo.js';
import ToDoList from '../Container-cs/ToDoList.js';
import Footer from '../Container-cs/Footer.js';

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

export default App;