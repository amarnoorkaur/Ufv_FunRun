import React, { useState } from 'react';
import { Page, NavItem } from '../types';
import { LAND_ACKNOWLEDGEMENT } from '../constants';
import { Menu, X, Heart, Github, Twitter, Facebook, Mail } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', page: Page.HOME },
  { label: 'About', page: Page.ABOUT_INITIATIVE },
  { label: 'The App', page: Page.ABOUT_APP },
  { label: 'GiveHub', page: Page.GIVEHUB },
  { label: 'Stories', page: Page.COMMUNITY_STORIES },
  { label: 'Ethics', page: Page.ETHICS },
  { label: 'Privacy', page: Page.PRIVACY },
  { label: 'FAQ', page: Page.FAQ },
];

export const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col bg-ufv-light font-sans text-ufv-dark">
      {/* Navigation */}
      <nav className="bg-white shadow-soft sticky top-0 z-50 border-t-4 border-ufv-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center cursor-pointer group" onClick={() => handleNavClick(Page.HOME)}>
              <div className="flex-shrink-0 flex items-center gap-3">
                 <div className="bg-ufv-green p-2 rounded-md text-white transition-transform group-hover:scale-105">
                    <Heart size={24} fill="white" />
                 </div>
                 <div className="flex flex-col">
                   <span className="font-heading font-bold text-xl tracking-tight text-ufv-green leading-none mb-1">UFV Fun-Run</span>
                   <span className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">Ethical Tech Initiative</span>
                 </div>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.page)}
                  className={`px-3 py-2 rounded-md text-sm font-semibold transition-all duration-200 font-heading ${
                    currentPage === item.page
                      ? 'text-ufv-green bg-green-50'
                      : 'text-gray-600 hover:text-ufv-green hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => handleNavClick(Page.GET_INVOLVED)}
                className="ml-4 px-6 py-2.5 bg-ufv-green text-white rounded-ufv font-bold shadow-sm hover:bg-ufv-dark transition-all transform hover:-translate-y-0.5 font-heading"
              >
                Get Involved
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-ufv-green hover:bg-gray-100 focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-200 shadow-lg">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.page)}
                  className={`block w-full text-left px-4 py-3 rounded-md text-base font-medium ${
                    currentPage === item.page
                      ? 'text-ufv-green bg-green-50 border-l-4 border-ufv-green'
                      : 'text-gray-600 hover:text-ufv-green hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
               <button 
                onClick={() => handleNavClick(Page.GET_INVOLVED)}
                className="w-full text-center mt-6 px-5 py-4 bg-ufv-green text-white rounded-lg font-bold shadow-md"
              >
                Get Involved
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-ufv-dark text-white pt-16 pb-8 border-t-8 border-ufv-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-white/10 rounded">
                    <Heart size={24} className="text-ufv-lightGreen" fill="currentColor" />
                </div>
                <span className="font-heading font-bold text-xl tracking-tight">UFV Fun-Run</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed font-sans mb-6">
                A community-first initiative built for the entire UFV family: students, staff, alumni, and local partners. Running together, thriving together.
              </p>
              {/* Values Promise */}
              <div className="text-xs text-gray-500 space-y-1">
                <p>✓ Your privacy, protected</p>
                <p>✓ Free forever, for everyone</p>
                <p>✓ Community-owned & operated</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-heading font-bold text-lg mb-6 text-ufv-lightGreen">Quick Links</h4>
              <ul className="space-y-3 text-sm text-gray-300 font-sans">
                <li><button onClick={() => handleNavClick(Page.ABOUT_INITIATIVE)} className="hover:text-white hover:underline transition">About the Grant</button></li>
                <li><button onClick={() => handleNavClick(Page.ETHICS)} className="hover:text-white hover:underline transition">Ethical Framework</button></li>
                <li><button onClick={() => handleNavClick(Page.PRIVACY)} className="hover:text-white hover:underline transition">Privacy Policy</button></li>
                <li><button onClick={() => handleNavClick(Page.FAQ)} className="hover:text-white hover:underline transition">FAQ</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-lg mb-6 text-ufv-lightGreen">Contact</h4>
              <ul className="space-y-3 text-sm text-gray-300 font-sans">
                <li className="flex items-start gap-2">
                    <span className="opacity-70">📍</span> UFV Student Union Building<br/>33844 King Rd, Abbotsford, BC
                </li>
                <li className="flex items-center gap-2">
                    <span className="opacity-70">✉️</span> ethics-run@ufv.ca
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-lg mb-6 text-ufv-lightGreen">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/20 transition-colors text-white"><Github size={20} /></a>
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/20 transition-colors text-white"><Twitter size={20} /></a>
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/20 transition-colors text-white"><Facebook size={20} /></a>
              </div>
            </div>

            <div>
              <h4 className="font-heading font-bold text-lg mb-6 text-ufv-lightGreen">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-4">Stay updated on upcoming runs, events, and community news.</p>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input 
                    type="email" 
                    placeholder="Your email address"
                    className="w-full pl-10 pr-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-ufv-lightGreen focus:ring-1 focus:ring-ufv-lightGreen transition-colors"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full py-2.5 bg-ufv-green hover:bg-ufv-lightGreen text-white hover:text-ufv-dark font-heading font-bold text-sm rounded-lg transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-3">We respect your privacy. Unsubscribe anytime.</p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-10">
            <div className="bg-[#111111] p-8 rounded-lg border-l-4 border-ufv-lightGreen max-w-4xl mx-auto">
              <p className="text-sm text-gray-400 italic text-center leading-relaxed font-serif">
                "{LAND_ACKNOWLEDGEMENT}"
              </p>
            </div>
            <div className="mt-10 text-center text-xs text-gray-600 font-sans">
              &copy; {new Date().getFullYear()} UFV Fun-Run Initiative. All Rights Reserved. Built with ❤️ by UFV CS Students.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};