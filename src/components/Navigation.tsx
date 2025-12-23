import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    name: 'Home',
    href: '/'
  }, {
    name: 'About',
    href: '/about'
  }, {
    name: 'Menu',
    href: '/menu'
  }, {
    name: 'Reservation',
    href: '/reservation'
  }, {
    name: 'Contact',
    href: '/contact'
  }];
  const isActive = (path: string) => location.pathname === path;
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1A1A1A]/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white tracking-tighter">
          Caféra
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => <Link key={link.name} to={link.href} className={`text-sm font-medium transition-colors ${isActive(link.href) ? 'text-[#FF9B6A]' : 'text-gray-300 hover:text-[#FF9B6A]'}`}>
              {link.name}
            </Link>)}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link to="/reservation" className="bg-[#FF9B6A] text-white px-6 py-2 rounded-full font-medium hover:bg-[#e88a5b] transition-colors text-sm">
            Book Table
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden bg-[#1A1A1A] border-t border-gray-800 overflow-hidden">
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map(link => <Link key={link.name} to={link.href} className={`transition-colors ${isActive(link.href) ? 'text-[#FF9B6A]' : 'text-gray-300 hover:text-[#FF9B6A]'}`} onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </Link>)}
              <Link to="/reservation" className="bg-[#FF9B6A] text-white px-6 py-3 rounded-full font-medium w-full text-center" onClick={() => setIsMobileMenuOpen(false)}>
                Book Table
              </Link>
            </div>
          </motion.div>}
      </AnimatePresence>
    </nav>;
}