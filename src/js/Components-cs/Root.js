import React, {Component} from 'react';
import {Provider} from 'react-redux';
import App from './App.js';

// 结构 参数
const Root =( {store} ) => {
    return (
        <Provider store={store}>
            <App></App>
        </Provider>
    )
}

export default Root;