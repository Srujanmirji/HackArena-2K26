import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Terminal, Code2, Cpu, Globe, LucideServer, ShieldCheck, Database, Rocket, X, ArrowLeft, FileDown } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const domains = [
  { id: 'campus', name: 'Campus Solutions', icon: <Globe size={20} />, color: 'from-blue-500 to-cyan-500' },
  { id: 'edtech', name: 'EdTech', icon: <Rocket size={20} />, color: 'from-purple-500 to-pink-500' },
  { id: 'fintech', name: 'FinTech', icon: <Search size={20} />, color: 'from-orange-500 to-red-500' },
  { id: 'healthcare', name: 'Healthcare', icon: <ShieldCheck size={20} />, color: 'from-indigo-500 to-blue-500' },
  { id: 'social', name: 'Social Impact', icon: <Database size={20} />, color: 'from-green-500 to-emerald-500' },
];

const problemStatements = [
  {
    id: 1,
    title: "Unified Campus Portal",
    domain: "campus",
    difficulty: "Intermediate",
    description: "Campus services like attendance, assignments, and notices are scattered across different systems. Develop a single web platform integrating all academic and administrative services.",
    deliverables: ["Student & faculty dashboards", "Attendance tracking", "Assignment submission", "Notices & announcements", "Result management"],
    file: "/problem-statements/Campus Solution1.docx"
  },
  {
    id: 2,
    title: "Student Placement Readiness Portal",
    domain: "campus",
    difficulty: "Intermediate",
    description: "Students lack structured preparation and tracking for placements. Build a portal that helps students prepare for placements with tracking, tests, and insights.",
    deliverables: ["Mock tests & quizzes", "Progress tracking dashboard", "Company-wise preparation modules", "Resume builder", "Analytics & suggestions"],
    file: "/problem-statements/Campus Solutions.docx"
  },
  {
    id: 3,
    title: "Collaborative Virtual Study Rooms",
    domain: "edtech",
    difficulty: "Advanced",
    description: "Students lack focused, distraction-free collaborative environments for studying together online. Create a web platform where students can join virtual study rooms, collaborate in real-time, and track productivity.",
    deliverables: ["Room creation & joining system", "Real-time chat and discussion", "Screen sharing / whiteboard", "Pomodoro timer & study tracking", "Leaderboard or productivity stats"],
    file: "/problem-statements/Edtech.docx"
  },
  {
    id: 4,
    title: "Online Coding Assessment Platform",
    domain: "edtech",
    difficulty: "Advanced",
    description: "Conducting fair and scalable coding assessments with proper evaluation and plagiarism detection is challenging. Build a web-based coding platform where users can take coding tests, get auto-evaluated, and view rankings.",
    deliverables: ["Code editor (multi-language support)", "Test case-based auto evaluation", "Plagiarism detection (logic-based)", "Timer-based exams", "Leaderboard & performance analytics"],
    file: "/problem-statements/Edtech1.docx"
  },
  {
    id: 5,
    title: "Subscription Tracker & Auto-Cancel System",
    domain: "fintech",
    difficulty: "Advanced",
    description: "Users often forget recurring subscriptions (OTT, apps, services), leading to unnecessary expenses. Develop a web app that detects recurring payments from transaction history and allows users to manage or cancel subscriptions easily.",
    deliverables: ["Upload/import transaction data", "AI/logic-based recurring payment detection", "Subscription dashboard", "Reminder notifications", "Cancel subscription simulation"],
    file: "/problem-statements/FinTech.docx"
  },
  {
    id: 6,
    title: "Doctor Availability & Teleconsultation Platform",
    domain: "healthcare",
    difficulty: "Advanced",
    description: "Patients struggle to find available doctors quickly and access consultations remotely. Create a web platform where patients can check doctor availability and consult via chat or video.",
    deliverables: ["Doctor listing & availability status", "Appointment booking", "Chat/video consultation (WebRTC)", "Notifications & reminders", "Patient feedback system"],
    file: "/problem-statements/Healthcar1.docx"
  },
  {
    id: 7,
    title: "Digital Health Record Portal",
    domain: "healthcare",
    difficulty: "Intermediate",
    description: "Medical records are scattered across hospitals, making it difficult for patients to access their history. Develop a centralized web platform where patients can securely store and access prescriptions, reports, and medical history.",
    deliverables: ["Secure login for patients/doctors", "Upload/view medical records", "Categorization (reports, prescriptions)", "Search & filter history", "Role-based access"],
    file: "/problem-statements/Healthcare.docx"
  },
  {
    id: 8,
    title: "Local Farmer-to-Consumer Marketplace",
    domain: "social",
    difficulty: "Intermediate",
    description: "Farmers often don't get fair prices due to middlemen, while consumers pay more. Build a web marketplace connecting farmers directly with consumers to ensure fair pricing.",
    deliverables: ["Farmer product listings", "Direct ordering system", "Price comparison", "Delivery tracking", "Reviews & ratings"],
    file: "/problem-statements/Social Impac1.docx"
  },
  {
    id: 9,
    title: "Community Issue Reporting System",
    domain: "social",
    difficulty: "Intermediate",
    description: "Citizens face delays in resolving local issues due to lack of a transparent reporting system. Create a platform where users can report issues with location and track resolution status.",
    deliverables: ["Issue reporting with images & location", "Status tracking (pending/resolved)", "Authority dashboard", "Upvote/prioritize issues", "Notifications"],
    file: "/problem-statements/Social Impact.docx"
  },
  {
    id: 10,
    title: "Multi-Bank Dashboard Web App",
    domain: "fintech",
    difficulty: "Advanced",
    description: "Manage multiple bank accounts and wallets from one place. Build a web app that connects multiple accounts, views consolidated financial data, and provides smart insights into spending behavior.",
    deliverables: ["Secure login & account linking", "Unified dashboard", "Expense categorization", "Graphs & insights", "Alerts for unusual spending"],
    file: "/problem-statements/fintech 3.docx"
  }
];

