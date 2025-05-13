import { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomeSection from './components/sections/HomeSection';
import ServicesSection from './components/sections/ServicesSection';
import AboutSection from './components/sections/AboutSection';
import GallerySection from './components/sections/GallerySection';
import BookingSection from './components/sections/BookingSection';
import ContactSection from './components/sections/ContactSection';
import BackToTopButton from './components/ui/BackToTopButton';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);

      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-[#1c1c1c] text-[#fffbf0] font-sans">
      <Header 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
      />
      
      <main>
        <HomeSection scrollToSection={scrollToSection} />
        <ServicesSection />
        <AboutSection />
        <GallerySection />
        <BookingSection />
        <ContactSection />
      </main>
      
      <Footer scrollToSection={scrollToSection} />
      
      {showBackToTop && (
        <BackToTopButton scrollToTop={scrollToTop} />
      )}
    </div>
  );
}

export default App;