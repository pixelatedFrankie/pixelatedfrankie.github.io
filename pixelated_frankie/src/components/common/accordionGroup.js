const AccordionGroup = ({ items }) => {
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (index) => {
    setActiveItem(activeItem === index ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="mb-2">
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-4 py-2 text-left bg-gray-200 focus:outline-none"
          >
            {item.title}
          </button>
          {activeItem === index && <div className="px-4 py-2">{item.content}</div>}
        </div>
      ))}
    </div>
  );
};