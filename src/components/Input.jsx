import { forwardRef, useId } from "react";

function Input(
  { label, type = "text", placeholder, className = "", ...props },
  ref
) {
  const id = useId();

  return (
    <div>
      {label && (
        <label htmlFor={id} className="inline-block mb-1 pl-1">
          {label}
        </label>
      )}

      <input
        id={id}
        type={type}
        ref={ref}
        placeholder={placeholder}
        {...props}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none border border-gray-200 focus:border-gray-400 duration-200 w-full ${className}`}
      />
    </div>
  );
}

export default forwardRef(Input);
