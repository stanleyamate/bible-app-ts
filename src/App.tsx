import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Bibles from './pages/Bibles';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/bibles' element={<Bibles />} />
          </Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
