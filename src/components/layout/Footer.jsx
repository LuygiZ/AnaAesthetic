import { Instagram, Phone } from 'lucide-react';

const Footer = ({ scrollToSection }) => {
  return (
    <footer className="bg-pink-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-8 justify-between">
          <div className="w-full md:w-auto">
            <h2 className="text-2xl font-bold mb-4">Bela Estética</h2>
            <p className="max-w-md">Transformando momentos de cuidado em experiências de beleza e bem-estar.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('home')} className="hover:underline">Home</button></li>
              <li><button onClick={() => scrollToSection('servicos')} className="hover:underline">Serviços</button></li>
              <li><button onClick={() => scrollToSection('sobre')} className="hover:underline">Sobre</button></li>
              <li><button onClick={() => scrollToSection('galeria')} className="hover:underline">Galeria</button></li>
              <li><button onClick={() => scrollToSection('agendamento')} className="hover:underline">Agendamento</button></li>
              <li><button onClick={() => scrollToSection('contacto')} className="hover:underline">Contacto</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Siga-nos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-pink-200 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-pink-200 transition-colors">
                <Phone size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-pink-500 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Bela Estética. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;