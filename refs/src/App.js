import React, { useRef, useEffect, useCallback } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Input from "./components/Input";
import Modal from "./components/Modal";

function App() {
  const nameInputRef = useRef(null);
  const acceptTermsRef = useRef({ value: false });
  const modalRef = useRef(null);

  useEffect(() => {
    nameInputRef.current.focus();
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    console.log(nameInputRef.current.value);
    console.log(acceptTermsRef.current.value);
  }, []);

  const handleAcceptTerms = useCallback(() => {
    acceptTermsRef.current.value = !acceptTermsRef.current.value;
  }, []);

  const handleOpenModal = useCallback(() => {
    modalRef.current.openModal();
  }, [])

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <Input name="name" label="Nome completo" ref={nameInputRef} />
        <button type="button" onClick={handleAcceptTerms}>
          Aceiter termos
        </button>

        <button type="submit">Enviar</button>
      </form>

      <button onClick={handleOpenModal}>Abrir modal</button>
      <Modal ref={modalRef} />
    </div>
  );
}

export default App;
