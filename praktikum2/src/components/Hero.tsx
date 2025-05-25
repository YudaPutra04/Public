import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      className="relative flex items-center min-h-screen text-cream bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
      }}
    >
      <div className="container">
        <div className="max-w-2xl slide-in">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
            Exceptional Coffee <br />
            <span className="text-gold-400">Unforgettable Moments</span>
          </h1>
          <p className="mb-8 text-lg md:text-xl opacity-90">
            Experience the finest artisanal coffee in a cozy, welcoming 
            atmosphere. Our master baristas craft each cup with passion and precision.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <a
              href="#menu"
              className="btn btn-secondary px-6 py-3 text-center"
            >
              View Menu
            </a>
            <a
              href="#contact"
              className="btn border-2 border-cream text-cream hover:bg-cream hover:text-brown-900 px-6 py-3 text-center transition-colors duration-300"
            >
              Visit Us
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#menu" className="text-cream">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;