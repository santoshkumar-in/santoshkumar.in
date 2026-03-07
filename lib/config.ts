import { VersionConfig, ColorScheme } from "../types";

export const VERSION_CONFIG: Record<string, VersionConfig> = {
  genai: {
    accent: "#a78bfa",
    accentDim: "#a78bfa18",
    accentMid: "#a78bfa40",
    brandName: "#a78bfa",
    tagline: "Generative AI Engineer · LLM Specialist",
    badge: "Gen AI Dev",
    bottomBar: "Claude · GPT-4 · LangChain · RAG · Vector DB · Gen AI Engineer",
    ctaText: "hire_me",
  },
  fullstack: {
    accent: "#4ec9b0",
    accentDim: "#4ec9b018",
    accentMid: "#4ec9b040",
    brandName: "#4ec9b0",
    tagline: "Senior Full-Stack Engineer · Freelancer & Consultant",
    badge: "Full-Stack Dev",
    bottomBar: "Node.js · MERN/MEVN · Laravel · AWS · Freelancer",
    ctaText: "hire_me",
  },
};

export const getColors = (version: string): ColorScheme => ({
  bg: "#0c0e12",
  sidebar: "#10131a",
  panel: "#0e1117",
  surface: "#141820",
  elevated: "#1a1f2b",
  border: "#1e2535",
  borderMd: "#252d3d",
  borderHi: "#2e3a50",
  text: "#cdd6e8",
  textMid: "#8a97b0",
  textDim: "#48556e",
  textBright: "#e8edf5",
  accent: VERSION_CONFIG[version].accent,
  accentDim: VERSION_CONFIG[version].accentDim,
  accentMid: VERSION_CONFIG[version].accentMid,
  green: "#3fb95a",
  greenDim: "#3fb95a20",
  orange: "#e8a455",
  orangeDim: "#e8a45520",
  purple: "#a27cf8",
  purpleDim: "#a27cf820",
  red: "#f05151",
  synKeyword: "#79b8ff",
  synFunc: "#b3d9ff",
  synStr: "#9ecbff",
  synType: "#a27cf8",
  synComment: "#4a5a78",
  synProp: "#4fc1ff",
  lineNum: "#2a3550",
});

export const SOCIALS = [
  { key: "github", label: "santoshkumar-in", href: "https://github.com/santoshkumar-in", shortLabel: "GitHub" },
  { key: "linkedin", label: "santoshkumar-in", href: "https://www.linkedin.com/in/santoshkumar-in/", shortLabel: "LinkedIn" },
  { key: "upwork", label: "santoshkumar", href: "https://www.upwork.com/freelancers/~012dfc919f360b2068", shortLabel: "Upwork" },
];

export const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;600&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { height: 100%; overflow: hidden; }
  body { background: #0c0e12; font-family: 'IBM Plex Sans', sans-serif; -webkit-font-smoothing: antialiased; }
  ::-webkit-scrollbar { width: 5px; height: 5px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: #1e2535; border-radius: 3px; }
  ::-webkit-scrollbar-thumb:hover { background: #252d3d; }
  input, textarea, button { font-family: inherit; }
  input::placeholder, textarea::placeholder { color: #48556e; }
  input:focus, textarea:focus { outline: none; }
  a { text-decoration: none; color: inherit; }
  @keyframes fadeUp { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
  @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
  @keyframes slideInRight { from { opacity:0; transform:translateX(18px); } to { opacity:1; transform:translateX(0); } }
  @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
  .fade-1 { animation: fadeUp .45s ease .05s both; }
  .fade-2 { animation: fadeUp .45s ease .15s both; }
  .fade-3 { animation: fadeUp .45s ease .28s both; }
  .fade-4 { animation: fadeUp .45s ease .42s both; }
  .fade-5 { animation: fadeUp .45s ease .58s both; }
  .fade-r { animation: slideInRight .55s ease .7s both; }
  .thover:hover { background: #1a1f2b !important; cursor: pointer; }
  .chover:hover { border-color: #2e3a50 !important; background: #1a1f2b !important; cursor: pointer; }
  .lhover:hover { opacity: 0.8 !important; cursor: pointer; }
  .cursor { cursor: pointer; }
`;

export const mono = { fontFamily: "'IBM Plex Mono', monospace" };
export const sans = { fontFamily: "'IBM Plex Sans', sans-serif" };
