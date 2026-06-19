import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

// Student-specific navbar
function StudentNav({ user }) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 flex items-center justify-between px-6 py-3">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 no-underline">
        <div className="w-9 h-9 bg-indigo-500 rounded-full flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M13 2L4.5 13.5H11L10 22L20.5 9.5H14L13 2Z"
              fill="white" stroke="white" strokeWidth="1.2" />
          </svg>
        </div>
        <span className="font-bold text-gray-900 text-lg" style={{ fontFamily: "'Outfit', sans-serif" }}>
          Level Up
        </span>
      </Link>

      {/* Search */}
      <div className="absolute left-1/2 -translate-x-1/2 w-72">
        <input
          type="text" placeholder="Search..."
          className="w-full px-4 py-2 rounded-full border border-gray-200 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition"
        />
      </div>

      {/* Right links */}
      <nav className="flex items-center gap-5">
        <a href="#" className="text-sm text-gray-600 hover:text-indigo-600 transition" style={{ fontFamily: "'Montserrat', sans-serif" }}>Subscribe</a>
        <a href="#" className="text-sm text-gray-600 hover:text-indigo-600 transition" style={{ fontFamily: "'Montserrat', sans-serif" }}>Explore</a>
        <Link to="/mycourse" className="text-sm text-gray-600 hover:text-indigo-600 transition" style={{ fontFamily: "'Montserrat', sans-serif" }}>My Courses</Link>
        <div className="w-9 h-9 rounded-lg border-2 border-indigo-500 text-indigo-500 flex items-center justify-center font-semibold text-sm cursor-pointer hover:bg-indigo-500 hover:text-white transition">
          {user?.name?.charAt(0).toUpperCase() || "S"}
        </div>
      </nav>
    </header>
  );
}

const journeySteps = [
  { icon: "🔍", label: "Search",            sub: "Find teachers near you" },
  { icon: "👤", label: "Browse Profile",    sub: "Check ratings & subjects" },
  { icon: "💻", label: "Join Online Class", sub: "Attend live sessions" },
  { icon: "🤝", label: "Book Offline",      sub: "Clear doubts locally" },
  { icon: "📊", label: "Track Progress",    sub: "Stay consistent" },
  { icon: "🏆", label: "Level Up",          sub: "Achieve your goal", final: true },
];

export default function StudentDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    const role   = localStorage.getItem("role");

    if (!stored || role !== "student") {
      navigate("/login");
      return;
    }
    setUser(JSON.parse(stored));
  }, [navigate]);

  if (!user) return null;

  return (
    <div className="flex flex-col min-h-screen">
      <StudentNav user={user} />

      <main className="flex-1 px-[5%] pb-28">

        {/* Welcome */}
        <div className="text-center mt-10">
          <h1
            className="text-3xl text-gray-900"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
          >
            Welcome {user.name}!
          </h1>
        </div>

        {/* Email + Location */}
        <div className="flex justify-between mt-4 text-sm text-gray-500 border-b pb-5"
          style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 250 }}
        >
          <span>{user.email}</span>
          <span>{user.location}</span>
        </div>

        {/* Journey */}
        <section className="mt-12 text-center">
          <h2
            className="text-2xl text-gray-900 mb-12"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
          >
            Your Journey on LevelUp
          </h2>

          <div className="relative flex justify-between px-4">
            {/* dashed line */}
            <div className="absolute top-7 left-8 right-8 border-t-2 border-dashed border-indigo-200" />

            {journeySteps.map((step, i) => (
              <div key={i} className="flex-1 flex flex-col items-center text-center max-w-[130px] relative z-10">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center border-2 text-xl relative
                  ${step.final ? "bg-indigo-500 text-white border-transparent" : "bg-indigo-50 border-indigo-500"}`}>
                  <span>{step.icon}</span>
                  {!step.final && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-indigo-500 text-white text-[10px] flex items-center justify-center font-bold">
                      {i + 1}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm font-medium text-gray-800" style={{ fontFamily: "'Montserrat', sans-serif" }}>{step.label}</p>
                <p className="text-[11px] text-gray-400">{step.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Action cards */}
        <section className="mt-20 text-center">
          <h2
            className="text-2xl text-gray-900 mb-2"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
          >
            Start Your Learning Journey
          </h2>
          <p className="text-sm text-gray-400 mb-8" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
            Choose what you want to do next on LevelUp
          </p>

          <div className="flex justify-center gap-5 flex-wrap">
            <Link
              to="/mycourse"
              className="w-64 p-6 bg-white rounded-2xl shadow-sm text-center no-underline hover:-translate-y-1 hover:shadow-md transition-all"
            >
              <div className="text-4xl mb-3">📖</div>
              <h3 className="text-base text-gray-900 mb-1" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}>My Courses</h3>
              <p className="text-xs text-gray-500 mb-3">Continue learning from your enrolled courses</p>
              <span className="text-sm text-indigo-500 font-semibold">Go to My Courses →</span>
            </Link>

            <Link
              to="/"
              className="w-64 p-6 bg-white rounded-2xl shadow-sm text-center no-underline hover:-translate-y-1 hover:shadow-md transition-all"
            >
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-base text-gray-900 mb-1" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}>Explore Courses</h3>
              <p className="text-xs text-gray-500 mb-3">Discover new courses and instructors near you</p>
              <span className="text-sm text-indigo-500 font-semibold">Explore Now →</span>
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}