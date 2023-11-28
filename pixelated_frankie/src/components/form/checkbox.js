const Checkbox = ({ label, checked, onChange }) => (
  <label className="inline-flex items-center mt-3">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="form-checkbox h-5 w-5 text-gray-600"
    />
    <span className="ml-2 text-gray-700">{label}</span>
  </label>
);