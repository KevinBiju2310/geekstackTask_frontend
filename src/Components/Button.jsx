const Button = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}) => {
  const baseClasses =
    "w-full py-3 px-4 rounded-full font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const customStyle =
    "bg-[#1D267E] text-white hover:bg-[#151e6b] focus:ring-[#1D267E] shadow-md hover:shadow-lg transform hover:-translate-y-0.5";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${customStyle} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
