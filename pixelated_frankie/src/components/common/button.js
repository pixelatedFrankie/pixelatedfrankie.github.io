const Button = ({ children, variant }) => {
  const baseStyle = 'py-2 px-4 rounded text-white font-bold';
  const variantStyles = {
    primary: 'bg-blue-500 hover:bg-blue-700',
    secondary: 'bg-gray-500 hover:bg-gray-700',
    // Add more variants as needed
  };

  return (
    <button className={`${baseStyle} ${variantStyles[variant]}`}>
      {children}
    </button>
  );
};
