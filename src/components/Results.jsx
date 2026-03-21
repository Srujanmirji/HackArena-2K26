import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Users, Trophy, X, Mail, GraduationCap, Building2, Terminal, CheckCircle2, User, BadgeCheck, Phone, MapPin } from 'lucide-react';
import { shortlistedTeams } from '../constants/shortlistedTeams';
import { teamDetails } from '../constants/teamDetails';

const Results = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTeam, setSelectedTeam] = useState(null);

  const filteredTeams = shortlistedTeams.filter((team) =>
    team.teamName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    team.leaderName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    team.id.toString().includes(searchTerm)
  );

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
            <Trophy size={32} className="sm:hidden text-primary animate-pulse" />
            <Trophy size={48} className="hidden sm:block text-primary animate-pulse" />
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black mb-3 sm:mb-6 font-display tracking-tight uppercase">
            <span className="text-white">Round 1</span> <br className="md:hidden" />
            <span className="sm:ml-4 md:ml-0 text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-300% text-glow inline-block">
              Shortlisted Teams
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-xl mb-2 sm:mb-4 px-2">
            The arena has spoken. <span className="text-primary font-bold">{shortlistedTeams.length}</span> elite squads advance to the ultimate showdown.
          </p>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4 sm:mt-8"></div>
        </motion.div>

        {/* Crazy Search Bar */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto mb-10 sm:mb-20 relative group px-1"
        >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 sm:pl-6 flex items-center pointer-events-none">
                  <Terminal size={20} className="sm:hidden text-primary animate-pulse" />
                  <Terminal size={24} className="hidden sm:block text-primary animate-pulse" />
              </div>
              <input
                  type="text"
                  placeholder="Search team or leader..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-12 sm:pl-16 pr-4 sm:pr-6 py-3.5 sm:py-5 bg-background border-2 border-primary/20 rounded-xl sm:rounded-2xl focus:border-primary text-white text-sm sm:text-lg placeholder-gray-500 outline-none transition-all duration-300 shadow-[0_0_20px_rgba(255,59,59,0.1)] focus:shadow-[0_0_30px_rgba(255,59,59,0.3)] font-mono"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-primary/50 hidden md:block border border-primary/20 px-2 py-1 rounded">SYS_SEARCH</div>
            </div>
        </motion.div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <AnimatePresence>
                {filteredTeams.map((team, index) => (
                    <motion.div
                        key={team.id}
                        layout
                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: -50 }}
                        transition={{ duration: 0.4, delay: index * 0.05, type: "spring" }}
                        onClick={() => setSelectedTeam(team)}
                        className="cursor-pointer bg-background/80 backdrop-blur-xl p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl flex flex-col transition-all duration-500 group box-glow relative overflow-hidden h-full"
                    >
                        {/* Background flare on hover */}
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary/5 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                        {/* Top Accent Line */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                        <div className="flex justify-between items-start mb-3 sm:mb-6 relative z-10">
                            <h3 className="text-lg sm:text-2xl font-black text-white group-hover:text-primary transition-colors flex flex-col leading-tight">
                                {team.teamName}
                            </h3>
                            <span className="text-sm sm:text-lg font-mono font-bold text-primary/50 group-hover:text-secondary group-hover:text-glow transition-all">
                                #{team.id.toString().padStart(2, '0')}
                            </span>
                        </div>
                        
                        <div className="mt-auto pt-3 sm:pt-6 border-t border-primary/10 group-hover:border-primary/30 flex items-center gap-3 sm:gap-4 relative z-10 transition-colors duration-300">
                            <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <Users size={16} className="sm:hidden" />
                                <Users size={20} className="hidden sm:block" />
                            </div>
                            <div>
                                <p className="text-[10px] sm:text-xs text-primary/70 uppercase tracking-widest font-bold mb-0.5 sm:mb-1">Commander</p>
                                <p className="text-sm sm:text-base text-gray-200 group-hover:text-white transition-colors font-semibold">
                                    {team.leaderName}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>

            {filteredTeams.length === 0 && (
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    className="col-span-full text-center py-32"
                >
                    <div className="inline-flex items-center justify-center p-8 bg-red-500/10 rounded-full mb-6 ring-1 ring-red-500/30">
                        <X size={48} className="text-red-500" />
                    </div>
                    <h3 className="text-3xl font-black text-white mb-3 tracking-widest uppercase">Target Not Found</h3>
                    <p className="text-red-400 font-mono text-lg">ERR_NO_MATCH: "{searchTerm}"</p>
                </motion.div>
            )}
        </div>
      </div>

      {/* Team Details Modal with Unstop-style Layout */}
      <AnimatePresence>
        {selectedTeam && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6 opacity-100">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedTeam(null)}
              className="absolute inset-0 bg-background/90"
            />
            
            {/* Modal Content - Two Column Layout */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
              className="relative w-full max-w-6xl h-[95vh] sm:h-[90vh] md:h-[80vh] bg-background border border-primary/30 rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col md:flex-row box-glow shadow-[0_0_50px_rgba(255,59,59,0.2)]"
            >
              {/* Left Sidebar */}
              <div className="w-full md:w-[280px] lg:w-[320px] shrink-0 border-b md:border-b-0 md:border-r border-white/10 bg-black/40 p-4 sm:p-6 md:p-8 flex flex-row md:flex-col items-center gap-4 md:gap-0 overflow-y-auto custom-scrollbar relative z-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 shrink-0 rounded-full overflow-hidden bg-white/5 border-2 border-primary/30 md:mb-5 relative group shadow-[0_0_20px_rgba(255,59,59,0.1)]">
                  <img src={`https://api.dicebear.com/7.x/shapes/svg?seed=${encodeURIComponent(selectedTeam.teamName)}&backgroundColor=1a1a1a&radius=50`} alt="Avatar" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                
                <div className="flex flex-col items-center md:items-center flex-1 md:flex-none">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-black text-white text-center mb-1 md:mb-3 leading-tight text-glow">{selectedTeam.teamName}</h2>
                  
                  <div className="bg-green-500/10 text-green-400 px-3 sm:px-5 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1.5 sm:gap-2 md:mb-8 border border-green-500/20 shadow-[0_0_10px_rgba(34,197,94,0.1)]">
                    <CheckCircle2 size={14} className="sm:hidden" />
                    <CheckCircle2 size={16} className="hidden sm:block" /> Complete
                  </div>
                </div>
                
                <div className="w-full space-y-2 hidden md:block">
                  <div className="bg-primary/10 text-primary px-4 py-3.5 rounded-xl font-bold flex items-center gap-3 border border-primary/20 cursor-pointer shadow-[0_0_15px_rgba(255,59,59,0.15)] transition-all">
                    <User size={18} /> Profile
                  </div>
                </div>
              </div>

              {/* Right Content Area (Members List) */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-10 custom-scrollbar bg-background/50 relative">
                {/* Circuit Grid Background inside modal */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none -z-10" />

                <div className="flex justify-between items-center mb-4 sm:mb-8 sticky top-0 bg-background/80 backdrop-blur-md py-3 sm:py-4 z-20 -mt-4 sm:-mt-10 pt-4 sm:pt-10 border-b border-white/5">
                  <h3 className="text-base sm:text-xl font-bold font-mono text-gray-300 flex items-center gap-2 sm:gap-3">
                    <Terminal size={16} className="sm:hidden text-primary" />
                    <Terminal size={20} className="hidden sm:block text-primary" />
                    Squad Operatives
                  </h3>
                  <button
                    onClick={() => setSelectedTeam(null)}
                    className="p-1.5 sm:p-2 bg-white/5 hover:bg-primary rounded-lg sm:rounded-xl text-gray-400 hover:text-white transition-colors ring-1 ring-white/10 hover:ring-primary shadow-lg hover:shadow-[0_0_15px_rgba(255,59,59,0.5)] flex-shrink-0"
                  >
                    <X size={20} className="sm:hidden" />
                    <X size={24} className="hidden sm:block" />
                  </button>
                </div>

                {(() => {
                  const detailKey = Object.keys(teamDetails).find(
                    k => k.toLowerCase().replace(/\s/g, '') === selectedTeam.teamName.toLowerCase().replace(/\s/g, '')
                  );
                  const details = detailKey ? teamDetails[detailKey] : null;

                  return details ? (
                    <div className="space-y-4 sm:space-y-6">
                      {details.map((member, idx) => (
                        <motion.div 
                          key={idx} 
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="bg-black/60 border border-white/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-primary/30 transition-all duration-300 relative overflow-hidden group hover:bg-white/5 flex flex-row gap-3 sm:gap-6 items-start"
                        >
                          {/* Accent line on left */}
                          <div className={`absolute left-0 top-0 bottom-0 w-1 ${member.role === 'Team Leader' ? 'bg-secondary' : 'bg-primary/50'} group-hover:w-2 transition-all`}></div>

                          {/* Avatar */}
                          <div className="w-12 h-12 sm:w-20 sm:h-20 shrink-0 rounded-full bg-white/5 border-2 border-white/10 overflow-hidden ml-2 shadow-lg">
                            <img src={`https://api.dicebear.com/7.x/micah/svg?seed=${encodeURIComponent(member.name)}&backgroundColor=transparent`} alt={member.name} className="w-full h-full object-cover scale-110" />
                          </div>

                          <div className="flex-1 w-full relative z-10">
                            <span className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-[10px] uppercase tracking-widest font-black inline-block mb-1.5 sm:mb-3 ${member.role === 'Team Leader' ? 'bg-secondary/20 text-secondary border border-secondary/30 shadow-[0_0_10px_rgba(255,123,0,0.2)]' : 'bg-primary/10 text-primary border border-primary/20'}`}>
                              {member.role === 'Team Leader' ? 'Team Leader' : 'Team Member'}
                            </span>
                            
                            <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-4">
                              <h3 className="text-base sm:text-2xl font-bold text-white group-hover:text-primary transition-colors">
                                {member.name}
                              </h3>
                              <BadgeCheck size={16} className="sm:hidden text-green-500 shrink-0" />
                              <BadgeCheck size={20} className="hidden sm:block text-green-500 shrink-0" />
                            </div>
                            
                            <div className="space-y-3">
                              <div className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                <Building2 size={14} className={`sm:hidden ${member.role === 'Team Leader' ? 'text-secondary' : 'text-primary'} shrink-0 mt-0.5`} />
                                <Building2 size={16} className={`hidden sm:block ${member.role === 'Team Leader' ? 'text-secondary' : 'text-primary'} shrink-0 mt-0.5`} />
                                <span className="line-clamp-1 sm:line-clamp-2" title={member.organization}>{member.organization}</span>
                              </div>
                              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                <Mail size={14} className={`sm:hidden ${member.role === 'Team Leader' ? 'text-secondary' : 'text-primary'} shrink-0`} />
                                <Mail size={16} className={`hidden sm:block ${member.role === 'Team Leader' ? 'text-secondary' : 'text-primary'} shrink-0`} />
                                <a href={`mailto:${member.email}`} className="hover:text-white transition-colors truncate break-all" title={member.email}>
                                  {member.email}
                                </a>
                              </div>
                              
                              <div className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors mt-2 sm:mt-4">
                                <GraduationCap size={14} className={`sm:hidden ${member.role === 'Team Leader' ? 'text-secondary' : 'text-primary'} shrink-0 mt-0.5`} />
                                <GraduationCap size={16} className={`hidden sm:block ${member.role === 'Team Leader' ? 'text-secondary' : 'text-primary'} shrink-0 mt-0.5`} />
                                <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                                  <span className="text-[10px] sm:text-xs bg-white/5 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">College Student</span>
                                  <span className="text-gray-600 hidden sm:inline">|</span>
                                  <span className="text-[10px] sm:text-xs bg-white/5 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded max-w-[140px] sm:max-w-[200px] truncate" title={member.course}>{member.course}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-20 px-4 h-full flex flex-col items-center justify-center">
                      <div className="inline-flex justify-center items-center p-6 bg-primary/10 rounded-full ring-1 ring-primary/30 mb-6 relative">
                        <Users size={48} className="text-primary animate-pulse" />
                        <div className="absolute inset-0 rounded-full border-t-2 border-primary animate-spin"></div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2 font-mono uppercase tracking-wider">Classification: Classified</h3>
                      <p className="text-gray-400 max-w-md mx-auto">Detailed operative logs for this squad have not yet been decrypted from the mainframe.</p>
                    </div>
                  );
                })()}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Results;
