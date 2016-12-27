import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Root from './Components-cs/Root.js';
import store from './configStore-cs.js';

ReactDom.render(
    <Root store={store}/>,
    document.getElementById('root')
);

// const render = () => {

// }

// render();


// const defaultParameters = {
//     toDoList: [
//         {
//             text: 'duyi',
//             id: -2,
//             completed: false
//         },
//         {
//             text: 'edu',
//             id: -1,
//             completed: true
//         },
//     ],
//     filterText: 'SHOW_ACTIVE'
// }



// Provier
// class Provider extends Component {
//     getChildContext() {
//         return {store: this.props.store};
//     }
//     render () {
//         return (
//             this.props.children
//         )
//     }
// }

// Provider.childContextTypes = {
//   store: React.PropTypes.object
// };


// store.subscribe(render);











