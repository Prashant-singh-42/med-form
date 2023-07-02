import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddRecord from "./components/AddRecord";
import EditRecord from "./components/EditRecord";
import PDF from "./components/PDF";

function App() {

  const [Record, setRecord] = useState({
    id: "",
    name: "",
    age: "",
    salary: "",
  })

  return (
    <Routes>
        <Route path="/"  element={<Home setRecord={setRecord} />} />
        <Route path="add" element={<AddRecord person={Record} setRecord={setRecord} />} />
        <Route path="edit" element={<EditRecord person={Record} setRecord={setRecord} />} />
        <Route path="pdf" element={<PDF person={Record} />} />
    </Routes>
  );
}

export default App;
