import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import LatteArt from "@/assets/LatteArt.jpg";

export function AboutSection() {
  const navigate = useNavigate();
  return <section id="about" className="py-20 px-4 md:px-8 bg-[#1A1A1A] text-white overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Collage */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="relative">
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Cafe Interior" className="rounded-2xl w-full h-48 object-cover hover:opacity-90 transition-opacity" />
                <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Coffee Brewing" className="rounded-2xl w-full h-64 object-cover hover:opacity-90 transition-opacity" />
              </div>
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Barista" className="rounded-2xl w-full h-64 object-cover hover:opacity-90 transition-opacity" />
                <img src={LatteArt} alt="Latte Art" className="rounded-2xl w-full h-48 object-cover hover:opacity-90 transition-opacity" />
              </div>
            </div>

            {/* Decorative Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#FF9B6A] opacity-20">
                <path fill="currentColor" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,70.6,32.2C59,42.9,47.1,51.4,34.8,58.6C22.5,65.8,9.8,71.7,-1.8,74.8C-13.4,77.9,-24,78.2,-34.7,73.1C-45.4,68,-56.2,57.5,-64.8,45.4C-73.4,33.3,-79.8,19.6,-80.7,5.5C-81.6,-8.6,-77,-23.1,-68.1,-35.1C-59.2,-47.1,-46,-56.6,-32.8,-64.3C-19.6,-72,-6.4,-77.9,5.2,-86.9L44.7,-76.4Z" transform="translate(100 100)" />
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