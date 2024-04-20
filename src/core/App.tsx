import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Navbar } from '../common/Navbar/navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

    </BrowserRouter>
  );
}

export default App;
