const Accordion = ({ items }) => (
  <div className="w-full">
    {items.map((item, index) => (
      <div key={index} className="mb-2">
        <button className="w-full px-4 py-2 text-left bg-gray-200 focus:outline-none">
          {item.title}
        </button>
        <div className="border px-4 py-2">
          {item.content}
        </div>
      </div>
    ))}
  </div>
);