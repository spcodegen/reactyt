import { useReducer, useState } from "react";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, 0);
  function reducer(state, action) {
    if (action.type == "increment") {
      return state + action.overload;
    }
    if (action.type == "decrement") {
      return state - action.overload;
    }
  }
  return (
    <>
      <h2>{state}</h2>
      <button onClick={() => dispatch({ type: "increment", overload: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", overload: 1 })}>
        Decrement
      </button>
    </>
  );
}

export default App;
