import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { OnAddTodo } from "./redux_Lib/action";

const TodoCom = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
// CRUD ------- CREATE READ UPDATE DELETE
  // CREATE 
  // UPDATING STATE
  return (
    <>
      <input
        className="w-[23rem] rounded bg-gray-100 p-2"
        onInput={(e) => setText(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={() => dispatch(OnAddTodo(text))}
      >
        Add
      </button>
          {
            todos.map((todo)=>{
              return (
                <div 
                  className="bg-gray-200 m-1 p-2 rounded">
                    {todo}
                </div>
              )
            })
          }
    </>
  );
};
export default TodoCom;
