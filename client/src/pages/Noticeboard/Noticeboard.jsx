import { useState } from "react";
import { noticeCategories, notices } from "../../lib/dummyData";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import PageHeader from "../../components/shared/PageHeader";
import EmptyState from "../../components/shared/EmptyState";
import Filter from "../../components/shared/Filter";
import Avatar from "../../components/ui/Avatar";
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
      <PageHeader
        title="Noticeboard"
        subtitle="Campus announcements and community posts"
        actionLabel="Post Notice"
        actionTo="/noticeboard/create"
      />
      {/* filter */}
      <Filter
        options={noticeCategories}
        active={activeCategory}
        onChange={setActiveCategory}
      />
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
            <p className="text-[13px] md:text-[15px] text-[#6b6b80] leading-relaxed mb-3 md:mb-4">
              {notice.body}
            </p>
            <div className="flex items-center gap-2 text-xs text-[#a0a0b0]">
              <Avatar name={notice.poster} size="xs"/><span className="font-medium text-[#6b6b80]">
                {notice.poster}
              </span>
              <span>.</span>
              <span>{notice.postedAt}</span>
            </div>
          </div>
        ))}
      </div>
      {filteredNotices.length === 0 && (
        <EmptyState message="No notices in this category yet."/>
      )}
    </div>
  );
};

export default Noticeboard;
