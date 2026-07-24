import { useState } from "react";
import { clubCategories, clubs } from "../../lib/dummyData";
import { Plus, Users2 } from "lucide-react";
import { Link } from "react-router-dom";

const Clubs = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredClubs =
    activeCategory === "All"
      ? clubs
      : clubs.filter((club) => club.category === activeCategory);
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-6 md:py-10">
      {/* page header */}
      <div className="flex items-center justify-between mb-5 md:mb-6">
        <div>
          <h1 className="font-display font-extrabold text-xl md:text-2xl text-[#1a1a2e]">
            Club
          </h1>
          <p className="text-sm md:text-[15px] text-[#6b6b80] mt-1">
            Find your community on campus
          </p>
        </div>
        <Link
          to="/clubs/create"
          className="flex items-center gap-1.5 bg-[#7c6ff7] text-white text-xs md:text-sm font-semibold px-3 py-2 md:px-4 md:py-2.5 rounded-lg hover:bg-[#6458e8] transition "
        >
          <Plus size={16} />
          <span className="hidden sm:inline">Create Club</span>
        </Link>
      </div>
      {/* filter */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-6 md:mb-8 ">
        {clubCategories.map((category) => (
          <button
            key={category}
            onClick={(e) => setActiveCategory(category)}
            className={`shrink-0 px-3.5 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border transition ${activeCategory === category ? "bg-[#7c6ff7] text-white border-[#7c6ff7]" : "bg-white text-[#6b6b80] border-gray-200 hover:border-[#7c6ff7] hover:text-[#7c6ff7] transition"}`}
          >
            {category}
          </button>
        ))}
      </div>
      {/* clubs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {filteredClubs.map((club) => (
          <Link
            key={club.id}
            to={`/clubs/${club.id}`}
            className="bg-white border border-gray-200 rounded-xl p-4 md:p-5 shadow-sm hover:shadow-md transition block"
          >
            <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-[#eee9ff] flex items-center justify-center mb-3">
              <Users2 size={20} className="text-[#7c6ff7]" />
            </div>
            <span className="inline-block text-[11px] md:text-xs font-semibold px-2 py-0.5 rounded-full bg-[#f4f3f0] text-[#6b6b80] mb-2">
              {club.category}
            </span>
            <h3 className="font-display font-bold text-sm md:text-base text-[#1a1a2e] mb-1.5">
              {club.name}
            </h3>
            <p className="text-xs md:text-sm text-[#6b6b80] leading-relaxed mb-4 line-clamp-2">
              {club.description}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-xs text-[#a0a0b0]">
                {club.members} members
              </span>
              <span
                className={`text-xs md:text-sm font-semibold px-3 py-1.5 rounded-lg ${club.joined ? "bg-white text-[#6b6b80] border border-gray-200" : "bg-[#7c6ff7] text-white"}`}
              >
                {club.joined ? "Joined" : "Join"}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {filteredClubs.length === 0 && (
        <p className="text-center text-sm text-[#a0a0b0] py-12">
          No clubs in this category yet.
        </p>
      )}
    </div>
  );
};

export default Clubs;
