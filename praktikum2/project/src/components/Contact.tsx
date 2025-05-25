import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-20 bg-cream">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">
          Have questions or feedback? We'd love to hear from you!
        </p>

        <div className="grid grid-cols-1 gap-8 mt-12 lg:grid-cols-2">
          <div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-6 text-2xl font-bold text-brown-900">Get In Touch</h3>
              
              {isSubmitted ? (
                <div className="p-4 mb-6 text-center text-success-700 bg-success-100 rounded-md">
                  Thank you for your message! We'll get back to you soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-brown-800">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500 ${
                        errors.name ? 'border-error-500' : 'border-brown-200'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-error-500">{errors.name}</p>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-brown-800">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500 ${
                        errors.email ? 'border-error-500' : 'border-brown-200'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-error-500">{errors.email}</p>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-brown-800">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500 ${
                        errors.message ? 'border-error-500' : 'border-brown-200'
                      }`}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-error-500">{errors.message}</p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 btn btn-primary"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>

          <div>
            <div className="h-64 mb-6 overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9914406081493!2d2.2922926158339604!3d48.85837360866272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1623158354230!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Map"
              ></iframe>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-6 text-2xl font-bold text-brown-900">Visit Us</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-cream bg-brown-700 rounded-full">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-brown-900">Address</h4>
                    <p className="text-brown-600">123 Coffee Street, Bistro District, Paris, France</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-cream bg-brown-700 rounded-full">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-brown-900">Phone</h4>
                    <p className="text-brown-600">+33 (0) 1 23 45 67 89</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-cream bg-brown-700 rounded-full">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-brown-900">Email</h4>
                    <p className="text-brown-600">info@brewhaven.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-cream bg-brown-700 rounded-full">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-brown-900">Hours</h4>
                    <p className="text-brown-600">Monday - Friday: 7am - 8pm</p>
                    <p className="text-brown-600">Saturday - Sunday: 8am - 9pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;