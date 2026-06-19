import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 flex items-center justify-between px-6 py-3">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 no-underline">
        <div className="w-9 h-9 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M13 2L4.5 13.5H11L10 22L20.5 9.5H14L13 2Z"
              fill="white" stroke="white" strokeWidth="1.2"
              strokeLinejoin="round" strokeLinecap="round"
            />
          </svg>
        </div>
        <span className="font-bold text-gray-900 text-lg tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
          Level Up
        </span>
      </Link>

      {/* Center nav */}
      <nav className="flex items-center gap-6">
        <a href="#" className="text-gray-600 hover:text-indigo-600 text-sm font-medium transition-colors">Subscribe</a>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-4 pr-4 py-2 w-64 rounded-full border border-gray-200 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition"
          />
        </div>
        <Link to="/become-instructor" className="text-gray-600 hover:text-indigo-600 text-sm font-medium transition-colors">
          Become Instructor
        </Link>
      </nav>

      {/* Auth buttons */}
      <div className="flex items-center gap-2">
        <Link
          to="/login"
          className="px-4 py-2 text-sm rounded-md border border-blue-500 text-blue-500 hover:bg-blue-50 transition-colors"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="px-4 py-2 text-sm rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors"
        >
          Signup
        </Link>
      </div>
    </header>
  );
}