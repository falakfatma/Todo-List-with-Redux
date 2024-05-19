const AddTodos = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO": return {
            todos: [...state, state.todos, action.text],
            console, : .log(state)
        };
    }
};
