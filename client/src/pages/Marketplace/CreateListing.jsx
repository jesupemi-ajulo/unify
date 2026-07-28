import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { listingCategories } from "../../lib/dummyData";
import { ArrowLeft } from "lucide-react";
import Button from "../../components/ui/Button";

const CreateListing = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const categoriesWithoutAll = listingCategories.filter((c) => c != "All");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, description, price, category, condition });
    navigate("/marketplace");
  };
  return (
    <div className="max-w-lg mx-auto px-4 md:px-0 py-6 md:py-10">
      <button
        onClick={() => navigate("/marketplace")}
        className="flex items-center gap-1.5 text-sm text-[#6b6b80] mb-5 hover:text-[#7c6ff7] transition"
      >
        <ArrowLeft size={16} />
        Back to Marketplace
      </button>
      <h1 className="font-display font-extrabold text-xl md:text-2xl text-[#1a1a2e] mb-1">
        Create a Listing
      </h1>
      <p className="text-sm md:text-[15px] text-[#6b6b80] mb-6 md:mb-8">
        Got something to sell? List it here.
      </p>
      <form onSubmit={handleSubmit}>
        {/* image upload */}
        <div>
          <label className="block text-sm font-semibold mb-1.5">Photo</label>
          <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center text-xs md:text-sm text-[#a0a0b0]">
            Image upload coming soon
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1.5 mt-4">
            Product Name
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g Engineering Mathematics Textbook"
            className="w-full border border-gray-200 px-3 py-2.5 md:px-4 md:py-3 rounded-lg text-sm md:text-base outline-none focus:border-[#7c6ff7]"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1.5 mt-4">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the item's condition and any details buyers should know."
            rows={4}
            className="w-full border border-gray-200 px-3 py-2.5 md:px-4 md:py-3 rounded-lg text-sm md:text-base outline-none focus:border-[#7c6ff7] resize-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1.5 mt-4">
            Price
          </label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="e.g 3500"
            className="w-full border border-gray-200 px-3 py-2.5 md:px-4 md:py-3 rounded-lg text-sm md:text-base outline-none focus:border-[#7c6ff7]"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-3 md:gap-4 mt-4 mb-4">
          <div>
            <label className="block text-sm font-semibold mb-1.5">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2.5 md:px-4 md:py-3 border border-gray-200 rounded-lg text-sm md:text-base outline-none focus:border-[#7c6ff7] bg-white"
              required
            >
              <option value="">Select</option>
              {categoriesWithoutAll.map((cat) => (
                <option value={cat} key={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1.5">
              Condition
            </label>
            <select
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
              className="w-full px-3 py-2.5 md:px-4 md:py-3 border border-gray-200 rounded-lg text-sm md:text-base outline-none focus:border-[#7c6ff7] bg-white"
              required
            >
              <option value="">Select</option>
              <option value="New">New</option>
              <option value="Used">Used</option>
              <option value="Good">Good</option>
            </select>
          </div>
        </div>
        <Button type="submit" className="w-full mt-2">
          Create Listing
        </Button>
      </form>
    </div>
  );
};

export default CreateListing;
