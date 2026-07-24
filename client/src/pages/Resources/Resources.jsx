import {
  BookOpen,
  ClipboardList,
  FileText,
  Plus,
  Presentation,
  Search,
} from "lucide-react";
import React, { useState } from "react";
import { resources, resourceTypes } from "../../lib/dummyData";
import { Link } from "react-router-dom";

const typeIcons = {
  "Past Questions": FileText,
  Note: BookOpen,
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
      <div className="flex items-center justify-between mb-5 md:mb-6">
        <div>
          <h1 className="font-display font-extrabold text-xl md:text-2xl text-[#1a1a2e]">
            Resources
          </h1>
          <p className="text-sm md:text-[15px] text-[#6b6b80] mt-1">
            Past questions, notes and study materials
          </p>
        </div>
        <Link
          to="/resources"
          className="flex items-center gap-1.5 bg-[#7c6ff7] text-white text-xs md:text-sm font-semibold px-3 py-2 md:px-4 md:py-2.5 rounded-lg hover:bg-[#6458e8] transition "
        >
          <Plus size={16} />
          <span className="hidden sm:inline">Upload Resources</span>
        </Link>
      </div>
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
      <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-6 md:mb-8 ">
        {resourceTypes.map((type) => (
          <button
            key={type}
            onClick={() => setActiveType(type)}
            className={`shrink-0 px-3.5 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border transition ${activeType === type ? "bg-[#7c6ff7] text-white border-[#7c6ff7]" : "bg-white text-[#6b6b80] border-gray-200 hover:border-[#7c6ff7] hover:text-[#7c6ff7] transition"}`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* resources list */}
      <div>
        {filteredResources.map((resource)=>{
            const Icon=typeIcons[resource.type]
            return(
                <div key={resource.id}>
                    <div>
                        <Icon/>
                    </div>
                </div>
            )
            // return(
            //     <div>
            //         <div>
            //             <Icon/>
            //         </div>
            //         <div>
            //             <p>{resource.title}</p>
            //         </div>
            //     </div>
            // )
        })}
      </div>
    </div>
  );
};

export default Resources;
