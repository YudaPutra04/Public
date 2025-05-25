import React from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/Menu/MenuSection';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ImageModal from './components/UI/ImageModal';
import { ImageModalProvider } from './context/ImageModalContext';

function App() {
  return (
    <CartProvider>
      <ImageModalProvider>
        <div className="font-body text-brown-900">
          <Navbar />
          <main>
            <Hero />
            <MenuSection />
            <About />
            <Contact />
          </main>
          <Footer />
          <ImageModal />
        </div>
      </ImageModalProvider>
    </CartProvider>
  );
}

export default App;