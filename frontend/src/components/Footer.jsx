export default function Footer() {
  return (
    <footer className="bg-[#1a1d2e] text-gray-400 pt-14 pb-0 px-[5%]">
      <div className="flex justify-between items-start gap-10 flex-wrap pb-12 border-b border-[#2e3150]">

        {/* Brand */}
        <div className="max-w-xs">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M13 2L4.5 13.5H11L10 22L20.5 9.5H14L13 2Z"
                  fill="white" stroke="white" strokeWidth="1.2" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-white font-bold text-lg" style={{ fontFamily: "'Outfit', sans-serif" }}>Level Up</span>
          </div>
          <p className="text-sm text-[#a0a3b1] leading-relaxed mb-4">
            Empowering learners worldwide with practical,<br />career-ready skills.
          </p>
          <div className="flex items-center gap-2 text-sm">
            <a href="#" className="text-blue-400 hover:text-indigo-400 transition-colors">Twitter</a>
            <span className="text-[#a0a3b1]">•</span>
            <a href="#" className="text-blue-400 hover:text-indigo-400 transition-colors">LinkedIn</a>
            <span className="text-[#a0a3b1]">•</span>
            <a href="#" className="text-blue-400 hover:text-indigo-400 transition-colors">YouTube</a>
          </div>
        </div>

        {/* Company links */}
        <div>
          <h3 className="text-white font-bold text-sm mb-4 tracking-wide">Company</h3>
          <ul className="flex flex-col gap-3">
            {["About Us", "Contact", "Privacy Policy"].map(link => (
              <li key={link}>
                <a href="#" className="text-sm text-[#a0a3b1] hover:text-white transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="min-w-[260px]">
          <h3 className="text-white font-bold text-sm mb-4 tracking-wide">Newsletter</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 px-3 py-2 text-sm bg-[#252840] border border-[#2e3150] border-r-0 rounded-l-md text-gray-300 placeholder-[#5a5f7a] outline-none focus:border-blue-500"
            />
            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-r-md transition-colors whitespace-nowrap">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="text-center py-5">
        <p className="text-xs text-[#5a5f7a]">© 2026 Level Up. All Rights Reserved.</p>
      </div>
    </footer>
  );
}