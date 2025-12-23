import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone } from 'lucide-react';
export function AppDownload() {
  return <section className="py-20 px-4 md:px-8 bg-[#1A1A1A]">
      <motion.div initial={{
      opacity: 0,
      y: 30
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true
    }} transition={{
      duration: 0.6
    }} className="container mx-auto bg-[#F5E6D3] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#FF9B6A] rounded-full mix-blend-multiply filter blur-xl opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#FF9B6A] rounded-full mix-blend-multiply filter blur-xl opacity-20 transform translate-x-1/2 translate-y-1/2"></div>

        <div className="relative z-10 max-w-2xl mx-auto space-y-8">
          <span className="text-[#FF9B6A] font-bold tracking-widest text-xs uppercase bg-white/50 px-4 py-1 rounded-full">
            Mobile App
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]">
            Download My APP
          </h2>

          <p className="text-gray-600 text-lg">
            Order ahead, earn rewards, and find your nearest cafe with our
            mobile app. Available for iOS and Android.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-[#FF9B6A] text-white px-8 py-4 rounded-full font-medium hover:bg-[#e88a5b] transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
              <Smartphone size={20} />
              Download Now
            </button>
          </div>
        </div>
      </motion.div>
    </section>;
}