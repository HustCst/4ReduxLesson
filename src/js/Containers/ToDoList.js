import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TouchToDoAction} from '../Actions/actions.js';
import {withRouter} from 'react-router';

const filterToDoList = (toDoList, filterText) => {
    switch(filterText) {
        case 'completed':
            return toDoList.filter( (ele, index) => {
                return !ele.completed;
            })
        case 'active':
            return toDoList.filter( (ele, index) => {
                return ele.completed;
            })
        default:
            return toDoList;
    }
}

class ToDoList extends Component {
    render () {
        console.log('ToDo')

        let {toDoList, onTouchToDo} = this.props;
        return (
            <ul>
                {
                    toDoList.map( (ele, index) => {
                        return <li style={ {textDecoration: ele.completed ? 'line-through' : 'none'} } onClick={() => {
                            onTouchToDo(ele.id);
                        }} key={ele.id}>{ele.text}</li>;
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        toDoList: filterToDoList(state.toDoList, ownProps.params.filterText),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTouchToDo: (id) => {
            dispatch( TouchToDoAction(id) );
        }
    }
}

export default  withRouter( connect(mapStateToProps, mapDispatchToProps)(ToDoList) );