import React, { useContext } from 'react';
import { ShoppingBag } from 'lucide-react';
import { CartContext } from '../../context/CartContext';
import CartModal from './CartModal';

const CartIcon: React.FC = () => {
  const { toggleCart, cartCount, isCartOpen } = useContext(CartContext);

  return (
    <div className="relative">
      <button
        onClick={toggleCart}
        className="flex items-center justify-center w-10 h-10 text-cream transition-all duration-300 rounded-full hover:bg-brown-600 focus:outline-none"
        aria-label="Toggle cart"
      >
        <ShoppingBag size={20} />
        {cartCount > 0 && (
          <span className="absolute flex items-center justify-center w-5 h-5 text-xs font-bold text-brown-900 bg-gold-400 rounded-full -top-1 -right-1">
            {cartCount}
          </span>
        )}
      </button>
      
      <CartModal isOpen={isCartOpen} />
    </div>
  );
};

export default CartIcon;