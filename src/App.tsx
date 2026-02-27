import { useState, useEffect, useRef } from 'react';
import {
  Github, Linkedin, Mail, Copy, Check, ArrowUpRight,
  Star, GitFork, Download, Code2, Moon, Sun
} from 'lucide-react';
import {
  SiSpringboot, SiFlutter, SiDart, SiJavascript,
  SiMysql, SiPostman, SiCplusplus,
  SiIntellijidea, SiAndroidstudio, SiGit, SiHibernate
} from 'react-icons/si';
import { FaGraduationCap, FaBook, FaCode } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';
// Image removed as requested

/* ─── Coding profile config ─────────────────────────────────────────────── */
const LC_USERNAME = 'abhishek8770';
const LC_PROFILE = `https://leetcode.com/u/${LC_USERNAME}/`;
const GFG_PROFILE = 'https://www.geeksforgeeks.org/profile/abhishek8770';

/* ─── Config ────────────────────────────────────────────────────────────── */

// 👇 Add/remove repo names here to control what shows in Projects section
const SELECTED_REPOS = [
  'prime-project',
  'Finance-Tracker',
  'SIT',
  'VOYA',
  'TIC-_TAC-_TOE',
  'Shulte-Game',
];

// Custom metadata for each repo
const REPO_META: Record<string, { label: string; desc: string; live?: string }> = {
  'prime-project': {
    label: 'Web Platform',
    desc: 'Full-stack e-commerce platform with secure payments, role-based auth, order tracking, and an admin dashboard built to scale.',
    live: 'https://abhishek0112cs221008.github.io/prime-project/',
  },
  'Finance-Tracker': {
    label: 'Mobile App',
    desc: 'Offline-first personal finance app with category analysis, recurring transactions, and group expense splitting logic.',
  },
  'SIT': {
    label: 'Dev Tool · Java',
    desc: 'Built my own Git-like VCS from scratch in Java — supports commit, log, diff, branching, and a clean CLI with docs.',
    live: 'https://abhishek0112cs221008.github.io/SIT/',
  },
  'VOYA': {
    label: 'Web Platform',
    desc: 'VOYA is a complete, database-driven e-commerce website built from the ground up using Java Servlets, JSP, and MySQL. It simulates a real-world online store for a luxury handbag brand, featuring a full suite of functionalities for both customers and administrators.',
    // live: 'https://abhishek0112cs221008.github.io/VOYA/',
  },
  'TIC-_TAC-_TOE': {
    label: 'Game · Flutter',
    desc: 'Multiplayer Tic-Tac-Toe with multiple game modes, score history, smooth animations, and a polished Material UI.',
  },
  'Shulte-Game': {
    label: 'Game · Flutter',
    desc: 'Schulte Table cognitive training game with performance tracking, multiple grid sizes, and animated feedback.',
  },
};

// Language → color dot
const LANG_COLOR: Record<string, string> = {
  Java: 'var(--charcoal)', TypeScript: '#3178c6', JavaScript: 'rgba(0,0,0,0.6)',
  Dart: '#00B4AB', Python: '#3572A5', HTML: 'var(--charcoal)', default: 'var(--muted)',
};

