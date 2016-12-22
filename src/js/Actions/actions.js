export const AddToDoAction = (val) => {
    return {
        type: 'ADD_TODO',
        text: val
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