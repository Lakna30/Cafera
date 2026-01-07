import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
export function Footer() {
  return <footer className="bg-[#1A1A1A] text-white pt-12 pb-8 px-4 md:px-8 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#" className="text-2xl font-bold tracking-tighter">
              Caféra
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              Serving the best coffee with the best vibes since 2010. Come visit
              us and taste the difference.
            </p>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="font-bold mb-6 text-[#DCAB6B]">Company</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="font-bold mb-6 text-[#DCAB6B]">Support</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Returns
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-bold mb-6 text-[#DCAB6B]">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-[#2A2A2A] p-3 rounded-full hover:bg-[#DCAB6B]/40 hover:text-white transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-[#2A2A2A] p-3 rounded-full hover:bg-[#DCAB6B]/40 hover:text-white transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-[#2A2A2A] p-3 rounded-full hover:bg-[#DCAB6B]/40 hover:text-white transition-all duration-300">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Caféra Cafe. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>;
}