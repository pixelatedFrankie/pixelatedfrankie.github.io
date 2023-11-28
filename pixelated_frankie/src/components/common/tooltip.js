const Tooltip = ({ text, children }) => (
  <div className="relative flex items-center">
    <div className="absolute bottom-100% mb-2 px-3 py-1 text-sm text-white bg-black rounded">
      {text}
    </div>
    {children}
  </div>
);