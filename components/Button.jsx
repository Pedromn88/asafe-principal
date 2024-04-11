export const Button = ({ className, onClick, children, id, disabled }) => {
  return (
    <button
      disabled={disabled}
      id={id}
      className={`${className} + bg-asafe hover:asafehover px-6 py-2 rounded-full  text-lg font-bold`}
      onClick={onClick}>
      {children}
    </button>
  );
};
