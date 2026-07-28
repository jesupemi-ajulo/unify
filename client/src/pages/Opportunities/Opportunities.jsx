import { useState } from "react";
import { opportunities, opportunityTypes } from "../../lib/dummyData";
import { ArrowRight, Briefcase, Clock, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import PageHeader from "../../components/shared/PageHeader";
import Filter from "../../components/shared/Filter";
import EmptyState from "../../components/shared/EmptyState";
const Opportunities = () => {
  const [activeType, setActiveType] = useState("All");
  const filteredOpportunites =
    activeType === "All"
      ? opportunities
      : opportunities.filter((opp) => opp.type === activeType.slice(0, -1));
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-0 py-6 md:py-10">
      {/* page header */}
      <PageHeader
        title="Opportunities"
        subtitle="Internships, scholarships, competitions and more"
        actionTo="/opportunities/create"
        actionLabel="Post Opportunity"
      />
      {/* filter */}
      <Filter
        options={opportunityTypes}
        active={activeType}
        onChange={setActiveType}
      />
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
              <span
                className={`flex items-center gap-1 text-xs md:text-sm font-semibold ${
                  opp.urgent ? "text-[#f59e0b]" : "text-[#a0a0b0]"
                }`}
              >
                <Clock size={13} />
                {opp.deadline}
              </span>
              <a
                href={opp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 bg-[#7c6ff7] text-white text-xs md:text-sm font-semibold px-3 py-1.5 md:px-4 md:py-2 rounded-lg hover:bg-[#6458e8] transition"
              >
                Apply <ArrowRight size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
      {filteredOpportunites.length === 0 && (
        <EmptyState message="No opportunities in this category yet." />
      )}
    </div>
  );
};

export default Opportunities;
