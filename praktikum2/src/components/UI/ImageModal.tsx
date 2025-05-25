import React, { useContext, useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import { ImageModalContext } from '../../context/ImageModalContext';

const ImageModal: React.FC = () => {
  const { isModalOpen, imageUrl, imageAlt, closeModal } = useContext(ImageModalContext);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = '';
    };
  }, [isModalOpen, closeModal]);

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div 
        ref={modalRef}
        className="relative max-w-4xl mx-4 overflow-hidden bg-white rounded-lg shadow-xl"
      >
        <div className="relative">
          <img 
            src={imageUrl} 
            alt={imageAlt} 
            className="max-h-[80vh] object-contain"
          />
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 flex items-center justify-center w-10 h-10 text-white transition-colors duration-300 bg-black bg-opacity-50 rounded-full hover:bg-opacity-70"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-4 text-center">
          <h3 className="text-lg font-medium text-brown-900">{imageAlt}</h3>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;