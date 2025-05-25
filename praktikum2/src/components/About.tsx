import React from 'react';
import { Coffee, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-brown-50">
      <div className="container">
        <h2 className="section-title">About Brew Haven</h2>
        <p className="section-subtitle">
          Discover our story and the passion behind every cup we serve.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2">
          <div className="fade-in">
            <h3 className="mb-4 text-2xl font-bold text-brown-900">Our Story</h3>
            <p className="mb-4 text-brown-700">
              Founded in 2010, Brew Haven began as a small corner café with a big dream: 
              to create a space where coffee lovers could experience exceptional brews in a 
              warm, inviting atmosphere.
            </p>
            <p className="mb-4 text-brown-700">
              Over the years, we've grown but our commitment to quality has never wavered. 
              We source our beans ethically from sustainable farms around the world, roast them 
              in small batches, and prepare each cup with meticulous attention to detail.
            </p>
            <p className="text-brown-700">
              Today, Brew Haven is more than just a coffee shop—it's a community hub where 
              friendships form, ideas brew, and people come together over the simple pleasure 
              of a perfectly crafted cup of coffee.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-lg h-80 md:h-auto">
            <img
              src="https://images.pexels.com/photos/6205669/pexels-photo-6205669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Coffee being prepared"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-3">
          <div className="p-6 text-center transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-cream bg-brown-700 rounded-full">
              <Coffee size={24} />
            </div>
            <h3 className="mb-2 text-xl font-bold text-brown-900">Premium Beans</h3>
            <p className="text-brown-600">
              We source only the highest quality, ethically grown coffee beans from around the world.
            </p>
          </div>

          <div className="p-6 text-center transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-cream bg-brown-700 rounded-full">
              <Award size={24} />
            </div>
            <h3 className="mb-2 text-xl font-bold text-brown-900">Master Craftsmanship</h3>
            <p className="text-brown-600">
              Our baristas are trained in the art and science of coffee, ensuring a perfect cup every time.
            </p>
          </div>

          <div className="p-6 text-center transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-cream bg-brown-700 rounded-full">
              <Users size={24} />
            </div>
            <h3 className="mb-2 text-xl font-bold text-brown-900">Community Focus</h3>
            <p className="text-brown-600">
              We're proud to be a gathering place that brings people together and supports local initiatives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;