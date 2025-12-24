import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone } from 'lucide-react';
import App from "@/assets/App.png";

export function AppDownload() {
  return <section className="py-20 px-4 md:px-8 bg-[#1A1A1A]">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto bg-[#F5E6D3] rounded-[3rem] p-12 md:p-8 text-center relative overflow-hidden"
      >
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#FF9B6A] rounded-full mix-blend-multiply filter blur-xl opacity-20 transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#FF9B6A] rounded-full mix-blend-multiply filter blur-xl opacity-20 transform translate-x-1/2 translate-y-1/2" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* App Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md mx-auto"
          >
            <img 
              src={App} 
              alt="Caféra Mobile App" 
              className="w-full h-auto object-contain drop-shadow-2xl scale-[1.2]"
            />
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-left space-y-6"
          >
            <span className="text-[#3D230A] font-bold tracking-widest text-xs uppercase bg-white/50 px-4 py-1 rounded-full inline-block">
              Mobile App
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]">
              Download Our App
            </h2>

            <p className="text-gray-600 text-lg">
              Order ahead, earn rewards, and find your nearest cafe with our
              mobile app. Available for iOS and Android.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button className="text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 bg-gradient-to-r from-[#DCAB6B] to-[#3D230A]
                  border border-white/20
                  shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]
                  hover:shadow-[0_0_15px_rgba(255,155,106,0.4)]
                  transition-all duration-300
                  overflow-hidden
                  hover:brightness-110"
              >
                <Smartphone size={20} />
                Download Now
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>;
}