import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import LatteArt from "@/assets/LatteArt.jpg";
import image1 from "@/assets/about.png";

export function AboutSection() {
  const navigate = useNavigate();
  return <section id="about" className="py-20 px-4 md:px-8 bg-[#1A1A1A] text-white overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[500px] md:h-[600px]"
          >
            {/* Top-Left Image */}
            <div className="absolute top-0 left-0 w-[60%] h-[50%] z-10">
              <img
                src={image1}
                alt="Cafe Interior"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
            
            {/* Bottom-Right Image */}
            <div className="absolute bottom-0 right-0 w-[70%] h-[60%] z-10">
              <img
                src={LatteArt}
                alt="Latte Art"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Large Orange Blob - Top Right */}
            <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] z-0 opacity-70">
              <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="blobGradient1" cx="50%" cy="50%" r="70%" fx="30%" fy="30%">
                    <stop offset="0%" stopColor="#FF9B6A" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#1A1A1A" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <path fill="url(#blobGradient1)" d="M450,250c0,110.5-89.5,200-200,200S50,360.5,50,250S139.5,50,250,50S450,139.5,450,250z" />
              </svg>
            </div>

            {/* Medium Orange Blob - Middle Left */}
            <div className="absolute top-1/3 left-[-5%] w-[40%] h-[40%] z-0 opacity-60">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="blobGradient2" cx="50%" cy="50%" r="70%" fx="30%" fy="30%">
                    <stop offset="0%" stopColor="#FF7B3D" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#1A1A1A" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <path fill="url(#blobGradient2)" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,70.6,32.2C59,42.9,47.1,51.4,34.8,58.6C22.5,65.8,9.8,71.7,-1.8,74.8C-13.4,77.9,-24,78.2,-34.7,73.1C-45.4,68,-56.2,57.5,-64.8,45.4C-73.4,33.3,-79.8,19.6,-80.7,5.5C-81.6,-8.6,-77,-23.1,-68.1,-35.1C-59.2,-47.1,-46,-56.6,-32.8,-64.3C-19.6,-72,-6.4,-77.9,5.2,-86.9L44.7,-76.4Z" transform="translate(100 100)" />
              </svg>
            </div>

            {/* Small Orange Circles with Gradient */}
            <div className="absolute top-[10%] right-[15%] w-16 h-16 z-0">
              <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="circleGradient1" cx="50%" cy="50%" r="70%" fx="30%" fy="30%">
                    <stop offset="0%" stopColor="#FF7B3D" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#1A1A1A" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <circle cx="32" cy="32" r="32" fill="url(#circleGradient1)" />
              </svg>
            </div>
            <div className="absolute top-[15%] right-[25%] w-8 h-8 z-0">
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="circleGradient2" cx="50%" cy="50%" r="70%" fx="30%" fy="30%">
                    <stop offset="0%" stopColor="#FF9B6A" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#1A1A1A" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <circle cx="16" cy="16" r="16" fill="url(#circleGradient2)" />
              </svg>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="space-y-6">
            <span className="text-[#DCAB6B] font-medium tracking-widest text-sm uppercase">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              About Caféra
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Caféra started with a simple mission: to serve the
              best coffee in town while creating a space where community
              thrives. Our beans are ethically sourced from sustainable farms
              across the globe and roasted in-house to perfection.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Whether you're looking for a quiet corner to work, a place to
              catch up with friends, or just a quick caffeine fix, we've got you
              covered. Come taste the difference passion makes.
            </p>
            <button 
              onClick={() => navigate('/about')}
              className="relative px-10 py-3 rounded-full font-medium text-white mt-4
                bg-gradient-to-r from-[#DCAB6B] to-[#3D230A]
                border border-white/20
                shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]
                hover:shadow-[0_0_15px_rgba(255,155,106,0.4)]
                transition-all duration-300
                overflow-hidden
                hover:brightness-110"
            >
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </section>;
}