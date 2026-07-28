import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { supabase } from "../../lib/supabase";
import { ArrowLeft } from "lucide-react";
import Button from "../../components/ui/Button";

const EditProfile = () => {
  const navigate = useNavigate();
  const { profile, session } = useAuth();
  const [fullName, setFullName] = useState(profile?.ful_name || "");
  const [university, setUniversity] = useState(profile?.university || "");
  const [department, setDepartment] = useState(profile?.department || "");
  const [level, setLevel] = useState(profile?.level || "");
  const [bio, setBio] = useState(profile?.bio || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error: updateError } = await supabase
      .from(users)
      .update({
        full_name: fullName,
        university,
        department,
        level,
        bio,
      })
      .eq("id", session.user.id);

    if (updateError) {
      setError(updateError.message);
      setLoading(false);
      return;
    }
    setLoading(false);
    navigate("/profile");
  };
  return (
    <div className="max-w-lg mx-auto px-4 md:px-0 py-6 md:py-10">
      <button
        onClick={() => navigate("/profile")}
        className="flex items-center gap-1.5 text-sm text-[#6b6b80] mb-5 hover:text-[#7c6ff7] transition"
      >
        <ArrowLeft size={16} />
        Back to profile
      </button>
      <h1 className="font-display font-extrabold text-xl md:text-2xl text-[#1a1a2e] mb-1">
        Edit Profile
      </h1>
      <p className="text-sm md:text-[15px] text-[#6b6b80] mb-6 md:mb-8">
        Keep your details up to date.
      </p>

      <form action="">
        <div>
          <label className="block text-sm font-semibold mb-1.5 mt-4">
            Full Name
          </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full border border-gray-200 px-3 py-2.5 md:px-4 md:py-3 rounded-lg text-sm md:text-base outline-none focus:border-[#7c6ff7]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1.5 mt-4">
            University
          </label>
          <input
            type="text"
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
            className="w-full border border-gray-200 px-3 py-2.5 md:px-4 md:py-3 rounded-lg text-sm md:text-base outline-none focus:border-[#7c6ff7]"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-4">
          <div>
            <label className="block text-sm font-semibold mb-1.5 mt-4">
              Department
            </label>
            <input
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="w-full border border-gray-200 px-3 py-2.5 md:px-4 md:py-3 rounded-lg text-sm md:text-base outline-none focus:border-[#7c6ff7]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1.5 mt-4">
              Type
            </label>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="w-full px-3 py-2.5 md:px-4 md:py-3 border border-gray-200 rounded-lg text-sm md:text-base outline-none focus:border-[#7c6ff7] bg-white"
              required
            >
              <option value="">Select</option>
              <option value="100">100 Level</option>
              <option value="200">200 Level</option>
              <option value="300">300 Level</option>
              <option value="400">400 Level</option>
              <option value="500">500 Level</option>
              <option value="postgrad">Postgraduate</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1.5 mt-4">Bio</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Tell other students a bit about yourself"
            rows={4}
            className="w-full border border-gray-200 px-3 py-2.5 md:px-4 md:py-3 rounded-lg text-sm md:text-base outline-none focus:border-[#7c6ff7] resize-none"
            required
          />
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
        <Button type="submit" className="w-full mt-2" disabled={loading}>
          {loading ? "Saving..." : "Save Changes"}
        </Button>
      </form>
    </div>
  );
};

export default EditProfile;
