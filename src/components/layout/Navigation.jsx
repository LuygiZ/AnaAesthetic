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
      className={`${mobile ? 'py-2' : ''} font-medium hover:text-pink-600 transition-colors ${
        activeSection === link.id ? 'text-pink-600' : 'text-gray-700'
      }`}
    >
      {link.label}
    </button>
  ));
};

export default Navigation;