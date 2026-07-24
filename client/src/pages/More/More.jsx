import { BookOpen, Briefcase, ChevronRight, Megaphone, User } from "lucide-react";
import { Link } from "react-router-dom";

const moreItems = [
  {
    path: "/opportunities",
    label: "Opportunities",
    description: "Internships, scholarships & competitions",
    icon: Briefcase,
  },
  {
    path: "/noticeboard",
    label: "Noticeboard",
    description: "Campus announcements & community posts",
    icon: Megaphone,
  },
  {
    path: "/resources",
    label: "Resources",
    description: "Past questions, notes & study materials",
    icon: BookOpen,
  },
  {
    path: "/profile",
    label: "Profile",
    description: "Your account & activity",
    icon: User,
  },
];
const More = () => {
  return (
    <div className="max-w-lg mx-auto px-4 md:px-0 py-6 md:py-10">
      <h1 className="font-display font-extrabold text-xl md:text-2xl text-[#1a1a2e] mb-1">More</h1>
      <p className="text-sm md:text-[15px] text-[#6b6b80] mb-6">Everything else on Unify</p>
      <div className="flex flex-col gap-3">{moreItems.map((item)=>{
        const Icon =item.icon
        return(
            <Link key={item.path} to={item.path} className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition">
                <div className="w-11 h-11 rounded-xl bg-[#eee9ff] flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-[#7c6ff7]"/>
                </div>
                <div className="flex-1">
                    <p className="font-display font-bold text-sm md:text-base text-[#1a1a2e]">{item.label}</p>
                    <p className="text-xs md:text-sm text-[#6b6b80]">{item.description}</p>
                </div>
                <ChevronRight size={18} className="text-gray-300"/>
            </Link>
        )
      })}</div>
    </div>
  );
};

export default More;
