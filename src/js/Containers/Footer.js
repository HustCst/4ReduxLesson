import React, {Component} from 'react';
import FilterLink from '../Components/FilterLink.js';
import {connect} from 'react-redux';
import {FilterToDoAction} from '../Actions/actions.js';
class Footer extends Component {
    render () {
        console.log('Footer');
        return (
            <div>
                <FilterLink onFilterClick={this.props.onFilterClick} curFilterText={this.props.filterText} myFilterText={'SHOW_ALL'}/>
                <FilterLink onFilterClick={this.props.onFilterClick} curFilterText={this.props.filterText} myFilterText={'SHOW_COMPLETE'}/>
                <FilterLink onFilterClick={this.props.onFilterClick} curFilterText={this.props.filterText} myFilterText={'SHOW_ACTIVE'}/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        filterText: state.filterText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onFilterClick: (filterText) => {
            dispatch( FilterToDoAction(filterText) )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);