const Dropdown = ({ label, options, onSelect }) => (
  <div className="inline-block relative w-64">
    <label className="block text-gray-700 text-sm font-bold mb-2">
      {label}
    </label>
    <select
      onChange={onSelect}
      className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);
