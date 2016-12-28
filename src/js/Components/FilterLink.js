import React, {Component} from 'react';
import {Link} from 'react-router';


const FilterLink = ({children, myFilterText}) => {
    return (
        <Link activeStyle={{
            color:'black',
            textDecoration:'none',
        }} to={myFilterText === 'all' ? '/' : myFilterText}>{children}</Link>
    )
}

export default FilterLink;