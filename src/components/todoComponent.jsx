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
  // CRUD ------- CREATE READ UPDATE DELETE
  // CREATE
  // UPDATING STATE
  useEffect(()=>{
    
  })
  const handleAddTodo = () => {
    if (text.length === 0) {
      setError("Please enter a todo");
    } else {
      dispatch(OnAddTodo(text));
      setText("");
      setError("");
    }
  };
  const handleUpdateTodo = (id) => {
    // const editedTodo = prompt('Edit Todo')
    console.log("update", todos[id]);
  };

  const handleDeleteTodo = (id) => {
    return todos.filter((todo, indexedDB, arr) => {
      setRemove(preVal=>!preVal)
      if (indexedDB === id) {
        arr.splice(indexedDB, 1);
      }
    });
    setRemove(preVal=>!preVal)
  };

  return (
    <>
      <input
        className="w-[23rem] rounded bg-gray-100 p-2"
        onInput={(e) => setText(e.target.value)}
        value={text}
      />
      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={() => handleAddTodo()}
      >
        Add
      </button>
      {error}
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
                  onClick={() => handleUpdateTodo(id)}
                >
                  Edit
                </h1>
                <h1
                  className="text-red-500"
                  onClick={() => handleDeleteTodo(id)}
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
