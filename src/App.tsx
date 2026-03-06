import { useState, useEffect, useRef } from 'react';
import {
  Github, Linkedin, Mail, Copy, Check, ArrowUpRight,
  Star, GitFork, Download, Code2, Moon, Sun, ArrowUp,
  ChevronDown, Globe, Smartphone, Layers, Zap, Trophy, Award
} from 'lucide-react';
import {
  SiSpringboot, SiFlutter, SiDart, SiJavascript,
  SiMysql, SiPostman, SiCplusplus,
  SiIntellijidea, SiAndroidstudio, SiGit, SiHibernate
} from 'react-icons/si';
import { FaGraduationCap, FaBook, FaCode } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

/* ─── Config ────────────────────────────────────────────────────────────── */
const LC_USERNAME = 'abhishek8770';
const LC_PROFILE = `https://leetcode.com/u/${LC_USERNAME}/`;
const GFG_PROFILE = 'https://www.geeksforgeeks.org/profile/abhishek8770';
const RESUME_URL = 'https://docs.google.com/document/d/16JACdImI-6EhzDh6PH_-mr-u87kRGkIX/view';

const ROLES = ['Software Engineer', 'Backend Developer', 'Flutter Developer', 'Full‑Stack Builder', 'Problem Solver'];

const SELECTED_REPOS = ['prime-project', 'Finance-Tracker', 'SIT', 'VOYA', 'TIC-_TAC-_TOE', 'Shulte-Game'];

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
    desc: 'Database-driven e-commerce site built with Java Servlets, JSP, and MySQL simulating a real-world luxury brand store with full admin features.',
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

