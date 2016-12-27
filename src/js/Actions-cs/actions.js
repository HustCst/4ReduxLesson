import {v4} from 'node-uuid';
export const addToDoAction = (val) => {
    return {
        type: 'ADD_TODO',
        text: val,
        id: v4()
    }
}

export const TouchToDoAction = (val) => {
    return {
        type: 'TOUCH_TODO',
        id: val
    }
}

export const FilterToDoAction = (val) => {
    return {
        type: 'TOUCH_FILTER',
        filter: val
    }
}
