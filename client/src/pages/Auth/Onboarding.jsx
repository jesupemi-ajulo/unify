import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";

const Onboarding = () => {
  const navigate = useNavigate();
  const { session } = useAuth();

  const [university, setUniversity] = useState("");
  const [department, setDepartment] = useState("");
  const [level, setLevel] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { error: updateError } = await supabase
      .from("users")
      .update({
        university,
        level,
        department,
      })
      .eq("id", session.user.if);
    if (updateError) {
      setError(updateError.message);
      setLoading(false);
      return;
    }
    setLoading(false);
    navigate("/");
  };
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-sm">
        {/* progress bar */}
        <div className="flex gap-1.5 mb-8">
          <div className="bg-[#7c6ff7] flex-1 h-1 rounded-full"></div>
        </div>
        <h1 className="font-display text-2xl font-extrabold text-[#1a1a2e] mb-2">
          Where do you study?
        </h1>
        <p className="text-sm text-[#6b6b80] mb-8">
          Help us personalize your Unify experience.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              University
            </label>
            <input
              type="text"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
              placeholder="e.g Redeemer's University"
              className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#7c6ff7]"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Department
            </label>
            <input
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              placeholder="e.g Computer Science"
              className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#7c6ff7]"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-1">Level</label>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#7c6ff7] bg-white"
              required
            >
              <option value="">Select your level</option>
              <option value="100">100 Level</option>
              <option value="200">200 Level</option>
              <option value="300">300 Level</option>
              <option value="400">400 Level</option>
              <option value="500">500 Level</option>
              <option value="postgrad">Postgraduate</option>
            </select>
          </div>
          {error && <p className="text-sm text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#7c6ff7] text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-[#6458e8] transition disabled:opacity-50"
          >
            {loading ? "Saving..." : "Continue"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Onboarding;
