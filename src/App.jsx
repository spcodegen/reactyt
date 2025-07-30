import { createContext, useState } from "react";
import "./App.css";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
export const userContext = createContext();

function App() {
  const [user, setUser] = useState("guest");
  return (
    <div>
      <userContext.Provider value={{ user, setUser }}>
        <Login />
        <Checkout />
      </userContext.Provider>
    </div>
  );
}

export default App;
