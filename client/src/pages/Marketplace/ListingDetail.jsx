import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { listings } from "../../lib/dummyData";
import { ArrowLeft, Flag, MessageCircle, Package } from "lucide-react";
import { formatPrice } from "../../lib/utils";

const ListingDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const listing = listings.find((l) => l.id === Number(id));
  if (!listing) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <p className="text-sm text-[#6b6b80]">Product not found.</p>
        <button
          className="mt-4 text-sm text-[#7c6ff7] font-semibold cursor-pointer"
          onClick={() => navigate("/marketplace")}
        >
          Back to Marketplace
        </button>
      </div>
    );
  }
  const isSold = listing.status === "sold";
  return (
    <div className="max-w-2xl mx-auto pb-12">
      {/* back button */}
      <button
        onClick={() => navigate("/marketplace")}
        className="flex items-center gap-1.5 text-sm text-[#6b6b80] px-4 md:px-0 pt-4 md:pt-8 mb-4 hover:text-[#7c6ff7] transition"
      >
        <ArrowLeft size={16} /> Back to Marketplace
      </button>
      {/* image area */}
      <div className="h-56 md:h-72 mx-4 md:mx-0 rounded-xl bg-[#f4f3f0] flex items-center justify-center relative">
        <Package size={48} className="text-[#a0a0b0]" strokeWidth={1.5} />
        {isSold && (
          <div className="absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center">
            <span className="text-white text-lg font-bold">SOLD</span>
          </div>
        )}
      </div>
      <div className="px-4 md:px-0 mt-5 md:mt-6">
        <div className="flex gap-2 mb-3">
          <span className="text-[11px] md:text-xs px-2.5 py-1 rounded-full bg-[#eee9ff] text-[#7c6ff7] font-semibold">
            {listing.category}
          </span>
          {!isSold && (
            <span className="text-[11px] md:text-xs px-2.5 py-1 rounded-full bg-[#e8f8f1] text-[#4caf82] font-semibold">
              {listing.condition}
            </span>
          )}
        </div>
        <p
          className={`font-display font-extrabold text-2xl md:text-3xl mb-2 ${isSold ? "text-[#a0a0b0] line-through" : "text-[#7c6ff7]"}`}
        >
          {formatPrice(listing.price)}
        </p>
        <h1 className="font-display font-bold text-lg md:text-xl mb-4 text-[#1a1a2e]">
          {listing.title}
        </h1>
        <p className="text-sm md:text-base text-[#6b6b80] leading-relaxed mb-6">
          {listing.description}
        </p>
        {/* seller card */}
        <div className="bg-[#f4f3f0] rounded-xl p-4 flex items-center gap-3 mb-6">
          <div className="w-11 h-11 rounded-full bg-[#eee9ff]  text-[#7c6ff7] flex items-center justify-center font-bold shrink-0">
            {listing.seller.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-semibold text-[#1a1a2e]">
              {listing.seller}
            </p>
            <p className="text-xs text-[#6b6b80]">{listing.sellerUniversity}</p>
          </div>
        </div>
        {!isSold && (
          <button className="w-full bg-[#7c6ff7] text-white py-3 rounded-lg text-sm md:text-base font-semibold hover:bg-[#6458e8] transition flex items-center justify-center gap-2 mb-4">
            <MessageCircle size={18} />
            Message Seller
          </button>
        )}
        <div className="flex items-center justify-between text-xs text-[#a0a0b0]">
          <span>Posted {listing.postedAt}</span>
          <button className="flex items-center gap-1 hover:text-[#ef4444] transition">
            <Flag size={13} />
            Report listing
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingDetail;
