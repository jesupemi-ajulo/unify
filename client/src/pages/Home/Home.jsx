import { Bookmark, Briefcase, Calendar, ShoppingBag } from "lucide-react";
import { dontMissItems, feedItems } from "../../lib/dummyData";
const typeStyles = {
  event: {
    icon: Calendar,
    badge: "bg-[#eee9ff] text-[#7c6ff7]",
    label: "Event",
  },
  opportunity: {
    icon: Briefcase,
    badge: "bg-[#e8f8f1] text-[#4caf82]",
    label: "Opportunity",
  },
  listing: {
    icon: ShoppingBag,
    badge: "bg-[#fef3cd] text-[#d97706]",
    label: "Listing",
  },
};
const Home = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6 md:px-0 md:py-6 overflow-hidden">
      {/* dont miss banner */}
      <div className="bg-gradient-to-br from-[#7c6ff7] to-[#9b8ffa] rounded-xl p-5 text-white mb-6">
        <p className="text-[10px] md:text-sm font-bold uppercase tracking-wider opacity-80 mb-1">
          Don't Miss
        </p>
        <p className="font-display font-bold text-base md:text-lg mb-3 md:mb-4">
          Happening & expiring soon
        </p>
        <div className="flex gap-3 overflow-x-auto scrollbar-hide">
          {dontMissItems.map((item, i) => (
            <div
              key={i}
              className="bg-white/20 rounded-lg px-4 py-2.5 md:px-5 md:py-3 min-w-37.5 md:min-w-45 shrink-0"
            >
              <p className="text-xs md:text-sm font-semibold mb-1">
                {item.title}
              </p>{" "}
              <p className="text-[11px] md:text-xs opacity-85">{item.meta}</p>
            </div>
          ))}
        </div>
      </div>

      {/* feed */}
      <div className="flex flex-col gap-4 md:gap-5">
        {feedItems.map((item, i) => {
          const style = typeStyles[item.type];
          const Icon = style.icon;
          return (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm"
            >
              <div className="flex items-center justify-between mb-2 md:mb-3">
                <span
                  className={`inline-flex items-center gap-1 text-[11px] md:text-xs font-semibold px-2 py-0.5 md:px-3 md:py-1 rounded-full ${style.badge}`}
                >
                  <Icon size={12} />
                  {style.label}
                </span>
                <Bookmark
                  size={16}
                  className="text-gray-300 md:w-4.5 md:h-4.5"
                />
              </div>
              <h3 className="font-display font-bold text-sm md:text-lg text-[#1a1a2e] mb-1 md:mb-2">
                {item.title}
              </h3>
              <p className="text-[13px] md:text-[15px] text-[#6b6b80] leading-relaxed mb-3 md:mb-4">
                {item.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-3 md:gap-4 text-[11px] md:text-xs text-[#a0a0b0]">
                  {item.meta.map((m, j) => (
                    <span key={j}>{m}</span>
                  ))}
                </div>
                <button className="bg-[#7c6ff7] text-white text-xs md:text-sm font-semibold px-3 py-1.5 md:px-4 md:py-2 rounded-lg hover:bg-[#6458e8] transition">
                  {item.action}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
