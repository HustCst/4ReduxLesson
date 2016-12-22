let gid = 0;
const toDoReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            let newState = [...state];
            newState.push({
                text: action.text,
                id: gid++,
                completed: false,
            })
        return newState;
        case 'TOUCH_TODO':
            let newState2 = state.map((ele, index) => {
                if (ele.id === action.id) {
                    let newEle =  Object.assign({}, ele, {completed: !ele.completed});
                    console.log(newEle)
                    return newEle;
                }
                return ele;
            });
            return newState2;
        default:
            return state;
    }
}
export default toDoReducer;