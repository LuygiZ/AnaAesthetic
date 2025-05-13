import SectionTitle from '../ui/SectionTitle';
import BookingForm from '../ui/BookingForm';

const BookingSection = () => {
  return (
    <section id="agendamento" className="py-20 bg-gradient-to-br from-pink-50 to-pink-100">
      <div className="container mx-auto px-4">
        <SectionTitle>Agendamento</SectionTitle>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Escolha o serviço que deseja e agende o seu momento de beleza e bem-estar. Respondemos em até 24 horas.
        </p>
        
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-2xl mx-auto">
          <BookingForm />
        </div>
      </div>
    </section>
  );
};

export default BookingSection;