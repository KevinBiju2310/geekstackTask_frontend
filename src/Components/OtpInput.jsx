const OTPInput = ({
  value,
  onChange,
  onKeyDown,
  onFocus,
  onPaste,
  inputRef,
  index,
  isActive = false,
}) => {
  return (
    <input
      ref={inputRef}
      type="text"
      inputMode="numeric"
      pattern="[0-9]*"
      maxLength={1}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onFocus={onFocus}
      className={`w-12 h-16 sm:w-16 sm:h-20 text-center text-2xl sm:text-3xl font-bold border-2 rounded-xl transition-all duration-200 focus:outline-none 
        ${
          isActive || value
            ? "bg-[#1D267E] text-white border-[#1D267E]"
            : "bg-white text-gray-700 border-gray-300"
        } 
        focus:ring-2 focus:ring-[#1D267E]`}
    />
  );
};

export default OTPInput;
