import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Bean, CupSoda, Utensils } from 'lucide-react';
export function ServicesSection() {
  const services = [{
    icon: <Coffee className="w-8 h-8" />,
    title: 'Premium Coffee',
    description: 'Hand-picked beans roasted to perfection for the ultimate flavor profile.'
  }, {
    icon: <Bean className="w-8 h-8" />,
    title: 'Fresh Beans',
    description: 'Buy our signature blends to enjoy the cafe experience at home.'
  }, {
    icon: <CupSoda className="w-8 h-8" />,
    title: 'Cold Brews',
    description: 'Refreshing cold brew and iced coffee options for warm days.'
  }, {
    icon: <Utensils className="w-8 h-8" />,
    title: 'Tasty Snacks',
    description: 'Freshly baked pastries and snacks to complement your drink.'
  }];
  return <section id="menu" className="py-20 px-4 md:px-8 bg-[#1A1A1A] text-white relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.span initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-[#DCAB6B] font-medium tracking-widest text-sm uppercase">
            Features
          </motion.span>
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.1
        }} className="text-4xl md:text-5xl font-bold mt-2">
            Our Services
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Column Services */}
          <div className="space-y-12">
            {services.slice(0, 2).map((service, index) => <motion.div key={index} initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.2
          }} className="flex flex-col md:items-end md:text-right space-y-3 group">
                <div className="p-3 bg-[#2A2A2A] rounded-2xl text-[#DCAB6B] group-hover:bg-[#DCAB6B]/40 group-hover:text-white transition-colors duration-300 w-fit">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-gray-400 max-w-xs">{service.description}</p>
              </motion.div>)}
          </div>

          {/* Center Image */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} className="relative h-80 md:h-96 flex items-center justify-center order-first md:order-none mb-12 md:mb-0">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-[#FF9B6A] opacity-10 rounded-full blur-3xl transform scale-75"></div>
              <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Coffee Service" className="w-full h-full object-contain drop-shadow-2xl relative z-10 rounded-full" />
            </div>
          </motion.div>

          {/* Right Column Services */}
          <div className="space-y-12">
            {services.slice(2, 4).map((service, index) => <motion.div key={index} initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.2
          }} className="flex flex-col items-start space-y-3 group">
                <div className="p-3 bg-[#2A2A2A] rounded-2xl text-[#DCAB6B] group-hover:bg-[#DCAB6B]/40 group-hover:text-white transition-colors duration-300 w-fit">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-gray-400 max-w-xs">{service.description}</p>
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
}