import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { resourceTypes } from "../../lib/dummyData";
import { ArrowLeft, UploadCloud } from "lucide-react";
import Button from "../../components/ui/Button";

const UploadResource = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [department, setDepartment] = useState("");
  const [type, setType] = useState("");
  const typesWithoutAll = resourceTypes.filter((t) => t !== "All");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, courseCode, department, type });
  };
  return (
    <div className="max-w-lg mx-auto px-4 md:px-0 py-6 md:py-10">
      <button
        onClick={() => navigate("/resources")}
        className="flex items-center gap-1.5 text-sm text-[#6b6b80] mb-5 hover:text-[#7c6ff7] transition"
      >
        <ArrowLeft size={16} />
        Back to resources
      </button>
      <h1 className="font-display font-extrabold text-xl md:text-2xl text-[#1a1a2e] mb-1">
        Upload a Resource
      </h1>
      <p className="text-sm md:text-[15px] text-[#6b6b80] mb-6 md:mb-8">
        Help other students by sharing your notes or past questions.
      </p>

      <form onSubmit={handleSubmit}>
        {/* file upload */}
        <div>
          <label className="block text-sm font-semibold mb-1.5 ">File</label>
          <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center flex flex-col items-center gap-2 text-[#a0a0b0]">
            <UploadCloud size={24} />
            <span className="text-xs md:text-sm">File upload coming soon</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1.5 mt-4">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g Compiler Design Past Questions 2020-2024"
            className="w-full border border-gray-200 px-3 py-2.5 md:px-4 md:py-3 rounded-lg text-sm md:text-base outline-none focus:border-[#7c6ff7]"
            required
          />
        </div>
        <div>
          <div>
            <label className="block text-sm font-semibold mb-1.5 mt-4">
              Course Code
            </label>
            <input
              type="text"
              value={courseCode}
              onChange={(e) => setCourseCode(e.target.value)}
              placeholder="e.g CSC 402"
              className="w-full border border-gray-200 px-3 py-2.5 md:px-4 md:py-3 rounded-lg text-sm md:text-base outline-none focus:border-[#7c6ff7]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1.5 mt-4">
              Type
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full px-3 py-2.5 md:px-4 md:py-3 border border-gray-200 rounded-lg text-sm md:text-base outline-none focus:border-[#7c6ff7] bg-white"
              required
            >
              <option value="">Select</option>
              {typesWithoutAll.map((t) => (
                <option value={t} key={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1.5 mt-4">
            Department
          </label>
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            placeholder="e.g Computer Science"
            className="w-full border border-gray-200 px-3 py-2.5 md:px-4 md:py-3 rounded-lg text-sm md:text-base outline-none focus:border-[#7c6ff7]"
            required
          />
        </div>
        <Button type="submit" className="w-full mt-2">
          Upload Resource
        </Button>
      </form>
    </div>
  );
};

export default UploadResource;
