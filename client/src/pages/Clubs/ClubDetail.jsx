import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { clubs } from "../../lib/dummyData";
import { ArrowLeft, Calendar, MapPin, Users2 } from "lucide-react";
import { toast } from "react-toastify";

const ClubDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Events");
  const club = clubs.find((c) => c.id === Number(id));
  const [joined, setJoined] = useState(club?.joined || false);
  const handleJoin = () => {
    setJoined(!joined);
    toast(!joined ? `You joined ${club.name}!` : `You left ${club.name}.`, {
      type: !joined ? "success" : "info",
    });
  };
  if (!club) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <p className="text-sm text-[#6b6b80]">Event not found.</p>
        <button
          className="mt-4 text-sm text-[#7c6ff7] font-semibold cursor-pointer"
          onClick={() => navigate("/clubs")}
        >
          Back to Clubs
        </button>
      </div>
    );
  }
  const tabs = ["Events", "Posts", "Members"];
  return (
    <div className="max-w-2xl mx-auto pb-12">
      {/* back button */}
      <button
        onClick={() => navigate("/clubs")}
        className="flex items-center gap-1.5 text-sm text-[#6b6b80] px-4 md:px-0 pt-4 md:pt-8 mb-4 hover:text-[#7c6ff7] transition"
      >
        <ArrowLeft size={16} /> Back to Clubs
      </button>
      {/* banner and logo */}
      <div className="mx-4 md:mx-0 h-32 md:h-40 rounded-t-xl bg-gradient-to-br from-[#eee9ff] to-[#ddd8fe] relative">
        <div className="absolute -bottom-6 left-5 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white border-4 border-white shadow-md flex items-center justify-center">
          <Users2 size={28} className="text-[#7c6ff7]" />
        </div>
      </div>

      <div className="mx-4 md:mx-0 bg-white border border-gray-200 border-t-0 rounded-b-xl px-5 pt-9 pb-5">
        <div className="flex items-start justify-between mb-2">
          <h1 className="font-display font-extrabold text-lg md:text-2xl text-[#1a1a2e]">
            {club.name}
          </h1>
          <button
          onClick={handleJoin}
            className={`text-xs md:text-sm font-semibold px-3.5 py-1.5 md:px-4 md:py-2 rounded-lg shrink-0 ${
              joined
                ? "bg-white text-[#6b6b80] border border-gray-200"
                : "bg-[#7c6ff7] text-white hover:bg-[#6458e8] transition"
            }`}
          >
            {joined ? "Joined" : "Join"}
          </button>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[11px] md:text-xs font-semibold px-2 py-0.5 rounded-full bg-[#eee9ff] text-[#7c6ff7]">
            {club.category}
          </span>
          <span className="text-xs md:text-sm text-[#6b6b80]">
            {club.members} members
          </span>
        </div>
        <p className="text-sm md:text-base text-[#6b6b80] leading-relaxed">
          {club.description}
        </p>
      </div>

      {/* tabs */}
      <div className="flex border-b border-gray-200 mt-6 mx-4 md:mx-0">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2.5 text-sm font-semibold border-b-2 -mb-px transition ${
              activeTab === tab
                ? "text-[#7c6ff7] border-[#7c6ff7]"
                : "text-[#a0a0b0] border-transparent hover:text-[#6b6b80]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="px-4 md:px-0 mt-5">
        {activeTab === "Events" && (
          <div className="flex flex-col gap-3">
            {club.events.map((event, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-between"
              >
                <div>
                  <p className="font-semibold text-sm text-[#1a1a2e] mb-1">
                    {event.title}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-[#6b6b80]">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {event.location}
                    </span>
                  </div>
                </div>
                <button className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#7c6ff7] text-white shrink-0">
                  RSVP
                </button>
              </div>
            ))}
          </div>
        )}
        {activeTab === "Posts" && (
          <p className="text-center text-sm text-[#a0a0b0] py-12">
            No posts from this club yet
          </p>
        )}
        {activeTab === "Members" && (
          <p className="text-center text-sm text-[#a0a0b0] py-12">
            Member list coming soon!
          </p>
        )}
      </div>
    </div>
  );
};

export default ClubDetail;
