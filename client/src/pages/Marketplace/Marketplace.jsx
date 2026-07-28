import React, { useState } from "react";
import { listings } from "../../lib/dummyData";
import { listingCategories } from "../../lib/dummyData";
import { formatPrice } from "../../lib/utils";
import { Link } from "react-router-dom";
import { Package, Plus } from "lucide-react";
import PageHeader from "../../components/shared/PageHeader";
import Filter from "../../components/shared/Filter";
import EmptyState from "../../components/shared/EmptyState";
import CoverImage from "../../components/shared/CoverImage";
const Marketplace = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredListing =
    activeCategory === "All"
      ? listings
      : listings.filter((listing) => listing.category === activeCategory);
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-6 md:py-10">
      {/* page header */}
      <PageHeader
        title="Marketplace"
        subtitle="Buy and sell with fellow students"
        actionLabel="Create Listing"
        actionTo="/marketplace/create"
      />
      {/* filter */}
      <Filter
        options={listingCategories}
        active={activeCategory}
        onChange={setActiveCategory}
      />
      {/* listing */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
        {filteredListing.map((listing) => (
          <Link
            key={listing.id}
            to={`/marketplace/${listing.id}`}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition block"
          >
              <CoverImage src={listing.image} icon={Package} className="h-60 md:h-80 w-full"/>

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
        <EmptyState message="No listings in this category yet." />
      )}
    </div>
  );
};

export default Marketplace;
