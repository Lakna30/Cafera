import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { MapPin, Clock, Mail, Phone, Send, CheckCircle } from 'lucide-react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 5000);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const contactInfo = [{
    icon: <MapPin className="w-6 h-6" />,
    title: 'Visit Us',
    details: ['123 Coffee Street', 'Downtown District', 'New York, NY 10001']
  }, {
    icon: <Phone className="w-6 h-6" />,
    title: 'Call Us',
    details: ['Main: (555) 123-4567', 'Reservations: (555) 123-4568']
  }, {
    icon: <Mail className="w-6 h-6" />,
    title: 'Email Us',
    details: ['info@cafera.com', 'reservations@cafera.com']
  }, {
    icon: <Clock className="w-6 h-6" />,
    title: 'Hours',
    details: ['Mon-Fri: 7:00 AM - 8:00 PM', 'Sat-Sun: 8:00 AM - 9:00 PM']
  }];
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
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mt-4 mb-6">
            <span
              className="bg-gradient-to-r from-[#F5E6D3] via-[#DCAB6B] to-[#B68973] bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              Contact Us
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Have a question, feedback, or just want to say hello? We'd love to
            hear from you!
          </p>
        </motion.div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-12 px-4 md:px-8 bg-[#1A1A1A]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} 
          className="rounded-[3rem] p-8 md:p-12"
          style={{
            background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.36)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(12px)'
          }}>
            <h2 className="text-3xl font-bold text-white mb-10">
                Send Us a Message
              </h2>

              {submitted ? <motion.div initial={{
              opacity: 0,
              scale: 0.9
            }} animate={{
              opacity: 1,
              scale: 1
            }} className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-[#FF9B6A] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600">
                    We'll get back to you within 24 hours.
                  </p>
                </motion.div> : <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-white/80 font-medium mb-2">
                      Name *
                    </label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-2xl bg-[#1A1A1A] border-2 border-transparent focus:border-[#DCAB6B] outline-none transition-colors" placeholder="Your name" />
                  </div>

                  <div>
                    <label className="block text-white/80 font-medium mb-2">
                      Email *
                    </label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-2xl bg-[#1A1A1A] border-2 border-transparent focus:border-[#DCAB6B] outline-none transition-colors" placeholder="your@email.com" />
                  </div>

                  <div>
                    <label className="block text-white/80 font-medium mb-2">
                      Subject *
                    </label>
                    <select 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleChange} 
                      required
                      className="w-full px-4 py-3 rounded-2xl bg-[#1A1A1A] border-2 border-transparent focus:border-[#DCAB6B] outline-none transition-colors appearance-none text-gray-400"
                    >
                      <option value="" className="text-gray-400">Select a subject</option>
                      <option value="reservation" className="text-gray-400">Reservation Inquiry</option>
                      <option value="feedback" className="text-gray-400">Feedback</option>
                      <option value="event" className="text-gray-400">Event Inquiry</option>
                      <option value="other" className="text-gray-400">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white/80 font-medium mb-2">
                      Message *
                    </label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 rounded-2xl bg-[#1A1A1A] border-2 border-transparent focus:border-[#DCAB6B] outline-none transition-colors resize-none" placeholder="Tell us what's on your mind..." />
                  </div>

                  <button type="submit" className="w-full text-white px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2
                  bg-gradient-to-r from-[#DCAB6B] to-[#3D230A]
                  border border-white/20
                  shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]
                  hover:shadow-[0_0_15px_rgba(255,155,106,0.4)]
                  transition-all duration-300
                  overflow-hidden
                  hover:brightness-110
                  hover:scale-[1.02]">
                    <Send size={20} />
                    Send Message
                  </button>
                </form>}
            </motion.div>

            {/* Map Placeholder */}
            <motion.div initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="space-y-6">
              {/* Cafe Contact */}
              <div className="bg-[#2A2A2A] rounded-3xl p-8 space-y-6">
                <h3 className="text-2xl font-bold text-white">
                  Visit Our Cafe
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Located in the heart of downtown, our cafe is easily
                  accessible by public transport. Street parking is available,
                  and we're just a 5-minute walk from the subway station.
                </p>
                {/* Cafe info */}
                <div className="relative">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                  <div className="flex items-start gap-3 bg-transparent p-4 rounded-xl">
                    <MapPin className="w-5 h-5 text-[#DCAB6B] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-medium">Address</p>
                      <p className="text-gray-400 text-sm">
                        123 Coffee Street, Downtown District, NY 10001
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-transparent p-4 rounded-xl">
                    <Clock className="w-5 h-5 text-[#DCAB6B] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-medium">Hours</p>
                      <p className="text-gray-400 text-sm">
                        Mon-Fri: 7AM-8PM<br />Sat-Sun: 8AM-9PM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-transparent p-4 rounded-xl">
                    <Phone className="w-5 h-5 text-[#DCAB6B] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-medium">Phone</p>
                      <a href="tel:+11234567890" className="text-gray-400 text-sm hover:text-[#DCAB6B] transition-colors">
                        +1 (123) 456-7890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-transparent p-4 rounded-xl">
                    <Mail className="w-5 h-5 text-[#DCAB6B] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <a href="mailto:hello@cafera.com" className="text-gray-400 text-sm hover:text-[#DCAB6B] transition-colors">
                        hello@cafera.com
                      </a>
                    </div>
                  </div>
                </div>
                {/* Social icons */}
                <div className="mt-0 pt-6 flex items-center justify-center space-x-6">
                  <h4 className="text-white font-medium text-xl">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/20 flex items-center justify-center hover:border-white transition-all duration-300">
                      <Facebook className="w-4 h-4 text-white fill-white/80" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/20 flex items-center justify-center hover:border-white transition-all duration-300">
                      <Instagram className="w-4 h-4 text-white" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/20 flex items-center justify-center hover:border-white transition-all duration-300">
                      <Twitter className="w-4 h-4 text-white fill-white/80" />
                    </a>
                  </div>
                </div>
              </div>
              </div>

              {/* Location */}
              <div className="bg-[#2A2A2A] rounded-lg h-[300px] overflow-hidden relative">
                <iframe 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  scrolling="no" 
                  marginHeight={0} 
                  marginWidth={0} 
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-74.0060%2C40.7128%2C-73.9940%2C40.7228&layer=mapnik&marker=40.7178,-74.0000"
                  className="rounded-lg"
                >
                </iframe>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-lg">
                  <a 
                    href="https://www.openstreetmap.org/?mlat=40.7178&mlon=-74.0000#map=17/40.7178/-74.0000" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-[#1A1A1A] hover:text-[#DCAB6B] transition-colors flex items-center gap-1"
                  >
                    <MapPin className="w-4 h-4" />
                    View Larger Map
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
        }} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400">Quick answers to common questions</p>
          </motion.div>

          <div className="space-y-4">
            {[{
            q: 'Do you offer WiFi?',
            a: 'Yes! We provide free high-speed WiFi to all our customers. The password is available at the counter.'
          }, {
            q: 'Are you pet-friendly?',
            a: 'We love pets! Well-behaved dogs are welcome on our outdoor patio area.'
          }, {
            q: 'Do you cater events?',
            a: 'Absolutely! We offer catering services for corporate events, parties, and special occasions. Contact us for a custom quote.'
          }, {
            q: 'Can I work from the cafe?',
            a: 'Of course! We welcome remote workers. We have plenty of outlets and comfortable seating. Just be mindful during peak hours.'
          }].map((faq, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="bg-[#2A2A2A] rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      <Footer />
    </div>;
}