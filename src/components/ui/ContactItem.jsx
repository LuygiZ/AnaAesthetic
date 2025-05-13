const ContactItem = ({ icon, title, children }) => (
  <div className="flex items-start">
    <div className="text-pink-600 mr-4 mt-1">
      {icon}
    </div>
    <div>
      <h4 className="font-medium text-gray-900">{title}</h4>
      <p className="text-gray-600">{children}</p>
    </div>
  </div>
);

export default ContactItem;