import SectionTitle from '../ui/SectionTitle';
import ServiceCard from '../ui/ServiceCard';
import services from '../../data/service';

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle>Nossos Serviços</SectionTitle>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Oferecemos tratamentos personalizados para realçar a sua beleza com produtos de qualidade premium e técnicas avançadas.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;