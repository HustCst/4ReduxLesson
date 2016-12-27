import rootReducer from './Reducers-cs/RootReducer.js';
import {createStore} from 'redux';
import {saveState, getState} from './localStorage-cs.js';
import {throttle} from 'lodash';

const defaultParameters = getState();

// 初始化 参数
let store = createStore(rootReducer, defaultParameters);

// 每次更新数据都保存一次

// throttle 保证 无论你点击多块 他都间隔一秒执行
store.subscribe( throttle( 
    () => {
        saveState( store.getState() )
    } 
, 1000) );

export default store;