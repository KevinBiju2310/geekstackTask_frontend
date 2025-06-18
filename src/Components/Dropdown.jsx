const Dropdown = ({ options, value, onChange, placeholder }) => {
  return (
    <div className="w-full">
      <select
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-lg border border-[#1D267E] bg-[#1D267E] text-white focus:outline-none focus:ring-2 focus:ring-[#1D267E] transition-all"
      >
        <option value="" disabled hidden>
          {placeholder || "-- Select an option --"}
        </option>
        {options.map((option, idx) => (
          <option key={idx} value={option.value} className="text-black">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
