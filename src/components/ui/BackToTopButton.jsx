import { ChevronUp } from 'lucide-react';

const BackToTopButton = ({ scrollToTop }) => {
  return (
    <button 
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 bg-pink-600 text-white p-3 rounded-full shadow-lg hover:bg-pink-700 transition-colors z-40"
    >
      <ChevronUp size={24} />
    </button>
  );
};

export default BackToTopButton;