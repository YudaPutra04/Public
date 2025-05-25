import React from 'react';
import { Category } from '../../data/menuData';

interface MenuFilterProps {
  categories: { id: Category; name: string }[];
  activeCategory: Category | 'all';
  setActiveCategory: (category: Category | 'all') => void;
}

const MenuFilter: React.FC<MenuFilterProps> = ({ 
  categories, 
  activeCategory, 
  setActiveCategory 
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      <button
        onClick={() => setActiveCategory('all')}
        className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
          activeCategory === 'all'
            ? 'bg-brown-700 text-cream'
            : 'bg-brown-100 text-brown-800 hover:bg-brown-200'
        }`}
      >
        All Items
      </button>
      
      {categories.map(category => (
        <button
          key={category.id}
          onClick={() => setActiveCategory(category.id)}
          className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
            activeCategory === category.id
              ? 'bg-brown-700 text-cream'
              : 'bg-brown-100 text-brown-800 hover:bg-brown-200'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default MenuFilter;