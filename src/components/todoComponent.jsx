import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { OnAddTodo } from "./redux_Lib/action";
const TodoCom = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [update, setUpdate] = useState(false);
  const [remove, setRemove] = useState(false);
  const [isAdd, setIsAdd] = useState(true);
  const [index, setIndex] = useState(0);
  const handleAddTodo = () => {
    if (text.length === 0) {
      setError("Please enter a todo");
    } else {
      dispatch(OnAddTodo(text));
      setText("");
      setError("");
    }
  };
  const handleUpdateTodoButton = (id) => {
    setText(todos[id])
    setIsAdd("Update")
    setIsAdd(!isAdd)
    setIndex(id)
    setUpdate(!update)
  };

  const handleDeleteTodoButton = (id) => {
    return todos.filter((todo, indexedDB, arr) => {
      setRemove(preVal=>!preVal)
      if (indexedDB === id) {
        arr.splice(indexedDB, 1);
      }
    });
    setRemove(preVal=>!preVal)
  };
  const handleUpdateTodo = () => {
    todos[index] = text
    setUpdate(!update)
  }
  return (
    <>
      <input
        className="w-[23rem] rounded bg-gray-100 p-2"
        onInput={(e) => setText(e.target.value)}
        value={text}
      />
      
        
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={isAdd ? (() => handleAddTodo()):  (() => handleUpdateTodo())}
          >
            {isAdd? "Add Todo": "Update Todo"}
          </button>
        
      {error}
      {update}
      {todos.map((todo, id) => {
        if (todo.length > 0) {
          return (
            <div
              key={id}
              className="bg-gray-200 m-1 p-2 rounded flex justify-between	"
            >
              {todo}
              <div>
                <h1
                  className="text-blue-500"
                  onClick={() => handleUpdateTodoButton(id)}
                >
                  Edit
                </h1>
                <h1
                  className="text-red-500"
                  onClick={() => handleDeleteTodoButton(id)}
                >
                  Delete
                </h1>
              </div>
            </div>
          );
        } else {
          return;
        }
      })}
    </>
  );
};
export default TodoCom;
