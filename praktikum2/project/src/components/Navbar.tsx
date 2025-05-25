import React, { useState, useEffect } from 'react';
import { Coffee, Menu, X } from 'lucide-react';
import CartIcon from './Cart/CartIcon';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brown-800 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        <a
          href="#"
          className="flex items-center space-x-2 text-xl font-bold text-cream"
        >
          <Coffee size={30} />
          <span>Brew Haven</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          <a
            href="#"
            className="text-cream hover:text-gold-400 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#menu"
            className="text-cream hover:text-gold-400 transition-colors duration-300"
          >
            Menu
          </a>
          <a
            href="#about"
            className="text-cream hover:text-gold-400 transition-colors duration-300"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="text-cream hover:text-gold-400 transition-colors duration-300"
          >
            Contact
          </a>
          <CartIcon />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <CartIcon />
          <button
            onClick={toggleMenu}
            className="text-cream focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container py-4 space-y-3 bg-brown-800">
          <a
            href="#"
            onClick={closeMenu}
            className="block text-cream hover:text-gold-400 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#menu"
            onClick={closeMenu}
            className="block text-cream hover:text-gold-400 transition-colors duration-300"
          >
            Menu
          </a>
          <a
            href="#about"
            onClick={closeMenu}
            className="block text-cream hover:text-gold-400 transition-colors duration-300"
          >
            About Us
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="block text-cream hover:text-gold-400 transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;