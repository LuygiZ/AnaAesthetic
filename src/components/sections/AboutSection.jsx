import SectionTitle from '../ui/SectionTitle';
import profile from "../../assets/profile.png";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-[#1c1c1c] text-[#fffbf0]">
      <div className="container mx-auto px-4">
        <SectionTitle>Sobre Nós</SectionTitle>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <img
              src={profile}
              alt="Profissional de estética"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold text-[#d4af37] mb-4">Ana Rodrigues</h3>
            <p className="text-[#eae6da] mb-4 text-justify">
              Movida pela paixão pela estética e pelo desejo constante de evolução, Ana Rodrigues fundou a Rodrigues Aesthetics com a missão de proporcionar uma experiência única e personalizada. Cada serviço é pensado para realçar a beleza natural e valorizar a confiança de quem nos escolhe.
            </p>
            <p className="text-[#eae6da] mb-4 text-justify">
              Formada em estética avançada e com especializações em nail art e tratamentos faciais, a Ana acredita que os momentos de cuidado pessoal devem ser relaxantes e rejuvenescedores.
            </p>
            <p className="text-[#eae6da] mb-4 text-justify">
              Na Rodrigues Aesthetics, cada cliente recebe um atendimento personalizado, respeitando as suas necessidades e desejos. O meu objetivo é promover não apenas a beleza exterior, mas também o bem-estar e a autoestima.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <div className="bg-[#2c2c2c] p-4 rounded-lg shadow-md flex-1 border border-[#d4af37]/30">
                <h4 className="font-semibold text-[#d4af37] mb-2">A Minha Missão</h4>
                <p className="text-[#eae6da] text-justify">
                  Proporcionar momentos de cuidado e beleza que elevam a autoestima e bem-estar.
                </p>
              </div>
              <div className="bg-[#2c2c2c] p-4 rounded-lg shadow-md flex-1 border border-[#d4af37]/30">
                <h4 className="font-semibold text-[#d4af37] mb-2">Os Meus Valores</h4>
                <p className="text-[#eae6da] text-justify">
                  Qualidade, atenção personalizada, produtos premium e ambiente acolhedor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
