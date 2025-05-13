import { useState } from 'react';
import { Calendar } from 'lucide-react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Agendamento enviado com sucesso! Entraremos em contacto em breve.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      date: '',
      time: '',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Nome */}
        <div>
          <label htmlFor="name" className="block text-[#eae6da] mb-1">Nome Completo</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-[#1c1c1c] text-[#fffbf0] focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
          />
        </div>

        {/* Telefone */}
        <div>
          <label htmlFor="phone" className="block text-[#eae6da] mb-1">Telefone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-[#1c1c1c] text-[#fffbf0] focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-[#eae6da] mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-[#1c1c1c] text-[#fffbf0] focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
          />
        </div>

        {/* Serviço */}
        <div>
          <label htmlFor="service" className="block text-[#eae6da] mb-1">Serviço Desejado</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-[#1c1c1c] text-[#fffbf0] focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
          >
            <option value="">Selecione um serviço</option>
            <option value="Manicure">Manicure</option>
            <option value="Pedicure">Pedicure</option>
            <option value="Nail Art">Nail Art</option>
            <option value="Depilação">Depilação</option>
            <option value="Limpeza de Pele">Limpeza de Pele</option>
            <option value="Sobrancelhas">Sobrancelhas</option>
          </select>
        </div>

        {/* Data */}
        <div>
          <label htmlFor="date" className="block text-[#eae6da] mb-1">Data Pretendida</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-[#1c1c1c] text-[#fffbf0] focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
          />
        </div>

        {/* Hora */}
        <div>
          <label htmlFor="time" className="block text-[#eae6da] mb-1">Horário Pretendido</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-[#1c1c1c] text-[#fffbf0] focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
          />
        </div>

        {/* Mensagem */}
        <div className="md:col-span-2">
          <label htmlFor="message" className="block text-[#eae6da] mb-1">Mensagem (opcional)</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-[#1c1c1c] text-[#fffbf0] focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
          ></textarea>
        </div>
      </div>

      {/* Botão de envio */}
      <div className="mt-8">
        <button 
          type="submit"
          className="w-full bg-[#d4af37] hover:bg-[#b8952c] text-[#1c1c1c] font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
        >
          <Calendar size={20} />
          <span>Enviar Agendamento</span>
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
