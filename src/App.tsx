import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Github, Linkedin, Mail, Copy, Check } from 'lucide-react';
import profileImage from './assets/profile.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('0112cs221008@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const menuItems = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CONTACT', href: '#contact' }
  ];

  return (
    <div className="min-h-screen bg-[#d2d9d9] text-black font-sans selection:bg-[#ff3d00] selection:text-white overflow-x-hidden relative" id="home">

      {/* Grain Texture Overlay */}
      <div className="grain-overlay"></div>

      {/* Navigation Overlay */}
      <div className={`fixed inset-0 bg-[#ff3d00] z-50 transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end p-6 md:p-8">
          <button onClick={() => setIsMenuOpen(false)} className="text-white hover:rotate-90 transition-transform">
            <X size={48} />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full space-y-6 md:space-y-8 text-white">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-5xl md:text-8xl font-black font-serif hover:text-black hover:italic transition-all relative group"
            >
              {item.name}
              <span className="absolute -left-8 md:-left-12 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-2xl md:text-4xl transition-opacity">→</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Main Container */}
      <div className="max-w-[1920px] mx-auto p-4 md:p-8 relative">

        {/* Header */}
        <header className="flex justify-between items-center border-b-2 border-black pb-4 mb-8 md:mb-12 sticky top-0 bg-[#d2d9d9]/90 backdrop-blur-sm z-40 pt-4 px-2 -mx-2">
          <div className="flex items-center gap-4">
            {/* <div className="font-serif italic font-bold text-xl md:text-2xl">F.D</div> */}
            <div className="hidden md:flex flex-col text-[0.6rem] font-bold leading-tight font-sans border-l border-black pl-2">
              {/* <span>VOL. 26</span>
              <span>EST. 2026</span> */}
            </div>
          </div>
          <button onClick={() => setIsMenuOpen(true)} className="hover:scale-110 transition-transform p-2">
            <Menu size={32} />
          </button>
        </header>

        {/* Hero Section */}
        <main className="relative min-h-[85vh] flex flex-col justify-between mb-16 md:mb-24">

          {/* Top Stickers */}
          <div className="absolute top-4 left-4 md:top-10 md:left-32 z-20 animate-float-slow">
            <div className="bg-white/40 backdrop-blur-md border border-white/60 rounded-full px-4 py-2 md:px-6 md:py-2 transform -rotate-6 md:-rotate-12 shadow-xl">
              <span className="font-serif italic font-bold text-lg md:text-xl">Software Engineer</span>
            </div>
          </div>

          <div className="absolute top-20 right-4 md:top-20 md:right-32 z-20 animate-float-delayed">
            <div className="bg-[#ff3d00] text-white rounded-sm px-3 py-1 transform rotate-3 shadow-lg">
              <span className="font-black font-sans text-xs md:text-sm tracking-widest">AVAIL. NOW</span>
            </div>
          </div>

          {/* Massive Title - Responsive Typography */}
          <div className="relative z-10 text-center leading-none select-none pointer-events-none mt-12 md:mt-0">
            <h1 className="text-[19vw] md:text-[18vw] font-black tracking-tighter text-[#ff3d00] mix-blend-multiply opacity-90 transition-transform duration-700 hover:scale-[1.02]">
              ABHISHEK
            </h1>
            {/* Split "PATEL" or keep overlapping effect */}
            <h1 className="text-[19vw] md:text-[18vw] font-black tracking-tighter text-outline-black md:text-[#ff3d00] md:mix-blend-multiply -mt-[6vw] md:-mt-[8vw] relative z-20 ml-[5vw] md:ml-0">
              PATEL
            </h1>
          </div>

          {/* Portrait Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none opacity-90 mt-24 md:mt-0">
            <div className="w-[85vw] h-[95vw] md:w-[35vw] md:h-[45vw] bg-neutral-300 grayscale contrast-125 brightness-110 rounded-sm shadow-2xl overflow-hidden relative border-4 border-white transform rotate-2">
              {/* Image Placeholder */}
              <div className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-80" style={{ backgroundImage: `url(${profileImage})` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>

          {/* Bottom Elements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end relative z-30 mt-12 md:mt-0 px-2">
            <div className="space-y-4 hidden md:block">
              {menuItems.map((item) => (
                <a key={item.name} href={item.href} className="block font-black text-xl hover:text-[#ff3d00] hover:translate-x-2 transition-all w-max font-serif italic">
                  {item.name}
                </a>
              ))}
            </div>

            <div className="text-right md:text-right">
              {/* Mobile Barcode */}
              <div className="md:hidden flex justify-end mb-4 opacity-70">
                <div className="h-8 w-32 bg-[repeating-linear-gradient(90deg,black,black_2px,transparent_2px,transparent_4px)]"></div>
              </div>

              <h2 className="text-4xl md:text-6xl font-black uppercase leading-[0.9] transform md:-rotate-2 origin-bottom-right">
                <span className="text-[#ff3d00]">DESIGNING</span><br />
                <span className="bg-black text-white px-2">EXPERIENCES</span><br />
                THAT PEOPLE LOVE <span className="inline-block animate-spin-slow text-[#ff3d00]">*</span>
              </h2>
            </div>
          </div>
        </main>

        {/* Content Sections - Newspaper Style */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t-4 border-black pt-12">

          {/* Sidebar */}
          <aside className="md:col-span-3 space-y-12" id="about">
            <div className="border-b-2 border-black pb-8">
              <h3 className="font-serif text-3xl font-bold mb-4 flex items-center gap-2">
                About Me
                <span className="text-xs bg-black text-white px-1 py-0.5 rounded-full font-sans tracking-widest">BIO</span>
              </h3>
              <p className="font-medium leading-relaxed text-justify text-lg md:text-base">
                Motivated <span className="bg-[#ff3d00] text-white px-1 font-bold transform -skew-x-6 inline-block">Software Engineering</span> undergraduate (2026) with strong foundations in Java, SQL, and Data Structures & Algorithms. I build scalable backend systems and pixel-perfect digital experiences.
              </p>
            </div>

            <div className="border-b-2 border-black pb-8">
              <h3 className="font-serif text-3xl font-bold mb-4">Stats</h3>
              <div className="space-y-6">
                <div className="group cursor-default">
                  <div className="flex justify-between items-end mb-1">
                    <span className="font-bold text-sm bg-neutral-200 px-2 rounded-sm">DSA</span>
                    <span className="font-black text-5xl group-hover:text-[#ff3d00] transition-colors">350+</span>
                  </div>
                  <div className="w-full h-2 bg-neutral-300 rounded-full overflow-hidden">
                    <div className="h-full bg-black w-[85%]"></div>
                  </div>
                </div>
                <div className="group cursor-default">
                  <div className="flex justify-between items-end mb-1">
                    <span className="font-bold text-sm bg-neutral-200 px-2 rounded-sm">CGPA</span>
                    <span className="font-black text-5xl group-hover:text-[#ff3d00] transition-colors">8.45</span>
                  </div>
                  <div className="w-full h-2 bg-neutral-300 rounded-full overflow-hidden">
                    <div className="h-full bg-black w-[84%]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Only Barcode */}
            <div className="hidden md:block pt-12 opacity-50">
              <div className="h-12 bg-[repeating-linear-gradient(90deg,black,black_2px,transparent_2px,transparent_4px)] mb-1"></div>
              <div className="flex justify-between text-[0.6rem] font-mono tracking-widest">
                <span>000108 262026</span>
                <span>PRICE: $0.00</span>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="md:col-span-9 space-y-20">

            {/* Tech Stack Marquee */}
            <div className="overflow-hidden border-y-2 border-black py-6 bg-white rotate-1 shadow-lg mx-[-1rem] md:mx-0">
              <div className="flex gap-12 animate-marquee whitespace-nowrap font-black text-3xl uppercase text-[#ff3d00]">
                <span>Java</span> <span className="text-black">Spring Boot</span> <span>React</span> <span className="text-black">MySQL</span> <span>Flutter</span> <span className="text-black">System Design</span>
                <span>Java</span> <span className="text-black">Spring Boot</span> <span>React</span> <span className="text-black">MySQL</span> <span>Flutter</span> <span className="text-black">System Design</span>
              </div>
            </div>

            {/* Recent Work */}
            <section id="projects" className="scroll-mt-24">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-black pb-4">
                <h3 className="font-serif text-5xl md:text-7xl font-bold flex items-center gap-4">
                  Selected Work <ArrowUpRight size={48} className="text-[#ff3d00] hidden md:block" />
                </h3>
                <span className="font-mono text-sm mt-2 md:mt-0">[ 2024 - 2026 ]</span>
              </div>

              <div className="space-y-16">
                {/* Project 1 */}
                <div className="group relative border-2 border-black bg-white hover:bg-black hover:text-white transition-colors duration-500 p-6 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]">
                  <div className="absolute -top-4 right-4 md:-right-4 bg-[#ff3d00] text-white font-bold px-4 py-2 transform md:rotate-3 hidden group-hover:block transition-transform z-10 shadow-md">
                    FEATURED PROJECT
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="font-mono text-xs border border-current px-2 py-0.5 rounded-full">WEB DEV</span>
                        <div className="h-[1px] bg-current flex-1"></div>
                      </div>
                      <h4 className="text-4xl md:text-5xl font-black mb-6 uppercase leading-tight group-hover:text-[#ff3d00] transition-colors">Prime E-Commerce</h4>
                      <p className="font-serif text-xl border-l-4 border-[#ff3d00] pl-6 mb-8 leading-relaxed opacity-90">
                        Full-stack platform with secure payments, role-based auth, and analytics. Built to scale with modern architecture.
                      </p>
                      <div className="flex flex-wrap gap-3 mb-10">
                        {['Spring Boot', 'React', 'MySQL', 'REST API'].map(tag => (
                          <span key={tag} className="border border-current px-3 py-1 text-xs font-bold uppercase tracking-wider hover:bg-[#ff3d00] hover:text-white hover:border-[#ff3d00] transition-colors">{tag}</span>
                        ))}
                      </div>
                      <div className="flex gap-6">
                        <a href="https://github.com/abhishek0112cs221008" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-black text-lg hover-underline-animation">
                          CODE <Github size={20} />
                        </a>
                        <a href="#" className="inline-flex items-center gap-2 font-black text-lg hover-underline-animation text-[#ff3d00]">
                          LIVE DEMO <ArrowUpRight size={20} />
                        </a>
                      </div>
                    </div>

                    <div className="order-first md:order-last h-64 md:h-80 bg-neutral-200 border-2 border-black group-hover:border-white/20 relative overflow-hidden rounded-sm">
                      {/* Abstract Layout Preview */}
                      <div className="absolute inset-4 border border-black/10 group-hover:border-white/10 flex flex-col gap-2 p-4">
                        <div className="w-full h-8 bg-black/5 rounded"></div>
                        <div className="flex gap-2 h-full">
                          <div className="w-1/3 bg-black/5 rounded"></div>
                          <div className="w-2/3 bg-black/5 rounded"></div>
                        </div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center font-black text-6xl md:text-7xl opacity-10 -rotate-12 group-hover:text-white transition-colors">PRIME</div>
                    </div>
                  </div>
                </div>

                {/* Project 2 */}
                <div className="group relative border-2 border-black bg-white hover:bg-black hover:text-white transition-colors duration-500 p-6 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="h-64 md:h-80 bg-neutral-200 border-2 border-black group-hover:border-white/20 relative overflow-hidden rounded-sm">
                      <div className="absolute inset-0 flex items-center justify-center font-black text-6xl md:text-7xl opacity-10 rotate-12 group-hover:text-white transition-colors">$$$</div>
                      <div className="absolute bottom-4 right-4 bg-black text-white text-xs px-2 py-1 font-mono">MOBILE APP</div>
                    </div>
                    <div>
                      <h4 className="text-4xl md:text-5xl font-black mb-6 uppercase leading-tight group-hover:text-[#ff3d00] transition-colors">Expense Tracker</h4>
                      <p className="font-serif text-xl border-l-4 border-[#ff3d00] pl-6 mb-8 leading-relaxed opacity-90">
                        Offline-first mobile app for personal finance. Tracking, category analysis, and group splitting logic.
                      </p>
                      <div className="flex flex-wrap gap-3 mb-10">
                        {['Flutter', 'Dart', 'SQLite', 'Charts'].map(tag => (
                          <span key={tag} className="border border-current px-3 py-1 text-xs font-bold uppercase tracking-wider hover:bg-[#ff3d00] hover:text-white hover:border-[#ff3d00] transition-colors">{tag}</span>
                        ))}
                      </div>
                      <div className="flex gap-6">
                        <a href="https://github.com/abhishek0112cs221008" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-black text-lg hover-underline-animation">
                          CODE <Github size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer Contact */}
            <footer className="bg-black text-white p-8 md:p-20 text-center relative overflow-hidden" id="contact">
              {/* Decorative Background Text */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10 select-none overflow-hidden">
                <div className="text-[20vw] font-black leading-none text-white whitespace-nowrap absolute -top-10 left-0">HELLO</div>
                <div className="text-[20vw] font-black leading-none text-white whitespace-nowrap absolute bottom-[-5vw] right-0">HELLO</div>
              </div>

              <div className="max-w-4xl mx-auto relative z-10">
                <h2 className="font-serif text-5xl md:text-8xl font-bold mb-8 italic">Let's Create Something?</h2>
                <div className="flex justify-center gap-8 mb-12">
                  <a href="https://github.com/abhishek0112cs221008" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff3d00] hover:-translate-y-2 transition-transform duration-300"><Github size={40} /></a>
                  <a href="https://linkedin.com/in/abhishek68" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff3d00] hover:-translate-y-2 transition-transform duration-300"><Linkedin size={40} /></a>
                  <a href="mailto:0112cs221008@gmail.com" className="hover:text-[#ff3d00] hover:-translate-y-2 transition-transform duration-300"><Mail size={40} /></a>
                </div>

                <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 mb-12 cursor-pointer hover:bg-white/20 transition-all" onClick={copyToClipboard}>
                  <span className="font-mono text-sm md:text-base">0112cs221008@gmail.com</span>
                  <div className="p-2 bg-[#ff3d00] rounded-full text-white">
                    {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
                  </div>
                </div>

                <p className="text-neutral-500 uppercase tracking-widest text-xs">© 2026 Abhishek Patel</p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
