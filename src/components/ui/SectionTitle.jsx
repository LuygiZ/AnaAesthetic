// File: /src/components/ui/SectionTitle.jsx
export const SectionTitle = ({ children }) => (
  <h2 className="text-3xl font-bold text-center mb-6 text-pink-600">
    {children}
    <div className="w-24 h-1 bg-pink-400 mx-auto mt-2"></div>
  </h2>
);

// Also include a default export just to be safe
export default SectionTitle;