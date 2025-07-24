import { useReducer, useState } from "react";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  function reducer(state, action) {
    if (action.type == "increment") {
      return { ...state, count: state.count + action.payload }; //state + action.overload
    }
    if (action.type == "decrement") {
      return { ...state, count: state.count - action.payload }; //state - action.overload
    }
  }
  return (
    <>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Decrement
      </button>
    </>
  );
}

export default App;
