import {useState} from 'react'
import { useSelector, useDispatch, } from "react-redux";
// import { store } from './redux_Lib/store'
import { ADD_TODO, OnAddTodo } from "./redux_Lib/action";
import { useEffect } from "react";

const TodoCom = () => {
  const todos = useSelector((state) => state.todos);
  const [text, setText] = useState("hello");
  const dispatch = useDispatch();

  
  const TextWritingFunction = (e) => {
    setText(()=>e.target.value)
  } 

  console.log(todos);
  // useEffect(()=>{
  //   console.log("useEffect")  
  // },todos)
 
  return(
    <>
      <button className="bg-blue-500 text-white p-2 rounded" onInput={(e)=>setText(e.target.value)} onClick={dispatch(OnAddTodo(text))}>Add</button>
      <ul>
          {
            todos.map((todo)=>{
              {console.log(todo)}
            })
          }
      </ul>
    </>
  )
}
export default TodoCom