// Skills data
const SKILLS = [
  {
    category: 'Languages',
    items: [
      {
        name: 'Java',
        icon: (
          <img
            src="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"
            alt="Java logo"
            className="w-6 h-6"
          />
        ),
      },
      { name: 'Dart', icon: <SiDart className="text-[#00B4AB]" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: 'C++', icon: <SiCplusplus className="text-[#00599C]" /> },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    items: [
      { name: 'Spring Boot', icon: <SiSpringboot className="text-[#6DB33F]" /> },
      { name: 'Flutter', icon: <SiFlutter className="text-[#02569B]" /> },
      { name: 'Hibernate', icon: <SiHibernate className="text-[#59666C]" /> },
      { name: 'REST APIs', icon: <FaCode className="text-[#FFC839]" /> },
    ],
  },
  {
    category: 'Tools & Platforms',
    items: [
      { name: 'Git', icon: <SiGit className="text-[#F05032]" /> },
      { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" /> },
      { name: 'Postman', icon: <SiPostman className="text-[#FF6C37]" /> },
      { name: 'VS Code', icon: <VscCode className="text-[#007ACC]" /> },
      { name: 'IntelliJ', icon: <SiIntellijidea className="text-[#000000]" /> },
      { name: 'Android Studio', icon: <SiAndroidstudio className="text-[#3DDC84]" /> },
    ],
  },
];

// Education data
const EDUCATION = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    school: 'Bansal Institute of Science & Technology, Bhopal',
    year: '2022 – 2026',
    score: 'CGPA: 8.45',
    icon: <FaGraduationCap className="text-[#FFC839]" />,
  },
  {
    degree: 'XII (MP Board)',
    school: 'Adarsh Narmada Higher Secondary school, Gangeo',
    year: '2021 – 2022',
    score: '91.00%',
    icon: <FaBook className="text-[#7A7060]" />,
  },
  {
    degree: 'X (MP Board)',
    school: 'Adarsh Narmada Higher Secondary school, Gangeo',
    year: '2019 – 2020',
    score: '94.75%',
    icon: <FaBook className="text-[#6B7280]" />,
  },
];
// Removed CERTS constant as requested.

/* ─── Types ─────────────────────────────────────────────────────────────── */
interface GHRepo {
  name: string;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  homepage: string | null;
}

interface LCStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  totalQuestions: number;
  totalEasy: number;
  totalMedium: number;
  totalHard: number;
}

interface LCCalendar {
  submissionCalendar: string; // JSON string: { "timestamp": count }
  totalSubmissions?: number;
}

interface LCContest {
  contestRating: number;
  contestGlobalRanking: number;
  contestAttendUpper: number;
  contestParticipation: any[];
}

interface LCBadge {
  badgesCount: number;
  badges: Array<{
    name: string;
    icon: string;
    creationDate: string;
  }>;
}

/* ─── Nav ───────────────────────────────────────────────────────────────── */
const NAV_LINKS = ['About', 'Skills', 'Projects', 'Contact'];

const STACK = [
  'Java', '·', 'Spring Boot', '·', 'React', '·', 'MySQL', '·',
  'Flutter', '·', 'REST APIs', '·', 'System Design', '·', 'DSA',
  '·', 'Java', '·', 'Spring Boot', '·', 'React', '·', 'MySQL', '·',
  'Flutter', '·', 'REST APIs', '·', 'System Design', '·', 'DSA',
];

