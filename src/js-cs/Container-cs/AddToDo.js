import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addToDoAction} from '../Actions-cs/actions.js';

class AddToDo extends Component {
    render () {
        console.log('AddToDo')
        return (
            <div>
                <input type="text" ref='inp'/>
                <button onClick={() => {
                    this.props.addToDo(this.refs.inp.value);
                }}>ADD</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToDo: (addText) => {
            console.log(addText)
            dispatch( addToDoAction(addText) );
        }
    }
}

export default connect(null, mapDispatchToProps)(AddToDo);

