import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TouchToDoAction} from '../Actions-cs/actions.js';
// 拥有此模块后就不用一层一层传递 filter 传递了
import {withRouter} from 'react-router';

const filterToDoList = (toDoList, filterText) => {
    switch(filterText) {
        case 'complete':
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
    // componentDidMount() {
    //     const store = this.context.store;
    //     this.unsubscribe = store.subscribe( () => {
    //         this.forceUpdate();
    //     })
    // }
    // componentWillUnMount () {
    //     this.unsubscribe();
    // }
    render () {
        let toDoList = this.props.toDoList;
        console.log('toDoList');
        // const selectClick=(id) => {
        //     store.dispatch({id: id, type: 'TOUCH_TODO'})
        // }

        return (
            <div>
                <ul>
                    {
                        toDoList.map( (ele, index) => {
                            console.log(ele);
                            return <li style={ {textDecoration: ele.completed ? 'line-through' : 'none'} } onClick={() => {
                                this.props.selectClick(ele.id);
                            }} key={ele.id}>{ele.text}</li>;
                        })
                    }
                </ul>
            </div>
        )
    }
}
// ToDoList.contextTypes = {
//   store: React.PropTypes.object
// };


// const connect = (mapStateToProps, mapDispatchToProps) => {
//     return (ContentComponent) => {
//         class Connect extends Component {
//             componentDidMount() {
//                 const store = this.context.store;
//                 this.unsubscribe = store.subscribe( () => {
//                     this.forceUpdate();
//                 })
//             }
//             componentWillUnMount () {
//                 this.unsubscribe();
//             }
//             render () {
//                 const store = this.context.store;

//                 const stateProps = mapStateToProps(store.getState());

//                 const dispatchProps = mapDispatchToProps(store.dispatch);

//                 const props = Object.assign({}, stateProps, dispatchProps);

//                 // {toDoList: [], selectClick: () => {}}

//                 return (
//                     <ContentComponent/>
//                 )
//             }
//         }
//         Connect.contextTypes = {
//             store: React.PropTypes.object
//         }
//         return Connect;
//     }
// } 

// 把 需要的state 映射到Props里

const mapStateToProps = (state, ownProps) => {
    return {
        toDoList: filterToDoList(state.toDoList, ownProps.params.filterText == undefined ? 'all' : ownProps.params.filterText) 
    };
}

// 把需要dispatch 的函数映射到 Props里

const mapDispatchToProps = (dispatch) => {
    return {
        selectClick: (id) => {
            dispatch(TouchToDoAction(id));
        }
    }
}

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(ToDoList) );