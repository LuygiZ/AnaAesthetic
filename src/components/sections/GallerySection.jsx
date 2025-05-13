import { Camera } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import galleryImages from '../../data/galleryImages';

const GallerySection = () => {
  return (
    <section id="galeria" className="py-20 bg-[#2c2c2c] text-[#fffbf0]">
      <div className="container mx-auto px-4">
        <SectionTitle>Galeria de Trabalhos</SectionTitle>
        <p className="text-center text-[#eae6da] mb-12 max-w-2xl mx-auto">
          Confira alguns dos meus trabalhos realizados e inspire-se para o seu próximo momento de beleza.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-[#2c2c2c]"
            >
              <img
                src={image}
                alt={`Trabalho realizado ${index + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.instagram.com/rodriguesaesthetics/?hl=pt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#d4af37] hover:text-[#b8952c] font-medium transition-colors"
          >
            <Camera size={20} />
            <span>Ver mais no Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
