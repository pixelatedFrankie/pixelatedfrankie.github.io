const RadioButton = ({ name, options, onChange }) => (
  <div>
    {options.map((option) => (
      <label key={option.value} className="inline-flex items-center mt-3">
        <input
          type="radio"
          name={name}
          value={option.value}
          onChange={onChange}
          className="form-radio h-5 w-5 text-gray-600"
        />
        <span className="ml-2 text-gray-700">{option.label}</span>
      </label>
    ))}
  </div>
);