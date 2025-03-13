import { useState, useEffect } from "react";
import { Home, Menu, X } from 'lucide-react';
import { Link } from "react-router-dom";

export default function Navbar({scrollToEnquiry}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position to detect when to change color
  useEffect(() => {
    const handleScroll = () => {
      // You can adjust this value based on when your white background starts
      const isScrolled = window.scrollY > 200;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Initial check in case page loads scrolled
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Dynamic classes based on scroll position
  const navbarClasses = scrolled
    ? "flex items-center justify-between px-4 py-4 md:px-4 lg:px-14 fixed top-0 w-full bg-white shadow-md z-50"
    : "flex items-center justify-between px-4 py-4 md:px-4 lg:px-14 fixed top-0 w-full z-50";

  const textClasses = scrolled
    ? "text-gray-800"
    : "text-white";

  const borderClasses = scrolled
    ? "border-gray-800"
    : "border-white";

  const buttonClasses = scrolled
    ? "rounded-full bg-black px-4 py-[6px] sm:px-5 sm:py-2 text-sm md:text-lg font-medium text-white shadow-md transition hover:bg-[#111]"
    : "rounded-full bg-white px-4 py-[6px] sm:px-5 sm:py-2 text-sm md:text-lg font-medium text-gray-800 shadow-md transition hover:bg-gray-100";

  return (
    <main className={navbarClasses}>
      {/* Logo */}
      <div className={`flex items-center ${textClasses}`}>
        <div className={`mr-2 flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded border ${borderClasses}`}>
          <Home className="h-4 w-4" />
        </div>
        <span className="text-sm sm:text-lg font-semibold">Hanshika Farms</span>
      </div>

      {/* Navigation - Desktop */}
      {/* <nav className="hidden md:block">
        <ul className="flex space-x-2">
          <li className={`rounded-full ${scrolled ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} px-5 py-2 font-medium`}>Home</li>
          <li className={`rounded-full px-5 py-2 font-medium ${textClasses} hover:bg-${scrolled ? 'gray-100' : 'white/10'}`}>About</li>
          <li className={`rounded-full px-5 py-2 font-medium ${textClasses} hover:bg-${scrolled ? 'gray-100' : 'white/10'}`}>Properties</li>
          <li className={`rounded-full px-5 py-2 font-medium ${textClasses} hover:bg-${scrolled ? 'gray-100' : 'white/10'}`}>News</li>
          <li className={`rounded-full px-5 py-2 font-medium ${textClasses} hover:bg-${scrolled ? 'gray-100' : 'white/10'}`}>Contact</li>
        </ul>
      </nav> */}

      {/* Get Started Button - Desktop */}
      <button className={buttonClasses} onClick={scrollToEnquiry}>
        Get Enquiry
      </button>

      {/* Mobile Menu Button */}
      {/* <button 
        className={`md:hidden z-50 ${textClasses}`}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button> */}

      {/* Mobile Menu */}
      {/* {mobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-black/90 flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <nav className="flex flex-col items-center space-y-6">
            <Link to="#" className="text-xl font-medium text-white">Home</Link>
            <Link to="#" className="text-xl font-medium text-white/80 hover:text-white">About</Link>
            <Link to="#" className="text-xl font-medium text-white/80 hover:text-white">Properties</Link>
            <Link to="#" className="text-xl font-medium text-white/80 hover:text-white">News</Link>
            <Link to="#" className="text-xl font-medium text-white/80 hover:text-white">Contact</Link>
            <button className="mt-4 rounded-full bg-white px-8 py-3 font-medium text-gray-800 shadow-md transition hover:bg-gray-100">
              Get Started
            </button>
          </nav>
        </motion.div>
      )} */}
    </main>
  );
}