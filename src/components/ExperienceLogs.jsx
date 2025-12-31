import { motion } from 'framer-motion'

const experiences = [
  {
    id: 1,
    company: "HoliProjects Internet Pvt. Ltd.",
    period: "2024 – Present",
    role: "Software Developer",
    logo: "/images/logos/HOLITHEMESLOGO.png",
    color: "#00B4D8",
    achievements: [
      "Click to Chat WhatsApp Plugin",
      "Increased active installs by 20%",
      "Reduced load time by 30%",
      "Improved code stability"
    ]
  },
  {
    id: 2,
    company: "SabariyaTech [Freelancer]",
    period: "2025 – Present",
    role: "Software Developer",
    logo: "/images/logos/SABARIYATECHLOGO.png",
    color: "#1E3A8A",
    achievements: [
      "MERN applications development",
      "API integrations and database design",
      "Improved scalability and Performance optimization"
    ]
  },
  {
    id: 3,
    company: "InnoByte Services",
    period: "2023",
    role: "Web Developer Intern",
    logo: "/images/logos/INNOBYTELOGO.png",
    color: "#059669",
    achievements: [
      "Built responsive client websites",
      "Booking systems integration",
      "CMS customization"
    ]
  },
  {
    id: 4,
    company: "10000 Coders",
    period: "2024",
    role: "MERN Stack Intern",
    logo: "/images/logos/10000CODERSLOGO.png",
    color: "#DC2626",
    achievements: [
      "Full-stack apps with authentication",
      "Agile workflows and Git practices",
      "Team collaboration"
    ]
  }
]

const ExperienceLogs = ({ isActive }) => {
  return (
    <div className="min-h-full flex flex-col relative py-2">
      
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-4 sm:grid-cols-8 grid-rows-4 sm:grid-rows-8 h-full w-full">
          {[...Array(32)].map((_, i) => (
            <motion.div
              key={i}
              className="border border-hud-primary/20"
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 3, delay: i * 0.05, repeat: Infinity }}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 mb-2 sm:mb-4 text-hud-primary font-mono text-xs sm:text-sm relative z-10 flex-shrink-0">
        <div className="w-2 h-2 bg-hud-primary rounded-full animate-pulse"></div>
        <span className="tracking-wider">EXPERIENCE_LOGS</span>
        <div className="flex-1 h-px bg-gradient-to-r from-hud-primary/50 to-transparent ml-2 sm:ml-4"></div>
      </div>

      <div className="flex-1 min-h-0 overflow-x-auto md:overflow-x-auto overflow-y-auto md:overflow-y-hidden pb-2 relative z-10 scrollbar-thin">
        <div className="flex flex-col md:flex-row gap-2 sm:gap-4 justify-center md:min-w-max px-2">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="flex flex-col items-center gap-2 sm:gap-4 flex-shrink-0">
              {/* Company Logo */}
              <motion.div 
                className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl flex items-center justify-center border-2 bg-gradient-to-br from-black/60 to-black/30 backdrop-blur-sm shadow-2xl overflow-hidden"
                style={{ 
                  borderColor: exp.color, 
                  backgroundColor: `${exp.color}15`,
                  boxShadow: `0 0 20px ${exp.color}40, inset 0 2px 0 rgba(255,255,255,0.1)`
                }}
                initial={{ opacity: 0, y: -20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  boxShadow: `0 0 30px ${exp.color}60, inset 0 2px 0 rgba(255,255,255,0.2)`
                }}
              >
                <img 
                  src={exp.logo} 
                  alt={exp.company}
                  className="w-8 h-8 sm:w-16 sm:h-16 object-contain"
                />
                <div className="absolute inset-0 rounded-xl animate-pulse" style={{ backgroundColor: `${exp.color}10` }} />
              </motion.div>
              
              {/* Experience Card */}
              <motion.div
                className="w-full md:w-[270px] lg:w-[320px] h-[320px] sm:h-[360px] border border-hud-border rounded-lg p-3 sm:p-6 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm relative overflow-hidden group shadow-2xl flex flex-col"
                initial={{ opacity: 0, x: -30, rotateY: -15 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ 
                  borderColor: exp.color,
                  backgroundColor: `${exp.color}15`,
                  scale: 1.05,
                  rotateY: 5,
                  z: 10
                }}
                style={{
                  boxShadow: `0 0 20px ${exp.color}20, inset 0 1px 0 rgba(255,255,255,0.1)`
                }}
              >
              {/* Animated corner accents */}
              <div className="absolute top-0 left-0 w-6 sm:w-8 h-6 sm:h-8 border-l-2 border-t-2 opacity-60" style={{ borderColor: exp.color }} />
              <div className="absolute bottom-0 right-0 w-6 sm:w-8 h-6 sm:h-8 border-r-2 border-b-2 opacity-60" style={{ borderColor: exp.color }} />
              
              {/* Gradient overlay */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at top right, ${exp.color}40, transparent 70%)` }}
              />
              
              {/* Header */}
              <div className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4">
                <div className="flex-1">
                  <div className="text-xs sm:text-base font-bold text-hud-text mb-1 group-hover:text-white transition-colors leading-tight">
                    {exp.company}
                  </div>
                  <div className="text-xs sm:text-sm font-mono font-semibold" style={{ color: exp.color }}>
                    {exp.period}
                  </div>
                </div>
              </div>
              
              <div className="text-xs sm:text-sm text-hud-primary mb-2 sm:mb-4 font-mono bg-black/30 px-2 sm:px-3 py-1 sm:py-2 rounded border border-hud-border/30">
                <span className="text-hud-muted">ROLE:</span> {exp.role}
              </div>
              
              <div className="flex-1 space-y-1 sm:space-y-2 overflow-y-auto scrollbar-thin min-h-0">
                {exp.achievements.map((achievement, i) => (
                  <motion.div 
                    key={i} 
                    className="text-xs sm:text-sm text-hud-muted flex items-start gap-2 sm:gap-3 group-hover:text-hud-text transition-colors"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.15) + (i * 0.1) }}
                  >
                    <span className="text-hud-primary mt-0.5 font-bold">▸</span>
                    <span className="leading-relaxed">{achievement}</span>
                  </motion.div>
                ))}
              </div>

              {/* Status indicator */}
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full animate-pulse" style={{ backgroundColor: exp.color }} />
              </div>
            </motion.div>
          </div>
          ))}
        </div>
      </div>

      <motion.div 
        className="mt-2 sm:mt-4 text-xs font-mono text-hud-primary border-t border-hud-border pt-2 sm:pt-3 relative z-10 flex items-center gap-2 sm:gap-4 flex-shrink-0"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span>&gt; {experiences.length} ENTRIES_LOADED</span>
        <div className="flex-1 h-px bg-gradient-to-r from-hud-primary/30 to-transparent"></div>
        <span className="text-hud-muted hidden sm:inline">SCROLL_ENABLED</span>
        <span className="text-hud-muted sm:hidden">SCROLL</span>
      </motion.div>

    </div>
  )
}

export default ExperienceLogs