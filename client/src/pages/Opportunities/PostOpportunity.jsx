import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { opportunityTypes } from "../../lib/dummyData";
import { ArrowLeft } from "lucide-react";
import Button from "../../components/ui/Button";
const PostOpportunity = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [deadline, setDeadline] = useState("");
  const [link, setLink] = useState("");
  const typesWithoutAll = opportunityTypes.filter((t) => t !== "All");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, description, type, deadline, link });
    navigate("/opportunities");
  };
  return (
    <div className="max-w-lg mx-auto px-4 md:px-0 py-6 md:py-10">
      <button
        onClick={() => navigate("/opportunities")}
        className="flex items-center gap-1.5 text-sm text-[#6b6b80] mb-5 hover:text-[#7c6ff7] transition"
      >
        <ArrowLeft size={16} /> Back to Opportunities
      </button>
      <h1 className="font-display font-extrabold text-xl md:text-2xl text-[#1a1a2e] mb-1">
        Post an Opportunity
      </h1>
      <p className="text-sm md:text-[15px] text-[#6b6b80] mb-6 md:mb-8">
        Share an internship, scholarship, or competition with the campus.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-5">
        <div>
          <label className="block text-sm font-semibold mb-1.5">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g Google Generation Scholarship 2026"
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
            rows={4}
            placeholder="What is this opportunity about? Who is it for?"
            className="w-full border border-gray-200 px-3 py-2.5 md:px-4 md:py-3 rounded-lg text-sm md:text-base outline-none focus:border-[#7c6ff7] resize-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1.5">Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full px-3 py-2.5 md:px-4 md:py-3 border border-gray-200 rounded-lg text-sm md:text-base outline-none focus:border-[#7c6ff7] bg-white"
            required
          >
            <option value="">Select a type</option>
            {typesWithoutAll.map((t) => (
              <option value={t} key={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1.5">Deadline</label>
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="w-full px-3 py-2.5 md:px-4 md:py-3 border border-gray-200 rounded-lg text-sm md:text-base outline-none focus:border-[#7c6ff7]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1.5">
            Application Link
          </label>
          <input
            type="url"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="https://..."
            className="w-full px-3 py-2.5 md:px-4 md:py-3 border border-gray-200 rounded-lg text-sm md:text-base outline-none focus:border-[#7c6ff7]"
            required
          />
        </div>
        <Button type="submit" className="w-full mt-2">
          Post Opportunity
        </Button>
      </form>
    </div>
  );
};

export default PostOpportunity;
