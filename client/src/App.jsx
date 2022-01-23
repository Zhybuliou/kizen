import React, { useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Footer from './components/footer/Footer';
import Registration from './components/registration/Registration';
import Singup from './components/singup/Singup';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { auth } from './actions/user.js';
import Disk from './components/disk/Disk';


function App() {
  const isAuth = useSelector(state => state.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  }, [])


  return (
    <BrowserRouter>
    <div>
     <Navbar isAuth={isAuth} />
     {!isAuth ?
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route  path="/registration" element={<Registration />} />
      <Route  path="/sing-up" element={<Singup />} />
      <Route
        path="*"
        element={<Navigate to="/" />}
    />
      </Routes>
      :
      <Routes>
      <Route exact path="/" element={<Disk />} />
      <Route
        path="*"
        element={<Navigate to="/" />}
    />
      </Routes>
    }
     <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
