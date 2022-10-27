import { Route, Routes } from "react-router";
import React from "react";
import Todo from "./Pages/Todo";

function App() {
  return (
    <Routes>
      <Route path="/todo" element={<Todo />} />
    </Routes>
  );
}

export default App;
