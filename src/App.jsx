import "./App.css";
import TodoCom from "./components/todoComponent";
import { Provider } from "react-redux";
import { store } from "./components/redux_Lib/store";

export default function App() {
  return (
    <Provider store={store}>
      <main className="flex bg-gray-50 translate-y-5 h-[30rem] w-[30rem] m-auto rounded shadow-md drop-shadow-2xl">
        <div className="m-[2rem]">
          <h4 className="text-xl font-bold">Todo List </h4>
          <input className="w-[23rem] rounded bg-gray-200 p-2" />
          <TodoCom />
          {/* TODO CARDS */}
        </div>
      </main>
    </Provider>
  );
}
