import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);

  const handleEnter = () => {
    window.api.send('set-ignore-mouse', false); // capture mouse
    setOpen(true);
    window.api.resize(260);
  };

  const handleLeave = () => {
    window.api.send('set-ignore-mouse', true); // pass-through again
    setOpen(false);
    window.api.resize(10);
  };

  return (
    <div style={{ width: "50vw", height: "90vh", display: "flex", justifyContent: "flex-end" }}>
      <div
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className={`h-full ${open ? "w-14 p-3" : "w-3 p-0"} bg-neutral-900/50 backdrop-blur-md border border-neutral-500/20 rounded-xl shadow-lg transition-all duration-300 flex flex-col items-center`}
      >
        {open && (
          <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-right-2 duration-300">
            <button
              onClick={() => window.api.openURL("https://www.linkedin.com/in/-avibansal/")}
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#0077B5] text-white hover:scale-125 transition-all duration-300 border border-blue-400/50 shadow-lg hover:shadow-[#0077B5]/60 cursor-pointer group"
              title="LinkedIn"
            >
              <svg className="w-5 h-5 fill-current transition-transform duration-300" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </button>
            <button
              onClick={() => window.api.openURL("https://x.com/_AviBansal")}
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-white text-black hover:scale-125 transition-all duration-300 border border-white/50 shadow-lg hover:shadow-white/40 cursor-pointer group"
              title="Twitter (X)"
            >
              <svg className="w-4 h-4 fill-current transition-transform duration-300" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
              </svg>
            </button>
            <button
              onClick={() => window.api.openURL("https://codecharcha.com")}
              className="w-8 h-8 flex items-center justify-center bg-transparent border-none rounded-md hover:scale-125 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/50 cursor-pointer group"
              title="CodeCharcha"
            >
              <svg className="w-full h-full transition-transform duration-300" viewBox="0 0 128 128">
                <defs>
                  <linearGradient id="g4" x1="0" y1="0" x2="128" y2="128">
                    <stop offset="0%" stopColor="#FB923C"/>
                    <stop offset="100%" stopColor="#EA580C"/>
                  </linearGradient>
                </defs>
                <rect width="128" height="128" rx="24" fill="url(#g4)"/>
                <text x="50%" y="54%" textAnchor="middle" dominantBaseline="middle" fontSize="72" fontWeight="900" fontFamily="Inter, sans-serif" fill="#ffffff">C</text>
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}


export default App;