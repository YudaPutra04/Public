import React, { useState } from 'react';
import { menuItems, categories, Category } from '../../data/menuData';
import MenuFilter from './MenuFilter';
import MenuItem from './MenuItem';

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-cream">
      <div className="container">
        <h2 className="section-title">Our Menu</h2>
        <p className="section-subtitle">
          Explore our carefully crafted menu of premium coffees and delicious treats,
          made with the finest ingredients and barista expertise.
        </p>

        <MenuFilter 
          categories={categories} 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />

        <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredItems.map(item => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;