import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { noticeCategories } from "../../lib/dummyData";
import { ArrowLeft } from "lucide-react";

const CreateNotice = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");
  const categoriesWithoutAll = noticeCategories.filter((c) => c !== "All");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, body, category });
    navigate("/noticeboard");
  };
  return (
    <div className="max-w-lg mx-auto px-4 md:px-0 py-6 md:py-10">
      <button
        onClick={() => navigate("/noticeboard")}
        className="flex items-center gap-1.5 text-sm text-[#6b6b80] mb-5 hover:text-[#7c6ff7] transition"
      >
        <ArrowLeft size={16} />
        Back to noticeboard
      </button>
      <h1 className="font-display font-extrabold text-xl md:text-2xl text-[#1a1a2e] mb-1">
        Post a notice
      </h1>
      <p className="text-sm md:text-[15px] text-[#6b6b80] mb-6 md:mb-8">
        Share an announcement with the campus community{" "}
      </p>

      <form onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-semibold mb-1.5">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g Single room available near campus"
            className="w-full border border-gray-200 px-3 py-2.5 md:px-4 md:py-3 rounded-lg text-sm md:text-base outline-none focus:border-[#7c6ff7]"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1.5 mt-2">
            Description
          </label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Add as much detail as possible so other students know what you mean."
            rows={5}
            className="w-full border border-gray-200 px-3 py-2.5 md:px-4 md:py-3 rounded-lg text-sm md:text-base outline-none focus:border-[#7c6ff7] resize-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1.5 mt-2">Category</label>
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
        <button
          type="submit"
          className="w-full bg-[#7c6ff7] text-white py-2.5 md:py-3 rounded-lg text-sm md:text-base font-semibold hover:bg-[#6458e8] transition mt-2"
        >
          Post Notice
        </button>
      </form>
    </div>
  );
};

export default CreateNotice;
