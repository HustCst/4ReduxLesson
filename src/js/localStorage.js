export const saveState = (state) => {
    try {
        let data = JSON.stringify({toDoList: state.toDoList });
        localStorage.setItem('defaultState', data);
    }catch(e) {

    }
}

export const getState = () => {
    try {
        let data = localStorage.getItem('defaultState');
        let state = JSON.parse(data);
        if (state == null) {
            return undefined;
        }
        return state;
    }catch(e) {
        
    }
}

