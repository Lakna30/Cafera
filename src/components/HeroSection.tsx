import { motion } from 'framer-motion';
import HeroImg from "@/assets/HeroImg.png";

export function HeroSection() {
  return <section className="pt-24 pb-12 px-4 md:px-8 bg-[#1A1A1A]">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.8
    }} className="container mx-auto bg-[#F5E6D3] rounded-[3rem] relative overflow-hidden min-h-[600px] flex items-center">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {/* Coffee beans scattered (simulated with circles for now or simple svgs) */}
          <motion.div animate={{
          rotate: 360
        }} transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }} className="absolute top-10 right-10 w-4 h-4 rounded-full bg-[#3e2723] opacity-20" />
          <motion.div animate={{
          rotate: -360
        }} transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear'
        }} className="absolute bottom-20 left-20 w-6 h-6 rounded-full bg-[#3e2723] opacity-10" />

          {/* Organic blob shape top left */}
          <svg className="absolute top-0 left-0 w-64 h-64 text-[#FF9B6A] opacity-10 transform -translate-x-1/2 -translate-y-1/2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,70.6,32.2C59,42.9,47.1,51.4,34.8,58.6C22.5,65.8,9.8,71.7,-1.8,74.8C-13.4,77.9,-24,78.2,-34.7,73.1C-45.4,68,-56.2,57.5,-64.8,45.4C-73.4,33.3,-79.8,19.6,-80.7,5.5C-81.6,-8.6,-77,-23.1,-68.1,-35.1C-59.2,-47.1,-46,-56.6,-32.8,-64.3C-19.6,-72,-6.4,-77.9,5.2,-86.9L44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full p-8 md:p-16 relative z-10">
          {/* Text Content */}
          <div className="space-y-6 max-w-xl">
            <motion.span initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.2
          }} className="text-sm font-medium tracking-widest text-gray-500 uppercase">
              Cafe
            </motion.span>

            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3
          }} className="text-5xl md:text-7xl font-bold text-[#1A1A1A] leading-tight">
              Homemade Coffee with{' '}
              <span className="text-[#FF9B6A]">Amazing Vibes</span>
            </motion.h1>

            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4
          }} className="text-gray-600 text-lg leading-relaxed">
              Experience the perfect blend of artisanal coffee and cozy
              atmosphere. We roast our beans daily to ensure the freshest taste
              in every cup.
            </motion.p>

            <motion.button initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.5
          }} className="bg-[#1A1A1A] text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors">
              Order Now
            </motion.button>
          </div>

          {/* Image Content */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: 0.4,
          duration: 0.8
        }} className="relative h-full flex items-center justify-center">
            {/* Main Coffee Image */}
            <div className="relative w-full max-w-md md:max-w-lg aspect-square">
              {/* Using the provided image URL */}
              <img src={HeroImg} alt="Coffee Splash" className="w-full h-full object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500" style={{
              mixBlendMode: 'multiply'
            }} />

              {/* Decorative blob behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 opacity-20">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#FF9B6A]">
                  <path fill="currentColor" d="M41.7,-68.4C53.9,-62.3,63.9,-51.8,71.4,-39.8C78.9,-27.8,83.9,-14.3,82.6,-1.1C81.3,12.1,73.7,25,64.8,36.1C55.9,47.2,45.7,56.5,34.2,63.3C22.7,70.1,9.9,74.4,-2.1,78C-14.1,81.6,-25.3,84.5,-35.8,80.1C-46.3,75.7,-56.1,64,-64.4,51.8C-72.7,39.6,-79.5,26.9,-80.9,13.6C-82.3,0.3,-78.3,-13.6,-71.1,-25.6C-63.9,-37.6,-53.5,-47.7,-42.2,-54.2C-30.9,-60.7,-18.7,-63.6,-5.9,-62.6C6.9,-61.6,29.5,-74.5,41.7,-68.4Z" transform="translate(100 100)" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>;
}