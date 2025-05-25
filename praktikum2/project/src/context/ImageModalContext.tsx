import React, { createContext, useState } from 'react';

interface ImageModalContextType {
  isModalOpen: boolean;
  imageUrl: string;
  imageAlt: string;
  openModal: (url: string, alt: string) => void;
  closeModal: () => void;
}

export const ImageModalContext = createContext<ImageModalContextType>({
  isModalOpen: false,
  imageUrl: '',
  imageAlt: '',
  openModal: () => {},
  closeModal: () => {},
});

interface ImageModalProviderProps {
  children: React.ReactNode;
}

export const ImageModalProvider: React.FC<ImageModalProviderProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [imageAlt, setImageAlt] = useState('');

  const openModal = (url: string, alt: string) => {
    setImageUrl(url);
    setImageAlt(alt);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ImageModalContext.Provider
      value={{
        isModalOpen,
        imageUrl,
        imageAlt,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ImageModalContext.Provider>
  );
};