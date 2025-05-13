import salonImg from '../../assets/salon.png';

const HomeSection = ({ scrollToSection }) => {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${salonImg})` }}
    >
      <div className="relative h-full flex justify-center items-center px-4">
        <div className="bg-[#1c1c1c]/80 backdrop-blur-md rounded-2xl p-8 max-w-3xl text-center shadow-lg">
          <h2 className="text-4xl md:text-6xl font-bold text-[#d4af37] mb-4">
            Realce a sua beleza natural
          </h2>
          <p className="text-xl text-[#fffbf0] mb-8">
            Cuidados de qualidade para unhas e estética, pensados especialmente para si
          </p>
          <button
            onClick={() => scrollToSection('agendamento')}
            className="bg-[#d4af37] hover:bg-[#b8952c] text-[#1c1c1c] font-semibold px-8 py-3 rounded-full transition-colors duration-300"
          >
            Agendar Agora
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
