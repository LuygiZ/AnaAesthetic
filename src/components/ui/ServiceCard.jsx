const ServiceCard = ({ service }) => (
  <div className="bg-[#1e1e1e] rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-[#d4af37]/20">
    <img 
      src={service.image} 
      alt={service.name} 
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-[#d4af37] mb-2">{service.name}</h3>
      <p className="text-[#eae6da]">{service.description}</p>
      <button className="mt-4 text-[#d4af37] font-medium hover:text-[#b8952c] transition-colors">
        Saiba mais →
      </button>
    </div>
  </div>
);

export default ServiceCard;
