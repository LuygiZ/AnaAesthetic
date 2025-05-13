import SectionTitle from '../ui/SectionTitle';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-pink-100">
      <div className="container mx-auto px-4">
        <SectionTitle>Sobre Nós</SectionTitle>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <img 
              src="/api/placeholder/400/600" 
              alt="Profissional de estética" 
              className="rounded-lg shadow-lg w-full" 
            />
          </div>
          
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold text-pink-600 mb-4">Sofia Oliveira</h3>
            <p className="text-gray-700 mb-4">
              Com mais de 10 anos de experiência no ramo da estética, Sofia Oliveira fundou a Bela Estética com a missão de oferecer serviços de alta qualidade que realçam a beleza natural de cada cliente.
            </p>
            <p className="text-gray-700 mb-4">
              Formada em estética avançada e com especializações em nail art e tratamentos faciais, Sofia acredita que os momentos de cuidado pessoal devem ser relaxantes e rejuvenescedores.
            </p>
            <p className="text-gray-700 mb-4">
              Na Bela Estética, cada cliente recebe um atendimento personalizado, respeitando suas necessidades e desejos. Nosso objetivo é promover não apenas a beleza exterior, mas também o bem-estar e a autoestima.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                <h4 className="font-semibold text-pink-600 mb-2">Nossa Missão</h4>
                <p className="text-gray-700">Proporcionar momentos de cuidado e beleza que elevam a autoestima e bem-estar.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                <h4 className="font-semibold text-pink-600 mb-2">Nossos Valores</h4>
                <p className="text-gray-700">Qualidade, atenção personalizada, produtos premium e ambiente acolhedor.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;