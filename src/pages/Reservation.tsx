import React, { useState, memo } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Calendar, Clock, Users, MessageSquare, CheckCircle } from 'lucide-react';
export function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '08:00 AM',
    guests: '2',
    message: ''
  });
  
  const [showTimePicker, setShowTimePicker] = useState(false);
  
  // Generate time options
  const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'));
  const minutes = ['00', '15', '30', '45'];
  const periods = ['AM', 'PM'];
  
  const parseTime = (timeStr: string) => {
    const [time, period] = timeStr.split(' ');
    const [hours, minutes] = time.split(':');
    return { hours, minutes, period };
  };
  
  const handleTimeChange = (type: 'hours' | 'minutes' | 'period', value: string) => {
    const currentTime = parseTime(formData.time);
    let newTime = { ...currentTime };
    
    if (type === 'hours') newTime.hours = value;
    else if (type === 'minutes') newTime.minutes = value;
    else newTime.period = value;
    
    setFormData({
      ...formData,
      time: `${newTime.hours}:${newTime.minutes} ${newTime.period}`
    });
  };
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const timeSlots = ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'];
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
            Book a Table
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mt-4 mb-6">
            <span
              className="bg-gradient-to-r from-[#F5E6D3] via-[#DCAB6B] to-[#B68973] bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              Reserve Your Spot
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Secure your table and enjoy a memorable experience at netWO Cafe. We
            look forward to serving you!
          </p>
        </motion.div>
      </section>

      {/* Reservation Form */}
      <section className="py-12 px-4 md:px-8 bg-[#1A1A1A] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1495195129351-a14c1e075e9b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 blur-xl"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A]/90 via-[#1A1A1A]/95 to-[#1A1A1A] backdrop-blur-md"></div>
        </div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div 
            initial={{
              opacity: 0,
              y: 30
            }} 
            animate={{
              opacity: 1,
              y: 0
            }} 
            transition={{
              duration: 0.6
            }} 
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl shadow-[#DCAB6B]/10"
            style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.36)',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            {submitted ? <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} className="text-center py-12">
                <CheckCircle className="w-20 h-20 text-[#FF9B6A] mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">
                  Reservation Confirmed!
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  We've sent a confirmation email to {formData.email}. See you
                  soon!
                </p>
                <button onClick={() => setSubmitted(false)} className="bg-[#FF9B6A] text-white px-8 py-3 rounded-full font-medium hover:bg-[#e88a5b] transition-colors">
                  Make Another Reservation
                </button>
              </motion.div> : <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-white/80 font-medium mb-2">
                      Full Name *
                    </label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-white/90 backdrop-blur-lg border border-white/20 focus:border-[#FF9B6A]/70 outline-none transition-all duration-300 shadow-sm focus:shadow-md focus:shadow-[#FF9B6A]/20" placeholder="John Doe" />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-white/80 font-medium mb-2">
                      Email *
                    </label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-white/90 backdrop-blur-lg border border-white/20 focus:border-[#FF9B6A]/70 outline-none transition-all duration-300 shadow-sm focus:shadow-md focus:shadow-[#FF9B6A]/20" placeholder="john@example.com" />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-white/80 font-medium mb-2">
                      Phone Number *
                    </label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-white/90 backdrop-blur-lg border border-white/20 focus:border-[#FF9B6A]/70 outline-none transition-all duration-300 shadow-sm focus:shadow-md focus:shadow-[#FF9B6A]/20" placeholder="+1 (555) 000-0000" />
                  </div>

                  {/* Number of Guests */}
                  <div>
                    <label className="block text-white/80 font-medium mb-2 flex items-center gap-2">
                      <Users size={18} />
                      Number of Guests *
                    </label>
                    <div className="flex items-center">
                      <button
                        type="button"
                        onClick={() => {
                          const newValue = Math.max(1, parseInt(formData.guests) - 1);
                          setFormData({ ...formData, guests: newValue.toString() });
                        }}
                        className="w-12 h-12 flex items-center justify-center rounded-l-lg bg-white/80 hover:bg-white text-[#1A1A1A] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF9B6A]/70"
                        aria-label="Decrease number of guests"
                      >
                        <span className="text-xl font-bold">−</span>
                      </button>
                      <div className="flex-1 flex items-center justify-center h-12 bg-white/90 text-[#1A1A1A] font-medium border-t border-b border-white/20">
                        {formData.guests} {formData.guests === '1' ? 'Guest' : 'Guests'}
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          const newValue = Math.min(20, parseInt(formData.guests) + 1);
                          setFormData({ ...formData, guests: newValue.toString() });
                        }}
                        className="w-12 h-12 flex items-center justify-center rounded-r-lg bg-white/80 hover:bg-white text-[#1A1A1A] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF9B6A]/70"
                        aria-label="Increase number of guests"
                      >
                        <span className="text-xl font-bold">+</span>
                      </button>
                    </div>
                    <input
                      type="hidden"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-white/80 font-medium mb-2 flex items-center gap-2">
                      <Calendar size={18} />
                      Date *
                    </label>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} required min={new Date().toISOString().split('T')[0]} className="w-full px-4 py-3 rounded-lg bg-white/90 backdrop-blur-sm border border-white/20 focus:border-[#FF9B6A]/70 outline-none transition-all duration-300 shadow-sm focus:shadow-md focus:shadow-[#FF9B6A]/20" />
                  </div>

                  {/* Time */}
                  <div className="relative">
                    <label className="block text-white/80 font-medium mb-2 flex items-center gap-2">
                      <Clock size={18} />
                      Time *
                    </label>
                    <div 
                      onClick={() => setShowTimePicker(!showTimePicker)}
                      className="w-full px-4 py-3 rounded-lg bg-white/90 backdrop-blur-lg border border-white/20 focus:border-[#FF9B6A]/70 outline-none transition-all duration-300 shadow-sm focus:shadow-md focus:shadow-[#FF9B6A]/20 cursor-pointer flex items-center justify-between"
                    >
                      <span>{formData.time || 'Select time'}</span>
                      <svg className="w-5 h-5 text-[#1A1A1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    
                    {showTimePicker && (
                      <div className="absolute z-10 mt-1 w-full bg-white/90 backdrop-blur-lg rounded-lg shadow-lg border border-white/20 p-4">
                        <div className="flex justify-between items-center mb-4">
                          <div className="text-center flex-1">
                            <div className="text-sm text-gray-500 mb-1">Hour</div>
                            <div className="h-40 overflow-y-auto scrollbar-hide">
                              {hours.map((hour) => (
                                <div 
                                  key={hour}
                                  onClick={() => handleTimeChange('hours', hour)}
                                  className={`py-2 px-4 rounded-md cursor-pointer hover:bg-[#DCAB6B] ${
                                    parseTime(formData.time).hours === hour ? 'bg-[#DCAB6B] text-white' : ''
                                  }`}
                                >
                                  {hour}
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="text-center flex-1">
                            <div className="text-sm text-gray-500 mb-1">Minute</div>
                            <div className="h-40 overflow-y-auto scrollbar-hide">
                              {minutes.map((minute) => (
                                <div 
                                  key={minute}
                                  onClick={() => handleTimeChange('minutes', minute)}
                                  className={`py-2 px-4 rounded-md cursor-pointer hover:bg-[#DCAB6B] ${
                                    parseTime(formData.time).minutes === minute ? 'bg-[#DCAB6B] text-white' : ''
                                  }`}
                                >
                                  {minute}
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="text-center flex-1">
                            <div className="text-sm text-gray-500 mb-1">AM/PM</div>
                            <div className="h-40 overflow-y-auto scrollbar-hide">
                              {periods.map((period) => (
                                <div 
                                  key={period}
                                  onClick={() => handleTimeChange('period', period)}
                                  className={`py-2 px-4 rounded-md cursor-pointer hover:bg-[#DCAB6B] ${
                                    parseTime(formData.time).period === period ? 'bg-[#DCAB6B] text-white' : ''
                                  }`}
                                >
                                  {period}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex justify-end mt-2">
                          <button
                            type="button"
                            onClick={() => setShowTimePicker(false)}
                            className="px-4 py-2 bg-[#DCAB6B] text-white rounded-md hover:bg-[#DCAB6B]/90 transition-colors"
                          >
                            Done
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-white/80 font-medium mb-2 flex items-center gap-2">
                    <MessageSquare size={18} />
                    Special Requests (Optional)
                  </label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-lg bg-white/90 backdrop-blur-lg border border-white/20 focus:border-[#FF9B6A]/70 outline-none transition-all duration-300 shadow-sm focus:shadow-md focus:shadow-[#FF9B6A]/20 resize-none" placeholder="Any dietary restrictions, preferences, or special occasions?" />
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full text-white px-8 py-4 rounded-full font-medium text-lg
                  bg-gradient-to-r from-[#DCAB6B] to-[#3D230A]
                  border border-white/20
                  shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]
                  hover:shadow-[0_0_15px_rgba(255,155,106,0.4)]
                  transition-all duration-300
                  overflow-hidden
                  hover:brightness-110
                  hover:scale-[1.02]">
                  Confirm Reservation
                </button>
              </form>}
          </motion.div>
        </div>
      </section>

      {/* Policy Section */}
      <section className="py-12 px-4 md:px-8 bg-[#1A1A1A]">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="bg-gradient-to-br from-[#1A1A1A]/80 to-[#2A2A2A]/80 backdrop-blur-xl rounded-3xl p-8 space-y-6 text-white border border-white/10 shadow-2xl shadow-[#DCAB6B]/10">
            <h3 className="text-2xl font-bold text-[#DCAB6B]">
              Reservation Policy
            </h3>

            <div className="space-y-4 text-gray-400">
              <p>
                <strong className="text-white">Confirmation:</strong> You'll
                receive a confirmation email within 15 minutes. Please check
                your spam folder if you don't see it.
              </p>

              <p>
                <strong className="text-white">Cancellation:</strong> We
                understand plans change. Please cancel at least 2 hours before
                your reservation time to avoid a cancellation fee.
              </p>

              <p>
                <strong className="text-white">Late Arrival:</strong> We'll hold
                your table for 15 minutes past your reservation time. After
                that, it may be released to waiting guests.
              </p>

              <p>
                <strong className="text-white">Large Groups:</strong> For
                parties of 8 or more, please call us directly at (555) 123-4567
                to ensure we can accommodate your group.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-4 md:px-8 bg-[#1A1A1A]">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="container mx-auto max-w-4xl text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Questions?</h3>
          <p className="text-gray-400 mb-6">
            Need to modify your reservation or have special requests? We're here
            to help!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+15551234567" className="bg-[#2A2A2A] text-white px-6 py-3 rounded-full font-medium border border-white/70 hover:bg-[#3A3A3A] hover:brightness-110 transition-colors">
              Call Us: (555) 123-4567
            </a>
            <a href="mailto:reservations@netwo.com" className="text-white px-6 py-3 rounded-full font-medium
                    bg-[#211305]
                    border border-white/70
                    shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]
                    hover:shadow-[0_0_15px_rgba(255,155,106,0.4)]
                    transition-all duration-300
                    overflow-hidden
                    hover:brightness-110">
              Email Us
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>;
}