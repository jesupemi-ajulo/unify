import { Plus } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';

const PageHeader = ({title,subtitle,actionLabel, actionTo}) => {
  return (
    <div className="flex items-center justify-between mb-5 md:mb-6">
      <div>
        <h1 className="font-display font-extrabold text-xl md:text-2xl text-[#1a1a2e]">
          {title}
        </h1>
        <p className="text-sm md:text-[15px] text-[#6b6b80] mt-1">
          {subtitle}
        </p>
      </div>
      <Link
        to={actionTo}
        className="flex items-center gap-1.5 bg-[#7c6ff7] text-white text-xs md:text-sm font-semibold px-3 py-2 md:px-4 md:py-2.5 rounded-lg hover:bg-[#6458e8] transition "
      >
        <Plus size={16} />
        <span className="hidden sm:inline">{actionLabel}</span>
      </Link>
    </div>
  );
}

export default PageHeader