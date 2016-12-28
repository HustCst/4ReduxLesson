export const saveState = (state) => {
    try {
        // 忽视 state 里面的 filterText
        const data = JSON.stringify({
            toDoList: state.toDoList
        });
        localStorage.setItem('state', data);
    }catch (err) {

    }
}
// 为了保证 每条信息的id永远不相等这里下载一个模块  npm install node-uuid 
export const getState = () => {
    // 本地浏览器不支持 或者 禁用 localStorage时 会报错 为了不影响用户体验我们这里需要用try catch做一个处理
    try {
        const data = localStorage.getItem('state');
        const state = JSON.parse(data);
        if (state == null) {
            return undefined
        }
        return state;
    }catch(err) {
        return undefined;
    }
}