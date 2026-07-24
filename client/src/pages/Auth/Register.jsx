import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import { GraduationCap } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });
    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
      return;
    }
    if (data.user) {
      const { error: profileError } = await supabase.from("users").insert({
        id: data.user.id,
        email: email,
        full_name: fullName,
      });
      if (profileError) {
        setLoading(false);
        setError(profileError.message);
        return;
      }
    }
    setLoading(false);
    navigate("/onboarding");
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* //left side for desktop */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-[#7c6ff7] to-[#9b6ffa] flex-col items-center justify-center text-white p-12 text-center">
        <h2 className="font-display text-3xl font-extrabold mb-4">Unify</h2>
        <div className="w-40 h-40 rounded-3xl bg-white/15 flex items-center justify-center text-6xl mb-6">
          <GraduationCap size={64} strokeWidth={1.5}/>
        </div>
        <p className="text-base opacity-85 max-w-xs">
          Join thousands of students already connected to their campus.
        </p>
      </div>

      {/* //mainsignup */}
      <div className="flex flex-1 items-center justify-center bg-white px-6 py-12">
        <div className="w-full max-w-sm ">
          <div className="md:hidden text-center mb-8">
            <span className="font-display text-2xl font-extrabold text-[#7c6ff7">
              Unify
            </span>
          </div>
          <h1 className="font-display text-2xl font-extrabold text-[#1a1a2e] mb-2">
            Create your account
          </h1>
          <p className="text-sm text-[#6b6b80] mb-8">
            Join Unify and never miss anything on campus again.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Dorothea Adebayo"
                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#7c6ff7"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@university.edu"
                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#7c6ff7"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a strong password"
                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#7c6ff7"
                required
                minLength={6}
              />
            </div>

            {error && <p className="text-sm text-red-500 mb-4">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#7c6ff7] text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-[#6458e8] transition disabled:opacity-50"
            >
              {loading ? "Create account..." : "Create Account"}
            </button>
          </form>
          <p className="text-center text-sm text-[#6b6b80] mt-5">
            Already have an account?{" "}
            <Link to="/login" className="text-[#7c6ff7] font-semibold">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
