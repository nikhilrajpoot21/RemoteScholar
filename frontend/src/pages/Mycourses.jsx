import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function StudentNav({ user }) {
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

      <div className="absolute left-1/2 -translate-x-1/2 w-72">
        <input
          type="text" placeholder="Search..."
          className="w-full px-4 py-2 rounded-full border border-gray-200 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition"
        />
      </div>

      <nav className="flex items-center gap-5">
        <a href="#" className="text-sm text-gray-600 hover:text-indigo-600 transition" style={{ fontFamily: "'Montserrat', sans-serif" }}>Subscribe</a>
        <a href="#" className="text-sm text-gray-600 hover:text-indigo-600 transition" style={{ fontFamily: "'Montserrat', sans-serif" }}>Explore</a>
        <Link to="/mycourse" className="text-sm text-indigo-600 font-medium transition" style={{ fontFamily: "'Montserrat', sans-serif" }}>My Courses</Link>
        <div className="w-9 h-9 rounded-lg border-2 border-indigo-500 text-indigo-500 flex items-center justify-center font-semibold text-sm cursor-pointer hover:bg-indigo-500 hover:text-white transition">
          {user?.name?.charAt(0).toUpperCase() || "S"}
        </div>
      </nav>
    </header>
  );
}

// Static placeholder courses — same as your original mycourse.ejs
const courses = [
  {
    title: "Docker & Containers",
    instructor: "Surendra",
    type: "Hybrid",
    level: "Beginner",
    progress: 30,
    bg: "#2496ed",
    img: "https://img.icons8.com/color/144/docker.png",
  },
  {
    title: "Python Basics",
    instructor: "Amit",
    type: "Online",
    level: "Beginner",
    progress: 50,
    bg: "#3776ab",
    img: "https://img.icons8.com/color/144/python.png",
  },
  {
    title: "JavaScript Advanced",
    instructor: "Rahul",
    type: "Hybrid",
    level: "Intermediate",
    progress: 65,
    bg: "#f7df1e",
    img: "https://img.icons8.com/color/144/javascript.png",
  },
];

export default function MyCourses() {
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

        <h2
          className="text-2xl text-gray-900 mt-10 mb-6 text-center"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
        >
          My Courses
        </h2>

        <div
          className="grid gap-6 justify-center"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 300px))" }}
        >
          {courses.map((course) => (
            <div
              key={course.title}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md transition-all"
            >
              {/* Card image */}
              <div
                className="h-40 flex items-center justify-center p-5"
                style={{ background: course.bg }}
              >
                <img src={course.img} alt={course.title} className="max-h-full max-w-full object-contain" />
              </div>

              {/* Card content */}
              <div className="p-4">
                <p className="text-base font-semibold text-gray-900 mb-1">{course.title}</p>
                <p className="text-sm text-gray-400 mb-3">by {course.instructor}</p>

                {/* Badges */}
                <div className="flex gap-2 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium
                    ${course.type === "Online" ? "bg-blue-50 text-blue-500" : "bg-emerald-50 text-emerald-600"}`}>
                    {course.type}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-500">
                    {course.level}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${course.progress}%`,
                      background: "linear-gradient(90deg, #3b5bdb, #5c7cfa)",
                    }}
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1">{course.progress}% complete</p>
              </div>
            </div>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
}