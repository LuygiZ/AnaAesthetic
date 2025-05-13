import { Instagram, Phone } from 'lucide-react';
import Luis from '../../assets/Luís_Santos.png';

const Footer = ({ scrollToSection }) => {
  return (
    <footer className="bg-[#2f2f2f] text-[#fffbf0] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-8 justify-between">
          <div className="w-full md:w-auto">
            <h2 className="text-2xl font-bold mb-4 text-[#d4af37]">Rodrigues Aesthetics</h2>
            <p className="max-w-md">
              Transformando momentos de cuidado em experiências de beleza e bem-estar.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#d4af37]">Siga-nos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#fffbf0] transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-[#fffbf0] transition-colors">
                <Phone size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#d4af37] mt-8 pt-8 text-center space-y-4">
          <p>&copy; {new Date().getFullYear()} Rodrigues Aesthetics. Todos os direitos reservados.</p>

          <div className="footer-author">
            <img
              src={Luis}
              alt="Luís Santos"
              className="footer-author-image"
            />
            <div className="footer-author-text">
              <p>Desenvolvido por Luís Santos</p>
              <a
                href="https://luissantosportfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                O meu Portfólio
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .footer-author {
          display: flex;
          align-items: center;
          gap: 10px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 20px;
          text-align: center;
          color: #fffbf0;
        }

        .footer-author-image {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin-right: 10px;
          object-fit: cover;
          border: 2px solid #d4af37;
        }

        .footer-author-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          font-size: 14px;
        }

        .footer-author a {
          color: #d4af37;
          text-decoration: none;
          font-size: 14px;
        }

        .footer-author a:hover {
          text-decoration: underline;
          color: #fffbf0;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
