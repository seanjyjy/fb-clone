import React from "react";
import "./App.css";
import Header from "./Header/Header";
import AppBody from "./AppBody/AppBody";
import Login from "./Login/Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <AppBody />
        </>
      )}
    </div>
  );
}

export default App;
