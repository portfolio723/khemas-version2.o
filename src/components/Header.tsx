import React, { useState } from 'react';
import logoImg from '/assets/logo (1).png';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onRequestQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onRequestQuote }) => {
  const [imgError, setImgError] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header id="site-header" className="sticky top-0 z-40 bg-white/95 backdrop-blur-xs border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <a href="#" className="flex items-center space-x-3 group">
            {!imgError ? (
              <img
                src={logoImg}
                alt="Khemas Engineers Logo"
                onError={() => setImgError(true)}
                className="h-12 sm:h-14 w-auto max-w-[200px] sm:max-w-[240px] object-contain"
                referrerPolicy="no-referrer"
              />
            ) : null}
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900 leading-tight">
                KHEMAS ENGINEERS
              </span>
              <span className="text-[11px] font-semibold tracking-wider text-neutral-500 uppercase">
                Flow-Measuring Rotameters
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation & Quote Button */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-6 text-sm font-medium text-neutral-600">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-neutral-900 transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('catalogue')}
              className="hover:text-neutral-900 transition-colors cursor-pointer"
            >
              Products
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('quick-enquiry')}
              className="hover:text-neutral-900 transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          <button
            id="header-quote-btn"
            onClick={onRequestQuote}
            type="button"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2 shadow-xs"
          >
            Request a Quote
          </button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden items-center">
          <button
            id="mobile-nav-toggle"
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-dropdown"
          className="md:hidden border-t border-neutral-200 bg-white px-4 pt-2 pb-4 space-y-1 shadow-lg animate-in slide-in-from-top-2 duration-150"
        >
          <button
            id="mobile-nav-home"
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium text-neutral-800 hover:bg-neutral-100 transition-colors cursor-pointer"
          >
            Home
          </button>
          <button
            id="mobile-nav-products"
            type="button"
            onClick={() => handleNavClick('catalogue')}
            className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium text-neutral-800 hover:bg-neutral-100 transition-colors cursor-pointer"
          >
            Products
          </button>
          <button
            id="mobile-nav-contact"
            type="button"
            onClick={() => handleNavClick('quick-enquiry')}
            className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium text-neutral-800 hover:bg-neutral-100 transition-colors cursor-pointer"
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
};

