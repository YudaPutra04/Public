import React, { useContext } from 'react';
import { Plus } from 'lucide-react';
import { MenuItem as MenuItemType } from '../../data/menuData';
import { CartContext } from '../../context/CartContext';
import { ImageModalContext } from '../../context/ImageModalContext';

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const { addToCart } = useContext(CartContext);
  const { openModal } = useContext(ImageModalContext);
  
  const handleAddToCart = () => {
    addToCart(item);
  };

  const handleImageClick = () => {
    openModal(item.image, item.name);
  };

  return (
    <div className="menu-item group">
      <div className="overflow-hidden cursor-pointer" onClick={handleImageClick}>
        <img 
          src={item.image} 
          alt={item.name} 
          className="menu-image"
        />
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-brown-900">{item.name}</h3>
          <span className="font-medium text-brown-800">${item.price.toFixed(2)}</span>
        </div>
        
        <p className="mb-4 text-sm text-brown-600">{item.description}</p>
        
        <button
          onClick={handleAddToCart}
          className="flex items-center justify-center w-full gap-2 py-2 text-sm transition-all duration-300 btn btn-primary"
        >
          <Plus size={16} />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default MenuItem;