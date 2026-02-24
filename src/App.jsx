import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Videos from './pages/Videos';
import Games from './pages/Games';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Support from './pages/Support';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/games" element={<Games />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
