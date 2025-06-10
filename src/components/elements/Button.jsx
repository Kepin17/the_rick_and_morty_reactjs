const Button = ({
  className = "w-full h-8 bg-blue-500 mt-3 p-3 flex items-center justify-center text-white font-bold rounded hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer",
  onClick,
  type = "button",
  children,
}) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
