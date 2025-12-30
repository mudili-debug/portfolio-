
import React, { useState, useEffect, useMemo } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Code2, 
  FileText, 
  MapPin, 
  Terminal, 
  Database, 
  Layout, 
  Cpu, 
  Rocket, 
  ChevronRight,
  BookOpen,
  Trophy,
  Youtube,
  Globe,
  Menu,
  X,
  ArrowLeft,
  BrainCircuit,
  Printer,
  Download
} from 'lucide-react';
import ThemeToggle from './components/ThemeToggle';
import SkillBar from './components/SkillBar';
import SectionHeading from './components/SectionHeading';
import AIChatAssistant from './components/AIChatAssistant';
import { 
  PERSONAL_DETAILS, 
  SKILLS, 
  PROJECTS, 
  ACHIEVEMENTS 
} from './constants';
import { Theme, Page } from './types';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === Theme.DARK);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  
  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Views
  const HomeView = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold tracking-widest uppercase mb-6">
              <Rocket className="w-3 h-3" />
              Available for Internships
            </div>
            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight mb-6">
              Crafting scalable <span className="gradient-text">software solutions</span> for tomorrow.
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              I'm <span className="font-semibold text-slate-900 dark:text-white">{PERSONAL_DETAILS.name}</span>, a Computer Science student at Vignan University. Focused on engineering high-impact systems while preparing for <span className="underline decoration-blue-500 decoration-2 underline-offset-4 font-semibold text-slate-900 dark:text-white">GATE 2025</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => navigateTo(Page.PROJECTS)}
                className="flex items-center justify-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-xl font-bold transition-all hover:translate-y-[-2px] hover:shadow-lg active:scale-95"
              >
                Explore Projects
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-4 px-4">
                <a href={PERSONAL_DETAILS.socials.github} target="_blank" rel="noopener" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href={PERSONAL_DETAILS.socials.linkedin} target="_blank" rel="noopener" className="text-slate-500 hover:text-blue-600 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href={PERSONAL_DETAILS.socials.youtube} target="_blank" rel="noopener" className="text-slate-500 hover:text-red-500 transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-blue-100 dark:bg-blue-900/10 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
      </header>

      <section className="py-24 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12">
          <div className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-700 hover:border-blue-500 transition-colors group">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 dark:text-white">Clean Engineering</h3>
            <p className="text-slate-600 dark:text-slate-400">Deep expertise in C++, Python, and Django for building robust backends.</p>
          </div>
          <div className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-700 hover:border-blue-500 transition-colors group">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 dark:text-white">Scalable Architecture</h3>
            <p className="text-slate-600 dark:text-slate-400">Experience with Docker, Redis, and Celery to handle real-world traffic.</p>
          </div>
          <div className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-700 hover:border-blue-500 transition-colors group">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
              <Rocket className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 dark:text-white">Future Ready</h3>
            <p className="text-slate-600 dark:text-slate-400">GATE 2025 Aspirant focusing on advanced Theory of Computation and OS.</p>
          </div>
        </div>
      </section>
    </div>
  );

  const AboutView = () => (
    <div className="pt-32 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title="About My Journey" subtitle="Bridging the gap between academic theory and industry reality." />
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8 text-lg text-slate-600 dark:text-slate-400">
          <p>{PERSONAL_DETAILS.objective}</p>
          <p>I am a disciplined student at Vignan University with a track record of building clones and custom applications that solve everyday problems. My approach is centered on "Clean > Functional > Scalable".</p>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Education & Core Focus</h3>
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
              <p className="font-bold text-slate-900 dark:text-white">B.Tech in Computer Science (2022-2026)</p>
              <p className="text-sm">Vignan University, Andhra Pradesh</p>
              <p className="mt-4 text-sm text-blue-600 font-semibold italic">Focusing on GATE 2025 preparation alongside development.</p>
            </div>
          </div>
        </div>
        <div className="relative group">
          <img src="https://picsum.photos/seed/about-prasad/800/1000" className="rounded-3xl shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700" alt="Mudili Bhavani Prasad" />
          <div className="absolute inset-0 bg-blue-600/10 rounded-3xl group-hover:bg-transparent transition-colors"></div>
        </div>
      </div>
    </div>
  );

  const SkillsView = () => (
    <div className="pt-32 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title="Technical Arsenal" subtitle="A comprehensive breakdown of my engineering capabilities." />
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {(['Programming', 'Web', 'Databases', 'Tools', 'Other'] as const).map(category => (
          <div key={category} className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-blue-600 p-2 rounded-lg text-white">
                {category === 'Programming' && <Code2 className="w-6 h-6" />}
                {category === 'Web' && <Globe className="w-6 h-6" />}
                {category === 'Databases' && <Database className="w-6 h-6" />}
                {category === 'Tools' && <Terminal className="w-6 h-6" />}
                {category === 'Other' && <BrainCircuit className="w-6 h-6" />}
              </div>
              <h3 className="text-xl font-bold dark:text-white">{category}</h3>
            </div>
            <div className="space-y-6">
              {SKILLS.filter(s => s.category === category).map(skill => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ProjectsView = () => (
    <div className="pt-32 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title="Portfolio of Work" subtitle="Engineered with precision, deployed with confidence." />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all group">
            <div className="aspect-[16/9] overflow-hidden">
              <img src={project.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={project.title} />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 dark:text-white">{project.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.techStack.map(t => (
                  <span key={t} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold rounded-full">{t}</span>
                ))}
              </div>
              <ul className="space-y-3">
                {project.features.map((f, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <span className="text-blue-600">●</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const AchievementsView = () => (
    <div className="pt-32 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title="Impact & Recognition" subtitle="Major milestones in academics and extracurriculars." />
      <div className="grid md:grid-cols-2 gap-8">
        {ACHIEVEMENTS.map((a, i) => (
          <div key={i} className="flex gap-6 p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 group hover:border-blue-500 transition-colors">
            <div className="shrink-0 w-14 h-14 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-2xl flex items-center justify-center">
              <Trophy className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 dark:text-white">{a.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{a.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-20 p-12 bg-slate-900 rounded-[3rem] text-white flex flex-col md:flex-row gap-12 items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-4">MBP Knowledge Hub</h2>
          <p className="text-slate-400 max-w-lg">Content creation centered around Computer Science engineering, assignments, and lifestyle for the modern student.</p>
        </div>
        <a href={PERSONAL_DETAILS.socials.youtube} target="_blank" rel="noopener" className="flex items-center gap-3 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105">
          <Youtube /> Subscribe on YouTube
        </a>
      </div>
    </div>
  );

  const ContactView = () => (
    <div className="pt-32 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title="Let's Connect" subtitle="Ready to talk tech? Drop a line and I'll get back to you promptly." />
      <div className="grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="p-8 bg-blue-600 rounded-[2rem] text-white">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 opacity-70" />
                <span className="font-medium">{PERSONAL_DETAILS.email}</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 opacity-70" />
                <span className="font-medium">{PERSONAL_DETAILS.phone}</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 opacity-70" />
                <span className="font-medium">{PERSONAL_DETAILS.location}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-4 p-4 justify-center">
            <a href={PERSONAL_DETAILS.socials.linkedin} target="_blank" rel="noopener" className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Linkedin className="w-5 h-5" /></a>
            <a href={PERSONAL_DETAILS.socials.github} target="_blank" rel="noopener" className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all"><Github className="w-5 h-5" /></a>
            <a href={PERSONAL_DETAILS.socials.leetcode} target="_blank" rel="noopener" className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-yellow-600 hover:text-white transition-all"><Terminal className="w-5 h-5" /></a>
          </div>
        </div>
        <div className="lg:col-span-3 bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-xl">
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Message sent! Prasad will contact you soon."); }}>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Name</label>
                <input required type="text" className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 transition-all dark:text-white" placeholder="Jane Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Email</label>
                <input required type="email" className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 transition-all dark:text-white" placeholder="jane@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Subject</label>
              <input required type="text" className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 transition-all dark:text-white" placeholder="Project Inquiry" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Message</label>
              <textarea required rows={5} className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 transition-all dark:text-white" placeholder="Your message here..."></textarea>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2">
              Send via MBP Life Lab <Rocket className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  const ResumeView = () => (
    <div className="pt-32 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 print:pt-0 print:pb-0 print:max-w-none">
      <div className="mb-8 flex justify-between items-center print:hidden">
        <SectionHeading title="Professional Resume" subtitle="A formal documentation of my expertise and achievements." />
        <div className="flex gap-4">
          <button 
            onClick={() => window.print()} 
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg active:scale-95"
          >
            <Printer className="w-5 h-5" /> Print / Save PDF
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 p-8 sm:p-16 rounded-[2rem] shadow-2xl border border-slate-100 dark:border-slate-800 print:shadow-none print:border-none print:p-0 dark:print:bg-white dark:print:text-black">
        {/* Resume Header */}
        <div className="text-center border-b pb-12 mb-12 dark:border-slate-800 print:border-slate-300">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white dark:print:text-black mb-4 uppercase tracking-tighter">{PERSONAL_DETAILS.name}</h1>
          <p className="text-lg text-blue-600 font-bold mb-4 uppercase tracking-widest">{PERSONAL_DETAILS.role}</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500 dark:text-slate-400 dark:print:text-slate-600">
            <span className="flex items-center gap-2"><Mail className="w-4 h-4" /> {PERSONAL_DETAILS.email}</span>
            <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> {PERSONAL_DETAILS.phone}</span>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {PERSONAL_DETAILS.location}</span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="md:col-span-1 space-y-10">
            <section>
              <h3 className="text-sm font-black text-slate-900 dark:text-white dark:print:text-black uppercase tracking-[0.2em] mb-4 border-b pb-2 dark:border-slate-800 print:border-slate-300">Technical Skills</h3>
              <div className="space-y-4">
                {SKILLS.map(skill => (
                  <div key={skill.name}>
                    <p className="text-xs font-bold text-slate-800 dark:text-slate-200 dark:print:text-black mb-1">{skill.name}</p>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden print:bg-slate-200">
                      <div className="bg-blue-600 h-full" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-sm font-black text-slate-900 dark:text-white dark:print:text-black uppercase tracking-[0.2em] mb-4 border-b pb-2 dark:border-slate-800 print:border-slate-300">Education</h3>
              <div className="space-y-1">
                <p className="font-bold text-slate-900 dark:text-white dark:print:text-black">B.Tech - CSE</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 dark:print:text-slate-700">{PERSONAL_DETAILS.university}</p>
                <p className="text-xs text-blue-600 font-bold">2022 - 2026 (Pursuing)</p>
              </div>
            </section>

            <section>
              <h3 className="text-sm font-black text-slate-900 dark:text-white dark:print:text-black uppercase tracking-[0.2em] mb-4 border-b pb-2 dark:border-slate-800 print:border-slate-300">Languages</h3>
              <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400 dark:print:text-slate-700">
                <p>• Telugu (Native)</p>
                <p>• English (Intermediate)</p>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="md:col-span-2 space-y-10">
            <section>
              <h3 className="text-sm font-black text-slate-900 dark:text-white dark:print:text-black uppercase tracking-[0.2em] mb-4 border-b pb-2 dark:border-slate-800 print:border-slate-300">Profile</h3>
              <p className="text-slate-600 dark:text-slate-400 dark:print:text-slate-800 leading-relaxed italic">{PERSONAL_DETAILS.objective}</p>
            </section>

            <section>
              <h3 className="text-sm font-black text-slate-900 dark:text-white dark:print:text-black uppercase tracking-[0.2em] mb-4 border-b pb-2 dark:border-slate-800 print:border-slate-300">Projects</h3>
              <div className="space-y-8">
                {PROJECTS.map((project, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-slate-900 dark:text-white dark:print:text-black">{project.title}</h4>
                      <span className="text-[10px] font-black bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded dark:print:bg-slate-200">PROJECT {i+1}</span>
                    </div>
                    <p className="text-xs text-blue-600 font-bold mb-3">{project.techStack.join(' • ')}</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 dark:text-slate-400 dark:print:text-slate-800">
                      {project.features.map((f, fi) => <li key={fi}>{f}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-sm font-black text-slate-900 dark:text-white dark:print:text-black uppercase tracking-[0.2em] mb-4 border-b pb-2 dark:border-slate-800 print:border-slate-300">Achievements</h3>
              <div className="space-y-4">
                {ACHIEVEMENTS.map((a, i) => (
                  <div key={i}>
                    <p className="text-sm font-bold text-slate-800 dark:text-slate-200 dark:print:text-black mb-1">• {a.title}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 dark:print:text-slate-600 ml-4">{a.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );

  const currentView = useMemo(() => {
    switch (currentPage) {
      case Page.ABOUT: return <AboutView />;
      case Page.SKILLS: return <SkillsView />;
      case Page.PROJECTS: return <ProjectsView />;
      case Page.ACHIEVEMENTS: return <AchievementsView />;
      case Page.CONTACT: return <ContactView />;
      case Page.RESUME: return <ResumeView />;
      default: return <HomeView />;
    }
  }, [currentPage]);

  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900 transition-colors duration-300 bg-slate-50 dark:bg-slate-950">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 print:hidden ${isScrolled ? 'glass border-b border-slate-200 dark:border-slate-800 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div onClick={() => navigateTo(Page.HOME)} className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform shadow-lg shadow-blue-500/30">
              M
            </div>
            <span className="text-xl font-bold tracking-tight dark:text-white hidden sm:block">
              Mudili <span className="text-blue-600">Bhavani Prasad</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600 dark:text-slate-300">
            {Object.values(Page).filter(p => p !== Page.RESUME).map((p) => (
              <button 
                key={p} 
                onClick={() => navigateTo(p)}
                className={`capitalize hover:text-blue-600 transition-colors ${currentPage === p ? 'text-blue-600' : ''}`}
              >
                {p}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle theme={theme} toggle={toggleTheme} />
            <button 
              onClick={() => navigateTo(Page.RESUME)}
              className={`hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg active:scale-95 ${currentPage === Page.RESUME ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-500/20'}`}
            >
              {currentPage === Page.RESUME ? <ArrowLeft className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
              {currentPage === Page.RESUME ? 'Back' : 'Resume'}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 dark:text-white">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-white dark:bg-slate-950 transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden pt-24 px-6`}>
        <div className="flex flex-col gap-6 text-2xl font-bold">
          {Object.values(Page).map((p) => (
            <button key={p} onClick={() => navigateTo(p)} className="capitalize text-left flex items-center justify-between dark:text-white border-b border-slate-100 dark:border-slate-900 pb-4">
              {p}
              <ChevronRight className="w-6 h-6 text-blue-600" />
            </button>
          ))}
        </div>
      </div>

      {/* View Content */}
      <main className="min-h-[80vh]">
        {currentView}
        {currentPage !== Page.HOME && currentPage !== Page.RESUME && (
          <div className="max-w-7xl mx-auto px-4 pb-20 print:hidden">
             <button onClick={() => navigateTo(Page.HOME)} className="flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold transition-colors">
               <ArrowLeft className="w-5 h-5" /> Back to Home
             </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="py-16 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors print:hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
             <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
               <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">M</div>
               <span className="font-bold dark:text-white">MBP Portfolio</span>
             </div>
             <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs">Building scalable software for product-based companies and preparing for GATE 2025.</p>
          </div>
          <div className="flex gap-12">
            <div className="space-y-4">
              <h4 className="font-bold dark:text-white text-sm uppercase tracking-widest">Navigation</h4>
              <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                <li><button onClick={() => navigateTo(Page.HOME)}>Home</button></li>
                <li><button onClick={() => navigateTo(Page.ABOUT)}>About</button></li>
                <li><button onClick={() => navigateTo(Page.PROJECTS)}>Projects</button></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold dark:text-white text-sm uppercase tracking-widest">Social</h4>
              <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                <li><a href={PERSONAL_DETAILS.socials.linkedin}>LinkedIn</a></li>
                <li><a href={PERSONAL_DETAILS.socials.github}>GitHub</a></li>
                <li><a href={PERSONAL_DETAILS.socials.leetcode}>LeetCode</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-50 dark:border-slate-800 text-center">
          <p className="text-slate-400 dark:text-slate-500 text-xs italic">
            © {new Date().getFullYear()} Mudili Bhavani Prasad. Designed with Google-tier aesthetics and React.
          </p>
        </div>
      </footer>

      {/* Global AI Assistant */}
      <AIChatAssistant />
    </div>
  );
};

export default App;
