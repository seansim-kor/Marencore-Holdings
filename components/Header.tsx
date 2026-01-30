import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (href.startsWith('/#')) {
        const targetId = href.replace('/#', '');
        
        // If we are already on home, scroll to id
        if (location.pathname === '/') {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // If on another page, navigate to home root with hash
            navigate({ pathname: '/', hash: targetId });
        }
    } else {
        // Regular route navigation (e.g., /who-we-are, /bioenergy, /agritech)
        navigate(href);
    }
  };

  const navLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Who We Are', href: '/who-we-are' },
    { name: 'Bioenergy', href: '/bioenergy' },
    { name: 'AgriTech', href: '/agritech' },
    { name: 'Consulting', href: '/consulting' },
    { name: 'Contact', href: '/#contact' },
  ];

  const isTransparent = !isScrolled && location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        !isTransparent ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="block">
           <BrandLogo 
              variant={isTransparent ? 'light' : 'dark'} 
              className={`h-10 w-auto transition-transform duration-300 ${isTransparent ? 'scale-105' : 'scale-100'}`}
           />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`font-sans text-xs font-bold uppercase tracking-widest hover:text-accent transition-colors relative group ${
                !isTransparent ? 'text-slate-800' : 'text-white/90'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full ${location.pathname === link.href ? 'w-full' : ''}`}></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
             <X size={28} className={!isTransparent ? 'text-primary' : 'text-white'} />
          ) : (
             <Menu size={28} className={!isTransparent ? 'text-primary' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-6 px-6 flex flex-col gap-2 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-800 font-serif text-lg font-medium py-3 border-b border-gray-50 last:border-0 hover:text-accent hover:pl-2 transition-all block"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};