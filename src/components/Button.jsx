const Button = ({ children, styles, ...rest }) => {
  return (
    <button
      {...rest}
      className={` flex items-center justify-center px-2 py-1 rounded-lg text-white gap-2 bg-red transition-all ${styles}`}
    >
      {children}
    </button>
  );
};

export default Button;
