import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Invalid email or password");
        return;
      }

      // Save user to localStorage so dashboards can read it
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("role", data.role);

      if (data.role === "student") {
        navigate("/student-dashboard");
      } else {
        navigate("/instructor-dashboard");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 bg-[#f8f9fb] py-16 px-[5%]">
        <div className="max-w-4xl mx-auto grid grid-cols-2 bg-white rounded-2xl shadow-md overflow-hidden">

          {/* Left — Form */}
          <div className="p-12">
            <h2
              className="text-2xl text-gray-900 mb-2"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
            >
              Welcome Back
            </h2>
            <p
              className="text-gray-500 mb-6"
              style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 400 }}
            >
              Login to continue learning with nearby instructors.
            </p>

            {error && (
              <div className="mb-4 px-4 py-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col">

              <label className="mt-4 mb-1 text-sm text-gray-700">Email</label>
              <input
                name="email"
                type="email"
                placeholder="Enter email"
                required
                value={formData.email}
                onChange={handleChange}
                className="px-3 py-3 border border-gray-200 rounded-lg text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition"
              />

              <label className="mt-4 mb-1 text-sm text-gray-700">Password</label>
              <div className="flex gap-2">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="flex-1 px-3 py-3 border border-gray-200 rounded-lg text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="px-4 py-3 bg-indigo-50 text-indigo-600 text-sm rounded-lg hover:bg-indigo-100 transition"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-6 py-3 bg-indigo-500 text-white rounded-lg text-sm font-medium hover:bg-indigo-600 transition disabled:opacity-60"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {loading ? "Logging in..." : "Login"}
              </button>

              <p className="mt-4 text-sm text-gray-500" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                New here?{" "}
                <Link to="/signup" className="text-indigo-500 hover:underline">
                  Create account
                </Link>
              </p>

            </form>
          </div>

          {/* Right — Info panel */}
          <div className="bg-indigo-50 p-12 flex flex-col justify-center">
            <h3
              className="text-xl text-gray-800 mb-8"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
            >
              Learn Hybrid. Learn Local.
            </h3>
            {["Find instructors near you", "Join online + offline learning", "Track your progress"].map((item) => (
              <div
                key={item}
                className="bg-white px-5 py-4 rounded-xl shadow-sm mb-4 text-sm text-gray-600"
                style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 300 }}
              >
                {item}
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}