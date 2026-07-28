const sizeMap = {
  xs: "w-6 h-6 text-[10px]",
  sm: "w-8 h-8 text-xs",
  md: "w-11 h-11 text-base",
  lg: "w-16 h-16 md:w-20 md:h-20 text-xl md:text-2xl",
};
const Avatar = ({name,size="sm", className=""}) => {
    const initial = name?.charAt(0)?.toUpperCase()||'U'
  return <div className={`rounded-full bg-[#eee9ff] text-[#7c6ff7] flex items-center justify-center font-bold shrink-0 ${sizeMap[size]} ${className}`}>{initial}</div>;
};

export default Avatar;
