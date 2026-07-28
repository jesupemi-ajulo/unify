import { useState } from "react";
import { events, eventCategories } from "../../lib/dummyData";
import { Calendar, MapPin, Plus, Users } from "lucide-react";
import { Link } from "react-router-dom";
import PageHeader from "../../components/shared/PageHeader";
import Filter from "../../components/shared/Filter";
import EmptyState from "../../components/shared/EmptyState";
import CoverImage from "../../components/shared/CoverImage";
const Events = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredEvents =
    activeCategory === "All"
      ? events
      : events.filter((event) => event.category === activeCategory);
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-6 md:py-10">
      {/* page header */}
      <PageHeader
        title="Events"
        subtitle="Discover what's happening on campus"
        actionTo="/events/create"
        actionLabel="Create Event"
      />
      {/* filter chips */}
      <Filter
        options={eventCategories}
        active={activeCategory}
        onChange={setActiveCategory}
      />
      {/* events grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {filteredEvents.map((event) => (
          <Link
            to={`/events/${event.id}`}
            key={event.id}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
         <CoverImage src={event.image} icon={Calendar} className="h-28 md:h-32 w-full"/>
            <div className="p-4 md:p-5">
              <span className="inline-block text-[11px] md:text-xs font-semibold px-2 py-0.5 rounded-full bg-[#eee9ff] text-[#7c6ff7] mb-2">
                {event.category}
              </span>
              <h3 className="font-display font-bold text-sm md:text-base text-[#1a1a2e] mb-2">
                {event.title}
              </h3>
              <div className="flex flex-col gap-1 text-xs md:text-sm text-[#6b6b80] mb-3">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} />
                  {event.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} />
                  {event.location}
                </span>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="flex items-center gap-1 text-xs text-[#a0a0b0]">
                  <Users size={13} />
                  {event.attendees}
                </span>
                <button
                  className={`text-xs md:text-sm font-semibold px-3 py-1.5 md:px-4 md:py-2 rounded-lg transition ${
                    event.rsvped
                      ? "bg-white text-[#6b6b80] border border-gray-200"
                      : "bg-[#7c6ff7] text-white hover:bg-[#6458e8]"
                  }`}
                >
                  {event.rsvped ? "Going" : "RSVP"}
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {filteredEvents.length === 0 && (
        <EmptyState message="No events in this category yet."/>
      )}
    </div>
  );
};

export default Events;
