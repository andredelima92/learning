import React, { useRef, useEffect, useCallback } from "react";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  const nameInputRef = useRef(null);

  useEffect(() => {
    nameInputRef.current.focus();
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log(nameInputRef.current.value);
  }, []);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Digite seu nome" ref={nameInputRef} />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
