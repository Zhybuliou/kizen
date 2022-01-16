import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Footer from './components/footer/Footer';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

function App() {
  return (
    <div>
     <Navbar/>
     <Router>
            <Home />
     </Router>
     <Footer />
    </div>
  );
}

export default App;
