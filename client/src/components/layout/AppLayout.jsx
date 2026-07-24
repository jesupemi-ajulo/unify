import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  Bell,
  BookOpen,
  Briefcase,
  Calendar,
  Grid3X3,
  Home,
  Megaphone,
  Search,
  ShoppingBag,
  User,
  Users2,
} from "lucide-react";

const AppLayout = ({ children }) => {
  const location = useLocation();
  const { profile } = useAuth();
  // desktop sidebar
  const sidebarItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/events", label: "Events", icon: Calendar },
    { path: "/opportunities", label: "Opportunities", icon: Briefcase },
    { path: "/marketplace", label: "Market", icon: ShoppingBag },
    {
      path: "/resources",
      label: "Resources",
      icon: BookOpen,
    },
    { path: "/clubs", label: "Clubs", icon: Users2 },
    {
      path: "/noticeboard",
      label: "Noticeboard",
      icon: Megaphone,
    },
    { path: "/profile", label: "Profile", icon: User },
  ];
  // mobile bottom bar
  const mobileItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/events", label: "Events", icon: Calendar },
    { path: "/marketplace", label: "Market", icon: ShoppingBag },
    { path: "/clubs", label: "Clubs", icon: Users2 },
    { path: "/more", label: "More", icon: Grid3X3 },
  ];
  const isActive = (path) => location.pathname === path;
  const initials = profile?.full_name?.charAt(0)?.toUpperCase() || "U";
  return (
    <div className="min-h-screen bg-[#fafaf8]">
      {/* top navbar */}
      <header className="sticky top-0 z-20 bg-white border-b border-gray-200 px-4 md:px-8 h-14 flex items-center justify-between">
        <span className="font-display text-lg font-extrabold text-[#7c6ff7]">
          Unify
        </span>
        <div className="hidden md:flex flex-1 max-w-sm mx-6 items-center gap-2 bg-[#f4f3f0] border border-gray-200 rounded-full px-4 py-2 text-sm text-[#a0a0b0]">
          <Search size={16} />
          <span>Search events, clubs, listings...</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="w-8 h-8 rounded-full bg-[#f4f3f0] flex items-center justify-center relative">
            <Bell size={16} />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
          </button>
          <div className="w-8 h-8 rounded-full bg-[#eee9ff] text-[#7c6ff7] flex items-center justify-center text-xs font-bold">
            {initials}
          </div>
        </div>
      </header>
      <div className="flex">
        {/* desktop sidebar */}
        <aside className="hidden md:flex md:flex-col md:w-60 md:shrink-0 border-r border-gray-200 bg-white min-h-[calc(100vh-56px)] py-6 fixed">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-6 py-2.5 mx-2 rounded-lg text-sm font-medium transition ${
                  isActive(item.path)
                    ? "bg-[#eee9ff] text-[#7c6ff7] font-semibold"
                    : "text-[#6b6b80] hover:bg-[#f4f3f0]"
                }`}
              >
                <Icon size={18} />
                {item.label}
              </Link>
            );
          })}
        </aside>
        {/* main content */}
        <main className="flex-1 pb-20 md:pb-0 overflow-x-hidden">
          {children}
        </main>
      </div>
      {/* bottom tab bar for mobile screen */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex items-start pt-2 h-18 z-20">
        {mobileItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex-1 flex flex-col items-center gap-1"
            >
              <Icon
                size={20}
                className={active ? "text-[#7c6ff7]" : "text-[#a0a0b0]"}
              />
              <span
                className={`text-[10px] font-medium ${active ? "text-[#7c6ff7]" : "text-[#a0a0b0]"}`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default AppLayout;
