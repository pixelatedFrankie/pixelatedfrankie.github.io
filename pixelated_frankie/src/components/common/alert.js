const Alert = ({ type, message, onClose }) => {
  const typeStyles = {
    success: 'bg-green-100 border-green-400 text-green-700',
    error: 'bg-red-100 border-red-400 text-red-700',
    // Add more types as needed
  };

  return (
    <div className={`border px-4 py-3 rounded relative ${typeStyles[type]}`}>
      <span className="block sm:inline">{message}</span>
      {onClose && (
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={onClose}>
          <svg className="fill-current h-6 w-6 text-gray-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1 1 0 0 1-1.414 0L10 11.414 7.656 13.758a1 1 0 1 1-1.414-1.414L8.586 10 6.242 7.656a1 1 0 1 1 1.414-1.414L10 8.586l2.344-2.344a1 1 0 1 1 1.414 1.414L11.414 10l2.344 2.344a1 1 0 0 1 0 1.414z"/></svg>
        </span>
      )}
    </div>
  );
};