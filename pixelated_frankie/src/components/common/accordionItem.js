const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 text-left focus:outline-none"
      >
        {title}
      </button>
      {isOpen && <div className="px-4 py-2">{content}</div>}
    </div>
  );
};
