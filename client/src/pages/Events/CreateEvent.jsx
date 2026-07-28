import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { eventCategories } from "../../lib/dummyData";
import { ArrowLeft } from "lucide-react";
import Button from "../../components/ui/Button";
const CreateEvent = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const categoriesWithoutAll = eventCategories.filter((c) => c !== "All");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, description, date, time, location, category });
    navigate("/events");
  };
  return (
    <div className="max-w-lg mx-auto px-4 md:px-0 py-6 md:py-10">
      <button
        onClick={() => navigate("/events")}
        className="flex items-center gap-1.5 text-sm text-[#6b6b80] mb-5 hover:text-[#7c6ff7] transition"
      >
        <ArrowLeft size={16} />
        Back to events
      </button>
      <h1 className="font-display font-extrabold text-xl md:text-2xl text-[#1a1a2e] mb-1">
        Create an Event
      </h1>
      <p className="text-sm md:text-[15px] text-[#6b6b80] mb-6 md:mb-8">
        Let the campus know what's happening.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-5">
        <div>
          <label className="block text-sm font-semibold mb-1.5">
            Event Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g Annual Tech Summit 2026"
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
            placeholder="What's this event about?"
            rows={4}
            className="w-full border border-gray-200 px-3 py-2.5 md:px-4 md:py-3 rounded-lg text-sm md:text-base outline-none focus:border-[#7c6ff7] resize-none"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          <div>
            <label className="block text-sm font-semibold mb-1.5">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-3 py-2.5 md:px-4 md:py-3 border border-gray-200 rounded-lg text-sm md:text-base outline-none focus:border-[#7c6ff7]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1.5">Time</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-3 py-2.5 md:px-4 md:py-3 border border-gray-200 rounded-lg text-sm md:text-base outline-none focus:border-[#7c6ff7]"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1.5">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g Chapel Auditorium"
            className="w-full px-3 py-2.5 md:px-4 md:py-3 border border-gray-200 rounded-lg text-sm md:text-base outline-none focus:border-[#7c6ff7]"
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
            <option value="">Select a category</option>
            {categoriesWithoutAll.map((cat) => (
              <option value={cat} key={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <Button type="submit" className="w-full mt-2">
          Create Event
        </Button>
      </form>
    </div>
  );
};

export default CreateEvent;
