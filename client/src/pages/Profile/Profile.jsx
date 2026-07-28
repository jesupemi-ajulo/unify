import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Bookmark, Calendar, LogOut, Package, Settings } from "lucide-react";
import { listings } from "../../lib/dummyData";
import Avatar from "../../components/ui/Avatar";
import Button from "../../components/ui/Button";

const Profile = () => {
  const navigate = useNavigate();
  const { profile, signOut } = useAuth();
  const [activeTab, setActiveTab] = useState("Listing");

  const handleSignOut = async () => {
    await signOut();
    navigate("/login");
  };
  const initials = profile?.full_name?.charAt(0)?.toUpperCase() || "U";
  const stats = [
    { label: "Events", value: 3 },
    { label: "Listings", value: 5 },
    { label: "Clubs", value: 2 },
    { label: "Saved", value: 12 },
  ];
  const tabs = ["Listings", "Events", "Saved"];
  return (
    <div className="max-w-2xl mx-auto pb-12">
      {/* cover and avatar */}
      <div className="h-20 md:h-28 bg-gradient-to-br from-[#eee9ff] to-[#ddd8fe]" />
      <div className="px-4 md:px-0 text-center border-b border-gray-200 pb-6">
        <Avatar name={profile?.full_name} size="lg" className="border-4 border-white shadow-md -mt-8 md:-mt-10 mx-auto mb-3"/>
        <h1 className="font-display font-extrabold text-lg md:text-xl text-[#1a1a2e]">
          {profile?.full_name || "Student"}
        </h1>
        <p className="text-xs md:text-sm text-[#6b6b80] mb-4 ">
          {profile?.department || "Department not set"}
        </p>
        <div className="flex justify-center gap-6 md:gap-8 mb-5">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display font-extrabold text-lg md:text-xl text-[#7c6ff7]">
                {stat.value}
              </p>
              <p className="text-[10px] md:text-xs text-[#a0a0b0]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-3">
          <Link  to="/profile/edit"className="flex items-center gap-1.5 text-xs md:text-sm font-semibold px-4 py-2 rounded-lg border border-gray-200 text-[#6b6b80] hover:border-[#7c6ff7] hover:text-[#7c6ff7] transition">
            <Settings size={14} /> Edit Profile
          </Link>
          <Button variant="danger" size="sm" onClick={handleSignOut}>  <LogOut size={14}/></Button>
        </div>
      </div>

      {/* tabs */}
      <div className="flex border-b border-gray-200 mx-4 md:mx-0">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2.5 text-sm font-semibold border border-b-2 -mb-px transition ${
              activeTab === tab
                ? "text-[#7c6ff7] border-[#7c6ff7]"
                : "text-[#a0a0b0] border-transparent hover:text-[#6b6b80]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* tab content */}
      <div className="px-4 md:px-0 mt-5">
        {activeTab === "Listings" && (
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {listings.slice(0, 2).map((listing) => (
              <div
                key={listing.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden"
              >
                <div className="h-20 md:h-24  bg-[#f4f3f0] flex items-center justify-center">
                  <Package size={22} className="text-[#a0a0b0]" />
                </div>
                <div className="p-3">
                  <p className="text-xs md:text-sm font-semibold text-[#1a1a2e] truncate">
                    {listing.title}
                  </p>
                  <p className="text-xs text-[#7c6ff7] font-bold mt-0.5">
                    N{listing.price.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Events" && (
          <div className="flex flex-col items-center py-12 text-[#a0a0b0]">
            <Calendar size={28} className="mb-2" />
            <p className="text-sm">No events created yet.</p>
          </div>
        )}
        {activeTab === "Saved" && (
          <div className="flex flex-col items-center py-12 text-[#a0a0b0]">
            <Bookmark size={28} className="mb-2" />
            <p className="text-sm">Nothing saved yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
