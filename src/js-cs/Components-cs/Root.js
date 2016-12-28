import React, {Component} from 'react';
import {Provider} from 'react-redux';
import App from './App.js';
import {Router, Route, hashHistory, browserHistory} from 'react-router';

// 结构 参数
const Root =( {store} ) => {
    return (
        <Provider store={store}>
            <Router history={hashHistory}>
                <Route path='/(:filterText)' component={App}>
                </Route>  
            </Router>
        </Provider>
    )
}

export default Root;