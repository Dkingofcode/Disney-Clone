import { useState } from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Header from './components/Header';

function App() {
  

  return (
    <>
      <div>
        <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App;
