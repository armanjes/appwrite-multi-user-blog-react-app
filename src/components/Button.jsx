export default function Button({
  children,
  type = "button",
  className = "",
  onClick
}) {
  return (
    <button
      type={type}
      className={`cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
