import { Camera } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import galleryImages from '../../data/galleryImages';

const GallerySection = () => {
  return (
    <section id="galeria" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle>Galeria de Trabalhos</SectionTitle>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Confira alguns dos nossos trabalhos realizados e inspire-se para o seu próximo momento de beleza.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img 
                src={image} 
                alt={`Trabalho realizado ${index + 1}`} 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" 
              />
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <button className="flex items-center gap-2 mx-auto text-pink-600 hover:text-pink-700 font-medium">
            <Camera size={20} />
            <span>Ver mais no Instagram</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;