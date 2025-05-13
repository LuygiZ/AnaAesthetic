import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Navigation from './Navigation';

const Header = ({ activeSection, scrollToSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-pink-600">Bela Estética</h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Navigation 
            activeSection={activeSection} 
            scrollToSection={scrollToSection} 
            mobile={false}
          />
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-pink-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-pink-100">
          <div className="container mx-auto px-4 py-2 flex flex-col">
            <Navigation 
              activeSection={activeSection} 
              scrollToSection={scrollToSection} 
              mobile={true}
              closeMobileMenu={() => setMobileMenuOpen(false)}
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;