import { useState } from "react";
import { noticeCategories, notices } from "../../lib/dummyData";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
const categoryColors = {
  Accommodation: "bg-[#fef3cd] text-[#d97706]",
  "Lost & Found": "bg-[#fee2e2] text-[#ef4444]",
  Academic: "bg-[#eee9ff] text-[#7c6ff7]",
  General: "bg-[#f4f3f0] text-[#6b6b80]",
};
const Noticeboard = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredNotices =
    activeCategory === "All"
      ? notices
      : notices.filter((notice) => notice.category === activeCategory);

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-6 md:py-10">
      {/* page header */}
      <div className="flex items-center justify-between mb-5 md:mb-6">
        <div>
          <h1 className="font-display font-extrabold text-xl md:text-2xl text-[#1a1a2e]">
            Noticeboard
          </h1>
          <p className="text-sm md:text-[15px] text-[#6b6b80] mt-1">
            Campus announcements and community posts
          </p>
        </div>
        <Link
          to="/noticeboard/create"
          className="flex items-center gap-1.5 bg-[#7c6ff7] text-white text-xs md:text-sm font-semibold px-3 py-2 md:px-4 md:py-2.5 rounded-lg hover:bg-[#6458e8] transition "
        >
          <Plus size={16} />
          <span className="hidden sm:inline">Post Notice</span>
        </Link>
      </div>
      {/* filter */}
      <div className="flex gap-2 overflow-x-auto scroll-hide mb-6 md:mb-8">
        {noticeCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`shrink-0 px-3.5 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border transition ${activeCategory === category ? "bg-[#7c6ff7] text-white border-[#7c6ff7]" : "bg-white text-[#6b6b80] border-gray-200 hover:border-[#7c6ff7] hover:text-[#7c6ff7]"}`}
          >
            {category}
          </button>
        ))}
      </div>
      {/* notices list */}
      <div className="flex flex-col gap-4">
        {filteredNotices.map((notice) => (
          <div
            key={notice.id}
            className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm"
          >
            <span
              className={`inline-block text-[11px] md:text-xs font-semibold px-2 py-0.5 md:px-3 md:py-1 rounded-full mb-2 ${categoryColors[notice.category]}`}
            >
              {notice.category}
            </span>
            <h3 className="font-display font-bold text-sm md:text-lg text-[#1a1a2e] mb-2">
              {notice.title}
            </h3>
            <p className="text-[13px] md:text-[15px] text-[#6b6b80] leading-relaxed mb-3 md:mb-4">{notice.body}</p>
            <div className="flex items-center gap-2 text-xs text-[#a0a0b0]">
              <span className="font-medium text-[#6b6b80]">{notice.poster}</span>
              <span>.</span>
              <span >{notice.postedAt}</span>
            </div>
          </div>
        ))}
      </div>
      {filteredNotices.length === 0 && (
        <p className="text-center text-sm text-[#a0a0b0] py-12">
          No notices in this category yet.
        </p>
      )}
    </div>
  );
};

export default Noticeboard;
