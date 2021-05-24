import * as types from "./actionType";

export function addTodo(data) {
  return {
    type: types.ADD_TODO,
    data: data,
  };
}
export function deleteTodo(data) {
  return {
    type: types.DELETE_TODO,
    data: data,
  };
}
export function updateTodo(data) {
  return {
    type: types.UPDATE_TODO,
    data: data,
  };
}
export function updateModeListTodo(mode) {
  return {
    type: types.UPDATE_MODE_LIST_TODO,
    data: mode,
  };
}
