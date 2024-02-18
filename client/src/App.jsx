// import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Books from "./components/Books";
import InputField from "./components/InputField";

export default function App() {
  
  return (
    <div className="bg-main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="books/add" element={<InputField />} />
          {/* <Route path="/delete/:id" element={<InputField />} /> */}

        </Routes>
      </BrowserRouter>
    </div>
  )
}


