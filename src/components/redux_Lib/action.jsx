export const ADD_TODO = "ADD_TODO";
    
export function OnAddTodo (text) {
  return {
    type: ADD_TODO,
    text: text
  }
}