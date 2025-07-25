import { useReducer, useState } from "react";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0, incrementBy: 0 });
  function reducer(state, action) {
    if (action.type == "increment") {
      return { ...state, count: state.count + state.incrementBy };
    }
    if (action.type == "decrement") {
      return { ...state, count: state.count - state.incrementBy };
    }
    if (action.type == "setIncrement") {
      return { ...state, incrementBy: action.payload };
    }
  }
  return (
    <>
      <h2>{state.count}</h2>
      <input
        value={state.incrementBy}
        onChange={(e) =>
          dispatch({ type: "setIncrement", payload: Number(e.target.value) })
        }
      />
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