/* ─── Component ─────────────────────────────────────────────────────────── */
function App() {
  const [activeSection, setActiveSection] = useState('');
  const [copied, setCopied] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [repos, setRepos] = useState<GHRepo[]>([]);
  const [reposLoading, setReposLoading] = useState(true);
  const [lcStats, setLcStats] = useState<LCStats | null>(null);
  const [lcCalendar, setLcCalendar] = useState<Record<string, number>>({});
  const [lcActiveDays, setLcActiveDays] = useState(0);
  const [lcMaxStreak, setLcMaxStreak] = useState(0);
  const [lcContest, setLcContest] = useState<LCContest | null>(null);
  const [lcBadges, setLcBadges] = useState<LCBadge | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  /* Fetch LeetCode Data */
  useEffect(() => {
    // Solved stats
    fetch(`https://alfa-leetcode-api.onrender.com/${LC_USERNAME}/solved`)
      .then(r => r.json())
      .then(data => {
        if (data?.solvedProblem !== undefined) {
          setLcStats({
            totalSolved: data.solvedProblem,
            easySolved: data.easySolved ?? 0,
            mediumSolved: data.mediumSolved ?? 0,
            hardSolved: data.hardSolved ?? 0,
            totalQuestions: data.totalQuestions ?? 3300,
            totalEasy: data.totalEasy ?? 800,
            totalMedium: data.totalMedium ?? 1600,
            totalHard: data.totalHard ?? 700,
          });
        }
      })
      .catch(() => { });

    // Calendar/Heatmap
    fetch(`https://alfa-leetcode-api.onrender.com/${LC_USERNAME}/calendar`)
      .then(r => r.json())
      .then((data: LCCalendar) => {
        if (data?.submissionCalendar) {
          const cal = JSON.parse(data.submissionCalendar);
          setLcCalendar(cal);

          // Calculate active days & streak
          const timestamps = Object.keys(cal).map(t => parseInt(t)).sort((a, b) => a - b);
          const dates = timestamps.map(t => new Date(t * 1000).toDateString());
          const uniqueDates = Array.from(new Set(dates));
          setLcActiveDays(uniqueDates.length);

          // Max Streak
          let max = 0, current = 0, lastDate: Date | null = null;
          const sortedDates = Array.from(new Set(timestamps.map(t => {
            const d = new Date(t * 1000);
            d.setHours(0, 0, 0, 0);
            return d.getTime();
          }))).sort((a, b) => a - b);

          sortedDates.forEach(time => {
            const d = new Date(time);
            if (lastDate && (d.getTime() - lastDate.getTime()) === 86400000) {
              current++;
            } else {
              current = 1;
            }
            max = Math.max(max, current);
            lastDate = d;
          });
          setLcMaxStreak(max);
        }
      })
      .catch(() => { });

    // Contest stats
    fetch(`https://alfa-leetcode-api.onrender.com/${LC_USERNAME}/contest`)
      .then(r => r.json())
      .then(data => {
        if (data?.contestRating) setLcContest(data);
      })
      .catch(() => { });

    // Badges
    fetch(`https://alfa-leetcode-api.onrender.com/${LC_USERNAME}/badges`)
      .then(r => r.json())
      .then(data => {
        if (data?.badgesCount) setLcBadges(data);
      })
      .catch(() => { });
  }, []);

  /* Fetch GitHub repos */
  useEffect(() => {
    fetch('https://api.github.com/users/abhishek0112cs221008/repos?per_page=100')
      .then(r => r.json())
      .then((all: GHRepo[]) => {
        const filtered = SELECTED_REPOS
          .map(name => all.find(r => (r as GHRepo).name === name))
          .filter(Boolean) as GHRepo[];
        setRepos(filtered);
      })
      .catch(() => setRepos([]))
      .finally(() => setReposLoading(false));
  }, []);

  /* Active nav via IntersectionObserver */
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActiveSection(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    );
    ['about', 'skills', 'projects', 'contact'].forEach(id => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const copyEmail = () => {
    navigator.clipboard.writeText('0112cs221008@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: darkMode ? '#0F1419' : '#FFFFFF', color: darkMode ? '#FFFFFF' : '#1E1B22' }} id="home">
      <div className="grain-overlay" />

      {/* ── Mobile Menu ───────────────────────────────────────────────── */}
      <div
        className="fixed inset-0 z-50 flex flex-col p-8 transition-colors duration-300\"
        style={{
          backgroundColor: darkMode ? '#000000' : '#1E1B22', color: '#FFFFFF',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.45s cubic-bezier(0.77,0,0.18,1)',
        }}
      >
        <div className="flex justify-end mb-16">
          <button onClick={() => setMenuOpen(false)}
            style={{ color: '#FFC839' }}
            className="text-sm font-semibold tracking-widest uppercase opacity-90 hover:opacity-100 transition-opacity">
            Close ✕
          </button>
        </div>
        <nav className="flex flex-col gap-8">
          {NAV_LINKS.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}
              className="text-4xl font-bold hover:text-[#FFC839] transition-colors"
              style={{ color: '#FFFFFF' }}>
              {link}
            </a>
          ))}
        </nav>
        <div className="mt-auto flex gap-4">
          {[
            { href: 'https://github.com/abhishek0112cs221008', icon: <Github size={24} /> },
            { href: 'https://linkedin.com/in/abhishek68', icon: <Linkedin size={24} /> },
            { href: 'mailto:0112cs221008@gmail.com', icon: <Mail size={24} /> },
          ].map((s, i) => (
            <a key={i} href={s.href} target={s.href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer"
              style={{ color: '#FFC839' }} className="hover:opacity-80 transition-opacity">
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* ── Navbar ────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 px-6 md:px-12 py-6 flex items-center justify-between backdrop-blur-xl border-b-4 transition-colors duration-300" 
        style={{ borderBottomColor: '#FFC839', backgroundColor: darkMode ? 'rgba(15, 20, 25, 0.98)' : 'rgba(255, 255, 255, 0.98)' }}>
        <a href="#home" className="text-3xl font-bold tracking-tight group" style={{ color: darkMode ? '#FFC839' : '#1E1B22' }}>
          Abhishek<span className="inline-block transition-transform group-hover:scale-125" style={{ color: '#FFC839' }}>.</span>
        </a>

        <nav className="hidden md:flex items-center gap-12">
          {NAV_LINKS.map(link => {
            const isActive = activeSection === link.toLowerCase();
            return (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="relative text-xs font-bold uppercase tracking-widest transition-all"
                style={{ color: isActive ? '#FFC839' : darkMode ? '#999999' : '#5A5763' }}
              >
                {link}
                {isActive && (
                  <span className="absolute -bottom-3 left-0 w-full h-1 rounded-full"
                    style={{ backgroundColor: '#FFC839' }} />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-lg transition-all hidden md:flex" style={{ backgroundColor: darkMode ? '#1E1B22' : '#F0F0F0', color: darkMode ? '#FFC839' : '#1E1B22', border: '2px solid #FFC839' }}>
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="https://drive.google.com/file/d/YOUR_RESUME_ID/view"
            target="_blank" rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-lg transition-all hover:shadow-md"
            style={{ border: '2px solid #FFC839', color: '#1E1B22', backgroundColor: '#FFFFFF' }}
          >
            <Download size={14} /> Resume
          </a>
          <a href="mailto:0112cs221008@gmail.com"
            className="hidden md:inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-lg transition-all hover:shadow-lg hover:scale-105"
            style={{ backgroundColor: '#FFC839', color: '#1E1B22' }}>
            Hire me <ArrowUpRight size={14} />
          </a>
          <button onClick={() => setMenuOpen(true)} className="md:hidden flex flex-col gap-1.5 p-2 group">
            <span className="block w-6 h-0.5 transition-transform group-hover:w-4" style={{ backgroundColor: '#1E1B22' }} />
            <span className="block w-4 h-0.5 transition-transform group-hover:w-6" style={{ backgroundColor: '#1E1B22' }} />
          </button>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 pt-28 pb-32 text-center">

        {/* ── Content ── */}
        <div>
          <div className="inline-flex items-center gap-2 mb-10 px-5 py-2.5 rounded-xl text-xs font-bold tracking-widest uppercase"
            style={{ border: '2px solid #FFC839', color: '#1E1B22', backgroundColor: '#FFC839' }}>
            <span className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: '#1E1B22' }} />
            Available for opportunities
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tight" style={{ color: '#1E1B22' }}>
            Crafting{' '}
            <span style={{ color: '#FFC839' }}>innovative</span>{' '}<br/>solutions
          </h1>

          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed" style={{ color: '#5A5763' }}>
            I'm <strong style={{ color: '#1E1B22' }}>Abhishek Patel</strong>, a Software Engineer building scalable backends and beautiful interfaces with Java, Spring Boot, React, and Flutter.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="#projects"
              className="btn-primary">
              View my work <ArrowUpRight size={18} />
            </a>
            <a href="https://drive.google.com/file/d/YOUR_RESUME_ID/view" target="_blank" rel="noreferrer"
              className="btn-ghost">
              <Download size={16} /> Download Resume
            </a>
            <a href="#contact"
              className="btn-ghost">
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* ── Tech Stack ───────────────────────────────────────────────────── */}
      <div className="py-10 px-6 transition-colors duration-300" style={{ borderTop: '3px solid #FFC839', borderBottom: '3px solid #FFC839', backgroundColor: darkMode ? '#1a2332' : '#FFFAF5' }}>
        <div className="max-w-6xl mx-auto flex flex-wrap gap-4 justify-center">
          {['Java', 'Spring Boot', 'React', 'MySQL', 'Flutter', 'REST APIs'].map((tech) => (
            <span key={tech} className="text-sm font-bold px-5 py-3 rounded-lg transition-all hover:shadow-md hover:scale-105" style={{ color: darkMode ? '#FFC839' : '#1E1B22', backgroundColor: darkMode ? '#2a3f5f' : '#FFFFFF', border: '2px solid #FFC839' }}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* ── About ────────────────────────────────────────────────────── */}
      <section id="about" className="max-w-6xl mx-auto px-6 md:px-12 py-28 scroll-mt-20 grid md:grid-cols-2 gap-20 items-start transition-colors duration-300" style={{ borderTop: '3px solid #FFC839', borderBottom: '3px solid #FFC839', backgroundColor: darkMode ? '#0F1419' : '#FFFFFF' }}>
        <div>
          <span className="text-xs font-bold tracking-widest uppercase mb-4 block px-4 py-2 rounded-lg" style={{ color: darkMode ? '#1E1B22' : '#FFC839', backgroundColor: darkMode ? '#FFC839' : '#1E1B22', width: 'fit-content' }}>
            About
          </span>
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-8" style={{ color: darkMode ? '#FFFFFF' : '#1E1B22' }}>
            Building scalable software at scale
          </h2>
          <p className="leading-relaxed mb-5 text-lg" style={{ color: darkMode ? '#cccccc' : '#5A5763' }}>
            Final-year B.Tech student at CSVTU. I build full-stack products from robust Java backends to smooth React frontends.
          </p>
          <p className="leading-relaxed mb-8 text-lg" style={{ color: darkMode ? '#cccccc' : '#5A5763' }}>
            Passionate about clean architecture, system design, and solving challenging problems.
          </p>
          <div className="flex gap-4 flex-wrap pt-4">
            <a href={LC_PROFILE} target="_blank" rel="noreferrer" className="btn-primary flex-1 md:flex-none">
              <Code2 size={18} /> LeetCode
            </a>
            <a href={GFG_PROFILE} target="_blank" rel="noreferrer" className="btn-ghost flex-1 md:flex-none">
              <Code2 size={18} /> GeeksforGeeks
            </a>
          </div>
        </div>
        <div className="space-y-6 pt-4">
          {[
            { label: 'DSA Problems Solved', value: lcStats ? `${lcStats.totalSolved}+` : '350+', pct: 85 },
            { label: 'Academic CGPA', value: '8.45 / 10', pct: 84 },
            { label: 'Projects Shipped', value: '6+', pct: 75 },
          ].map(s => (
            <div key={s.label} className="p-6 rounded-xl transition-all hover:shadow-lg" style={{ backgroundColor: darkMode ? '#1a2332' : '#1E1B22', border: '2px solid #FFC839', borderRadius: '12px' }}>
              <div className="flex justify-between items-end mb-4">
                <span className="text-sm font-bold uppercase tracking-widest" style={{ color: '#FFC839' }}>{s.label}</span>
                <span className="text-5xl font-black" style={{ color: '#FFC839' }}>{s.value}</span>
              </div>
              <div className="h-3 rounded-full" style={{ backgroundColor: darkMode ? '#2a3f5f' : '#2A2733' }}>
                <div className="stat-bar-fill h-full rounded-full" style={{ width: `${s.pct}%` }} />
              </div>
              <div className="mt-3 text-right text-xs font-semibold" style={{ color: '#FFC839' }}>{s.pct}% Complete</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Skills ────────────────────────────────────────────────────── */}
      <section id="skills" className="py-20 scroll-mt-20 transition-colors duration-300" style={{ borderTop: '3px solid #FFC839', backgroundColor: darkMode ? '#0F1419' : '#FFFAF5' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <span className="text-xs font-bold tracking-widest uppercase mb-4 block px-4 py-2 rounded-lg" style={{ color: darkMode ? '#1E1B22' : '#FFFFFF', backgroundColor: darkMode ? '#FFC839' : '#1E1B22', width: 'fit-content' }}>
              Skills
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: darkMode ? '#FFFFFF' : '#1E1B22' }}>Tools & Technologies</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {SKILLS.map(group => (
              <div key={group.category} className="p-8 rounded-xl transition-all" style={{ backgroundColor: darkMode ? '#1a2332' : '#FFC839', color: darkMode ? '#FFC839' : '#1E1B22', border: '2px solid #FFC839' }}>
                <h3 className="text-xs font-bold tracking-widest uppercase mb-6" style={{ color: darkMode ? '#FFC839' : '#1E1B22' }}>{group.category}</h3>
                <div className="flex flex-wrap gap-4">
                  {group.items.map(item => (
                    <div key={item.name}
                      className="group flex flex-col items-center gap-2 p-3 rounded-lg transition-all cursor-default flex-1 basis-[calc(33%-1rem)] min-w-20"
                      style={{ backgroundColor: '#1E1B22' }}>
                      <span className="text-3xl transition-transform group-hover:scale-125">{item.icon}</span>
            <span className="text-[10px] font-bold tracking-tight uppercase" style={{ color: '#FFC839' }}>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ───────────────────────────────────────────────────── */}
      <section id="projects" className="max-w-6xl mx-auto px-6 md:px-12 py-20 scroll-mt-20" style={{ borderTop: '3px solid #FFC839' }}>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase mb-4 block px-4 py-2 rounded-lg" style={{ color: darkMode ? '#1E1B22' : '#FFFFFF', backgroundColor: darkMode ? '#FFC839' : '#1E1B22', width: 'fit-content' }}>Selected Work</span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: darkMode ? '#FFFFFF' : '#1E1B22' }}>Projects & Products</h2>
          </div>
          <a href="https://github.com/abhishek0112cs221008" target="_blank" rel="noreferrer"
            className="link-underline text-sm font-bold px-4 py-2 rounded-lg transition-all self-start md:self-auto" style={{ color: darkMode ? '#FFFFFF' : '#FFFFFF', backgroundColor: darkMode ? '#1a2332' : '#1E1B22', border: '2px solid #FFC839' }}>
            View all on GitHub <Github size={14} />
          </a>
        </div>

        {reposLoading && (
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map(n => (
              <div key={n} className="glass-card animate-pulse" style={{ height: 200 }} />
            ))}
          </div>
        )}

        {!reposLoading && (
          <div className="grid md:grid-cols-2 gap-6">
            {repos.map(repo => {
              const meta = REPO_META[repo.name] ?? {};
              const liveUrl = meta.live || repo.homepage || null;
              return (
                <article key={repo.name} className="flex flex-col p-7 rounded-xl transition-all" style={{ backgroundColor: darkMode ? '#1a2332' : '#1E1B22', color: '#FFFFFF', border: '2px solid #FFC839' }}>
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1.5 rounded-lg text-xs font-bold" style={{ backgroundColor: '#FFC839', color: '#1E1B22' }}>{meta.label ?? repo.language ?? 'Project'}</span>
                    <div className="flex items-center gap-3">
                      {repo.stargazers_count > 0 && (
                        <span className="flex items-center gap-1 text-xs font-medium" style={{ color: darkMode ? '#cccccc' : '#5A5763' }}>
                          <Star size={12} /> {repo.stargazers_count}
                        </span>
                      )}
                      {repo.forks_count > 0 && (
                        <span className="flex items-center gap-1 text-xs font-medium" style={{ color: darkMode ? '#cccccc' : '#5A5763' }}>
                          <GitFork size={12} /> {repo.forks_count}
                        </span>
                      )}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#FFC839' }}>{repo.name.replace(/-/g, ' ').replace(/_/g, ' ')}</h3>
                  <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: '#FFFAF5' }}>
                    {meta.desc ?? repo.name}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    {repo.language && (
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#FFC839' }} />
                        <span className="text-xs font-medium" style={{ color: '#FFFAF5' }}>{repo.language}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 ml-auto">
                      <a href={repo.html_url} target="_blank" rel="noreferrer" className="p-2 rounded-lg transition-all hover:gap-2 flex items-center gap-0" style={{ backgroundColor: '#FFC839', color: '#1E1B22' }}>
                        <Github size={16} />
                      </a>
                      {liveUrl && (
                        <a href={liveUrl} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-lg transition-all flex items-center gap-2 font-semibold" style={{ backgroundColor: '#FFC839', color: '#1E1B22' }}>
                          Visit <ArrowUpRight size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* ── Education ──────────────────────────────────────────────────── */}
      <section id="education" className="py-20 scroll-mt-20 transition-colors duration-300" style={{ borderTop: '3px solid #FFC839', backgroundColor: darkMode ? '#0F1419' : '#FFFAF5' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <span className="text-xs font-bold tracking-widest uppercase mb-4 block px-4 py-2 rounded-lg" style={{ color: darkMode ? '#1E1B22' : '#FFFFFF', backgroundColor: darkMode ? '#FFC839' : '#1E1B22', width: 'fit-content' }}>Education</span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: darkMode ? '#FFFFFF' : '#1E1B22' }}>Academic Background</h2>
          </div>
          <div className="space-y-4">
            {EDUCATION.map((edu, i) => (
              <div key={i} className="p-6 rounded-xl transition-all" style={{ backgroundColor: darkMode ? '#1a2332' : '#FFC839', border: darkMode ? '2px solid #FFC839' : '2px solid #1E1B22' }}>
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold mb-1" style={{ color: darkMode ? '#FFFFFF' : '#1E1B22' }}>{edu.degree}</h3>
                    <p className="text-sm mb-2" style={{ color: darkMode ? '#cccccc' : '#1E1B22' }}>{edu.school}</p>
                    <p className="text-xs" style={{ color: darkMode ? '#999999' : '#1E1B22' }}>{edu.year}</p>
                  </div>
                  <span className="px-3 py-1.5 rounded-lg text-sm font-semibold shrink-0" style={{ backgroundColor: '#FFC839', color: '#1E1B22' }}>
                    {edu.score}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      

      {/* ── Contact ───────────────────────────────────────────────────── */}
      <section id="contact" className="py-20 scroll-mt-20 transition-colors duration-300" style={{ backgroundColor: darkMode ? '#000000' : '#1E1B22', borderTop: '3px solid #FFC839' }}>
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <span className="text-xs font-bold tracking-widest uppercase mb-4 px-4 py-2 rounded-lg inline-block" style={{ color: '#1E1B22', backgroundColor: '#FFC839' }}>
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ color: '#FFC839' }}>
            Let's work together
          </h2>
          <p className="text-lg mb-10 mx-auto max-w-md leading-relaxed" style={{ color: darkMode ? '#cccccc' : '#FFFAF5' }}>
            I'm always interested in new projects and opportunities.
          </p>
          <button onClick={copyEmail}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-xl mb-10 transition-all font-bold text-lg hover:shadow-2xl hover:scale-105"
            style={{ backgroundColor: '#FFC839', color: '#1E1B22', cursor: 'pointer', border: 'none', boxShadow: '0 8px 24px rgba(255, 200, 57, 0.3)' }}>
            <span className="font-mono text-base">0112cs221008@gmail.com</span>
            <span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
              style={{ backgroundColor: '#1E1B22', color: '#FFC839' }}>
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </span>
          </button>
          <div className="flex justify-center gap-4 mb-10">
            {[
              { href: 'https://github.com/abhishek0112cs221008', icon: <Github size={24} /> },
              { href: 'https://linkedin.com/in/abhishek68', icon: <Linkedin size={24} /> },
              { href: 'mailto:0112cs221008@gmail.com', icon: <Mail size={24} /> },
            ].map((s, i) => (
              <a key={i} href={s.href} target={s.href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer"
                className="w-14 h-14 rounded-xl flex items-center justify-center transition-all hover:shadow-lg hover:scale-110" style={{ background: '#FFC839', color: '#1E1B22', boxShadow: '0 4px 12px rgba(255, 200, 57, 0.2)' }}>
                {s.icon}
              </a>
            ))}
          </div>
          <p className="text-sm font-bold tracking-widest uppercase" style={{ color: '#FFC839' }}>
            © 2026 Abhishek Patel • All Rights Reserved
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
