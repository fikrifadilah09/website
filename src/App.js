import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import Pages
import Home from './pages/Home';
import Profile from './pages/Profile';
import Program from './pages/Program';
import Registration from './pages/Registration';
import Gallery from './pages/Gallery';
import News from './pages/News';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/program" element={<Program />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
