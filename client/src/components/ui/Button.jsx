import React from "react";
const variants = {
  primary: "bg-[#7c6ff7] text-white hover:bg-[#6458e8]",
  secondary:
    "bg-white text-[#7c6ff7] border border-[#7c6ff7] hover:bg-[#f5f3ff]",
  outline:
    "bg-white text-[#6b6b80] border border-gray-200 hover:border-[#7c6ff7] hover:text-[#7c6ff7]",
  danger: "bg-white text-red-500 border border-red-200 hover:bg-red-50",
};

const sizes = {
  sm: "text-xs md:text-sm px-3 py-1.5 md:px-4 md:py-2",
  md: "text-sm md:text-base px-4 py-2.5 md:py-3",
};
const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      className={`flex items-center justify-center gap-1.5 rounded-lg font-semibold transition disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`}
    {...props}>
      {children}
    </button>
  );
};

export default Button;
