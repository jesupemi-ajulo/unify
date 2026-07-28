import {
  BookOpen,
  ClipboardList,
  Download,
  FileText,
  Layers,
  Plus,
  Presentation,
  Search,
} from "lucide-react";
import React, { useState } from "react";
import { resources, resourceTypes } from "../../lib/dummyData";
import { Link } from "react-router-dom";
import PageHeader from "../../components/shared/PageHeader";
import EmptyState from "../../components/shared/EmptyState";
import Filter from "../../components/shared/Filter";

const typeIcons = {
  "Past Questions": FileText,
  Notes: BookOpen,
  Slides: Presentation,
  Summary: ClipboardList,
};
const Resources = () => {
  const [activeType, setActiveType] = useState("All");
  const [search, setSearch] = useState("");

  const filteredResources = resources.filter((resource) => {
    const matchesType =
      activeType === "All" ||
      resource.type ===
        activeType.replace(/s$/, "").replace("Question", "Questions");
    const matchesSearch = resource.title
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesType && matchesSearch;
  });
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-6 md:py-10">
      {/* page header */}
      <PageHeader
        title="Resources"
        subtitle="Past questions, notes and study materials"
        actionTo="/resources/upload"
        actionLabel="Upload Resources"
      />
      {/* search */}
      <div className="flex items-center gap-2 bg-[#f4f3f0] border border-gray-200 rounded-full px-4 py-2.5 mb-4 text-sm">
        <Search size={16} className="text-[#a0a0b0]" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by course code or title..."
          className="bg-transparent outline-none flex-1 text-[#1a1a2e] placeholder:text-[#a0a0b0]"
        />
      </div>

      {/* filter */}
      <Filter
        options={resourceTypes}
        active={activeType}
        onChange={setActiveType}
      />
      {/* resources list */}
      <div className="bg-white border border-gray-200 rounded-xl divide-y divide-gray-100">
        {filteredResources.map((resource) => {
          const Icon = typeIcons[resource.type];
          return (
            <div
              key={resource.id}
              className="flex items-center gap-3 md:gap-4 p-4 md:p-5"
            >
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-lg bg-[#eee9ff] flex items-center justify-center shrink-0">
                <Icon size={18} className="text-[#7c6ff7]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm md:text-base font-semibold text-[#1a1a2e] mb-1 truncate">
                  {resource.title}
                </p>
                <p className="text-xs md:text-sm text-[]#a0a0b0">
                  {resource.type} . {resource.department} .{" "}
                  {resource.uploadedAt}
                </p>
              </div>
              <button className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-[#7c6ff7] text-white flex items-center justify-center shrink-0 hover:bg-[#6458e8] transition">
                <Download size={15} />
              </button>
            </div>
          );
        })}
      </div>
      {filteredResources.length === 0 && (
        <EmptyState message="No resources match your search."/>
      )}
    </div>
  );
};

export default Resources;
