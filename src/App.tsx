import { useState, useEffect, useRef } from 'react';
import {
  Github, Linkedin, Mail, Copy, Check, ArrowUpRight,
  Star, GitFork, ExternalLink, Download, Code2, BookOpen
} from 'lucide-react';
import {
  SiSpringboot, SiReact, SiFlutter, SiDart, SiJavascript, SiTypescript,
  SiMysql, SiPostman, SiPython, SiCplusplus,
  SiIntellijidea, SiAndroidstudio, SiGit, SiHibernate, SiOpenjdk
} from 'react-icons/si';
import { FaGraduationCap, FaBook, FaCode, FaJava, FaTrophy } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';
import profileImage from './assets/profile.png';

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
  'Shabd',
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
  'Shabd': {
    label: 'Mobile App · Flutter',
    desc: 'Word of the Day app with 365 curated vocabulary entries, daily notifications, minimalist UI, and offline-first architecture.',
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
  Java: '#b07219', TypeScript: '#3178c6', JavaScript: '#f1e05a',
  Dart: '#00B4AB', Python: '#3572A5', HTML: '#e34c26', default: '#7A7060',
};

// Skills data
const SKILLS = [
  {
    category: 'Languages',
    items: [
      { name: 'Java', icon: <SiOpenjdk className="text-[#ED8B00]" /> },
      { name: 'Dart', icon: <SiDart className="text-[#00B4AB]" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: 'Python', icon: <SiPython className="text-[#3776AB]" /> },
      { name: 'C++', icon: <SiCplusplus className="text-[#00599C]" /> },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    items: [
      { name: 'Spring Boot', icon: <SiSpringboot className="text-[#6DB33F]" /> },
      { name: 'React', icon: <SiReact className="text-[#61DAFB]" /> },
      { name: 'Flutter', icon: <SiFlutter className="text-[#02569B]" /> },
      { name: 'Hibernate', icon: <SiHibernate className="text-[#59666C]" /> },
      { name: 'REST APIs', icon: <FaCode className="text-[#D97757]" /> },
      { name: 'JUnit', icon: <FaJava className="text-[#ED8B00]" /> },
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
    icon: <FaGraduationCap className="text-[#D97757]" />,
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
    icon: <FaBook className="text-[#7A7060]" />,
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
    <div className="min-h-screen" style={{ backgroundColor: 'var(--cream)', color: 'var(--charcoal)' }} id="home">
      <div className="grain-overlay" />

      {/* ── Mobile Menu ───────────────────────────────────────────────── */}
      <div
        className="fixed inset-0 z-50 flex flex-col p-8"
        style={{
          backgroundColor: 'var(--charcoal)', color: 'var(--cream)',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.45s cubic-bezier(0.77,0,0.18,1)',
        }}
      >
        <div className="flex justify-end mb-16">
          <button onClick={() => setMenuOpen(false)}
            style={{ color: 'var(--cream)' }}
            className="text-sm font-semibold tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity">
            Close ✕
          </button>
        </div>
        <nav className="flex flex-col gap-8">
          {NAV_LINKS.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}
              className="serif-italic text-5xl hover:text-[var(--terracotta)] transition-colors"
              style={{ color: 'var(--cream)' }}>
              {link}
            </a>
          ))}
        </nav>
        <div className="mt-auto flex gap-6">
          {[
            { href: 'https://github.com/abhishek0112cs221008', icon: <Github size={22} /> },
            { href: 'https://linkedin.com/in/abhishek68', icon: <Linkedin size={22} /> },
            { href: 'mailto:0112cs221008@gmail.com', icon: <Mail size={22} /> },
          ].map((s, i) => (
            <a key={i} href={s.href} target={s.href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer"
              style={{ color: 'var(--cream)' }} className="opacity-50 hover:opacity-100 transition-opacity">
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* ── Navbar ────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 px-6 md:px-12 py-4 flex items-center justify-between backdrop-blur-md"
        style={{ borderBottom: '1px solid var(--border)', backgroundColor: 'rgba(250,247,242,0.85)' }}>
        <a href="#home" className="serif-italic text-xl" style={{ color: 'var(--charcoal)' }}>
          Abhishek<span style={{ color: 'var(--terracotta)' }}>.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-medium transition-colors"
              style={{ color: activeSection === link.toLowerCase() ? 'var(--terracotta)' : 'var(--muted)' }}>
              {link}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://drive.google.com/file/d/YOUR_RESUME_ID/view"
            target="_blank" rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full transition-all hover:opacity-80"
            style={{ border: '1px solid var(--border)', color: 'var(--charcoal)' }}
          >
            <Download size={14} /> Resume
          </a>
          <a href="mailto:0112cs221008@gmail.com"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full transition-all hover:opacity-80"
            style={{ backgroundColor: 'var(--terracotta)', color: 'var(--cream)' }}>
            Hire me <ArrowUpRight size={14} />
          </a>
          <button onClick={() => setMenuOpen(true)} className="md:hidden flex flex-col gap-[5px] p-2">
            <span className="block w-6 h-[1.5px]" style={{ backgroundColor: 'var(--charcoal)' }} />
            <span className="block w-4 h-[1.5px]" style={{ backgroundColor: 'var(--charcoal)' }} />
          </button>
        </div>
      </header>

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 pt-20 pb-32 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
            style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: 'var(--terracotta)' }} />
            Available for opportunities
          </div>
          <h1 className="serif text-6xl md:text-7xl leading-[1.05] mb-6">
            Building things{' '}
            <em className="serif-italic" style={{ color: 'var(--terracotta)' }}>people love</em>{' '}to use.
          </h1>
          <p className="text-base leading-relaxed mb-10 max-w-md" style={{ color: 'var(--muted)' }}>
            I'm <strong style={{ color: 'var(--charcoal)' }}>Abhishek Patel</strong>, a Software Engineering
            undergrad ('26) crafting scalable backends and pixel-perfect interfaces with Java, Spring Boot &amp; React.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:opacity-80"
              style={{ backgroundColor: 'var(--charcoal)', color: 'var(--cream)' }}>
              View my work <ArrowUpRight size={15} />
            </a>
            <a href="https://drive.google.com/file/d/YOUR_RESUME_ID/view" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:opacity-80"
              style={{ backgroundColor: 'var(--terracotta)', color: 'var(--cream)' }}>
              <Download size={15} /> Resume
            </a>
            <a href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:opacity-80"
              style={{ border: '1px solid var(--border)', color: 'var(--charcoal)' }}>
              Get in touch
            </a>
          </div>
        </div>

        {/* Portrait */}
        <div className="relative flex justify-center md:justify-end">
          <div className="absolute w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full"
            style={{ border: '1px dashed var(--border)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
          <div className="absolute top-4 -left-4 z-10 text-xs font-semibold px-3 py-1.5 rounded-full animate-float-delayed"
            style={{ backgroundColor: 'var(--terracotta)', color: 'var(--cream)', transform: 'rotate(-6deg)' }}>
            8.45 CGPA ✦
          </div>
          <div className="absolute bottom-8 -right-2 z-10 text-xs font-semibold px-3 py-1.5 rounded-full animate-float-slow"
            style={{ backgroundColor: 'var(--cream-dark)', color: 'var(--charcoal)', border: '1px solid var(--border)', transform: 'rotate(4deg)' }}>
            350+ DSA solved
          </div>
          <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl"
            style={{ backgroundColor: 'var(--sand)' }}>
            <img src={profileImage} alt="Abhishek Patel"
              className="w-full h-full object-cover grayscale contrast-110 brightness-105 mix-blend-multiply" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,25,8,0.4) 0%, transparent 60%)' }} />
          </div>
        </div>
      </section>

      {/* ── Marquee ───────────────────────────────────────────────────── */}
      <div className="overflow-hidden py-5"
        style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--cream-dark)' }}>
        <div className="flex gap-8 animate-marquee whitespace-nowrap select-none">
          {STACK.map((s, i) => (
            <span key={i} className="text-sm font-semibold tracking-widest uppercase"
              style={{ color: s === '·' ? 'var(--terracotta)' : 'var(--muted)' }}>{s}</span>
          ))}
        </div>
      </div>

      {/* ── About ─────────────────────────────────────────────────────── */}
      <section id="about" className="max-w-6xl mx-auto px-6 md:px-12 py-28 scroll-mt-20 grid md:grid-cols-2 gap-16 items-start">
        <div>
          <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: 'var(--terracotta)' }}>
            § About
          </span>
          <h2 className="serif text-5xl md:text-6xl leading-tight mb-6">
            Turning ideas into{' '}<em className="serif-italic">real software.</em>
          </h2>
          <p className="leading-relaxed mb-5" style={{ color: 'var(--muted)' }}>
            I'm a final-year B.Tech Software Engineering student at CSVTU. I build full-stack products — from robust
            Spring Boot microservices to smooth Flutter apps — focused on clean architecture and great UX.
          </p>
          <p className="leading-relaxed mb-8" style={{ color: 'var(--muted)' }}>
            I solve DSA problems daily and enjoy exploring system design patterns and building tools that make
            developers' lives easier.
          </p>
          {/* Coding Profiles */}
          <div className="flex flex-wrap gap-3">
            <a href={LC_PROFILE} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all hover:opacity-80"
              style={{ backgroundColor: '#FFA116', color: '#fff' }}>
              <Code2 size={14} /> LeetCode {lcStats && <span>· {lcStats.totalSolved}</span>}
            </a>
            <a href={GFG_PROFILE} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all hover:opacity-80"
              style={{ backgroundColor: '#2F8D46', color: '#fff' }}>
              <Code2 size={14} /> GeeksforGeeks
            </a>
          </div>
        </div>

        {/* Stats + Education */}
        <div className="space-y-10">
          {[
            { label: 'DSA Problems Solved', value: lcStats ? `${lcStats.totalSolved}+` : '350+', pct: 85 },
            { label: 'Academic CGPA', value: '8.45 / 10', pct: 84 },
            { label: 'Projects Shipped', value: '6+', pct: 75 },
          ].map(s => (
            <div key={s.label}>
              <div className="flex justify-between items-end mb-2">
                <span className="text-sm font-medium" style={{ color: 'var(--muted)' }}>{s.label}</span>
                <span className="serif text-3xl" style={{ color: 'var(--charcoal)' }}>{s.value}</span>
              </div>
              <div className="h-[3px] rounded-full" style={{ backgroundColor: 'var(--sand)' }}>
                <div className="stat-bar-fill" style={{ width: `${s.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Skills ────────────────────────────────────────────────────── */}
      <section id="skills" className="py-28 scroll-mt-20"
        style={{ borderTop: '1px solid var(--border)', backgroundColor: 'var(--cream-dark)' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: 'var(--terracotta)' }}>
              § Skills
            </span>
            <h2 className="serif text-5xl md:text-6xl leading-tight">
              Tools of <em className="serif-italic">my trade.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SKILLS.map(group => (
              <div key={group.category} className="rounded-3xl p-8"
                style={{ backgroundColor: 'var(--cream)', border: '1px solid var(--border)' }}>
                <h3 className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: 'var(--terracotta)' }}>
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {group.items.map(item => (
                    <div key={item.name}
                      className="group flex flex-col items-center gap-2 p-3 rounded-2xl transition-all hover:bg-white hover:shadow-md cursor-default flex-1 basis-[calc(33%-1rem)] min-w-[80px]"
                      style={{ border: '1px solid transparent' }}>
                      <span className="text-3xl transition-transform group-hover:scale-110">{item.icon}</span>
                      <span className="text-[10px] font-bold tracking-tight uppercase" style={{ color: 'var(--muted)' }}>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ──────────────────────────────────────────────────── */}
      <section id="projects" className="max-w-6xl mx-auto px-6 md:px-12 py-28 scroll-mt-20"
        style={{ borderTop: '1px solid var(--border)' }}>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: 'var(--terracotta)' }}>
              § Selected Work
            </span>
            <h2 className="serif text-5xl md:text-6xl leading-tight">
              Things I've <em className="serif-italic">built.</em>
            </h2>
          </div>
          <a href="https://github.com/abhishek0112cs221008" target="_blank" rel="noreferrer"
            className="link-underline text-sm font-medium self-start md:self-auto" style={{ color: 'var(--muted)' }}>
            All on GitHub <Github size={14} />
          </a>
        </div>

        {reposLoading && (
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map(n => (
              <div key={n} className="rounded-3xl animate-pulse"
                style={{ backgroundColor: 'var(--cream-dark)', border: '1px solid var(--border)', height: 200 }} />
            ))}
          </div>
        )}

        {!reposLoading && (
          <div className="grid md:grid-cols-2 gap-6">
            {repos.map(repo => {
              const meta = REPO_META[repo.name] ?? {};
              const liveUrl = meta.live || repo.homepage || null;
              const langColor = LANG_COLOR[repo.language ?? ''] ?? LANG_COLOR.default;
              return (
                <article key={repo.name}
                  className="project-card flex flex-col rounded-3xl p-7"
                  style={{ backgroundColor: 'var(--cream-dark)', border: '1px solid var(--border)' }}>
                  <div className="flex items-start justify-between mb-4">
                    <span className="pill">{meta.label ?? repo.language ?? 'Project'}</span>
                    <div className="flex items-center gap-3">
                      {repo.stargazers_count > 0 && (
                        <span className="flex items-center gap-1 text-xs font-medium" style={{ color: 'var(--muted)' }}>
                          <Star size={12} /> {repo.stargazers_count}
                        </span>
                      )}
                      {repo.forks_count > 0 && (
                        <span className="flex items-center gap-1 text-xs font-medium" style={{ color: 'var(--muted)' }}>
                          <GitFork size={12} /> {repo.forks_count}
                        </span>
                      )}
                    </div>
                  </div>
                  <h3 className="serif text-2xl mb-2">{repo.name.replace(/-/g, ' ').replace(/_/g, ' ')}</h3>
                  <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: 'var(--muted)' }}>
                    {meta.desc ?? repo.name}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    {repo.language && (
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: langColor }} />
                        <span className="text-xs font-medium" style={{ color: 'var(--muted)' }}>{repo.language}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-3 ml-auto">
                      <a href={repo.html_url} target="_blank" rel="noreferrer"
                        className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-70 transition-all"
                        style={{ border: '1px solid var(--border)', color: 'var(--charcoal)' }}>
                        <Github size={16} />
                      </a>
                      {liveUrl && (
                        <a href={liveUrl} target="_blank" rel="noreferrer"
                          className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-80 transition-all"
                          style={{ backgroundColor: 'var(--terracotta)', color: 'var(--cream)' }}>
                          <ExternalLink size={16} />
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

      {/* ── Education ─────────────────────────────────────────────────── */}
      <section id="education" className="py-24 scroll-mt-20"
        style={{ borderTop: '1px solid var(--border)', backgroundColor: 'var(--cream-dark)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
            {/* Header Column */}
            <div className="lg:col-span-1">
              <span className="text-xs font-bold tracking-[0.2em] uppercase mb-4 block" style={{ color: 'var(--terracotta)' }}>
                § Academic Foundation
              </span>
              <h2 className="serif text-5xl md:text-6xl leading-[0.9] mb-8">
                Educational <em className="serif-italic">Journey.</em>
              </h2>
              <p className="text-sm leading-relaxed max-w-sm" style={{ color: 'var(--muted)' }}>
                A timeline of my formal education and academic achievements, focusing on Computer Science and engineering principles.
              </p>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-2 space-y-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
                {EDUCATION.map((edu, i) => (
                  <div key={i} className="flex gap-5 p-7 rounded-3xl transition-all hover:shadow-xl group h-full"
                    style={{ backgroundColor: 'var(--cream)', border: '1px solid var(--border)' }}>
                    <div className="text-3xl flex-shrink-0 mt-1 p-3 rounded-2xl transition-colors group-hover:bg-[var(--cream-dark)] h-fit"
                      style={{ border: '1px solid transparent', borderColor: 'var(--border)' }}>
                      {edu.icon}
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col">
                      <div className="flex justify-between items-start gap-4 mb-2">
                        <h3 className="serif text-xl leading-tight" style={{ color: 'var(--charcoal)' }}>{edu.degree}</h3>
                        <span className="text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider flex-shrink-0 whitespace-nowrap"
                          style={{ backgroundColor: 'var(--terracotta)', color: 'var(--cream)' }}>
                          {edu.score}
                        </span>
                      </div>
                      <p className="text-sm font-medium mb-3 opacity-60" style={{ color: 'var(--charcoal)' }}>{edu.school}</p>
                      <div className="flex items-center gap-1.5 mt-auto">
                        <BookOpen size={12} style={{ color: 'var(--terracotta)' }} />
                        <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'var(--muted)' }}>{edu.year}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Coding Intelligence ────────────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: 'var(--cream)', borderTop: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
            {/* Header Column */}
            <div className="lg:col-span-1">
              <span className="text-xs font-bold tracking-[0.2em] uppercase mb-4 block" style={{ color: 'var(--terracotta)' }}>
                § Coding Intel
              </span>
              <h2 className="serif text-5xl md:text-6xl leading-[0.9] mb-8">
                LeetCode <em className="serif-italic">Pulse.</em>
              </h2>
              <p className="text-sm leading-relaxed max-w-sm mb-8" style={{ color: 'var(--muted)' }}>
                Live tracking of problem-solving activity, contest performance, and algorithmic consistency across the platform.
              </p>
              <div className="p-6 rounded-2xl" style={{ border: '1px solid var(--border)', backgroundColor: 'var(--cream-dark)' }}>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-3 opacity-40">Quick Stats</p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold uppercase tracking-wider opacity-60">Active Days</span>
                    <span className="serif text-2xl" style={{ color: 'var(--terracotta)' }}>{lcActiveDays || '—'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold uppercase tracking-wider opacity-60">Max Streak</span>
                    <span className="serif text-2xl" style={{ color: 'var(--terracotta)' }}>{lcMaxStreak || '—'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 gap-8">
                {/* Row 1: Global Stats */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Contest Rating Card */}
                  <div className="p-8 rounded-3xl group transition-all duration-500 hover:shadow-xl hover:-translate-y-1" style={{ backgroundColor: 'var(--cream)', border: '1px solid var(--border)' }}>
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <p className="text-[10px] uppercase font-bold tracking-widest mb-1" style={{ color: 'var(--muted)' }}>Contest Rating</p>
                        <h3 className="serif text-4xl group-hover:text-[var(--terracotta)] transition-colors">{Math.round(lcContest?.contestRating ?? 1450)}</h3>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] uppercase font-bold tracking-widest mb-1" style={{ color: 'var(--muted)' }}>Global Ranking</p>
                        <p className="font-bold text-sm">
                          {lcContest?.contestGlobalRanking?.toLocaleString() ?? '519,624'}
                          <span className="opacity-40 font-medium ml-1">/ 839,080</span>
                        </p>
                      </div>
                    </div>
                    {/* Dynamic Contest Graph */}
                    <div className="h-28 w-full relative mt-8">
                      <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                        {(() => {
                          const history = lcContest?.contestParticipation?.filter(p => p.attended) ?? [];
                          if (history.length < 2) {
                            return (
                              <>
                                <path d="M0,35 Q25,30 50,20 T100,38" fill="none" stroke="var(--terracotta)" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="1,2" />
                                <circle cx="50" cy="20" r="2.5" fill="var(--terracotta)" className="animate-pulse" />
                              </>
                            );
                          }
                          const ratings = history.map(h => h.rating);
                          const min = Math.min(...ratings) * 0.95;
                          const max = Math.max(...ratings) * 1.05;
                          const range = max - min;
                          const points = history.map((h, i) => ({
                            x: (i / (history.length - 1)) * 100,
                            y: 40 - ((h.rating - min) / range) * 35
                          }));
                          const d = `M ${points.map(p => `${p.x},${p.y}`).join(' L ')}`;
                          return (
                            <>
                              <path d={d} fill="none" stroke="var(--terracotta)" strokeWidth="1.5" strokeLinecap="round" />
                              <circle cx={points[points.length - 1].x} cy={points[points.length - 1].y} r="2.5" fill="var(--terracotta)" />
                            </>
                          );
                        })()}
                      </svg>
                    </div>
                  </div>

                  {/* Top Percentage Card */}
                  <div className="p-8 rounded-3xl flex flex-col justify-between group hover:shadow-xl transition-all duration-500" style={{ backgroundColor: 'var(--cream)', border: '1px solid var(--border)' }}>
                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <p className="text-[10px] uppercase font-bold tracking-widest" style={{ color: 'var(--muted)' }}>Top percentile</p>
                        <FaTrophy size={14} className="text-[var(--terracotta)] opacity-40" />
                      </div>
                      <h3 className="serif text-5xl group-hover:text-[var(--terracotta)] transition-colors">
                        {lcContest ? (100 - lcContest.contestAttendUpper).toFixed(2) : '62.36'}
                        <span className="serif-italic text-2xl ml-1">%</span>
                      </h3>
                    </div>
                    <div className="flex items-end gap-1.5 h-20 mt-8">
                      {[2, 4, 3, 6, 8, 12, 10, 16, 14, 10, 8, 6, 4, 3, 2, 1].map((h, i) => (
                        <div key={i} className="flex-1 rounded-sm transition-all duration-700 hover:opacity-100"
                          style={{
                            height: `${h * 5}%`,
                            backgroundColor: i === 7 ? 'var(--terracotta)' : 'var(--cream-dark)',
                            opacity: i === 7 ? 1 : 0.4
                          }} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Row 2: Solved Gauge & Badges */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Solved Questions Gauge */}
                  <div className="p-8 rounded-3xl flex items-center gap-8 group hover:shadow-xl transition-all duration-500" style={{ backgroundColor: 'var(--cream)', border: '1px solid var(--border)' }}>
                    <div className="relative w-36 h-36 flex-shrink-0">
                      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                        <circle cx="50" cy="50" r="42" fill="none" stroke="var(--sand)" strokeWidth="6" />
                        <circle cx="50" cy="50" r="42" fill="none" stroke="var(--terracotta)" strokeWidth="8" strokeLinecap="round"
                          strokeDasharray="264" strokeDashoffset={264 - (264 * (lcStats?.totalSolved ?? 450) / (lcStats?.totalQuestions ?? 3846))}
                          className="transition-all duration-[1500ms] ease-out" />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="serif text-4xl leading-none">{lcStats?.totalSolved ?? 450}</span>
                        <span className="text-[10px] text-[var(--muted)] uppercase font-bold mt-1 tracking-tighter">Solved</span>
                      </div>
                    </div>
                    <div className="flex-1 space-y-5">
                      {[
                        { label: 'Easy', val: lcStats?.easySolved ?? 168, total: lcStats?.totalEasy ?? 927, color: '#00b8a3' },
                        { label: 'Medium', val: lcStats?.mediumSolved ?? 242, total: lcStats?.totalMedium ?? 2010, color: '#ffb800' },
                        { label: 'Hard', val: lcStats?.hardSolved ?? 40, total: lcStats?.totalHard ?? 909, color: '#ff2d55' },
                      ].map(d => (
                        <div key={d.label}>
                          <div className="flex justify-between text-[10px] font-bold uppercase mb-1.5">
                            <span style={{ color: d.color }}>{d.label}</span>
                            <span style={{ color: 'var(--charcoal)' }}>{d.val}<span className="opacity-30">/{d.total}</span></span>
                          </div>
                          <div className="h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--sand)' }}>
                            <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${(d.val / d.total) * 100}%`, backgroundColor: d.color }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Badges Card */}
                  <div className="p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between" style={{ backgroundColor: 'var(--cream)', border: '1px solid var(--border)' }}>
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-widest mb-1" style={{ color: 'var(--muted)' }}>Badges</p>
                      <h3 className="serif text-4xl mb-6">{lcBadges?.badgesCount ?? 6}</h3>
                      <div className="flex gap-4">
                        {(lcBadges?.badges.slice(-3).reverse() ?? []).map((b, i) => (
                          <div key={i} className="w-16 h-16 group relative">
                            <img src={b.icon.startsWith('http') ? b.icon : `https://leetcode.com${b.icon}`} alt={b.name} className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-500" />
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-[var(--charcoal)] text-[var(--cream)] text-[8px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                              {b.name}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6 border-t pt-4" style={{ borderColor: 'var(--border)' }}>
                      <p className="text-[10px] uppercase font-bold tracking-widest text-[var(--muted)] mb-1">Latest Achievement</p>
                      <p className="font-bold text-xs">{lcBadges?.badges[lcBadges.badges.length - 1]?.name ?? 'LeetCode Daily Badge'}</p>
                    </div>
                    <ArrowUpRight className="absolute top-8 right-8 text-[var(--muted)]" size={18} />
                  </div>
                </div>

                {/* Heatmap */}
                <div className="p-8 rounded-3xl" style={{ backgroundColor: 'var(--cream)', border: '1px solid var(--border)' }}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
                    <h3 className="serif text-3xl">
                      {Object.values(lcCalendar).reduce((a, b) => a + b, 0)} <span className="text-sm font-sans font-medium text-[var(--muted)]">submissions in 365 days</span>
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase font-bold opacity-40">Less</span>
                      <div className="flex gap-1">
                        {[0, 1, 3, 5].map(v => (
                          <div key={v} className="w-3.5 h-3.5 rounded-[2px]"
                            style={{ backgroundColor: v === 0 ? 'var(--cream-dark)' : `rgba(217,119,87, ${v * 0.2})`, border: '1px solid var(--border)' }} />
                        ))}
                      </div>
                      <span className="text-[10px] uppercase font-bold opacity-40">More</span>
                    </div>
                  </div>

                  <div className="overflow-x-auto pb-8 mask-fade-right">
                    <div className="flex gap-1.5" style={{ minWidth: '850px' }}>
                      {/* Day Labels */}
                      <div className="flex flex-col gap-1.5 pt-7 mr-3.5 select-none">
                        {['', 'Mon', '', 'Wed', '', 'Fri', ''].map((day, i) => (
                          <div key={i} className="h-3.5 flex items-center">
                            <span className="text-[8px] font-bold uppercase text-[var(--muted)] leading-none italic transform -translate-y-[1px]">
                              {day}
                            </span>
                          </div>
                        ))}
                      </div>

                      {(() => {
                        const weeks = [];
                        const today = new Date();
                        const start = new Date(today);
                        start.setDate(today.getDate() - 364);
                        while (start.getDay() !== 0) start.setDate(start.getDate() - 1);

                        for (let w = 0; w < 53; w++) {
                          const days = [];
                          for (let d = 0; d < 7; d++) {
                            const current = new Date(start);
                            current.setDate(start.getDate() + (w * 7) + d);
                            if (current > today) {
                              days.push(null);
                              continue;
                            }
                            const key = Math.floor(current.getTime() / 1000).toString();
                            const active = Object.keys(lcCalendar).find(k => Math.abs(parseInt(k) - parseInt(key)) < 43200);
                            const count = active ? lcCalendar[active] : 0;
                            days.push({ count, date: current });
                          }
                          weeks.push(days);
                        }

                        return weeks.map((week, wIdx) => {
                          const firstDay = week.find(d => !!d);
                          const isMonthStart = !!firstDay && firstDay.date.getDate() <= 7;
                          return (
                            <div key={wIdx} className="flex flex-col gap-1.5 relative">
                              {isMonthStart && firstDay && (
                                <span className="absolute -top-7 left-0 text-[10px] uppercase font-bold text-[var(--muted)] whitespace-nowrap">
                                  {firstDay.date.toLocaleDateString(undefined, { month: 'short' })}
                                </span>
                              )}
                              {week.map((day, dIdx) => (
                                day ? (
                                  <div
                                    key={dIdx}
                                    className="w-3.5 h-3.5 rounded-[2px] transition-all hover:scale-125 cursor-help relative group"
                                    style={{
                                      backgroundColor: day.count === 0 ? 'var(--cream-dark)' : `rgba(217,119,87, ${Math.min(day.count * 0.25, 1)})`,
                                      border: day.count === 0 ? '1px solid var(--border)' : 'none'
                                    }}
                                  >
                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-[var(--charcoal)] text-[var(--cream)] text-[10px] rounded pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                                      {day.count} sub. on {day.date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                                    </div>
                                  </div>
                                ) : <div key={dIdx} className="w-3.5 h-3.5" />
                              ))}
                            </div>
                          );
                        });
                      })()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ───────────────────────────────────────────────────── */}
      <section id="contact" className="py-32 scroll-mt-20" style={{ backgroundColor: 'var(--charcoal)' }}>
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <span className="text-xs font-semibold tracking-widest uppercase mb-6 block" style={{ color: 'var(--terracotta)' }}>
            § Contact
          </span>
          <h2 className="serif text-5xl md:text-7xl leading-[1.05] mb-6" style={{ color: 'var(--cream)' }}>
            Let's build something{' '}
            <em className="serif-italic" style={{ color: 'var(--terracotta)' }}>together.</em>
          </h2>
          <p className="text-base mb-12 mx-auto max-w-md leading-relaxed" style={{ color: 'rgba(250,247,242,0.45)' }}>
            Open to full-time roles, freelance projects, or just a good conversation about technology.
          </p>
          <button onClick={copyEmail}
            className="inline-flex items-center gap-4 px-6 py-4 rounded-full mb-6 transition-all hover:opacity-80 cursor-pointer"
            style={{ border: '1px solid rgba(250,247,242,0.12)', backgroundColor: 'rgba(250,247,242,0.05)', color: 'var(--cream)' }}>
            <span className="font-mono text-sm">0112cs221008@gmail.com</span>
            <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: 'var(--terracotta)', color: 'var(--cream)' }}>
              {copied ? <Check size={14} /> : <Copy size={14} />}
            </span>
          </button>
          <div className="flex justify-center mb-12">
            <a href="https://drive.google.com/file/d/YOUR_RESUME_ID/view" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:opacity-80"
              style={{ backgroundColor: 'var(--terracotta)', color: 'var(--cream)' }}>
              <Download size={15} /> Download Resume
            </a>
          </div>
          <div className="flex justify-center gap-6 mb-20">
            {[
              { href: 'https://github.com/abhishek0112cs221008', icon: <Github size={20} /> },
              { href: 'https://linkedin.com/in/abhishek68', icon: <Linkedin size={20} /> },
              { href: 'mailto:0112cs221008@gmail.com', icon: <Mail size={20} /> },
            ].map((s, i) => (
              <a key={i} href={s.href} target={s.href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer"
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:opacity-60"
                style={{ border: '1px solid rgba(250,247,242,0.15)', color: 'var(--cream)' }}>
                {s.icon}
              </a>
            ))}
          </div>
          <p className="text-xs font-medium tracking-widest uppercase" style={{ color: 'rgba(250,247,242,0.2)' }}>
            © 2026 Abhishek Patel
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
