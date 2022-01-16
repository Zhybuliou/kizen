import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Footer from './components/footer/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div>
     <Navbar/>
      <Routes>
      <Route  path="/" element={<Home />} ></Route>
      </Routes>
     <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
