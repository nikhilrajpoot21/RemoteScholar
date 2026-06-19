import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function TeacherNav({ user }) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 flex items-center justify-between px-6 py-3">
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

      <nav className="flex items-center gap-6">
        <a href="#" className="text-sm text-gray-600 hover:text-indigo-600 transition" style={{ fontFamily: "'Montserrat', sans-serif" }}>Subscribe</a>
        <input type="text" placeholder="Search..." className="px-4 py-2 rounded-full border border-gray-200 text-sm outline-none focus:border-indigo-400 transition w-52" />
        <a href="#" className="text-sm text-gray-600 hover:text-indigo-600 transition" style={{ fontFamily: "'Montserrat', sans-serif" }}>Create Course</a>
        <a href="#" className="text-sm text-gray-600 hover:text-indigo-600 transition" style={{ fontFamily: "'Montserrat', sans-serif" }}>Dashboard</a>
      </nav>

      <div className="w-9 h-9 rounded-lg bg-indigo-500 text-white flex items-center justify-center font-semibold text-sm cursor-pointer">
        {user?.name?.charAt(0).toUpperCase() || "I"}
      </div>
    </header>
  );
}

const stats = [
  { label: "Total Students", value: "0",   icon: "🧑‍🎓" },
  { label: "Active Courses", value: "0",   icon: "📦" },
  { label: "Total Earnings", value: "₹0",  icon: "💰" },
  { label: "Avg. Rating",    value: "—",   icon: "⭐" },
];

export default function InstructorDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    const role   = localStorage.getItem("role");

    if (!stored || role !== "instructor") {
      navigate("/login");
      return;
    }
    setUser(JSON.parse(stored));
  }, [navigate]);

  if (!user) return null;

  return (
    <div className="flex flex-col min-h-screen">
      <TeacherNav user={user} />

      <main className="flex-1 px-[5%] pb-28">

        {/* Welcome */}
        <div className="mt-10 mb-6">
          <h1
            className="text-3xl text-gray-900"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
          >
            Welcome, {user.name} 👋
          </h1>
          <div className="flex gap-6 mt-2 text-sm text-gray-400" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
            <span>{user.email}</span>
            <span>📍 {user.location}</span>
          </div>
        </div>

        <hr className="border-gray-100 mb-10" />

        {/* Stats */}
        <div className="grid grid-cols-4 gap-5 mb-12">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-2xl p-6 shadow-sm text-center hover:shadow-md transition">
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="text-2xl font-semibold text-gray-900 mb-1">{s.value}</div>
              <div className="text-xs text-gray-400" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Quick actions */}
        <h2
          className="text-xl text-gray-900 mb-5"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
        >
          Quick Actions
        </h2>
        <div className="flex gap-5 flex-wrap">
          {[
            { icon: "➕", title: "Create Course",    desc: "Build and publish a new course",     color: "bg-indigo-50" },
            { icon: "🎙️", title: "Go Live",           desc: "Start a live session with students",  color: "bg-emerald-50" },
            { icon: "📍", title: "Schedule Offline", desc: "Set up a local meetup with students", color: "bg-amber-50" },
          ].map((action) => (
            <div
              key={action.title}
              className={`${action.color} w-56 p-6 rounded-2xl cursor-pointer hover:-translate-y-1 hover:shadow-md transition-all`}
            >
              <div className="text-3xl mb-3">{action.icon}</div>
              <h3 className="text-sm font-semibold text-gray-800 mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>{action.title}</h3>
              <p className="text-xs text-gray-500" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>{action.desc}</p>
            </div>
          ))}
        </div>

        {/* Bio */}
        {user.bio && (
          <div className="mt-12 bg-white rounded-2xl p-6 shadow-sm max-w-xl">
            <h3 className="text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Your Bio</h3>
            <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>{user.bio}</p>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}