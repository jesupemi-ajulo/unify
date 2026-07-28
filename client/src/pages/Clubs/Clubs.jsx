import { useState } from "react";
import { clubCategories, clubs, eventCategories } from "../../lib/dummyData";
import { Plus, Users2 } from "lucide-react";
import { Link } from "react-router-dom";
import PageHeader from "../../components/shared/PageHeader";
import Filter from "../../components/shared/Filter";
import EmptyState from "../../components/shared/EmptyState";

const Clubs = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredClubs =
    activeCategory === "All"
      ? clubs
      : clubs.filter((club) => club.category === activeCategory);
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-6 md:py-10">
      {/* page header */}
      <PageHeader
        title="Club"
        subtitle="Find your community on campus"
        actionTo="/clubs/create"
        actionLabel="Create Club"
      />
      {/* filter */}
      <Filter
        options={clubCategories}
        active={activeCategory}
        onChange={setActiveCategory}
      />
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
        <EmptyState message="No clubs in this category yet." />
      )}
    </div>
  );
};

export default Clubs;
