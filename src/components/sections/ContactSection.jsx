import { MapPin, Phone, Mail, Instagram, Clock } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import ContactItem from '../ui/ContactItem';

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle>Contactos</SectionTitle>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-pink-600 mb-6">Informações de Contacto</h3>
              
              <div className="space-y-6">
                <ContactItem icon={<MapPin />} title="Endereço">
                  Rua das Flores, 123, Centro<br />
                  Lisboa, Portugal
                </ContactItem>
                
                <ContactItem icon={<Phone />} title="Telefone">
                  +351 912 345 678
                </ContactItem>
                
                <ContactItem icon={<Mail />} title="Email">
                  info@belaestetica.pt
                </ContactItem>
                
                <ContactItem icon={<Instagram />} title="Instagram">
                  @bela.estetica
                </ContactItem>
                
                <ContactItem icon={<Clock />} title="Horário de Funcionamento">
                  Segunda a Sexta: 9h - 19h<br />
                  Sábado: 9h - 16h<br />
                  Domingo: Fechado
                </ContactItem>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="h-full min-h-72 bg-gray-300 rounded-xl shadow-lg overflow-hidden">
              {/* Google Maps would go here - using placeholder */}
              <div className="h-full w-full flex items-center justify-center bg-pink-100">
                <div className="text-center p-4">
                  <MapPin size={48} className="mx-auto text-pink-600 mb-2" />
                  <p className="text-gray-700">Mapa com a localização da Bela Estética</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;