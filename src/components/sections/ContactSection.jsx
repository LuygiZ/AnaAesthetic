import { MapPin, Phone, Mail, Instagram, Clock } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import ContactItem from '../ui/ContactItem';

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 bg-[#2c2c2c] text-[#ffffff]">
      <div className="container mx-auto px-4">
        <SectionTitle cor="#d4af37">Contactos</SectionTitle>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <div className="bg-[#1e1e1e] rounded-xl shadow-lg p-6 text-justify border border-[#d4af37]/30">
              <h3 className="text-xl font-semibold text-[#d4af37] mb-6 text-center">
                Informações de Contacto
              </h3>

              <div className="space-y-6 max-w-md mx-auto text-[#f8f8f8]">
                <ContactItem icon={<MapPin className="text-[#d4af37]" />} title="Endereço">
                  Rua das Flores, 123, Centro<br />
                  Lisboa, Portugal
                </ContactItem>

                <ContactItem icon={<Phone className="text-[#d4af37]" />} title="Telefone">
                  +351 912 345 678
                </ContactItem>

                <ContactItem icon={<Mail className="text-[#d4af37]" />} title="Email">
                  info@rodriguesaesthetics.pt
                </ContactItem>

                <ContactItem icon={<Instagram className="text-[#d4af37]" />} title="Instagram">
                  @rodriguesaesthetics
                </ContactItem>

                <ContactItem icon={<Clock className="text-[#d4af37]" />} title="Horário de Funcionamento">
                  Segunda a Sexta: 9h - 19h<br />
                  Sábado: 9h - 16h<br />
                  Domingo: Fechado
                </ContactItem>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="h-full min-h-72 bg-[#1e1e1e] rounded-xl shadow-lg overflow-hidden flex items-center justify-center border border-[#d4af37]/30">
              <div className="text-center p-4">
                <MapPin size={48} className="mx-auto text-[#d4af37] mb-2" />
                <p className="text-[#fffbf0]">
                  Mapa com a localização
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
