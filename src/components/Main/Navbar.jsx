import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../Pages/Navbar/Dropdown';
import ThemeToggle from '../Pages/Navbar/ThemeToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faBars } from '@fortawesome/free-solid-svg-icons';
// Placeholder for Evanam logo - will be replaced with actual assets
const LogoMain = "https://via.placeholder.com/160x32/1E40AF/FFFFFF?text=EVANAM";
const LogoFavicon = "https://via.placeholder.com/40x40/1E40AF/FFFFFF?text=E";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
    
    // Hide navbar when scrolling down, show when scrolling up
    if (position > lastScrollY && position > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(position);
  };

  const [openStatus, setOpenStatus] = useState("home");

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  const scrollToTop = () => {
    setIsMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    console.log(openStatus);
  }, [openStatus]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [lastScrollY]);

  const navbarBackground = scrollPosition > window.innerHeight * 0.25 ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent';
  const navbarTransform = isVisible ? 'translate-y-0' : '-translate-y-full';

  return (
    <nav className={`flex items-center justify-between px-4 py-3 fixed z-50 top-0 left-0 right-0 text-white transition-all duration-300 ease-in-out ${navbarBackground} ${navbarTransform}`}>
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-bold" onClick={scrollToTop}>
          <img src={isMobile ? LogoFavicon : LogoMain} className={isMobile ? 'w-8 h-8' : 'w-32 h-6'} alt="Evanam Logo" />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm xl:text-base">
        <Link to="/" className="px-3 py-2 hover:bg-gray-700 rounded transition duration-300" onClick={scrollToTop}>Home</Link>
        <Dropdown title="About Us" setOpenStatus={() => { setOpenStatus("About Us") }} icon={<FontAwesomeIcon icon={faCaretDown} />}>
          <Link to="/about-us" className="block px-4 py-2 hover:bg-gray-700" onClick={scrollToTop}>Our Story</Link>
          <Link to="/what-we-do" className="block px-4 py-2 hover:bg-gray-700" onClick={scrollToTop}>What We Do</Link>
          <Link to="/badges-of-trust" className="block px-4 py-2 hover:bg-gray-700" onClick={scrollToTop}>Badges of Trust</Link>
        </Dropdown>
        <Dropdown title="Services" setOpenStatus={() => { setOpenStatus("Services") }} icon={<FontAwesomeIcon icon={faCaretDown} />}>
          <Link to="/services" className="block px-4 py-2 hover:bg-gray-700" onClick={scrollToTop}>All Services</Link>
          <Link to="/hire-our-pod" className="block px-4 py-2 hover:bg-gray-700" onClick={scrollToTop}>Hire Our Pod</Link>
          <Link to="/available-pods" className="block px-4 py-2 hover:bg-gray-700" onClick={scrollToTop}>Available Pod's</Link>
        </Dropdown>
        <Link to="/blog" className="px-3 py-2 hover:bg-gray-700 rounded transition duration-300" onClick={scrollToTop}>Blog</Link>
        <Link to="/faq" className="px-3 py-2 hover:bg-gray-700 rounded transition duration-300" onClick={scrollToTop}>FAQ's</Link>
        <Link to="/contact-us" className="px-3 py-2 hover:bg-gray-700 rounded transition duration-300" onClick={scrollToTop}>Contact</Link>
      </div>

      {/* Right side - Contact & Mobile Menu */}
      <div className="flex items-center space-x-2">
        <div className="bg-gray-800 px-2 py-1 rounded text-xs hidden lg:block">+91 93639 77790</div>
        <ThemeToggle />
        <button className="lg:hidden p-2" onClick={handleMenuToggle}>
          <FontAwesomeIcon icon={faBars} className="text-lg" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black border-t border-gray-700 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            <Link to="/" className="block px-3 py-2 hover:bg-gray-700 rounded transition duration-300" onClick={scrollToTop}>Home</Link>
            
            <div className="border-t border-gray-700 pt-2 mt-2">
              <div className="text-gray-400 text-xs uppercase tracking-wide mb-2">About Us</div>
              <Link to="/about-us" className="block px-3 py-2 hover:bg-gray-700 rounded transition duration-300" onClick={scrollToTop}>Our Story</Link>
              <Link to="/what-we-do" className="block px-3 py-2 hover:bg-gray-700 rounded transition duration-300" onClick={scrollToTop}>What We Do</Link>
              <Link to="/badges-of-trust" className="block px-3 py-2 hover:bg-gray-700 rounded transition duration-300" onClick={scrollToTop}>Badges of Trust</Link>
            </div>

            <div className="border-t border-gray-700 pt-2 mt-2">
              <div className="text-gray-400 text-xs uppercase tracking-wide mb-2">Services</div>
              <Link to="/services" className="block px-3 py-2 hover:bg-gray-700 rounded transition duration-300" onClick={scrollToTop}>All Services</Link>
              <Link to="/hire-our-pod" className="block px-3 py-2 hover:bg-gray-700 rounded transition duration-300" onClick={scrollToTop}>Hire Our Pod</Link>
              <Link to="/available-pods" className="block px-3 py-2 hover:bg-gray-700 rounded transition duration-300" onClick={scrollToTop}>Available Pod's</Link>
            </div>

            <div className="border-t border-gray-700 pt-2 mt-2">
              <Link to="/blog" className="block px-3 py-2 hover:bg-gray-700 rounded transition duration-300" onClick={scrollToTop}>Blog</Link>
              <Link to="/faq" className="block px-3 py-2 hover:bg-gray-700 rounded transition duration-300" onClick={scrollToTop}>FAQ's</Link>
              <Link to="/contact-us" className="block px-3 py-2 hover:bg-gray-700 rounded transition duration-300" onClick={scrollToTop}>Contact Us</Link>
              <Link to="/privacy-policy" className="block px-3 py-2 hover:bg-gray-700 rounded transition duration-300" onClick={scrollToTop}>Privacy Policy</Link>
            </div>

            <div className="border-t border-gray-700 pt-2 mt-2">
              <div className="text-gray-400 text-xs">Contact: +91 93639 77790</div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
