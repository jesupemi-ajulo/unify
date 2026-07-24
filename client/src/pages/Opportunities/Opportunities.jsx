import { useState } from "react";
import { opportunities, opportunityTypes } from "../../lib/dummyData";
import { ArrowRight, Briefcase, Clock, Plus } from "lucide-react";
import { Link } from "react-router-dom";
const Opportunities = () => {
  const [activeType, setActiveType] = useState("All");
  const filteredOpportunites =
    activeType === "All"
      ? opportunities
      : opportunities.filter((opp) => opp.type === activeType.slice(0, -1));
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-0 py-6 md:py-10">
      {/* page header */}
      <div className="flex items-center justify-between mb-5 md:mb-6">
        <div>
          <h1 className="font-display font-extrabold text-xl md:text-2xl text-[#1a1a2e]">
            Opportunites
          </h1>
          <p className="text-sm md:text-[15px] text-[#6b6b80] mt-1">
            Internships, scholarships, competitions and more
          </p>
        </div>
        <Link
          to="/opportunities/create"
          className="flex items-center gap-1.5 bg-[#7c6ff7] text-white text-xs md:text-sm font-semibold px-3 py-2 md:px-4 md:py-2.5 rounded-lg hover:bg-[#6458e8] transition"
        >
          <Plus size={16} />{" "}
          <span className="hidden sm:inline">Post Opportunity</span>
        </Link>
      </div>
      {/* filter */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-6 md:mb-8">
        {opportunityTypes.map((type) => (
          <button
            key={type}
            onClick={() => setActiveType(type)}
            className={`shrink-0 px-3.5 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border transition ${activeType === type ? "bg-[#7c6ff7] text-white border-[#7c6ff7]" : "bg-white text-[#6b6b80] border-gray-200 hover:border-[#7c6ff7] hover:text-[#7c6ff7]"}`}
          >
            {type}
          </button>
        ))}
      </div>
      {/* opportunities list */}
      <div className="flex flex-col gap-4">
        {filteredOpportunites.map((opp) => (
          <div
            key={opp.id}
            className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm"
          >
            <div className="flex items-center justify-between mb-2 md:mb-3">
              <span className="inline-flex items-center gap-1 text-[11px] md:text-xs font-semibold px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-[#eee9ff] text-[#7c6ff7]">
                <Briefcase size={12} />
                {opp.type}
              </span>
            </div>
            <h3 className="font-display font-bold text-sm md:text-lg text-[#1a1a2e] mb-2">
              {opp.title}
            </h3>
            <p className="text-[13px] md:text-[15px] text-[#6b6b80] leading-relaxed mb-3 md:mb-4">
              {opp.description}
            </p>
            <div className="flex items-center justify-between">
              <span className={`flex items-center gap-1 text-xs md:text-sm font-semibold ${
                opp.urgent ? "text-[#f59e0b]": "text-[#a0a0b0]"}`}>
                <Clock size={13}/>
                {opp.deadline}
              </span>
              <a href={opp.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1 bg-[#7c6ff7] text-white text-xs md:text-sm font-semibold px-3 py-1.5 md:px-4 md:py-2 rounded-lg hover:bg-[#6458e8] transition">
                Apply <ArrowRight size={16}/>
              </a>
            </div>
          </div>
        ))}
      </div>
      {filteredOpportunites.length === 0 && (
        <p className="text-center text-sm text-[#a0a0b0] py-12">No opportunities in this category yet.</p>
      )}
    </div>
  );
};

export default Opportunities;
