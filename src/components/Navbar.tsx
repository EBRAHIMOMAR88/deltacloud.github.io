
import React, { useState, useEffect } from "react";
import Logo from "./navbar/Logo";
import DesktopNavigation from "./navbar/DesktopNavigation";
import MobileMenuToggle from "./navbar/MobileMenuToggle";
import MobileMenu from "./navbar/MobileMenu";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-white/95 backdrop-blur-sm shadow-sm py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <DesktopNavigation />
        <MobileMenuToggle 
          isOpen={isMobileMenuOpen} 
          onToggle={handleMobileMenuToggle} 
        />
        <MobileMenu 
          isOpen={isMobileMenuOpen} 
          onClose={handleMobileMenuClose} 
        />
      </div>
    </nav>
  );
};

export default Navbar;
