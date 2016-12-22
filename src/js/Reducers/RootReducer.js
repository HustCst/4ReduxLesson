import {combineReducers} from 'redux';
import toDoReducer from './ToDoReducer.js';
import filterReducer from './FilterReducer.js';

let rootReducer = combineReducers({
    toDoList: toDoReducer,
    filterText: filterReducer
})

export default rootReducer;