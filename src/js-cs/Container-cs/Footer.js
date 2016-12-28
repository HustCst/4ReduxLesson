import React, {Component} from 'react';
import FilterLink from '../Components-cs/FilterLink.js';
import {connect} from 'react-redux';
import {FilterToDoAction} from '../Actions-cs/actions.js';

class Footer extends Component {
    // componentDidMount() {
    //     let store = this.context.store;
    //     this.unsubscribe = store.subscribe( () => {
    //         this.forceUpdate();
    //     })
    // }
    // componentWillUnMount () {
    //     this.unsubscribe();
    // }
    render() {
        // let {filterText, filterClick} = this.props;
        console.log('Footer')
        return (
            <div>   
                <FilterLink myFilterText={'all'}>SHOW_ALL</FilterLink>
                <FilterLink myFilterText={'complete'}>SHOW_COMPLETE</FilterLink>
                <FilterLink myFilterText={'active'}>SHOW_ACTIVE</FilterLink>
            </div>
        )
    }
}

// Footer.contextTypes = {
//   store: React.PropTypes.object
// };


// const mapStateToProps = (state) => {
//     return {
//         filterText: state.filterText 
//     };
// }

// 把需要dispatch 的函数映射到 Props里

// const mapDispatchToProps = (dispatch) => {
//     return {
//         filterClick: (text) => {
//             dispatch(FilterToDoAction(text)) 
//         }
//     }
// }

export default connect(null, null)(Footer);