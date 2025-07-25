import { useReducer, useState } from "react";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, { balance: 0 });
  const [amount, setAmount] = useState(0);

  function reducer(state, action) {
    if (action.type == "add") {
      return { ...state, balance: state.balance + action.payload };
    }
    if (action.type == "sub") {
      return { ...state, balance: state.balance - action.payload };
    }
  }
  return (
    <>
      <h1>{state.balance}</h1>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button
        onClick={() => dispatch({ type: "add", payload: Number(amount) })}
      >
        Deposit
      </button>
      <button
        onClick={() => dispatch({ type: "sub", payload: Number(amount) })}
      >
        Withdraw
      </button>
    </>
  );
}

export default App;
