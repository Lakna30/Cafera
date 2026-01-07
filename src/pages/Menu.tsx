import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import Espresso from "@/assets/Espresso.png";
import Cappuccino from "@/assets/Cappuccino.png";
import Latte from "@/assets/Latte.png";
import FlatWhite from "@/assets/Flat White.png";
import Americano from "@/assets/Americano.png";
import Mocha from "@/assets/Mocha.png";
import Cheesecake from "@/assets/Cheesecake.png";
import Tiramisu from "@/assets/Tiramisu.png";
import Brownie from "@/assets/Brownie.png";
import Matcha from "@/assets/Matcha.png";
import Chai from "@/assets/Chai.png";

export function Menu() {
  const [activeCategory, setActiveCategory] = useState('coffee');
  const categories = [{
    id: 'coffee',
    name: 'Coffee'
  }, {
    id: 'food',
    name: 'Food'
  }, {
    id: 'desserts',
    name: 'Desserts'
  }, {
    id: 'drinks',
    name: 'Other Drinks'
  }];
  const menuItems = {
    coffee: [{
      name: 'Espresso',
      description: 'Rich, bold shot of pure coffee perfection',
      price: '$3.50',
      image: Espresso,
      featured: true
    }, {
      name: 'Cappuccino',
      description: 'Espresso with steamed milk and velvety foam',
      price: '$4.50',
      image: Cappuccino
    }, {
      name: 'Latte',
      description: 'Smooth espresso with steamed milk, lightly foamed',
      price: '$4.75',
      image: Latte
    }, {
      name: 'Flat White',
      description: 'Microfoam perfection with double ristretto',
      price: '$4.50',
      image: FlatWhite
    }, {
      name: 'Americano',
      description: 'Espresso diluted with hot water for a smooth taste',
      price: '$3.75',
      image: Americano
    }, {
      name: 'Mocha',
      description: 'Espresso with chocolate and steamed milk',
      price: '$5.25',
      image: Mocha,
      featured: true
    }],
    food: [{
      name: 'Avocado Toast',
      description: 'Sourdough with smashed avocado, cherry tomatoes, feta',
      price: '$12.00',
      image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      featured: true
    }, {
      name: 'Breakfast Burrito',
      description: 'Scrambled eggs, bacon, cheese, salsa in a warm tortilla',
      price: '$10.50',
      image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }, {
      name: 'Croissant Sandwich',
      description: 'Ham, cheese, and arugula on a buttery croissant',
      price: '$9.00',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }, {
      name: 'Acai Bowl',
      description: 'Acai blend topped with granola, berries, and honey',
      price: '$11.00',
      image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }],
    desserts: [{
      name: 'Chocolate Brownie',
      description: 'Fudgy brownie with walnuts, served warm',
      price: '$5.50',
      image: Brownie,
      featured: true
    }, {
      name: 'Tiramisu',
      description: 'Classic Italian dessert with espresso-soaked ladyfingers',
      price: '$6.50',
      image: Tiramisu
    }, {
      name: 'Cheesecake',
      description: 'New York style with berry compote',
      price: '$6.00',
      image: Cheesecake
    }, {
      name: 'Cookies',
      description: 'Freshly baked chocolate chip or oatmeal raisin',
      price: '$3.00',
      image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }],
    drinks: [{
      name: 'Matcha Latte',
      description: 'Premium Japanese matcha with steamed milk',
      price: '$5.50',
      image: Matcha,
      featured: true
    }, {
      name: 'Chai Latte',
      description: 'Spiced black tea with steamed milk and honey',
      price: '$4.75',
      image: Chai
    }, {
      name: 'Fresh Juice',
      description: 'Orange, apple, or carrot juice squeezed daily',
      price: '$5.00',
      image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }, {
      name: 'Smoothie',
      description: 'Tropical blend of mango, pineapple, and coconut',
      price: '$6.50',
      image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }]
  };
  return <div className="min-h-screen bg-[#1A1A1A]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 md:px-8 bg-[#1A1A1A]">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="container mx-auto text-center">
          <span className="text-[#DCAB6B] font-medium tracking-widest text-sm uppercase">
            Our Menu
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mt-4 mb-6">
            <span
              className="bg-gradient-to-r from-[#F5E6D3] via-[#DCAB6B] to-[#B68973] bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              Discover Your Favorite
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            From artisanal coffee to fresh pastries, every item is crafted with
            care and quality ingredients.
          </p>
        </motion.div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 px-4 md:px-8 bg-[#1A1A1A] sticky top-20 z-40 backdrop-blur-md bg-[#1A1A1A]/90">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category.id ? 'bg-gradient-to-r from-[#211305] border border-white/70 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] text-white shadow-lg hover:shadow-[0_0_15px_rgba(255,155,106,0.4)] hover:brightness-110' : 'bg-[#2A2A2A] text-gray-400 hover:bg-[#3A3A3A]'}`}>
                {category.name}
              </button>)}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12 px-4 md:px-8 bg-[#1A1A1A]">
        <div className="container mx-auto">
          <AnimatePresence mode="wait">
            <motion.div key={activeCategory} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} exit={{
            opacity: 0,
            y: -20
          }} transition={{
            duration: 0.3
          }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
              {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => <motion.div key={index} initial={{
              opacity: 0,
              scale: 0.9
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              delay: index * 0.1
            }} className="golden-border group h-[480px] transition-all duration-300">
                    <div className="relative w-full h-full bg-[#1A1A1A] rounded-[1.4rem] overflow-hidden flex flex-col">
                      <div className="relative h-[300px] overflow-hidden group-hover:opacity-90 transition-opacity duration-300">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/90 via-30% to-transparent"></div>
                        {item.featured && (
                        <div
                          className="absolute top-4 right-4 px-4 py-1.5 rounded-full text-xs font-medium flex items-center gap-1"
                          style={{
                            background: 'rgba(26, 26, 26, 0.7)',
                            backdropFilter: 'blur(8px)',
                            WebkitBackdropFilter: 'blur(8px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            color: '#DCAB6B',
                            fontWeight: 600,
                            letterSpacing: '0.5px'
                          }}
                        >
<span className="text-yellow-400">★</span> Featured
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex-grow flex flex-col text-center">
                      <div className="space-y-2 mb-4">
                        <h3 className="text-2xl font-bold text-white tracking-tight">
                          {item.name}
                        </h3>
                        <p className="text-gray-300 text-sm font-light">
                          {item.description}
                        </p>
                      </div>
                      <div className="mt-auto flex items-center justify-between pt-4 px-2">
                        <p className="text-[#DCAB6B] text-lg font-medium">
                          {item.price}
                        </p>
                        <button 
                          className="py-2.5 px-6 text-sm font-medium rounded-full transition-all duration-300
                          bg-gradient-to-r from-[#DCAB6B] to-[#3D230A] hover:from-[#E6B97E] hover:to-[#4A2E12]
                          text-white hover:shadow-lg hover:shadow-[#FF9B6A]/30 whitespace-nowrap"
                        >
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>)}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Allergen Info */}
      <section className="py-20 px-4 md:px-8 bg-[#1A1A1A]">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="container mx-auto bg-[#2A2A2A] rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Dietary Information
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We offer vegetarian, vegan, and gluten-free options. Please inform
            our staff of any allergies or dietary restrictions, and we'll be
            happy to accommodate your needs.
          </p>
        </motion.div>
      </section>

      <Footer />
    </div>;
}