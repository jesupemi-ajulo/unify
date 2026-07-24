import React, { useState } from "react";
import { listings } from "../../lib/dummyData";
import { listingCategories } from "../../lib/dummyData";
import { formatPrice } from "../../lib/utils";
import { Link } from "react-router-dom";
import { Package, Plus } from "lucide-react";
const Marketplace = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredListing =
    activeCategory === "All"
      ? listings
      : listings.filter((listing) => listing.category === activeCategory);
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-6 md:py-10">
      {/* page header */}
      <div className="flex items-center justify-between mb-5 md:mb-6">
        <div>
          <h1 className="font-display font-extrabold text-xl md:text-2xl text-[#1a1a2e]">
            Marketplace
          </h1>
          <p className="text-sm md:text-[15px] text-[#6b6b80] mt-1">
            Buy and sell with fellow students
          </p>
        </div>
        <Link
          to="/marketplace/create"
          className="flex items-center gap-1.5 bg-[#7c6ff7] text-white text-xs md:text-sm font-semibold px-3 py-2 md:px-4 md:py-2.5 rounded-lg hover:bg-[#6458e8] transition "
        >
          <Plus size={16} />
          <span className="hidden sm:inline">Create Listing</span>
        </Link>
      </div>
      {/* filter */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-6 md:mb-8 ">
        {listingCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`shrink-0 px-3.5 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border transition ${activeCategory === category ? "bg-[#7c6ff7] text-white border-[#7c6ff7]" : "bg-white text-[#6b6b80] border-gray-200 hover:border-[#7c6ff7] hover:text-[#7c6ff7] transition"}`}
          >
            {category}
          </button>
        ))}{" "}
      </div>
      {/* listing */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
        {filteredListing.map((listing) => (
          <Link
            key={listing.id}
            to={`/marketplace/${listing.id}`}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition block"
          >
            <div className="h-24 md:h-32 bg-[#f4f3f0] flex items-center justify-center relative">
              <Package size={28} className="text-[#a0a0b0]" strokeWidth={1.5} />
              {listing.status === "sold" && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="text-white text-xs md:text-sm font-bold">
                    SOLD
                  </span>
                </div>
              )}
            </div>
            <div className="p-3 md:p-4">
              <p
                className={`font-display font-extrabold text-base md:text-lg ${listing.status === "sold" ? "text-[#a0a0b0] line-through" : "text-[#7c6ff7]"}`}
              >
                {formatPrice(listing.price)}
              </p>
              <p className="text-xs md:text-sm font-semibold text-[#1a1a2e] mt-1 mb-2 line-clamp-2">
                {listing.title}
              </p>
              <div className="flex gap-1.5 mb-2">
                <span className="text-[10px] md:text-xs px-2 py-0.5 rounded-full bg-[#f4f3f0] text-[#6b6b80] text-center">
                  {listing.category}
                </span>
                {listing.status !== "sold" && (
                  <span className="text-[10px] md:text-xs px-2 py-0.5 rounded-full bg-[#e8f8f1] text-[#4caf82]">
                    {listing.condition}
                  </span>
                )}
              </div>
              <p className="text-[10px] md:text-xs text-[a0a0b0]">
                {listing.seller} . {listing.postedAt}
              </p>
            </div>
          </Link>
        ))}
      </div>
      {filteredListing.length === 0 && (
        <p className="text-center text-sm text-[#a0a0b0] py-12">
          No listings in this category yet.
        </p>
      )}
    </div>
  );
};

export default Marketplace;
