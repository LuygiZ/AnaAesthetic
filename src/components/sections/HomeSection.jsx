const HomeSection = ({ scrollToSection }) => {
  return (
    <section id="home" className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url('/api/placeholder/1600/900')` }}>
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Realce a sua beleza natural</h2>
        <p className="text-xl text-white mb-8 max-w-2xl">Cuidados de qualidade para unhas e estética, pensados especialmente para si</p>
        <button 
          onClick={() => scrollToSection('agendamento')}
          className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300"
        >
          Agendar Agora
        </button>
      </div>
    </section>
  );
};

export default HomeSection;