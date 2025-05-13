import { ChevronUp } from 'lucide-react';

const BackToTopButton = ({ scrollToTop }) => {
  return (
    <button 
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 bg-[#d4af37] text-[#fffbf0] p-3 rounded-full shadow-lg hover:bg-[#b8952c] transition-colors z-40"
      aria-label="Voltar ao topo"
    >
      <ChevronUp size={24} />
    </button>
  );
};

export default BackToTopButton;
