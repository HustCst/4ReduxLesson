import React, {Component} from 'react';
import FilterLink from '../Components/FilterLink.js';
import {connect} from 'react-redux';
import {FilterToDoAction} from '../Actions/actions.js';
class Footer extends Component {
    render () {
        console.log('Footer');
        return (
            <div>
                <FilterLink myFilterText={'all'}>SHOW_ALL</FilterLink>
                <FilterLink myFilterText={'completed'}>SHOW_COMPLETE</FilterLink>
                <FilterLink myFilterText={'active'}>SHOW_ACTIVE</FilterLink>
            </div>
        )
    }
}
// const mapStateToProps = (state) => {
//     return {
//         filterText: state.filterText
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         onFilterClick: (filterText) => {
//             dispatch( FilterToDoAction(filterText) )
//         }
//     }
// }

export default connect(null, null)(Footer);