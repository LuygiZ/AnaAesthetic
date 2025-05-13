const Navigation = ({ activeSection, scrollToSection, mobile, closeMobileMenu }) => {
  const links = [
    { id: 'home', label: 'Home' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'galeria', label: 'Galeria' },
    { id: 'agendamento', label: 'Agendamento' },
    { id: 'contacto', label: 'Contacto' },
  ];

  const handleClick = (id) => {
    scrollToSection(id);
    if (mobile && closeMobileMenu) {
      closeMobileMenu();
    }
  };

  return links.map(link => (
    <button
      key={link.id}
      onClick={() => handleClick(link.id)}
      className={`${mobile ? 'py-2' : ''} font-medium transition-colors ${
        activeSection === link.id
          ? 'text-[#d4af37]'
          : 'text-[#5c5c5c] hover:text-[#c39c34]'
      }`}
    >
      {link.label}
    </button>
  ));
};

export default Navigation;
