import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import { GraduationCap } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (signInError) {
      setError(signInError.message);
      setLoading(false);
      return;
    }
    setLoading(false);
    navigate("/");
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* left side */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-[#7c6ff7] to-[#9b8ffa] flex-col items-center justify-center text-white p-12 text-center">
        <h2 className="font-display text-3xl font-extrabold mb-4">Unify</h2>
        <div className="w-40 h-40 rounded-3xl bg-white/15 flex items-center justify-center mb-6">
          <GraduationCap size={64} strokeWidth={1.5} />
        </div>
        <p className="text-base opacity-85 max-w-xs">
          Good to have you back! Your campus is waiting.
        </p>
      </div>

      {/* form */}
      <div className="flex-1 flex items-center justify-center bg-white px-6 py-12">
        <div className="w-full max-w-sm">
          <div className="md:hidden text-center mb-8">
            <span className="font-display text-2xl font-extrabold text-[#1a1a2e] mb-2">
              Unify
            </span>
          </div>
          <h1 className="font-display text-2xl font-extrabold text-[#1a1a2e]">
            Welcome back
          </h1>
          <p className="text-sm text-[#6b6b80] mb-8">
            Sign into your unify account.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@university.edu"
                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#7c6ff7]"
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
                placeholder="Your password"
                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#7c6ff7]"
                required
              />
            </div>
            {error && <p className="text-sm text-red-500 mb-4">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#7c6ff7] text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-[#6458e8] transition disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
          <p className="text-center text-sm text-[#6b6b80] mt-5">
            Don't have an account?{" "}
            <Link to="/register" className="text-[#7c6ff7] font-semibold">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
