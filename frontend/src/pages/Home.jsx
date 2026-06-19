import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const studentSteps = [
  { icon: "🔍", label: "Search",           sub: "Find teachers near you" },
  { icon: "👤", label: "Browse Profile",   sub: "Check ratings & subjects" },
  { icon: "💻", label: "Join Online Class",sub: "Attend live sessions" },
  { icon: "🤝", label: "Book Offline",     sub: "Clear doubts locally" },
  { icon: "📊", label: "Track Progress",   sub: "Stay consistent" },
  { icon: "🏆", label: "Level Up",         sub: "Achieve your goal", final: true },
];

const teacherSteps = [
  { icon: "📝", label: "Create Profile",   sub: "Set up in minutes" },
  { icon: "📦", label: "Upload Course",    sub: "Build curriculum" },
  { icon: "🎙️", label: "Go Live",          sub: "Start teaching" },
  { icon: "🧑‍🎓", label: "Students Enroll", sub: "Grow audience" },
  { icon: "📍", label: "Meet Locally",     sub: "Build connections" },
  { icon: "🚀", label: "Earn & Grow",      sub: "Independent & thriving", final: true },
];

const reviews = [
  {
    text: "I used to regularly follow YouTube videos but struggled with consistency. With local guidance and structured classes, I improved a lot.",
    name: "Anmol Rathore",
    tag: "UPSC",
  },
  {
    text: "Hybrid learning helped me balance everything. Online classes + offline doubt solving made a huge difference.",
    name: "Raja Majhi",
    tag: "GATE",
  },
  {
    text: "I improved my accuracy and speed because I could directly meet my teacher for guidance when needed.",
    name: "Amit Kumar Mandal",
    tag: "BANKING",
  },
];

function JourneyTrack({ steps, color }) {
  const isStudent = color === "indigo";
  const nodeRing   = isStudent ? "border-indigo-500 bg-indigo-50"  : "border-emerald-500 bg-emerald-50";
  const finalBg    = isStudent ? "bg-indigo-500"  : "bg-emerald-500";
  const badgeBg    = isStudent ? "bg-indigo-500"  : "bg-emerald-500";
  const lineColor  = isStudent ? "border-indigo-200" : "border-emerald-200";

  return (
    <div className="relative flex justify-between px-4 mt-2">
      {/* dashed line */}
      <div className={`absolute top-7 left-8 right-8 border-t-2 border-dashed ${lineColor}`} />

      {steps.map((step, i) => (
        <div key={i} className="flex-1 flex flex-col items-center text-center max-w-[130px] relative z-10">
          <div
            className={`w-14 h-14 rounded-full flex items-center justify-center border-2 text-xl
              ${step.final ? `${finalBg} text-white border-transparent` : nodeRing}`}
          >
            <span>{step.icon}</span>
            {!step.final && (
              <span className={`absolute -top-1 -right-1 w-5 h-5 rounded-full ${badgeBg} text-white text-[10px] flex items-center justify-center font-bold`}>
                {i + 1}
              </span>
            )}
          </div>
          <p className="mt-2 text-sm font-medium text-gray-800" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            {step.label}
          </p>
          <p className="text-[11px] text-gray-400">{step.sub}</p>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("student");
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">

        {/* ── Hero Image ── */}
        <section className="w-full h-[400px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
            alt="Learning"
            className="w-full h-full object-cover"
          />
        </section>

        {/* ── Hero Text ── */}
        <section className="text-center py-10 pb-0 px-4">
          <h1
            className="text-3xl text-gray-900 mb-2"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
          >
            Learn from the best in your neighborhood
          </h1>
          <p
            className="text-xl text-gray-500 mt-2"
            style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 250 }}
          >
            Your decentralized platform
          </p>
        </section>

        {/* ── Journey Section ── */}
        <section className="py-16 pb-0 px-[5%] text-center bg-white">
          <h2
            className="text-3xl text-gray-900 mb-1"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
          >
            Your Journey on LevelUp
          </h2>
          <p className="text-sm text-gray-500 mb-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Follow your path — whether you're here to learn or to teach
          </p>

          {/* Tabs */}
          <div className="inline-flex bg-gray-100 p-1 rounded-full mb-10">
            <button
              onClick={() => setActiveTab("student")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === "student"
                  ? "bg-indigo-500 text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Student's Path
            </button>
            <button
              onClick={() => setActiveTab("teacher")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === "teacher"
                  ? "bg-emerald-500 text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Teacher's Path
            </button>
          </div>

          {activeTab === "student" && <JourneyTrack steps={studentSteps} color="indigo" />}
          {activeTab === "teacher" && <JourneyTrack steps={teacherSteps} color="emerald" />}
        </section>

        {/* ── How It Works ── */}
        <section className="py-16 px-[5%] text-center">
          <h2
            className="text-3xl mb-10 text-gray-900"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
          >
            How LevelUp Works
          </h2>
          <div className="flex justify-center gap-8 flex-wrap">
            {/* Student card */}
            <div className="bg-gray-50 rounded-xl p-8 w-72 text-left">
              <h3
                className="text-lg text-gray-800 mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
              >
                For Students
              </h3>
              <ul className="pl-4 list-disc space-y-2 mb-6">
                {["Find teachers near you", "Attend online classes", "Meet offline for doubts", "Learn with guidance"].map(
                  (item) => (
                    <li key={item} className="text-sm text-gray-600" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                      {item}
                    </li>
                  )
                )}
              </ul>
              <button
                onClick={() => navigate("/signup")}
                className="w-full py-2 bg-indigo-500 text-white rounded-md text-sm hover:bg-indigo-600 transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Start Learning
              </button>
            </div>

            {/* Teacher card */}
            <div className="bg-gray-50 rounded-xl p-8 w-72 text-left">
              <h3
                className="text-lg text-gray-800 mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
              >
                For Teachers
              </h3>
              <ul className="pl-4 list-disc space-y-2 mb-6">
                {["Create your courses", "Teach online", "Meet students locally", "Grow independently"].map(
                  (item) => (
                    <li key={item} className="text-sm text-gray-600" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                      {item}
                    </li>
                  )
                )}
              </ul>
              <button
                onClick={() => navigate("/become-instructor")}
                className="w-full py-2 bg-emerald-500 text-white rounded-md text-sm hover:bg-emerald-600 transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Become Instructor
              </button>
            </div>
          </div>
        </section>

        {/* ── Reviews ── */}
        <section className="py-16 px-[5%] bg-[#f4f6fb]">
          <h2
            className="text-center text-3xl mb-10 text-[#1a1a2e]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
          >
            What Students Say
          </h2>
          <div className="grid gap-6 max-w-5xl mx-auto" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
            {reviews.map((r) => (
              <div
                key={r.name}
                className="bg-white rounded-2xl px-7 pt-8 pb-6 shadow-sm relative flex flex-col hover:shadow-md hover:-translate-y-1 transition-all"
              >
                {/* big quote mark */}
                <span className="absolute top-4 left-5 text-6xl text-gray-100 font-serif leading-none select-none">"</span>
                <p className="text-sm leading-relaxed text-gray-500 pt-8 flex-1" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                  {r.text}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm font-semibold text-[#1a1a2e]">{r.name}</p>
                  <span className="text-xs font-medium text-blue-600">{r.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}