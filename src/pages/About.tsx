import React from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Award, Heart, Users, Coffee } from 'lucide-react';
import about from "@/assets/AboutUs.png";

export function About() {
  const values = [{
    icon: <Coffee className="w-8 h-8" />,
    title: 'Quality First',
    description: 'We source the finest beans and craft every cup with precision and care.'
  }, {
    icon: <Heart className="w-8 h-8" />,
    title: 'Community Love',
    description: 'Building connections one conversation at a time in our welcoming space.'
  }, {
    icon: <Award className="w-8 h-8" />,
    title: 'Excellence',
    description: 'Award-winning Caféra dedicated to perfecting the art of coffee.'
  }, {
    icon: <Users className="w-8 h-8" />,
    title: 'Sustainability',
    description: 'Committed to ethical sourcing and environmental responsibility.'
  }];
  const team = [{
    name: 'John Smith',
    role: 'Manager',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    social: {
      facebook: '#',
      twitter: '#',
      instagram: '#'
    }
  }, {
    name: 'Sarah Johnson',
    role: 'Roast Master',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    social: {
      facebook: '#',
      twitter: '#',
      instagram: '#'
    }
  }, {
    name: 'Michael Chen',
    role: 'Pastry Chef',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    social: {
      facebook: '#',
      twitter: '#',
      instagram: '#'
    }
  }, {
    name: 'Emma Wilson',
    role: 'Head Barista',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    social: {
      facebook: '#',
      twitter: '#',
      instagram: '#'
    }
  }];
  const timeline = [{
    year: '2010',
    event: 'Founded Caféra Cafe with a dream and a single espresso machine'
  }, {
    year: '2013',
    event: 'Expanded to our second location and launched our roastery'
  }, {
    year: '2016',
    event: "Won 'Best Coffee Shop' award from City Magazine"
  }, {
    year: '2019',
    event: 'Introduced our signature blend and mobile app'
  }, {
    year: '2024',
    event: 'Celebrating 14 years of serving amazing coffee'
  }];
  return <div className="min-h-screen bg-[#1A1A1A]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 bg-[#1A1A1A]">
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
            Our Story
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6">
            <span
              className="bg-gradient-to-r from-[#F5E6D3] via-[#DCAB6B] to-[#B68973] bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              Brewing Passion Since 2010
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            What started as a small neighborhood cafe has grown into a beloved
            community hub. We're passionate about exceptional coffee, warm
            hospitality, and creating moments that matter.
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 md:px-8 bg-[#1A1A1A]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
          }}>
              <img src={about} alt="Cafe Interior" className="rounded-3xl w-full h-[500px] object-cover shadow-2xl" />
            </motion.div>

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
          }} className="space-y-6 text-white">
              <h2 className="text-4xl md:text-5xl font-bold">
                More Than Just Coffee
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Our founder, Maria Santos, opened Caféra with a vision: to create
                a third place between home and work where people could connect
                over exceptional coffee. Every detail, from our carefully
                curated playlist to our comfortable seating, is designed to make
                you feel at home.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                We partner directly with farmers, ensuring fair wages and
                sustainable practices. Our beans are roasted in small batches to
                guarantee freshness, and our baristas are trained in the art and
                science of coffee making.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-20 px-4 md:px-8 bg-[#1A1A1A]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-white order-2 lg:order-1"
            >
              <h2 className="text-4xl md:text-5xl font-bold">
                Premium Ingredients
                <br/>
                Perfect Brew
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                We believe that great coffee starts with exceptional ingredients. That's why we source only the finest, ethically-grown coffee beans from sustainable farms around the world. Each batch is carefully selected for its unique flavor profile and quality.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h4 className="text-[#DCAB6B] font-medium mb-2">Single-Origin Beans</h4>
                  <p className="text-gray-300 text-sm">Ethically sourced from sustainable farms worldwide</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h4 className="text-[#DCAB6B] font-medium mb-2">Freshly Roasted</h4>
                  <p className="text-gray-300 text-sm">Small batch roasted for optimal flavor and freshness</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h4 className="text-[#DCAB6B] font-medium mb-2">Premium Dairy</h4>
                  <p className="text-gray-300 text-sm">Organic milk and plant-based alternatives</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h4 className="text-[#DCAB6B] font-medium mb-2">House-Made</h4>
                  <p className="text-gray-300 text-sm">Artisanal syrups and natural flavorings</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <img 
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                alt="Coffee Ingredients and Tools" 
                className="rounded-3xl w-full h-[500px] object-cover shadow-2xl" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 md:px-8 bg-[#1A1A1A]">
        <div className="container mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <span className="text-[#DCAB6B] font-medium tracking-widest text-sm uppercase">
              Our Values
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
              What We Stand For
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative group h-full hover:z-10"
                whileHover={{ 
                  scale: 1.03,
                  transition: {
                    type: 'spring',
                    stiffness: 400,
                    damping: 15
                  }
                }}
                transition={{ 
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100,
                  damping: 15,
                  when: "beforeChildren",
                  staggerChildren: 0.1
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#DCAB6B]/20 to-[#3D230A]/30 rounded-3xl blur-md" />
                <div className="relative h-full backdrop-blur-xl bg-gradient-to-br from-white/10 to-[#3D230A]/5 border border-[#DCAB6B]/30 rounded-3xl p-8 text-center space-y-5 transition-all duration-500 overflow-hidden">
                  {/* Animated background elements */}
                  <div className="absolute inset-0">
                    <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(220,171,107,0.1)_0%,transparent_70%)] animate-spin-slow" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#DCAB6B] to-[#f3d5a8] mb-3 transition-all duration-500">
                      {value.title}
                    </h3>
                    <p className="text-white leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                  
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 md:px-8 bg-[#1A1A1A]">
        <div className="container mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <span className="text-[#DCAB6B] font-medium tracking-widest text-sm uppercase">
              Meet The Team
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
              The People Behind Your Cup
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-transparent rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* info */}
                <div className="p-6 pt-4 text-center mx-4 -mt-20 relative z-10 rounded-lg
                  bg-white/80 backdrop-blur-sm
                  border border-white/20
                  shadow-lg
                  hover:bg-white/90 hover:backdrop-blur-md transition-all duration-300">
                  <h3 className="text-xl font-serif font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-[#211305] font-medium mb-4">{member.role}</p>
                  <div className="flex justify-center space-x-4">
                    {Object.entries(member.social).map(([platform, url]) => (
                      <a 
                        key={platform} 
                        href={url} 
                        className="text-gray-500 hover:text-[#DCAB6B] transition-colors"
                        aria-label={`${member.name}'s ${platform}`}
                      >
                        <img 
                          src={`https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/${platform}.svg`} 
                          alt={platform}
                          className="w-5 h-5"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-[#1A1A1A]">
        <motion.div 
          initial={{
            opacity: 0,
            y: 30
          }} 
          whileInView={{
            opacity: 1,
            y: 0
          }} 
          viewport={{
            once: true
          }} 
          className="container mx-auto rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Come Visit Us
          </h2>
          <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
            Experience the warmth of our cafe and taste the difference passion
            makes. We can't wait to serve you!
          </p>
          <button className="bg-gradient-to-r from-[#DCAB6B] to-[#3D230A] border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] text-white px-8 py-4 rounded-full font-medium hover:shadow-[0_0_15px_rgba(255,155,106,0.4)]
                  transition-all duration-300
                  overflow-hidden
                  hover:brightness-110">
            Make a Reservation
          </button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>;
}