const ProblemStatements = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('all');
  const [selectedPS, setSelectedPS] = useState(null);

  const filteredPS = problemStatements.filter((ps) => {
    const matchesSearch = ps.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          ps.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDomain = selectedDomain === 'all' || ps.domain === selectedDomain;
    return matchesSearch && matchesDomain;
  });

  return (
    <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 min-h-screen relative overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-primary/20 rounded-full blur-[80px] sm:blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-secondary/20 rounded-full blur-[80px] sm:blur-[120px] -z-10 animate-pulse" style={{animationDelay: '1s'}} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-primary/10 rounded-full blur-[100px] sm:blur-[150px] -z-20" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="text-center mb-8 sm:mb-16 relative"
        >
          <div className="inline-flex justify-center items-center p-3 sm:p-5 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl sm:rounded-2xl ring-1 ring-primary/40 shadow-[0_0_30px_rgba(255,59,59,0.3)] mb-4 sm:mb-8 transform hover:scale-110 transition-transform duration-500">
            <Code2 size={32} className="sm:hidden text-primary animate-pulse" />
            <Code2 size={48} className="hidden sm:block text-primary animate-pulse" />
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black mb-3 sm:mb-6 font-display tracking-tight uppercase">
            <span className="text-white">Problem</span> <br className="md:hidden" />
            <span className="sm:ml-4 md:ml-0 text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-300% text-glow inline-block">
              Statements
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-xl mb-2 sm:mb-4 px-2">
            Choose your mission. Solve the unsolvable. <span className="text-primary font-bold">Innovate</span> for a better tomorrow.
          </p>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4 sm:mt-8"></div>
        </motion.div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-10 sm:mb-16">
          <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group mb-8 px-1"
          >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 sm:pl-6 flex items-center pointer-events-none">
                    <Search size={20} className="text-primary/70" />
                </div>
                <input
                    type="text"
                    placeholder="Search mission objectives..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="block w-full pl-12 sm:pl-16 pr-4 sm:pr-6 py-3.5 sm:py-5 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl focus:border-primary/50 text-white text-sm sm:text-lg placeholder-gray-500 outline-none transition-all duration-300 shadow-xl font-mono"
                />
              </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3"
          >
            <button
              onClick={() => setSelectedDomain('all')}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 border ${selectedDomain === 'all' ? 'bg-primary border-primary text-white shadow-[0_0_20px_rgba(255,59,59,0.3)]' : 'bg-white/5 border-white/10 text-gray-400 hover:border-primary/30 hover:text-white'}`}
            >
              All Domains
            </button>
            {domains.map((domain) => (
              <button
                key={domain.id}
                onClick={() => setSelectedDomain(domain.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 border flex items-center gap-2 ${selectedDomain === domain.id ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]' : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/30 hover:text-white'}`}
              >
                {domain.icon}
                {domain.name}
              </button>
            ))}
          </motion.div>
        </div>

        {/* PS Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredPS.map((ps, index) => (
              <motion.div
                key={ps.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedPS(ps)}
                className="group cursor-pointer relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-500 hover:border-primary/30 h-full flex flex-col"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br transition-opacity duration-500 opacity-10 group-hover:opacity-20 blur-3xl -z-10 rounded-full ${domains.find(d => d.id === ps.domain)?.color || 'from-primary to-secondary'}`} />
                
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${domains.find(d => d.id === ps.domain)?.color || 'from-primary to-secondary'} shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    {React.cloneElement(domains.find(d => d.id === ps.domain)?.icon || <Terminal />, { size: 24, className: "text-white" })}
                  </div>
                  <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border border-white/10 bg-white/5 ${ps.difficulty === 'Expert' ? 'text-red-400 border-red-400/20' : ps.difficulty === 'Advanced' ? 'text-orange-400 border-orange-400/20' : 'text-green-400 border-green-400/20'}`}>
                    {ps.difficulty}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors leading-tight">
                  {ps.title}
                </h3>
                
                <p className="text-gray-400 text-sm sm:text-base mb-6 line-clamp-3 group-hover:text-gray-300 transition-colors">
                  {ps.description}
                </p>

                <div className="mt-auto flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-4 transition-all uppercase tracking-widest">
                  View Mission <ArrowLeft size={16} className="rotate-180" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredPS.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-center py-20"
          >
            <div className="inline-flex items-center justify-center p-6 bg-white/5 rounded-full mb-6 ring-1 ring-white/10">
              <Search size={40} className="text-gray-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-widest">No matching missions found</h3>
            <p className="text-gray-500">Try adjusting your search or filters.</p>
          </motion.div>
        )}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedPS && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPS(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-background border border-primary/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(255,59,59,0.2)] flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-6 sm:p-10 border-b border-white/10 relative">
                <button
                  onClick={() => setSelectedPS(null)}
                  className="absolute right-6 top-6 p-2 bg-white/5 hover:bg-primary rounded-xl text-gray-400 hover:text-white transition-all ring-1 ring-white/10 hover:ring-primary z-20"
                >
                  <X size={24} />
                </button>
                
                <div className="flex items-center gap-4 mb-4">
                   <div className={`p-3 rounded-xl bg-gradient-to-br ${domains.find(d => d.id === selectedPS.domain)?.color || 'from-primary to-secondary'}`}>
                    {React.cloneElement(domains.find(d => d.id === selectedPS.domain)?.icon || <Terminal />, { size: 28, className: "text-white" })}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-primary uppercase tracking-widest block mb-1">Mission Details</span>
                    <span className="text-gray-400 text-sm font-medium">{domains.find(d => d.id === selectedPS.domain)?.name} Domain</span>
                  </div>
                </div>
                
                <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                  {selectedPS.title}
                </h2>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-10 custom-scrollbar">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
                  <div className="lg:col-span-2 space-y-8">
                    <div>
                      <h4 className="text-primary font-black uppercase tracking-[0.2em] text-xs mb-4 flex items-center gap-2">
                        <Terminal size={14} /> Objective Overview
                      </h4>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {selectedPS.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-primary font-black uppercase tracking-[0.2em] text-xs mb-4 flex items-center gap-2">
                        <Code2 size={14} /> Critical Deliverables
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {selectedPS.deliverables.map((item, i) => (
                          <li key={i} className="flex items-center gap-3 bg-white/5 border border-white/5 p-4 rounded-xl group hover:border-primary/30 transition-colors">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <span className="text-gray-300 font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <a 
                      href={selectedPS.file} 
                      download 
                      className="w-full py-4 bg-primary text-white font-black uppercase tracking-widest rounded-xl hover:bg-red-600 transition-all shadow-[0_0_20px_rgba(255,59,59,0.3)] hover:shadow-[0_0_30px_rgba(255,59,59,0.5)] flex items-center justify-center gap-3 group"
                    >
                      <FileDown size={22} className="group-hover:scale-110 transition-transform" />
                      Download Doc
                    </a>
                    <p className="text-[10px] text-gray-500 text-center uppercase tracking-widest leading-relaxed">
                      Download the full problem statement specification for detailed requirements.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProblemStatements;