const SKILLS = [
  {
    category: 'Languages',
    items: [
      { name: 'Java', icon: <img src="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" alt="Java" className="w-6 h-6" />, pct: 90 },
      { name: 'Dart', icon: <SiDart className="text-[#00B4AB]" />, pct: 82 },
      { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" />, pct: 75 },
      { name: 'C++', icon: <SiCplusplus className="text-[#00599C]" />, pct: 72 },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    items: [
      { name: 'Spring Boot', icon: <SiSpringboot className="text-[#6DB33F]" />, pct: 88 },
      { name: 'Flutter', icon: <SiFlutter className="text-[#02569B]" />, pct: 83 },
      { name: 'Hibernate', icon: <SiHibernate className="text-[#59666C]" />, pct: 78 },
      { name: 'REST APIs', icon: <FaCode className="text-[#FFC839]" />, pct: 90 },
    ],
  },
  {
    category: 'Tools & Platforms',
    items: [
      { name: 'Git', icon: <SiGit className="text-[#F05032]" />, pct: 85 },
      { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" />, pct: 80 },
      { name: 'Postman', icon: <SiPostman className="text-[#FF6C37]" />, pct: 82 },
      { name: 'VS Code', icon: <VscCode className="text-[#007ACC]" />, pct: 88 },
      { name: 'IntelliJ', icon: <SiIntellijidea className="text-[#000000]" />, pct: 80 },
      { name: 'Android Studio', icon: <SiAndroidstudio className="text-[#3DDC84]" />, pct: 76 },
    ],
  },
];

const EDUCATION = [
  { degree: 'B.Tech in Computer Science & Engineering', school: 'Bansal Institute of Science & Technology, Bhopal', year: '2022 – 2026', score: 'CGPA: 8.57', icon: <FaGraduationCap className="text-[#FFC839]" /> },
  { degree: 'XII (MP Board)', school: 'Adarsh Narmada Higher Secondary School, Gangeo', year: '2021 – 2022', score: '91.00%', icon: <FaBook className="text-[#FFC839]" /> },
  { degree: 'X (MP Board)', school: 'Adarsh Narmada Higher Secondary School, Gangeo', year: '2019 – 2020', score: '94.75%', icon: <FaBook className="text-[#FFC839]" /> },
];

const ACHIEVEMENTS = [
  { icon: <Trophy size={28} />, value: '8.57', label: 'CGPA', sub: 'B.Tech CSE · Top Academic Performer' },
  { icon: <Code2 size={28} />, value: '350+', label: 'DSA Problems', sub: 'LeetCode + GeeksforGeeks' },
  { icon: <Award size={28} />, value: '91%', label: 'Class XII', sub: 'MP Board · Distinction' },
  { icon: <Award size={28} />, value: '94.75%', label: 'Class X', sub: 'MP Board · Outstanding Score' },
  { icon: <Layers size={28} />, value: '6+', label: 'Projects Shipped', sub: 'Web · Mobile · Backend' },
  { icon: <Zap size={28} />, value: '2022', label: 'Coding Since', sub: 'Consistent learner & builder' },
];

const WHAT_I_DO = [
  { icon: <Globe size={26} />, title: 'Web Development', desc: 'Full-stack web apps with Spring Boot backends and React frontends built to scale.' },
  { icon: <Smartphone size={26} />, title: 'Mobile Apps', desc: 'Cross-platform Flutter apps with beautiful UIs and buttery-smooth performance.' },
  { icon: <Code2 size={26} />, title: 'Algorithm & DSA', desc: '350+ problems solved — bringing efficient, optimised thinking to every challenge.' },
  { icon: <Layers size={26} />, title: 'System Design', desc: 'Clean architecture, RESTful APIs, Hibernate ORM, and scalable backend systems.' },
];

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Contact'];

/* ─── Types ─────────────────────────────────────────────────────────────── */
interface GHRepo {
  name: string; html_url: string; language: string | null;
  stargazers_count: number; forks_count: number; homepage: string | null;
}
interface LCStats {
  totalSolved: number; easySolved: number; mediumSolved: number; hardSolved: number;
  totalQuestions: number; totalEasy: number; totalMedium: number; totalHard: number;
}

/* ─── Component ─────────────────────────────────────────────────────────── */
function App() {
  const [activeSection, setActiveSection] = useState('');
  const [copied, setCopied] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [repos, setRepos] = useState<GHRepo[]>([]);
  const [reposLoading, setReposLoading] = useState(true);
  const [lcStats, setLcStats] = useState<LCStats | null>(null);

  // Loading & UX state
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Typewriter
  const [typeText, setTypeText] = useState('');

  // Visibility triggers
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [lcVisible, setLcVisible] = useState(false);
  const [countersStarted, setCountersStarted] = useState(false);
  const [dsaCount, setDsaCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);

  // Refs
  const observerRef = useRef<IntersectionObserver | null>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const lcRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  /* ── Loading Screen ── */
  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 1600);
    return () => clearTimeout(t);
  }, []);

  /* ── Custom Cursor ── */
  useEffect(() => {
    let rafId: number;
    let tx = -200, ty = -200, cx = -200, cy = -200;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX; ty = e.clientY;
      if (dotRef.current) { dotRef.current.style.left = tx + 'px'; dotRef.current.style.top = ty + 'px'; }
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const tick = () => {
      cx = lerp(cx, tx, 0.13); cy = lerp(cy, ty, 0.13);
      if (ringRef.current) { ringRef.current.style.left = cx + 'px'; ringRef.current.style.top = cy + 'px'; }
      rafId = requestAnimationFrame(tick);
    };
    tick();

    const onEnter = () => setIsHovering(true);
    const onLeave = () => setIsHovering(false);
    document.querySelectorAll('a, button').forEach(el => { el.addEventListener('mouseenter', onEnter); el.addEventListener('mouseleave', onLeave); });

    window.addEventListener('mousemove', onMove);
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(rafId); };
  }, []);

  /* ── Scroll events ── */
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrolled / max) * 100);
      setShowBackToTop(scrolled > 500);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Typewriter ── */
  useEffect(() => {
    const tw = { ri: 0, ci: 0, deleting: false };
    let timeout: ReturnType<typeof setTimeout>;
    const tick = () => {
      const role = ROLES[tw.ri];
      if (!tw.deleting) {
        if (tw.ci < role.length) { tw.ci++; setTypeText(role.slice(0, tw.ci)); timeout = setTimeout(tick, 100); }
        else { timeout = setTimeout(() => { tw.deleting = true; tick(); }, 1800); }
      } else {
        if (tw.ci > 0) { tw.ci--; setTypeText(role.slice(0, tw.ci)); timeout = setTimeout(tick, 55); }
        else { tw.deleting = false; tw.ri = (tw.ri + 1) % ROLES.length; timeout = setTimeout(tick, 300); }
      }
    };
    timeout = setTimeout(tick, 600);
    return () => clearTimeout(timeout);
  }, []);

  /* ── Scroll Reveal ── */
  useEffect(() => {
    if (isLoading) return;
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); } }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [isLoading]);

  /* ── Nav active ── */
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

  /* ── Mobile menu ── */
  useEffect(() => { document.body.style.overflow = menuOpen ? 'hidden' : ''; }, [menuOpen]);

  /* ── Skills visibility ── */
  useEffect(() => {
    if (!skillsRef.current || skillsVisible) return;
    const obs = new IntersectionObserver(entries => { if (entries[0].isIntersecting) { setSkillsVisible(true); obs.disconnect(); } }, { threshold: 0.2 });
    obs.observe(skillsRef.current);
    return () => obs.disconnect();
  }, [skillsVisible]);

  /* ── LC stats visibility ── */
  useEffect(() => {
    if (!lcRef.current || lcVisible) return;
    const obs = new IntersectionObserver(entries => { if (entries[0].isIntersecting) { setLcVisible(true); obs.disconnect(); } }, { threshold: 0.2 });
    obs.observe(lcRef.current);
    return () => obs.disconnect();
  }, [lcVisible]);

  /* ── Counter animation ── */
  useEffect(() => {
    if (!aboutRef.current || countersStarted) return;
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setCountersStarted(true);
        const dsaTarget = lcStats?.totalSolved ?? 350;
        const start = performance.now();
        const dur = 2000;
        const animate = (now: number) => {
          const p = Math.min((now - start) / dur, 1);
          const e = 1 - Math.pow(1 - p, 3);
          setDsaCount(Math.round(e * dsaTarget));
          setProjectCount(Math.round(e * 6));
          if (p < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
        obs.disconnect();
      }
    }, { threshold: 0.4 });
    obs.observe(aboutRef.current);
    return () => obs.disconnect();
  }, [countersStarted, lcStats]);

  /* ── Fetch LeetCode ── */
  useEffect(() => {
    fetch(`https://alfa-leetcode-api.onrender.com/${LC_USERNAME}/solved`)
      .then(r => r.json())
      .then(data => {
        if (data?.solvedProblem !== undefined) {
          setLcStats({ totalSolved: data.solvedProblem, easySolved: data.easySolved ?? 0, mediumSolved: data.mediumSolved ?? 0, hardSolved: data.hardSolved ?? 0, totalQuestions: data.totalQuestions ?? 3300, totalEasy: data.totalEasy ?? 800, totalMedium: data.totalMedium ?? 1600, totalHard: data.totalHard ?? 700 });
        }
      }).catch(() => { });
  }, []);

  /* ── Fetch GitHub repos ── */
  useEffect(() => {
    fetch('https://api.github.com/users/abhishek0112cs221008/repos?per_page=100')
      .then(r => r.json())
      .then((all: GHRepo[]) => {
        const filtered = SELECTED_REPOS.map(name => all.find(r => r.name === name)).filter(Boolean) as GHRepo[];
        setRepos(filtered);
      })
      .catch(() => setRepos([]))
      .finally(() => setReposLoading(false));
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText('0112cs221008@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  /* ── 3D Tilt ── */
  const handleTilt = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    e.currentTarget.style.transform = `perspective(900px) rotateY(${x * 12}deg) rotateX(${y * -12}deg) translateY(-6px)`;
  };
  const handleTiltLeave = (e: React.MouseEvent<HTMLElement>) => { e.currentTarget.style.transform = ''; };

  const dm = darkMode;
  const bg = dm ? '#0A0A0F' : '#FFFFFF';
  const fg = dm ? '#FFFFFF' : '#1E1B22';
  const muted = dm ? '#888' : '#5A5763';
  // Glass card backgrounds (semi-transparent for glass effect)
  const glassCard = dm ? 'glass-card-dark' : 'glass-card-light';
  const cardText = dm ? '#FFFFFF' : '#1E1B22';
  const cardMuted = dm ? '#aaa' : '#5A5763';
  const statTrackBg = dm ? '#2a3040' : '#E8EAF0';
  const lcTrackBg = dm ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.09)';
  const sectionAlt = dm ? '#0d0d1e' : '#F0F4FF';

  return (
    <div style={{ backgroundColor: bg, color: fg, transition: 'background 0.3s, color 0.3s' }} id="home">

      {/* ── Custom Cursor ── */}
      <div ref={ringRef} className={`cursor-ring ${isHovering ? 'hovering' : ''}`} style={{ position: 'fixed', pointerEvents: 'none', zIndex: 9999 }} />
      <div ref={dotRef} className={`cursor-dot ${isHovering ? 'hovering' : ''}`} style={{ position: 'fixed', pointerEvents: 'none', zIndex: 10000 }} />

      {/* ── Loading Screen ── */}
      <div className={`loading-screen ${!isLoading ? 'hidden' : ''}`}>
        <div className="loading-logo-text">Abhishek<span style={{ color: '#fff' }}>.</span></div>
        <div className="loading-sub">Portfolio Loading</div>
        <div className="loading-bar-track"><div className="loading-bar-fill" /></div>
      </div>

      {/* ── Scroll Progress ── */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />

      {/* ── Mobile Menu ── */}
      <div className="fixed inset-0 z-50 flex flex-col p-8"
        style={{ backgroundColor: '#000000', color: '#FFFFFF', transform: menuOpen ? 'translateX(0)' : 'translateX(100%)', transition: 'transform 0.45s cubic-bezier(0.77,0,0.18,1)' }}>
        <div className="flex justify-end mb-16">
          <button onClick={() => setMenuOpen(false)} style={{ color: '#FFC839', fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', background: 'none', border: 'none', cursor: 'none', fontSize: '0.85rem' }}>Close ✕</button>
        </div>
        <nav className="flex flex-col gap-8">
          {NAV_LINKS.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}
              style={{ fontSize: '3rem', fontWeight: 700, color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}
              className="hover:text-[#FFC839] transition-colors">{link}</a>
          ))}
        </nav>
        <div className="mt-auto flex gap-4">
          {[{ href: 'https://github.com/abhishek0112cs221008', icon: <Github size={24} /> }, { href: 'https://linkedin.com/in/abhishek68', icon: <Linkedin size={24} /> }, { href: 'mailto:0112cs221008@gmail.com', icon: <Mail size={24} /> }]
            .map((s, i) => <a key={i} href={s.href} target={s.href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer" style={{ color: '#FFC839' }} className="hover:opacity-70 transition-opacity">{s.icon}</a>)}
        </div>
      </div>

      {/* ── Navbar ── */}
      <header className={`sticky top-0 z-40 px-6 md:px-12 py-5 flex items-center justify-between border-b-2 transition-colors duration-300 ${dm ? 'glass-nav-dark' : 'glass-nav-light'}`}
        style={{ borderBottomColor: 'rgba(255,200,57,0.3)' }}>
        <a href="#home" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 700, letterSpacing: '-0.03em', color: dm ? '#FFC839' : '#1E1B22' }}>
          Abhishek<span style={{ color: '#FFC839' }}>.</span>
        </a>
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map(link => {
            const isActive = activeSection === link.toLowerCase();
            return (
              <a key={link} href={`#${link.toLowerCase()}`} style={{ fontFamily: 'var(--font-heading)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: isActive ? '#FFC839' : muted, position: 'relative' }}>
                {link}
                {isActive && <span className="absolute -bottom-3 left-0 w-full h-0.5 rounded-full" style={{ backgroundColor: '#FFC839' }} />}
              </a>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <button onClick={() => setDarkMode(!dm)} className="p-2 rounded-lg transition-all hidden md:flex" style={{ backgroundColor: dm ? '#1E1B22' : '#F0F0F0', color: dm ? '#FFC839' : '#1E1B22', border: '2px solid #FFC839' }}>
            {dm ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a href={RESUME_URL} target="_blank" rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 btn-ghost" style={{ padding: '10px 20px', fontSize: '0.78rem', color: dm ? '#fff' : '#1E1B22', borderColor: '#FFC839' }}>
            <Download size={13} /> Resume
          </a>
          <a href="mailto:0112cs221008@gmail.com" className="hidden md:inline-flex items-center gap-2 btn-primary" style={{ padding: '10px 20px', fontSize: '0.78rem' }}>
            Hire Me <ArrowUpRight size={13} />
          </a>
          <button onClick={() => setMenuOpen(true)} className="md:hidden flex flex-col gap-1.5 p-2">
            <span className="block w-6 h-0.5" style={{ backgroundColor: fg }} />
            <span className="block w-4 h-0.5" style={{ backgroundColor: fg }} />
          </button>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative hero-grid overflow-hidden" style={{ minHeight: '95vh', display: 'flex', alignItems: 'center' }}>
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-24 text-center w-full">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase"
              style={{ fontFamily: 'var(--font-heading)', backdropFilter: 'blur(16px)', background: 'rgba(255,200,57,0.12)', border: '1px solid rgba(255,200,57,0.45)', color: '#FFC839' }}>
              <span className="w-2 h-2 animate-pulse" style={{ backgroundColor: '#FFC839' }} />
              Available for opportunities
            </div>
          </div>
          <h1 className="reveal delay-1 font-black mb-4" style={{ color: dm ? '#fff' : '#1E1B22' }}>
            Hi, I'm <span style={{ color: '#FFC839' }}>Abhishek</span>
          </h1>
          <div className="reveal delay-2 flex items-center justify-center gap-0 mb-6" style={{ fontSize: 'clamp(1.4rem, 4vw, 2.2rem)', fontFamily: 'var(--font-heading)', fontWeight: 600, color: dm ? '#ccc' : '#5A5763', minHeight: '2.5rem' }}>
            <span style={{ color: '#FFC839' }}>{typeText}</span>
            <span className="tw-cursor" />
          </div>
          <p className="reveal delay-2 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed" style={{ color: muted }}>
            Building scalable backends and beautiful interfaces with <strong style={{ color: dm ? '#fff' : '#1E1B22' }}>Java, Spring Boot, Flutter</strong> and more.
          </p>
          <div className="reveal delay-3 flex flex-wrap justify-center gap-4 mb-16">
            <a href="#projects" className="btn-primary">View My Work <ArrowUpRight size={16} /></a>
            <a href={RESUME_URL} target="_blank" rel="noreferrer" className="btn-ghost" style={{ color: dm ? '#fff' : '#1E1B22' }}><Download size={15} /> Resume</a>
            <a href="#contact" className="btn-ghost" style={{ color: dm ? '#fff' : '#1E1B22', borderColor: '#FFC839' }}>Get In Touch</a>
          </div>
          {/* Stats Row */}
          <div className="reveal delay-4 flex flex-wrap justify-center gap-8 mb-16">
            {[
              { value: lcStats ? `${lcStats.totalSolved}+` : '350+', label: 'DSA Solved' },
              { value: '6+', label: 'Projects Built' },
              { value: '8.57', label: 'CGPA' },
              { value: '3+', label: 'Years Coding' },
            ].map(s => (
              <div key={s.label} className="text-center">
                <div style={{ fontSize: '1.8rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: '#FFC839', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: muted, marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 reveal delay-5">
            {[{ href: 'https://github.com/abhishek0112cs221008', icon: <Github size={20} /> }, { href: 'https://linkedin.com/in/abhishek68', icon: <Linkedin size={20} /> }, { href: 'mailto:0112cs221008@gmail.com', icon: <Mail size={20} /> }]
              .map((s, i) => <a key={i} href={s.href} target={s.href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer" className="social-btn w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: dm ? '#1a1a26' : '#1E1B22', color: '#FFC839', border: '2px solid #FFC839' }}>{s.icon}</a>)}
          </div>
          <a href="#about" className="bounce-arrow flex justify-center mt-16" style={{ color: '#FFC839' }}>
            <ChevronDown size={28} />
          </a>
        </div>
      </section>

      {/* ── Tech Strip ── */}
      <div className="py-8 px-6" style={{ borderTop: '2px solid #FFC839', borderBottom: '2px solid #FFC839', backgroundColor: dm ? '#111118' : '#FFFAF5' }}>
        <div className="max-w-6xl mx-auto flex flex-wrap gap-3 justify-center">
          {['Java', 'Spring Boot', 'React', 'Flutter', 'MySQL', 'Hibernate', 'REST APIs', 'Git'].map(tech => (
            <span key={tech} className="text-sm font-bold px-5 py-2.5 rounded-lg transition-all hover:scale-105 hover:shadow-[0_0_16px_rgba(255,200,57,0.3)]"
              style={{ fontFamily: 'var(--font-heading)', color: dm ? '#FFC839' : '#1E1B22', backgroundColor: dm ? '#1a1a26' : '#FFFFFF', border: '2px solid #FFC839' }}>{tech}</span>
          ))}
        </div>
      </div>

      {/* ── About ── */}
      <section id="about" ref={aboutRef} className="max-w-6xl mx-auto px-6 md:px-12 py-28 scroll-mt-20 grid md:grid-cols-2 gap-20 items-start"
        style={{ borderTop: '2px solid #FFC839' }}>
        <div>
          <div className="reveal-left">
            <span className="section-label mb-5" style={{ color: dm ? '#1E1B22' : '#FFC839', backgroundColor: dm ? '#FFC839' : '#1E1B22' }}>About</span>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6" style={{ color: dm ? '#fff' : '#1E1B22' }}>
              Building scalable<br /><span style={{ color: '#FFC839' }}>software</span> at scale
            </h2>
            <p className="leading-relaxed mb-4 text-lg" style={{ color: muted }}>
              Final-year B.Tech student at BIST, Bhopal. I build full-stack products — from robust Java backends to smooth React frontends and polished Flutter apps.
            </p>
            <p className="leading-relaxed mb-8 text-lg" style={{ color: muted }}>
              Passionate about clean architecture, system design, and solving challenging algorithmic problems. Always learning, always shipping.
            </p>
          </div>
          {/* What I Do */}
          <div className="reveal-left delay-2 grid grid-cols-2 gap-3 mb-8">
            {WHAT_I_DO.map(w => (
              <div key={w.title} className={`whatido-card ${glassCard} p-4`} style={{ border: '1px solid rgba(255,200,57,0.25)' }}>
                <div style={{ color: '#FFC839', marginBottom: 8 }}>{w.icon}</div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.85rem', color: cardText, marginBottom: 4 }}>{w.title}</div>
                <div style={{ fontSize: '0.75rem', color: cardMuted, lineHeight: 1.5 }}>{w.desc}</div>
              </div>
            ))}
          </div>
          <div className="reveal-left delay-3 flex gap-3 flex-wrap">
            <a href={LC_PROFILE} target="_blank" rel="noreferrer" className="btn-primary"><Code2 size={16} /> LeetCode</a>
            <a href={GFG_PROFILE} target="_blank" rel="noreferrer" className="btn-ghost" style={{ color: dm ? '#fff' : '#1E1B22' }}><Code2 size={16} /> GeeksforGeeks</a>
          </div>
        </div>
        {/* Stat cards */}
        <div className="space-y-5 pt-2">
          {[
            { label: 'DSA Problems Solved', value: countersStarted ? `${dsaCount}+` : '0+', pct: 85 },
            { label: 'Academic CGPA', value: '8.57 / 10', pct: 86 },
            { label: 'Projects Shipped', value: countersStarted ? `${projectCount}+` : '0+', pct: 75 },
          ].map((s, i) => (
            <div key={s.label} className={`reveal delay-${i + 1} ${glassCard} p-6 transition-all`}
              style={{ border: '2px solid rgba(255,200,57,0.22)' }}>
              <div className="flex justify-between items-end mb-4">
                <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#FFC839' }}>{s.label}</span>
                <span className="stat-counter-num" style={{ fontSize: '2.4rem' }}>{s.value}</span>
              </div>
              <div className="h-2 rounded-full" style={{ backgroundColor: statTrackBg }}>
                <div className="stat-bar-fill h-full rounded-full" style={{ width: countersStarted ? `${s.pct}%` : '0%', transition: 'width 1.6s cubic-bezier(0.4,0,0.2,1)' }} />
              </div>
              <div className="mt-2 text-right" style={{ fontSize: '0.72rem', fontWeight: 600, color: '#FFC839' }}>{s.pct}%</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Skills ── */}
      <section id="skills" ref={skillsRef as React.RefObject<HTMLElement>} className="py-20 scroll-mt-20" style={{ borderTop: '2px solid #FFC839', backgroundColor: sectionAlt }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="mb-12 reveal">
            <span className="section-label mb-4" style={{ color: dm ? '#1E1B22' : '#FFFFFF', backgroundColor: dm ? '#FFC839' : '#1E1B22' }}>Skills</span>
            <h2 className="font-bold" style={{ color: dm ? '#fff' : '#1E1B22' }}>Tools & Technologies</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {SKILLS.map((group, gi) => (
              <div key={group.category} className={`reveal delay-${gi + 1} ${glassCard} p-7`}
                style={{ border: '2px solid rgba(255,200,57,0.2)' }}>
                <h3 style={{ fontSize: '0.7rem', fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: dm ? '#FFC839' : '#1E1B22', marginBottom: '1.5rem' }}>{group.category}</h3>
                <div className="space-y-4">
                  {group.items.map((item, ii) => (
                    <div key={item.name} className="skill-item" style={{ backgroundColor: dm ? 'rgba(255,200,57,0.06)' : 'rgba(30,27,34,0.04)', padding: '10px 14px', borderRadius: 10, border: dm ? 'none' : '1px solid rgba(255,200,57,0.2)' }}>
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-3">
                          <span style={{ fontSize: '1.3rem', display: 'flex' }}>{item.icon}</span>
                          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: cardText, fontFamily: 'var(--font-heading)' }}>{item.name}</span>
                        </div>
                        <span style={{ fontSize: '0.7rem', color: '#FFC839', fontWeight: 600 }}>{item.pct}%</span>
                      </div>
                      <div className="skill-progress-track">
                        <div className="skill-progress-fill" style={{ width: skillsVisible ? `${item.pct}%` : '0%', transitionDelay: `${ii * 0.1}s` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="max-w-6xl mx-auto px-6 md:px-12 py-20 scroll-mt-20" style={{ borderTop: '2px solid #FFC839' }}>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 reveal">
          <div>
            <span className="section-label mb-4" style={{ color: dm ? '#1E1B22' : '#FFFFFF', backgroundColor: dm ? '#FFC839' : '#1E1B22' }}>Selected Work</span>
            <h2 className="font-bold" style={{ color: dm ? '#fff' : '#1E1B22' }}>Projects & Products</h2>
          </div>
          <a href="https://github.com/abhishek0112cs221008" target="_blank" rel="noreferrer"
            className="link-underline text-sm font-bold px-4 py-2 rounded-lg self-start md:self-auto"
            style={{ color: '#fff', backgroundColor: dm ? '#1a1a26' : '#1E1B22', border: '2px solid #FFC839', fontFamily: 'var(--font-heading)' }}>
            View all on GitHub <Github size={14} />
          </a>
        </div>
        {reposLoading && (
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map(n => <div key={n} className="animate-pulse rounded-2xl" style={{ height: 220, backgroundColor: dm ? '#1a1a26' : '#f0f0f0' }} />)}
          </div>
        )}
        {!reposLoading && (
          <div className="grid md:grid-cols-2 gap-6">
            {repos.map((repo, ri) => {
              const meta = REPO_META[repo.name] ?? {};
              const liveUrl = meta.live || repo.homepage || null;
              return (
                <article key={repo.name} className={`reveal delay-${(ri % 4) + 1} project-card-3d flex flex-col p-0`}
                  style={{ backgroundColor: '#050508', color: '#FFFFFF', position: 'relative', overflow: 'hidden', transition: 'transform 0.15s ease, box-shadow 0.3s ease' }}
                  onMouseMove={handleTilt} onMouseLeave={handleTiltLeave}>
                  {/* Ghost project number */}
                  <div style={{ position: 'absolute', top: -8, right: 16, fontFamily: 'var(--font-heading)', fontSize: '6.5rem', fontWeight: 900, color: 'rgba(255,200,57,0.07)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none', letterSpacing: '-0.05em' }}>
                    {String(ri + 1).padStart(2, '0')}
                  </div>
                  {/* Top gold accent bar */}
                  <div style={{ height: 5, background: 'linear-gradient(90deg, #FFC839, #FFE082, #FFC839)', flexShrink: 0 }} />
                  <div className="flex flex-col flex-1 p-6">
                    {/* Top row: label + stars */}
                    <div className="flex items-start justify-between mb-5">
                      <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', backgroundColor: '#FFC839', color: '#1E1B22', padding: '5px 10px', borderRadius: 0, display: 'inline-block' }}>{meta.label ?? repo.language ?? 'Project'}</span>
                      <div className="flex items-center gap-3">
                        {repo.stargazers_count > 0 && <span className="flex items-center gap-1 text-xs" style={{ color: '#666' }}><Star size={11} /> {repo.stargazers_count}</span>}
                        {repo.forks_count > 0 && <span className="flex items-center gap-1 text-xs" style={{ color: '#666' }}><GitFork size={11} /> {repo.forks_count}</span>}
                      </div>
                    </div>
                    {/* Title */}
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: '#FFC839', marginBottom: '0.65rem', lineHeight: 1.2, textTransform: 'capitalize' }}>
                      {repo.name.replace(/[-_]+/g, ' ')}
                    </h3>
                    {/* Description */}
                    <p style={{ fontSize: '0.84rem', color: '#bbb', lineHeight: 1.7, flexGrow: 1, marginBottom: '1.25rem' }}>{meta.desc ?? repo.name}</p>
                    {/* Divider */}
                    <div style={{ height: 1, background: 'rgba(255,200,57,0.18)', marginBottom: '1rem' }} />
                    {/* Bottom row */}
                    <div className="flex items-center justify-between">
                      {repo.language
                        ? <div className="flex items-center gap-2">
                          <span style={{ width: 8, height: 8, backgroundColor: '#FFC839', display: 'inline-block' }} />
                          <span style={{ fontSize: '0.75rem', color: '#888', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>{repo.language}</span>
                        </div>
                        : <div />}
                      <div className="flex items-center gap-2 ml-auto">
                        <a href={repo.html_url} target="_blank" rel="noreferrer"
                          style={{ display: 'flex', alignItems: 'center', padding: '7px 10px', backgroundColor: '#FFC839', color: '#1E1B22', borderRadius: 0, transition: 'opacity 0.2s' }}>
                          <Github size={15} />
                        </a>
                        {liveUrl && (
                          <a href={liveUrl} target="_blank" rel="noreferrer"
                            style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '7px 14px', backgroundColor: '#FFC839', color: '#1E1B22', borderRadius: 0, fontSize: '0.8rem', fontWeight: 700, fontFamily: 'var(--font-heading)', transition: 'opacity 0.2s' }}>
                            Visit <ArrowUpRight size={13} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* ── Achievements ── */}
      <section className="py-20 scroll-mt-20" style={{ borderTop: '2px solid #FFC839', backgroundColor: sectionAlt }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="mb-12 reveal">
            <span className="section-label mb-4" style={{ color: dm ? '#1E1B22' : '#FFFFFF', backgroundColor: dm ? '#FFC839' : '#1E1B22' }}>Recognition</span>
            <h2 className="font-bold" style={{ color: dm ? '#fff' : '#1E1B22' }}>Achievements & Milestones</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {ACHIEVEMENTS.map((a, i) => (
              <div key={a.label} className={`reveal-scale delay-${i + 1} achievement-card ${glassCard} p-6`}
                style={{ border: '2px solid rgba(255,200,57,0.2)' }}>
                <div style={{ color: '#FFC839', marginBottom: 12 }}>{a.icon}</div>
                <div className="stat-counter-num" style={{ fontSize: '2rem', marginBottom: 2 }}>{a.value}</div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.95rem', color: cardText, marginBottom: 4 }}>{a.label}</div>
                <div style={{ fontSize: '0.72rem', color: cardMuted, lineHeight: 1.5 }}>{a.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Coding Intelligence ── */}
      <section ref={lcRef as React.RefObject<HTMLElement>} className="py-20 scroll-mt-20" style={{ borderTop: '2px solid #FFC839' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="mb-12 reveal">
            <span className="section-label mb-4" style={{ color: dm ? '#1E1B22' : '#FFFFFF', backgroundColor: dm ? '#FFC839' : '#1E1B22' }}>Coding Intelligence</span>
            <h2 className="font-bold" style={{ color: dm ? '#fff' : '#1E1B22' }}>Algorithm & Problem Solving</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* LeetCode card */}
            <div className={`reveal-left ${glassCard} p-8`} style={{ border: '2px solid rgba(255,200,57,0.2)' }}>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.2rem', color: '#FFC839' }}>LeetCode</div>
                  <a href={LC_PROFILE} target="_blank" rel="noreferrer" style={{ fontSize: '0.75rem', color: '#888' }}>@{LC_USERNAME}</a>
                </div>
                <div className="stat-counter-num" style={{ fontSize: '2.8rem' }}>{lcStats?.totalSolved ?? '350'}+</div>
              </div>
              {lcStats && (
                <div className="space-y-4">
                  {[
                    { label: 'Easy', solved: lcStats.easySolved, total: lcStats.totalEasy, cls: 'lc-easy', color: '#00C774' },
                    { label: 'Medium', solved: lcStats.mediumSolved, total: lcStats.totalMedium, cls: 'lc-medium', color: '#FFC839' },
                    { label: 'Hard', solved: lcStats.hardSolved, total: lcStats.totalHard, cls: 'lc-hard', color: '#FF4757' },
                  ].map(stat => (
                    <div key={stat.label}>
                      <div className="flex justify-between mb-1.5">
                        <span style={{ fontSize: '0.8rem', fontWeight: 600, color: stat.color, fontFamily: 'var(--font-heading)' }}>{stat.label}</span>
                        <span style={{ fontSize: '0.8rem', color: cardMuted }}>{stat.solved} / {stat.total}</span>
                      </div>
                      <div className="lc-bar-track" style={{ background: lcTrackBg }}>
                        <div className={`lc-bar-fill ${stat.cls}`} style={{ width: lcVisible && stat.total > 0 ? `${(stat.solved / stat.total) * 100}%` : '0%', transitionDelay: '0.2s' }} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {!lcStats && (
                <div className="space-y-4">
                  {['Easy', 'Medium', 'Hard'].map(l => <div key={l} className="h-4 rounded animate-pulse" style={{ backgroundColor: '#2a2a3a' }} />)}
                </div>
              )}
            </div>
            {/* GFG + Stats */}
            <div className="space-y-5">
              <div className={`reveal-right ${glassCard} p-7`} style={{ border: '2px solid rgba(255,200,57,0.2)' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.1rem', color: '#2E8B57', marginBottom: 6 }}>GeeksforGeeks</div>
                <p style={{ fontSize: '0.86rem', color: cardMuted, marginBottom: 16, lineHeight: 1.6 }}>Active contributor solving problems across data structures, dynamic programming, graphs, and more.</p>
                <a href={GFG_PROFILE} target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.82rem', display: 'inline-flex' }}>
                  View Profile <ArrowUpRight size={14} />
                </a>
              </div>
              <div className="reveal-right delay-2 grid grid-cols-2 gap-4">
                {[{ val: '2022', label: 'Coding Since' }, { val: 'DSA', label: 'Core Strength' }, { val: 'Java', label: 'Primary Lang' }, { val: 'Daily', label: 'Practice Habit' }].map(s => (
                  <div key={s.label} className={`${glassCard} p-5 text-center`} style={{ border: dm ? '1px solid rgba(255,200,57,0.2)' : '1px solid rgba(255,200,57,0.3)' }}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.2rem', color: '#FFC839' }}>{s.val}</div>
                    <div style={{ fontSize: '0.7rem', color: cardMuted, marginTop: 2, letterSpacing: '0.08em' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Education ── */}
      <section id="education" className="py-20 scroll-mt-20" style={{ borderTop: '2px solid #FFC839', backgroundColor: sectionAlt }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="mb-12 reveal">
            <span className="section-label mb-4" style={{ color: dm ? '#1E1B22' : '#FFFFFF', backgroundColor: dm ? '#FFC839' : '#1E1B22' }}>Education</span>
            <h2 className="font-bold" style={{ color: dm ? '#fff' : '#1E1B22' }}>Academic Background</h2>
          </div>
          <div className="relative pl-10 space-y-6">
            <div className="timeline-connector" />
            {EDUCATION.map((edu, i) => (
              <div key={i} className={`reveal delay-${i + 1} flex gap-5`}>
                <div className="timeline-dot mt-1" />
                <div className={`flex-1 ${glassCard} p-6`} style={{ border: '2px solid rgba(255,200,57,0.2)' }}>
                  <div className="flex justify-between items-start gap-4 flex-wrap">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">{edu.icon}<h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: dm ? '#FFC839' : '#1E1B22', fontSize: '1rem', margin: 0 }}>{edu.degree}</h3></div>
                      <p style={{ fontSize: '0.85rem', color: cardMuted, marginBottom: 4 }}>{edu.school}</p>
                      <p style={{ fontSize: '0.75rem', color: cardMuted }}>{edu.year}</p>
                    </div>
                    <span className="px-3 py-1.5 rounded-lg text-sm font-bold shrink-0" style={{ fontFamily: 'var(--font-heading)', backgroundColor: '#FFC839', color: '#1E1B22' }}>{edu.score}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-24 scroll-mt-20" style={{ background: dm ? 'linear-gradient(135deg, #000 0%, #0a0a0f 50%, #111118 100%)' : 'linear-gradient(135deg, #1E1B22 0%, #0a0a0f 100%)', borderTop: '2px solid #FFC839' }}>
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <div className="reveal">
            <span className="section-label mb-5" style={{ color: '#1E1B22', backgroundColor: '#FFC839' }}>Get In Touch</span>
            <h2 className="font-black mb-4" style={{ color: '#FFC839' }}>Let's work together</h2>
            <p className="text-lg mb-10 max-w-lg mx-auto" style={{ color: '#aaa' }}>
              I'm always interested in new projects, exciting ideas, and great opportunities. Let's build something amazing.
            </p>
          </div>
          <div className="reveal delay-1">
            <button onClick={copyEmail}
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl mb-10 font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_16px_48px_rgba(255,200,57,0.4)]"
              style={{ backgroundColor: '#FFC839', color: '#1E1B22', border: 'none', cursor: 'none', boxShadow: '0 8px 32px rgba(255,200,57,0.3)', fontFamily: 'var(--font-heading)' }}>
              <span className="font-mono text-base">0112cs221008@gmail.com</span>
              <span className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#1E1B22', color: '#FFC839' }}>
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </span>
            </button>
          </div>
          <div className="reveal delay-2 flex justify-center gap-4 mb-12">
            {[
              { href: 'https://github.com/abhishek0112cs221008', icon: <Github size={22} />, label: 'GitHub' },
              { href: 'https://linkedin.com/in/abhishek68', icon: <Linkedin size={22} />, label: 'LinkedIn' },
              { href: 'mailto:0112cs221008@gmail.com', icon: <Mail size={22} />, label: 'Email' },
            ].map((s, i) => (
              <a key={i} href={s.href} target={s.href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer"
                className="social-btn flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: '#FFC839', color: '#1E1B22', boxShadow: '0 4px 16px rgba(255,200,57,0.3)' }}>{s.icon}</div>
                <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888', fontFamily: 'var(--font-heading)' }}>{s.label}</span>
              </a>
            ))}
          </div>
          <div className="reveal delay-3">
            <a href={RESUME_URL} target="_blank" rel="noreferrer" className="btn-ghost mb-8 inline-flex" style={{ color: '#FFC839', borderColor: '#FFC839' }}>
              <Download size={15} /> Download Resume
            </a>
          </div>
          <p className="reveal delay-4" style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#FFC839', fontFamily: 'var(--font-heading)', opacity: 0.7 }}>
            © 2026 Abhishek Patel · All Rights Reserved
          </p>
        </div>
      </section>

      {/* ── Back To Top ── */}
      <button className={`back-to-top ${showBackToTop ? 'show' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <ArrowUp size={20} />
      </button>
    </div>
  );
}

export default App;
