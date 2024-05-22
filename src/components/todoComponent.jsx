import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { OnAddTodo } from "./redux_Lib/action";
const TodoCom = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  console.log(text.length);
  // CRUD ------- CREATE READ UPDATE DELETE
  // CREATE
  // UPDATING STATE
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
        return (
          <div
            key={id}
            className="bg-gray-200 m-1 p-2 rounded flex justify-between	"
          >
            {todo}
            <h1 onClick={handleUpdateTodo(id)}>edit</h1>
          </div>
        );
      })}
    </>
  );
};
export default TodoCom;
