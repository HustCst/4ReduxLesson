import React, {Component} from 'react';
import {Link} from 'react-router';

const FilterLink = ({children, myFilterText}) => {
    return (
        <Link activeStyle={{
            color:'black',
            textDecoration:'none',
        }} to={
            myFilterText === 'all' ? '/' : myFilterText}>
            {children}
        </Link>
    )
}

// class FilterLink extends Component {
//     render() {
//         if (this.props.curFilterText === this.props.myFilterText) {
//             return <span>{this.props.myFilterText}</span>;
//         }else {
//             return <a href='#' onClick={() => {
//                 this.props.filterClick(this.props.myFilterText);
//             }}>{this.props.myFilterText}</a>
//         }
//     }
// }



export default FilterLink;