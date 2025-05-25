import React from 'react';
import { Coffee, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 text-cream bg-brown-900">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-4 sm:grid-cols-2">
          <div>
            <div className="flex items-center mb-4 space-x-2">
              <Coffee size={24} />
              <span className="text-xl font-bold">Brew Haven</span>
            </div>
            <p className="mb-4 text-sm text-brown-300">
              Crafting exceptional coffee experiences since 2010. Every cup tells a story.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-brown-300 hover:text-gold-400 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-brown-300 hover:text-gold-400 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-brown-300 hover:text-gold-400 transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-brown-300 hover:text-gold-400 transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#menu" className="text-brown-300 hover:text-gold-400 transition-colors duration-300">Menu</a>
              </li>
              <li>
                <a href="#about" className="text-brown-300 hover:text-gold-400 transition-colors duration-300">About Us</a>
              </li>
              <li>
                <a href="#contact" className="text-brown-300 hover:text-gold-400 transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Hours</h3>
            <ul className="space-y-2">
              <li className="text-brown-300">Monday - Friday: 7am - 8pm</li>
              <li className="text-brown-300">Saturday - Sunday: 8am - 9pm</li>
              <li className="mt-4 text-brown-300">Happy Hour: 4pm - 6pm Daily</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Newsletter</h3>
            <p className="mb-4 text-sm text-brown-300">
              Subscribe to our newsletter for updates, promotions, and coffee tips.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 text-brown-900 bg-white rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 text-cream bg-gold-400 hover:bg-gold-500 rounded-r-md transition-colors duration-300"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 mt-8 text-center border-t border-brown-800">
          <p className="text-sm text-brown-400">
            &copy; {new Date().getFullYear()} Brew Haven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;