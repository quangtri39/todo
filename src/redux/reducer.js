import * as types from "./actionType";
let count = 0;
const reducer = (state = { listTodo: [], modeList: "all" }, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state,
        listTodo: [...state.listTodo, { ...action.data, id: count++ }],
      };
    case types.DELETE_TODO:
      return {
        ...state,
        listTodo: state.listTodo.filter((todo) => {
          return todo.id !== action.data.id;
        }),
      };
    case types.UPDATE_TODO:
      return {
        ...state,
        listTodo: state.listTodo.map((todo) => {
          return todo.id === action.data.id
            ? { ...todo, status: !todo.status }
            : todo;
        }),
      };
    case types.UPDATE_MODE_LIST_TODO:
      return {
        ...state,
        modeList: action.data,
      };
    default:
      return state;
  }
};
export default reducer;
