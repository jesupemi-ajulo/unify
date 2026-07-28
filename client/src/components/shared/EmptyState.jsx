import { Children } from "react";

const EmptyState = ({message}) => {
  return (
    <p className="text-center text-sm text-[#a0a0b0] py-12">
      {message}
    </p>
  );
}

export default EmptyState