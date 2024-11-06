import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Loader from './utility/loader/loader';
import Cursor from './utility/cursor/cursor';
import Navbar from './components/navbar/navbar';
import Home from './components/pages/home/home';
import Footer from './components/pages/footer/footer';
import Background from './assets/background/video-bg.jpg';
import Driver from './components/pages/driver/driver';
import Contact from './components/pages/contact/contact';
import Services from './components/pages/services/services';



function App() {
  return (
      <div className="App">
        <img src={Background} alt='background-img' className='image-back' />
        {/* <Loader /> */}
        <Cursor />
        <Navbar />
        
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/driver" element={<Driver />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
                          
          </Routes>
        </div>
        
        <Footer />
      </div>
  );
}

export default App;
