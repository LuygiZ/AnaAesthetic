const ServiceCard = ({ service }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <img 
      src={service.image} 
      alt={service.name} 
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-pink-600 mb-2">{service.name}</h3>
      <p className="text-gray-600">{service.description}</p>
      <button className="mt-4 text-pink-600 font-medium hover:text-pink-700">
        Saiba mais →
      </button>
    </div>
  </div>
);

export default ServiceCard;