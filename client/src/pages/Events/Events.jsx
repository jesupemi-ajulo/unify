import { useState } from "react";
import { events, eventCategories } from "../../lib/dummyData";
import { Calendar, MapPin, Plus, Users } from "lucide-react";
import { Link } from "react-router-dom";
const Events = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredEvents =
    activeCategory === "All"
      ? events
      : events.filter((event) => event.category === activeCategory);
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-6 md:py-10">
      {/* page header */}
      <div className="flex items-center justify-between mb-5 md:mb-6">
        <div>
          <h1 className="font-display font-extrabold text-xl md:text-2xl text-[#1a1a2e]">
            Events
          </h1>
          <p className="text-sm md:text-[15px] text-[#6b6b80] mt-1">
            Discover what's happening on campus
          </p>
        </div>
        <Link to='/events/create' className="flex items-center gap-1.5 bg-[#7c6ff7] text-white text-xs md:text-sm font-semibold px-3 py-2 md:px-4 md:py-2.5 rounded-lg hover:bg-[#6458e8] transition ">
          <Plus size={16} />
          <span className="hidden sm:inline">Create Event</span>
        </Link>
      </div>
      {/* filter chips */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-6 md:mb-8 ">
        {eventCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`shrink-0 px-3.5 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border transition ${activeCategory === category ? "bg-[#7c6ff7] text-white border-[#7c6ff7]" : "bg-white text-[#6b6b80] border-gray-200 hover:border-[#7c6ff7] hover:text-[#7c6ff7] transition"}`}
          >
            {category}
          </button>
        ))}
      </div>
      {/* events grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {filteredEvents.map((event) => (
          <Link to={`/events/${event.id}`}
            key={event.id}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <div className="h-28 md:h-32 bg-gradient-to-br from-[#eee9ff] to-[#ddd8fe] flex items-center justify-center">
              <Calendar
                className="text-[#7c6ff7]"
                size={32}
                strokeWidth={1.5}
              />
            </div>
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
        <p className="text-center text-sm text-[#a0a0b0] py-12">
          No events in this category yet.
        </p>
      )}
    </div>
  );
};

export default Events;
