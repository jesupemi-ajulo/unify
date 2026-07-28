import { useNavigate, useParams } from "react-router-dom";
import { events } from "../../lib/dummyData";
import { ArrowLeft, Calendar, Clock, MapPin, User } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import CoverImage from "../../components/shared/CoverImage";
const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find((e) => e.id === Number(id));
  const [rsvped, setRsvped] = useState(event?.rsvped || false);
  const handleRSVP = () => {
    setRsvped(!rsvped);
    toast(!rsvped ? "You're going! See you there." : "RSVP cancelled.", {
      type: !rsvped ? "success" : "info",
    });
  };
  if (!event) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <p className="text-sm text-[#6b6b80]">Event not found.</p>
        <button
          className="mt-4 text-sm text-[#7c6ff7] font-semibold cursor-pointer"
          onClick={() => navigate("/events")}
        >
          Back to events
        </button>
      </div>
    );
  }
  return (
    <div className="max-w-2xl mx-auto pb-12">
      {/* back button */}
      <button
        onClick={() => navigate("/events")}
        className="flex items-center gap-1.5 text-sm text-[#6b6b80] px-4 md:px-0 pt-4 md:pt-8 mb-4 hover:text-[#7c6ff7] transition"
      >
        <ArrowLeft size={16} /> Back to Events
      </button>
      {/* hero */}
      <CoverImage
        src={event.image}
        icon={Calendar}
        className="h-48 md:h-64 mx-4 md:mx-0 rounded-xl w-[calc(100%-2rem)] md:w-full"
      />
      <div className="px-4 md:px-0 mt-5 md:mt-6">
        <span className="inline-block text-[11px] md:text-xs font-semibold px-2 py-0.5 rounded-full bg-[#eee9ff] text-[#7c6ff7] mb-2">
          {event.category}
        </span>
        <h1 className="font-display font-extrabold text-xl md:text-3xl text-[#1a1a2e] mb-3">
          {event.title}
        </h1>
        <p className="text-sm md:text-base text-[#6b6b80] leading-relaxed mb-5 md:mb-6">
          {event.description}
        </p>
        {/* meta grid */}
        <div className="grid grid-cols-2 gap-2 md:gap-3 mb-6 md:mb-8">
          <div className="bg-[#f4f3f0] rounded-lg p-3 md:p-4 flex items-center gap-2.5">
            <Calendar size={18} className="text-[#7c6ff7]" />
            <div>
              <p className="text-xs md:text-sm font-semibold text-[#1a1a2e]">
                {event.date}
              </p>
              <p className="text-[10px] md:text-xs text-[#a0a0b0]">
                {event.day}
              </p>
            </div>
          </div>

          <div className="bg-[#f4f3f0] rounded-lg p-3 md:p-4 flex items-center gap-2.5">
            <Clock size={18} className="text-[#7c6ff7]" />
            <div>
              {" "}
              <p className="text-xs md:text-sm font-semibold text-[#1a1a2e]">
                {event.time}
              </p>
              <p className="text-[10px] md:text-xs text-[#a0a0b0]">
                Local time
              </p>
            </div>
          </div>
          <div className="bg-[#f4f3f0] rounded-lg p-3 md:p-4 flex items-center gap-2.5">
            <MapPin size={18} className="text-[#7c6ff7]" />
            <div>
              <p className="text-xs md:text-sm font-semibold text-[#1a1a2e]">
                {event.location}
              </p>
              <p className="text-[10px] md:text-xs text-[#a0a0b0]">
                Main campus
              </p>
            </div>
          </div>
          <div className="bg-[#f4f3f0] rounded-lg p-3 md:p-4 flex items-center gap-2.5">
            <User size={18} className="text-[#7c6ff7]" />
            <div>
              <p className="text-xs md:text-sm font-semibold text-[#1a1a2e]">
                {event.organizer}
              </p>
              <p className="text-[10px] md:text-xs text-[#a0a0b0]">Organizer</p>
            </div>
          </div>
        </div>

        {/* rsvp block */}
        <div className="bg-[#eee9ff] rounded-xl p-5 md:p-7 text-center">
          <p className="font-display font-extrabold text-2xl md:text-3xl text-[#7c6ff7]">
            {rsvped ? event.attendees + 1 : event.attendees}
          </p>
          <p className="text-xs md:text-sm text-[#6b6b80] mb-4">
            students going
          </p>
          <button
            onClick={handleRSVP}
            className={`w-full md:w-auto md:px-10 py-2.5 md:py-3 rounded-lg text-sm md:text-base font-semibold transition ${
              rsvped
                ? "bg-white text-[#6b6b80] border border-gray-200"
                : "bg-[#7c6ff7] text-white hover:bg-[#6458e8]"
            }`}
          >
            {rsvped ? "You're going" : "RSVP - I'm going"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
