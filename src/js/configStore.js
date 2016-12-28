import {createStore} from 'redux';
import rootReducer from './Reducers/RootReducer.js';
import {saveState, getState} from './localStorage.js';
import {throttle} from 'lodash';


let defaultParam = getState();

let store = createStore(rootReducer, defaultParam);

store.subscribe( throttle( () => {
    saveState( store.getState() );
}, 1500) );


export default store;