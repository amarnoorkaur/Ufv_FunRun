import React, { useState, useRef, useEffect } from 'react';
import { Page, NavItem } from '../types';
import { LAND_ACKNOWLEDGEMENT } from '../constants';
import { Menu, X, Heart, Github, Twitter, Facebook, Mail, ChevronDown } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

interface DropdownItem {
  label: string;
  page: Page;
}

interface NavDropdown {
  label: string;
  items: DropdownItem[];
}

// Dropdown configurations
const COMMUNITY_DROPDOWN: NavDropdown = {
  label: 'Community',
  items: [
    { label: 'GiveHub', page: Page.GIVEHUB },
    { label: 'Stories', page: Page.COMMUNITY_STORIES },
    { label: 'App Preview', page: Page.APP_MOCKUP },
  ]
};

const ETHICS_DROPDOWN: NavDropdown = {
  label: 'Ethics',
  items: [
    { label: 'Ethical Principles', page: Page.ETHICS },
    { label: 'Privacy', page: Page.PRIVACY },
    { label: 'The Grant', page: Page.ABOUT_GRANT },
    { label: 'FAQ', page: Page.FAQ },
  ]
};

export const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    setMobileAccordion(null);
    window.scrollTo(0, 0);
  };

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const toggleMobileAccordion = (label: string) => {
    setMobileAccordion(mobileAccordion === label ? null : label);
  };

  const isDropdownActive = (dropdown: NavDropdown) => {
    return dropdown.items.some(item => item.page === currentPage);
  };

  const DropdownMenu: React.FC<{ dropdown: NavDropdown }> = ({ dropdown }) => (
    <div className="relative">
      <button
        onClick={() => toggleDropdown(dropdown.label)}
        className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 font-heading ${
          isDropdownActive(dropdown) || openDropdown === dropdown.label
            ? 'text-ufv-green bg-green-50'
            : 'text-gray-600 hover:text-ufv-green hover:bg-green-50/50'
        }`}
      >
        {dropdown.label}
        <ChevronDown 
          size={16} 
          className={`transition-transform duration-200 ${openDropdown === dropdown.label ? 'rotate-180' : ''}`} 
        />
      </button>
      
      {openDropdown === dropdown.label && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
          {dropdown.items.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.page)}
              className={`block w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${
                currentPage === item.page
                  ? 'text-ufv-green bg-green-50'
                  : 'text-gray-600 hover:text-ufv-green hover:bg-green-50/50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  const MobileAccordion: React.FC<{ dropdown: NavDropdown }> = ({ dropdown }) => (
    <div className="border-b border-gray-100">
      <button
        onClick={() => toggleMobileAccordion(dropdown.label)}
        className={`flex items-center justify-between w-full px-4 py-3.5 text-base font-semibold ${
          isDropdownActive(dropdown)
            ? 'text-ufv-green bg-green-50'
            : 'text-gray-700'
        }`}
      >
        {dropdown.label}
        <ChevronDown 
          size={20} 
          className={`transition-transform duration-200 ${mobileAccordion === dropdown.label ? 'rotate-180' : ''}`} 
        />
      </button>
      
      {mobileAccordion === dropdown.label && (
        <div className="bg-gray-50 pb-2">
          {dropdown.items.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.page)}
              className={`block w-full text-left pl-8 pr-4 py-3 text-sm font-medium ${
                currentPage === item.page
                  ? 'text-ufv-green bg-green-100 border-l-4 border-ufv-green'
                  : 'text-gray-600 hover:text-ufv-green hover:bg-green-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );

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
                   <span className="font-heading font-bold text-xl tracking-tight text-ufv-green leading-none mb-1">UFV Fun Run</span>
                   <span className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">Ethical Tech Initiative</span>
                 </div>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
              {/* Home */}
              <button
                onClick={() => handleNavClick(Page.HOME)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 font-heading ${
                  currentPage === Page.HOME
                    ? 'text-ufv-green bg-green-50'
                    : 'text-gray-600 hover:text-ufv-green hover:bg-green-50/50'
                }`}
              >
                Home
              </button>

              {/* About */}
              <button
                onClick={() => handleNavClick(Page.ABOUT_INITIATIVE)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 font-heading ${
                  currentPage === Page.ABOUT_INITIATIVE
                    ? 'text-ufv-green bg-green-50'
                    : 'text-gray-600 hover:text-ufv-green hover:bg-green-50/50'
                }`}
              >
                About
              </button>

              {/* The App */}
              <button
                onClick={() => handleNavClick(Page.ABOUT_APP)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 font-heading ${
                  currentPage === Page.ABOUT_APP
                    ? 'text-ufv-green bg-green-50'
                    : 'text-gray-600 hover:text-ufv-green hover:bg-green-50/50'
                }`}
              >
                The App
              </button>

              {/* Community Dropdown */}
              <DropdownMenu dropdown={COMMUNITY_DROPDOWN} />

              {/* Ethics Dropdown */}
              <DropdownMenu dropdown={ETHICS_DROPDOWN} />

              {/* Get Involved CTA */}
              <button 
                onClick={() => handleNavClick(Page.GET_INVOLVED)}
                className="ml-6 px-6 py-2.5 bg-[#0B9E43] text-white rounded-full font-bold shadow-sm hover:bg-ufv-green hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 font-heading"
              >
                Get Involved
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-500 hover:text-ufv-green hover:bg-green-50 focus:outline-none transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="py-2">
              {/* Home */}
              <button
                onClick={() => handleNavClick(Page.HOME)}
                className={`block w-full text-left px-4 py-3.5 text-base font-semibold border-b border-gray-100 ${
                  currentPage === Page.HOME
                    ? 'text-ufv-green bg-green-50 border-l-4 border-l-ufv-green'
                    : 'text-gray-700 hover:bg-green-50'
                }`}
              >
                Home
              </button>

              {/* About */}
              <button
                onClick={() => handleNavClick(Page.ABOUT_INITIATIVE)}
                className={`block w-full text-left px-4 py-3.5 text-base font-semibold border-b border-gray-100 ${
                  currentPage === Page.ABOUT_INITIATIVE
                    ? 'text-ufv-green bg-green-50 border-l-4 border-l-ufv-green'
                    : 'text-gray-700 hover:bg-green-50'
                }`}
              >
                About
              </button>

              {/* The App */}
              <button
                onClick={() => handleNavClick(Page.ABOUT_APP)}
                className={`block w-full text-left px-4 py-3.5 text-base font-semibold border-b border-gray-100 ${
                  currentPage === Page.ABOUT_APP
                    ? 'text-ufv-green bg-green-50 border-l-4 border-l-ufv-green'
                    : 'text-gray-700 hover:bg-green-50'
                }`}
              >
                The App
              </button>

              {/* Community Accordion */}
              <MobileAccordion dropdown={COMMUNITY_DROPDOWN} />

              {/* Ethics Accordion */}
              <MobileAccordion dropdown={ETHICS_DROPDOWN} />

              {/* Get Involved CTA */}
              <div className="px-4 pt-4 pb-6">
                <button 
                  onClick={() => handleNavClick(Page.GET_INVOLVED)}
                  className="w-full text-center py-4 bg-[#0B9E43] text-white rounded-full font-bold shadow-md hover:bg-ufv-green transition-colors"
                >
                  Get Involved
                </button>
              </div>
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
                <span className="font-heading font-bold text-xl tracking-tight">UFV Fun Run</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed font-sans mb-6">
                A community first initiative built for the entire UFV family: students, staff, alumni, and local partners. Running together, thriving together.
              </p>
              {/* Values Promise */}
              <div className="text-xs text-gray-500 space-y-1">
                <p>✓ Your privacy, protected</p>
                <p>✓ Free forever, for everyone</p>
                <p>✓ Community owned & operated</p>
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
              &copy; {new Date().getFullYear()} UFV Fun Run Initiative. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};