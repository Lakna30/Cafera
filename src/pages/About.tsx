import React from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Award, Heart, Users, Coffee } from 'lucide-react';
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
    description: 'Award-winning baristas dedicated to perfecting the art of coffee.'
  }, {
    icon: <Users className="w-8 h-8" />,
    title: 'Sustainability',
    description: 'Committed to ethical sourcing and environmental responsibility.'
  }];
  const team = [{
    name: 'Sarah Mitchell',
    role: 'Head Barista',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  }, {
    name: 'James Chen',
    role: 'Roast Master',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  }, {
    name: 'Emma Rodriguez',
    role: 'Pastry Chef',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  }, {
    name: 'Michael Park',
    role: 'Manager',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  }];
  const timeline = [{
    year: '2010',
    event: 'Founded netWO Cafe with a dream and a single espresso machine'
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
          <h1 className="text-5xl md:text-7xl font-bold text-white mt-4 mb-6">
            Brewing Passion Since 2010
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
              <img src="https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Cafe Interior" className="rounded-3xl w-full h-[500px] object-cover shadow-2xl" />
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
                Our founder, Maria Santos, opened netWO with a vision: to create
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl p-8 rounded-3xl text-center space-y-4 group transition-all duration-300 relative overflow-hidden cursor-pointer"
                style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)' }}
                whileHover={{ scale: 1.10, boxShadow: '0 16px 48px 0 rgba(31,38,135,0.25)' }}
              >
                <div className="text-[#DCAB6B] group-hover:text-white transition-colors mx-auto w-fit">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{value.title}</h3>
                <p className="text-gray-400 group-hover:text-white/90 transition-colors">
                  {value.description}
                </p>
                {/* Glass shine effect on hover */}
                <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-tr from-white/60 to-transparent" />
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => <motion.div key={index} initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="group">
                <div className="relative overflow-hidden rounded-3xl mb-4">
                  <img src={member.image} alt={member.name} className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent opacity-60"></div>
                </div>
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-[#DCAB6B]">{member.role}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 md:px-8 bg-[#1A1A1A]">
        <div className="container mx-auto max-w-4xl">
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
              Our Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
              Timeline
            </h2>
          </motion.div>

          <div className="space-y-12">
            {timeline.map((item, index) => <motion.div key={index} initial={{
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="flex items-center gap-8">
                <div className="flex-shrink-0 w-24 h-24 bg-[#DCAB6B] rounded-full flex items-center justify-center">
                  <span className="text-[#3D230A] font-bold text-xl">
                    {item.year}
                  </span>
                </div>
                <div className="flex-1 bg-[#2A2A2A] p-6 rounded-2xl">
                  <p className="text-gray-300 text-lg">{item.event}</p>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-[#1A1A1A]">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="container mx-auto bg-[#F5E6D3] rounded-[3rem] p-12 md:p-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            Come Visit Us
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Experience the warmth of our cafe and taste the difference passion
            makes. We can't wait to serve you!
          </p>
          <button className="bg-gradient-to-r from-[#DCAB6B] to-[#3D230A] border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] text-white px-8 py-4 rounded-full font-medium hover:shadow-[0_0_15px_rgba(255,155,106,0.4)]
                  transition-all duration-300
                  overflow-hidden
                  hover:brightness-110">
            Make a Reservation
          </button>
        </motion.div>
      </section>

      <Footer />
    </div>;
}