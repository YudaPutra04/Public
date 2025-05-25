import React, { useContext, useRef, useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { CartContext } from '../../context/CartContext';

interface CartModalProps {
  isOpen: boolean;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen }) => {
  const { 
    cartItems, 
    closeCart, 
    removeFromCart, 
    updateQuantity, 
    cartTotal 
  } = useContext(CartContext);
  
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeCart();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, closeCart]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end bg-black bg-opacity-50">
      <div 
        ref={modalRef}
        className="flex flex-col w-full h-full max-w-md bg-white shadow-lg animate-slideIn sm:h-screen"
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-brown-900">Your Order</h2>
          <button 
            onClick={closeCart}
            className="p-1 text-brown-600 transition-colors duration-300 rounded-full hover:bg-brown-100 hover:text-brown-900"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="flex-grow p-4 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="mb-4 text-brown-300" />
              <p className="mb-2 text-lg font-medium text-brown-900">Your cart is empty</p>
              <p className="text-brown-600">Add some delicious items from our menu!</p>
              <button 
                onClick={closeCart}
                className="px-4 py-2 mt-6 font-medium text-cream transition-colors duration-300 rounded-md bg-brown-700 hover:bg-brown-800"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map(item => (
                <div 
                  key={item.id} 
                  className="flex items-center p-3 border rounded-lg"
                >
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="object-cover w-16 h-16 rounded-md"
                  />
                  
                  <div className="flex-grow ml-3">
                    <h3 className="font-medium text-brown-900">{item.name}</h3>
                    <p className="text-sm text-brown-600">${item.price.toFixed(2)}</p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="flex items-center justify-center w-7 h-7 text-brown-600 transition-colors duration-300 bg-brown-100 rounded-full hover:bg-brown-200"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={14} />
                    </button>
                    
                    <span className="w-6 text-center">{item.quantity}</span>
                    
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="flex items-center justify-center w-7 h-7 text-brown-600 transition-colors duration-300 bg-brown-100 rounded-full hover:bg-brown-200"
                      aria-label="Increase quantity"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-1 ml-3 text-brown-600 transition-colors duration-300 rounded-full hover:bg-brown-100"
                    aria-label="Remove item"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {cartItems.length > 0 && (
          <div className="p-4 border-t">
            <div className="flex justify-between mb-4">
              <span className="font-medium text-brown-600">Subtotal</span>
              <span className="font-medium text-brown-900">${cartTotal.toFixed(2)}</span>
            </div>
            <button className="w-full py-3 font-medium text-cream transition-colors duration-300 rounded-md bg-brown-700 hover:bg-brown-800">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;