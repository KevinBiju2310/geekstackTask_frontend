const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  className = "",
}) => {
  return (
    <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full px-4 py-3 rounded-full border border-[#1D267E] focus:ring-2 focus:ring-[#1D267E] focus:border-transparent transition-all duration-200 outline-none ${className}`}
      />
    </div>
  );
};

export default Input;
