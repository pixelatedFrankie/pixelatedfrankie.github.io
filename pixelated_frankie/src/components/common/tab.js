const Tab = ({ tabs, activeTab, onTabClick }) => (
  <div className="flex border-b">
    {tabs.map((tab, index) => (
      <button
        key={index}
        onClick={() => onTabClick(tab)}
        className={`py-2 px-4 text-gray-700 ${activeTab === tab ? 'border-b-2 font-medium border-blue-500' : ''}`}
      >
        {tab}
      </button>
    ))}
  </div>
);