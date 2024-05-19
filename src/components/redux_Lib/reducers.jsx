const initialState = {
  todos: [0],
};
export const AddTodos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [ ...state.todos, state.todos],
      };
    default:
      return state;
  }
};
