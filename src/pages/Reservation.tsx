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
    time: '',
    guests: '2',
    message: ''
  });
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
          <span className="text-[#FF9B6A] font-medium tracking-widest text-sm uppercase">
            Book a Table
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mt-4 mb-6">
            Reserve Your <span className="text-[#FF9B6A]">Spot</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Secure your table and enjoy a memorable experience at netWO Cafe. We
            look forward to serving you!
          </p>
        </motion.div>
      </section>

      {/* Reservation Form */}
      <section className="py-12 px-4 md:px-8 bg-[#1A1A1A]">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="bg-[#F5E6D3] rounded-[3rem] p-8 md:p-12">
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
                    <label className="block text-[#1A1A1A] font-medium mb-2">
                      Full Name *
                    </label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-2xl bg-white border-2 border-transparent focus:border-[#FF9B6A] outline-none transition-colors" placeholder="John Doe" />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[#1A1A1A] font-medium mb-2">
                      Email *
                    </label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-2xl bg-white border-2 border-transparent focus:border-[#FF9B6A] outline-none transition-colors" placeholder="john@example.com" />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[#1A1A1A] font-medium mb-2">
                      Phone Number *
                    </label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 rounded-2xl bg-white border-2 border-transparent focus:border-[#FF9B6A] outline-none transition-colors" placeholder="+1 (555) 000-0000" />
                  </div>

                  {/* Number of Guests */}
                  <div>
                    <label className="block text-[#1A1A1A] font-medium mb-2 flex items-center gap-2">
                      <Users size={18} />
                      Number of Guests *
                    </label>
                    <select name="guests" value={formData.guests} onChange={handleChange} required className="w-full px-4 py-3 rounded-2xl bg-white border-2 border-transparent focus:border-[#FF9B6A] outline-none transition-colors">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => <option key={num} value={num}>
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>)}
                    </select>
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-[#1A1A1A] font-medium mb-2 flex items-center gap-2">
                      <Calendar size={18} />
                      Date *
                    </label>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} required min={new Date().toISOString().split('T')[0]} className="w-full px-4 py-3 rounded-2xl bg-white border-2 border-transparent focus:border-[#FF9B6A] outline-none transition-colors" />
                  </div>

                  {/* Time */}
                  <div>
                    <label className="block text-[#1A1A1A] font-medium mb-2 flex items-center gap-2">
                      <Clock size={18} />
                      Time *
                    </label>
                    <select name="time" value={formData.time} onChange={handleChange} required className="w-full px-4 py-3 rounded-2xl bg-white border-2 border-transparent focus:border-[#FF9B6A] outline-none transition-colors">
                      <option value="">Select a time</option>
                      {timeSlots.map(slot => <option key={slot} value={slot}>
                          {slot}
                        </option>)}
                    </select>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-[#1A1A1A] font-medium mb-2 flex items-center gap-2">
                    <MessageSquare size={18} />
                    Special Requests (Optional)
                  </label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-2xl bg-white border-2 border-transparent focus:border-[#FF9B6A] outline-none transition-colors resize-none" placeholder="Any dietary restrictions, preferences, or special occasions?" />
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full bg-[#FF9B6A] text-white px-8 py-4 rounded-full font-medium hover:bg-[#e88a5b] transition-colors text-lg">
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
        }} className="bg-[#2A2A2A] rounded-3xl p-8 space-y-6 text-white">
            <h3 className="text-2xl font-bold text-[#FF9B6A]">
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
            <a href="tel:+15551234567" className="bg-[#2A2A2A] text-white px-6 py-3 rounded-full font-medium hover:bg-[#3A3A3A] transition-colors">
              Call Us: (555) 123-4567
            </a>
            <a href="mailto:reservations@netwo.com" className="bg-[#FF9B6A] text-white px-6 py-3 rounded-full font-medium hover:bg-[#e88a5b] transition-colors">
              Email Us
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>;
}