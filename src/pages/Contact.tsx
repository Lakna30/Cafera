import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
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
    details: ['info@netwo.com', 'reservations@netwo.com']
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
          <span className="text-[#FF9B6A] font-medium tracking-widest text-sm uppercase">
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mt-4 mb-6">
            Contact <span className="text-[#FF9B6A]">Us</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Have a question, feedback, or just want to say hello? We'd love to
            hear from you!
          </p>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4 md:px-8 bg-[#1A1A1A]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1
          }} className="bg-[#2A2A2A] p-6 rounded-3xl text-center space-y-4 hover:bg-[#3A3A3A] transition-colors">
                <div className="text-[#FF9B6A] mx-auto w-fit p-3 bg-[#FF9B6A]/10 rounded-2xl">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => <p key={idx} className="text-gray-400 text-sm">
                      {detail}
                    </p>)}
                </div>
              </motion.div>)}
          </div>
        </div>
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
          }} className="bg-[#F5E6D3] rounded-[3rem] p-8 md:p-12">
              <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">
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
                    <label className="block text-[#1A1A1A] font-medium mb-2">
                      Name *
                    </label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-2xl bg-white border-2 border-transparent focus:border-[#FF9B6A] outline-none transition-colors" placeholder="Your name" />
                  </div>

                  <div>
                    <label className="block text-[#1A1A1A] font-medium mb-2">
                      Email *
                    </label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-2xl bg-white border-2 border-transparent focus:border-[#FF9B6A] outline-none transition-colors" placeholder="your@email.com" />
                  </div>

                  <div>
                    <label className="block text-[#1A1A1A] font-medium mb-2">
                      Subject *
                    </label>
                    <select name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 rounded-2xl bg-white border-2 border-transparent focus:border-[#FF9B6A] outline-none transition-colors">
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="reservation">Reservation Question</option>
                      <option value="feedback">Feedback</option>
                      <option value="catering">Catering Request</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#1A1A1A] font-medium mb-2">
                      Message *
                    </label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 rounded-2xl bg-white border-2 border-transparent focus:border-[#FF9B6A] outline-none transition-colors resize-none" placeholder="Tell us what's on your mind..." />
                  </div>

                  <button type="submit" className="w-full bg-[#FF9B6A] text-white px-8 py-4 rounded-full font-medium hover:bg-[#e88a5b] transition-colors flex items-center justify-center gap-2">
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
              <div className="bg-[#2A2A2A] rounded-[3rem] h-[400px] overflow-hidden relative">
                {/* Map placeholder - in production, use Google Maps or Mapbox */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-[#FF9B6A] mx-auto mb-4" />
                    <p className="text-white font-medium">123 Coffee Street</p>
                    <p className="text-gray-400">Downtown District, NY 10001</p>
                  </div>
                </div>
                {/* Decorative grid overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF9B6A]/5 to-transparent"></div>
              </div>

              <div className="bg-[#2A2A2A] rounded-3xl p-8 space-y-6">
                <h3 className="text-2xl font-bold text-white">
                  Visit Our Cafe
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Located in the heart of downtown, our cafe is easily
                  accessible by public transport. Street parking is available,
                  and we're just a 5-minute walk from the subway station.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#FF9B6A] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-medium">Address</p>
                      <p className="text-gray-400 text-sm">
                        123 Coffee Street, Downtown District, NY 10001
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#FF9B6A] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-medium">Hours</p>
                      <p className="text-gray-400 text-sm">
                        Mon-Fri: 7AM-8PM | Sat-Sun: 8AM-9PM
                      </p>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-[#FF9B6A] text-white px-6 py-3 rounded-full font-medium hover:bg-[#e88a5b] transition-colors">
                  Get Directions
                </button>
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