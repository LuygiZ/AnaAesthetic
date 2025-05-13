const ContactItem = ({ icon, title, children }) => (
  <div className="flex items-start">
    <div className="text-[#d4af37] mr-4 mt-1">
      {icon}
    </div>
    <div>
      <h4 className="font-medium text-[#d4af37]">{title}</h4>
      <p className="text-[#fffbf0]">{children}</p>
    </div>
  </div>
);

export default ContactItem;
