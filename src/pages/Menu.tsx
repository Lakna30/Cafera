import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Leaf } from 'lucide-react';
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
      image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      featured: true
    }, {
      name: 'Cappuccino',
      description: 'Espresso with steamed milk and velvety foam',
      price: '$4.50',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }, {
      name: 'Latte',
      description: 'Smooth espresso with steamed milk, lightly foamed',
      price: '$4.75',
      image: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }, {
      name: 'Flat White',
      description: 'Microfoam perfection with double ristretto',
      price: '$4.50',
      image: 'https://images.unsplash.com/photo-1520970014086-2208d157c9e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }, {
      name: 'Americano',
      description: 'Espresso diluted with hot water for a smooth taste',
      price: '$3.75',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }, {
      name: 'Mocha',
      description: 'Espresso with chocolate and steamed milk',
      price: '$5.25',
      image: 'https://images.unsplash.com/photo-1607260550778-aa9d29444ce1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
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
      image: 'https://images.unsplash.com/photo-1607920591413-4ec007e70023?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      featured: true
    }, {
      name: 'Tiramisu',
      description: 'Classic Italian dessert with espresso-soaked ladyfingers',
      price: '$6.50',
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }, {
      name: 'Cheesecake',
      description: 'New York style with berry compote',
      price: '$6.00',
      image: 'https://images.unsplash.com/photo-1533134242820-b3b5e0c7e2c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
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
      image: 'https://images.unsplash.com/photo-1536013266905-d5d7b0e6e8f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      featured: true
    }, {
      name: 'Chai Latte',
      description: 'Spiced black tea with steamed milk and honey',
      price: '$4.75',
      image: 'https://images.unsplash.com/photo-1578899952107-9d0fa0a2fc8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
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
          <span className="text-[#FF9B6A] font-medium tracking-widest text-sm uppercase">
            Our Menu
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mt-4 mb-6">
            Discover Your <span className="text-[#FF9B6A]">Favorite</span>
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
            {categories.map(category => <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category.id ? 'bg-[#FF9B6A] text-white shadow-lg' : 'bg-[#2A2A2A] text-gray-400 hover:bg-[#3A3A3A]'}`}>
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
          }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => <motion.div key={index} initial={{
              opacity: 0,
              scale: 0.9
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              delay: index * 0.1
            }} className="bg-[#2A2A2A] rounded-3xl overflow-hidden group hover:shadow-2xl hover:shadow-[#FF9B6A]/20 transition-all duration-300">
                    <div className="relative h-64 overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      {item.featured && <div className="absolute top-4 right-4 bg-[#FF9B6A] text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                          <Leaf size={16} />
                          Featured
                        </div>}
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-2xl font-bold text-white">
                          {item.name}
                        </h3>
                        <span className="text-[#FF9B6A] font-bold text-xl">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
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