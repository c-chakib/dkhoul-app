import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './shared';
import { CONTENT } from '../content';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/', label: CONTENT.nav.home },
    { path: '/presentation', label: CONTENT.nav.presentation },
    { path: '/demo', label: CONTENT.nav.demo },
    { path: '/simulator', label: CONTENT.nav.simulator },
    { path: '/innovation', label: CONTENT.nav.innovation },
    { path: '/technical', label: CONTENT.nav.technical },
    { path: '/financial', label: CONTENT.nav.financial },
    { path: '/contact', label: 'Contact' }
  ];

  const handleNavClick = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavClick('/')}
              className="text-2xl font-bold text-[#C2410C] hover:text-[#EA580C] transition-colors"
            >
              DKHOUL
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-[#C2410C] bg-orange-50'
                      : 'text-slate-600 hover:text-[#C2410C] hover:bg-orange-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-[#C2410C] hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#C2410C]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-slate-200">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                  location.pathname === item.path
                    ? 'text-[#C2410C] bg-orange-50'
                    : 'text-slate-600 hover:text-[#C2410C] hover:bg-orange-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;