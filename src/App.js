import './App.css';
import Navbar from './Navbar/Navbar';
import { Routes, BrowserRouter,  Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import About from './components/aboutUs/about';
import Portfolio from './components/Portfolio/Portfolio';
import News from './components/News/News';
import React from 'react';
import SingleNew from './components/News/SingleNew';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
    
      <Route path="/playsite/" index element={<Layout />} />
      <Route path="/playsite/home" element={<Home />} />
      <Route path="/playsite/about" element={<About />} />
      <Route path="/playsite/portfolio" element={<Portfolio />} />
      <Route path="/playsite/news" element={<News />} />
      <Route path="/playsite/news/:id" element={<SingleNew />} />
      <Route path="/playsite/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </div>
  );
}

export default App;
