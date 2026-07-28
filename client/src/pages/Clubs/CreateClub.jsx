import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { clubCategories } from "../../lib/dummyData";
import { ArrowLeft } from "lucide-react";
import Button from "../../components/ui/Button";

const CreateClub = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const categoriesWithoutAll = clubCategories.filter((c) => c !== "All");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, description, category });
    navigate("/clubs");
  };
  return (
    <div className="max-w-lg mx-auto px-4 md:px-0 py-6 md:py-10">
      <button
        onClick={() => navigate("/clubs")}
        className="flex items-center gap-1.5 text-sm text-[#6b6b80] mb-5 hover:text-[#7c6ff7] transition"
      >
        <ArrowLeft size={16} />
        Back to clubs
      </button>
      <h1 className="font-display font-extrabold text-xl md:text-2xl text-[#1a1a2e] mb-1">
        Create a Club
      </h1>
      <p className="text-sm md:text-[15px] text-[#6b6b80] mb-6 md:mb-8">
        Start a community around something you care about.
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-semibold mb-1.5">
            Club Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g Tech Society"
            className="w-full border border-gray-200 px-3 py-2.5 md:px-4 md:py-3 rounded-lg text-sm md:text-base outline-none focus:border-[#7c6ff7]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1.5">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="What is this club about? Who should join?"
            rows={4}
            className="w-full border border-gray-200 px-3 py-2.5 md:px-4 md:py-3 rounded-lg text-sm md:text-base outline-none focus:border-[#7c6ff7] resize-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1.5">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2.5 md:px-4 md:py-3 border border-gray-200 rounded-lg text-sm md:text-base outline-none focus:border-[#7c6ff7] bg-white"
            required
          >
            <option value=""> Select a category</option>
            {categoriesWithoutAll.map((cat) => (
              <option value={cat} key={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <Button type="submit" className="w-full mt-2">
          Create Club
        </Button>
      </form>
    </div>
  );
};

export default CreateClub;
