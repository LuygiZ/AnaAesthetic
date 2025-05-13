import SectionTitle from '../ui/SectionTitle';
import BookingForm from '../ui/BookingForm';

const BookingSection = () => {
  return (
    <section id="agendamento" className="py-20 bg-[#1c1c1c] text-[#fffbf0]">
      <div className="container mx-auto px-4">
        <SectionTitle>Agendamento</SectionTitle>
        <p className="text-center text-[#eae6da] mb-12 max-w-2xl mx-auto">
          Escolha o serviço que deseja e agende o seu momento de beleza e bem-estar. Respondemos em até 24 horas.
        </p>

        <div className="bg-[#2c2c2c] rounded-xl shadow-lg p-6 md:p-8 max-w-2xl mx-auto border border-[#d4af37]/30">
          <BookingForm />
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
