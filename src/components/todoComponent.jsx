import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { store } from './redux_Lib/store'
import { ADD_TODO, OnAddTodo } from "./redux_Lib/action";
import { useEffect } from "react";
const TodoCom = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const TextWritingFunction = (e) => {
    // setText(()=>e.target.value)
    console.log("onInput");
  };

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
              return <div 
                      className="bg-gray-200 m-1 p-2 rounded">
                        {todo}
                    </div>
            })
          }
    </>
  );
};
export default TodoCom;
