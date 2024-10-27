import React from 'react';
import Home from './home';
import About from './about';
import Products from './products';
import Contact from './contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './footer'; 
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/products' element={<Products />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
        <Footer /> {}
      </div>
    </BrowserRouter>
  );
}

export default App;
