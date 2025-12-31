import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  {
    id: 1,
    name: "CLICK TO CHAT PLUGIN",
    status: "ACTIVE",
    type: "WordPress Plugin",
    description: "WhatsApp integration plugin for WordPress websites with advanced customization options and analytics.",
    logo: "/images/logos/CLICKTOCHATLOGO.gif",
    techStack: {
      frontend: ["JavaScript", "CSS3", "HTML5"],
      backend: ["PHP", "WordPress API"],
      database: ["MySQL"],
      tools: ["Git", "Composer"]
    },
    links: {
      demo: "https://wordpress.org/plugins/click-to-chat-for-whatsapp/",
      github: "#",
      case: "#"
    }
  },
  {
    id: 2,
    name: "BHADRADRI PAPIKONDALU TOURISM",
    status: "DEPLOYED",
    type: "Tourism Platform",
    description: "Complete tourism booking platform with real-time availability and integrated payment systems.",
    logo: "/images/logos/PAPIKONDALULOGO.png",
    techStack: {
      frontend: ["Next.js", "Tailwind CSS", "React"],
      backend: ["Node.js", "Express"],
      database: ["MongoDB"],
      tools: ["Vercel", "Stripe"]
    },
    links: {
      demo: "#",
      github: "#",
      case: "#"
    }
  },
  {
    id: 3,
    name: "SLSIT SKILLUP",
    status: "ACTIVE",
    type: "Educational Platform",
    description: "Skill development platform with course management and progress tracking for students.",
    logo: "/images/logos/SLSITLOGO.png",
    techStack: {
      frontend: ["React", "Material-UI"],
      backend: ["Node.js", "REST APIs"],
      database: ["PostgreSQL"],
      tools: ["Docker", "AWS"]
    },
    links: {
      demo: "#",
      github: "#",
      case: "#"
    }
  },
  {
    id: 4,
    name: "VISWA BHARATHI LAW COLLEGE",
    status: "DEPLOYED",
    type: "Educational Website",
    description: "Professional college website with admission portal and student management system.",
    logo: "/images/logos/VISWABHARATHILOGO.png",
    techStack: {
      frontend: ["WordPress", "Custom PHP"],
      backend: ["PHP", "MySQL"],
      database: ["MySQL"],
      tools: ["cPanel", "SSL"]
    },
    links: {
      demo: "#",
      github: "#",
      case: "#"
    }
  },
  {
    id: 5,
    name: "SABARIYATECH PROJECTS",
    status: "ONGOING",
    type: "Client Solutions",
    description: "Multiple client projects including e-commerce solutions and business automation tools.",
    logo: "/images/logos/SABARIYATECHLOGO.png",
    techStack: {
      frontend: ["React", "Next.js", "Vue.js"],
      backend: ["Node.js", "PHP", "Python"],
      database: ["MongoDB", "MySQL"],
      tools: ["Docker", "AWS", "Git"]
    },
    links: {
      demo: "#",
      github: "#",
      case: "#"
    }
  }
]

const ProjectSelector = ({ projects, onSelect, selectedId }) => {
  return (
    <div className="h-full flex flex-col relative">
      {/* Multi-layer background depth */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="grid grid-cols-16 grid-rows-12 h-full w-full">
          {[...Array(192)].map((_, i) => (
            <div key={i} className="border border-hud-primary/15" />
          ))}
        </div>
      </div>
      
      {/* Panel base layer with soft inner shadow */}
      <div className="absolute inset-0 bg-gradient-to-br from-hud-panel/5 via-transparent to-hud-bg/20" 
           style={{ boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.3)' }} />
      
      {/* Inner panel glow layer */}
      <div className="absolute inset-4 bg-gradient-to-br from-hud-primary/[0.02] via-transparent to-hud-secondary/[0.01] rounded-lg" />
      
      <div className="flex items-center gap-2 mb-8 text-hud-primary font-mono text-sm relative z-20">
        <div className="w-2 h-2 bg-hud-primary rounded-full animate-pulse shadow-sm shadow-hud-primary/50"></div>
        PROJECT_TERMINAL
        <div className="flex-1 h-px bg-gradient-to-r from-hud-primary/60 to-transparent ml-4"></div>
        <div className="text-xs text-hud-muted/60">v2.1.0</div>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl">
          {projects.map((project, index) => (
            <motion.button
              key={project.id}
              className={`relative w-52 h-32 overflow-hidden group transition-all duration-500 ${
                selectedId === project.id 
                  ? 'scale-[1.02] z-10' : 'hover:scale-[1.01]'
              }`}
              onClick={() => onSelect(project)}
              initial={{ opacity: 0, y: 30, rotateX: 15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8, type: "spring", stiffness: 100 }}
              whileHover={{ y: -3, rotateX: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{ perspective: '1000px' }}
            >
              {/* Gaming module button frame */}
              <div className={`absolute inset-0 transition-all duration-500 ${
                selectedId === project.id 
                  ? 'shadow-xl shadow-hud-primary/25' 
                  : 'shadow-lg shadow-black/40 group-hover:shadow-hud-primary/15'
              }`}
              style={{
                background: 'linear-gradient(135deg, rgba(15,23,42,0.6) 0%, rgba(0,0,0,0.9) 100%)',
                backdropFilter: 'blur(8px)',
                border: `2px solid ${selectedId === project.id ? '#00B4D8' : 'rgba(0,180,216,0.4)'}`,
                clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 16px))',
                boxShadow: selectedId === project.id 
                  ? 'inset 0 1px 0 rgba(0,180,216,0.3), inset 0 -1px 0 rgba(0,0,0,0.5), 0 0 30px rgba(0,180,216,0.2)'
                  : 'inset 0 1px 0 rgba(0,180,216,0.1), inset 0 -1px 0 rgba(0,0,0,0.7)'
              }}>
                
                {/* Double-border inner frame */}
                <div className="absolute inset-3 border border-hud-border/25 group-hover:border-hud-primary/50 transition-all duration-300"
                     style={{
                       clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 10px))'
                     }}>
                  <div className="absolute inset-1 border border-hud-border/15 group-hover:border-hud-primary/30 transition-all duration-300"
                       style={{
                         clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 0 calc(100% - 8px))'
                       }} />
                </div>
                
                {/* Micro notches and cut corners */}
                <div className="absolute top-0 left-4 w-3 h-px bg-hud-primary/40 group-hover:bg-hud-primary/70 transition-colors" />
                <div className="absolute top-0 right-8 w-2 h-px bg-hud-primary/40 group-hover:bg-hud-primary/70 transition-colors" />
                <div className="absolute bottom-0 left-8 w-4 h-px bg-hud-primary/40 group-hover:bg-hud-primary/70 transition-colors" />
                <div className="absolute bottom-0 right-4 w-2 h-px bg-hud-primary/40 group-hover:bg-hud-primary/70 transition-colors" />
                
                {/* Diagonal HUD lines */}
                <div className="absolute top-4 left-4 w-8 h-px bg-hud-border/30 rotate-45 group-hover:bg-hud-primary/60 transition-all duration-300" />
                <div className="absolute top-4 right-6 w-6 h-px bg-hud-border/30 -rotate-45 group-hover:bg-hud-primary/60 transition-all duration-300" />
                <div className="absolute bottom-4 left-6 w-6 h-px bg-hud-border/30 -rotate-45 group-hover:bg-hud-primary/60 transition-all duration-300" />
                <div className="absolute bottom-4 right-4 w-8 h-px bg-hud-border/30 rotate-45 group-hover:bg-hud-primary/60 transition-all duration-300" />
                
                {/* Content with improved hierarchy */}
                <div className="relative z-10 p-5 h-full flex flex-col justify-between">
                  <div className="flex items-start justify-between mb-2">
                    <motion.div 
                      className="text-sm font-mono text-hud-primary font-bold leading-tight pr-3 max-w-[160px] group-hover:text-white transition-colors duration-300"
                      whileHover={{ x: 2 }}
                    >
                      {project.name.length > 22 ? project.name.substring(0, 22) + '...' : project.name}
                    </motion.div>
                    <motion.div 
                      className={`w-3 h-3 rounded-full border border-white/20 ${
                        project.status === 'ACTIVE' ? 'bg-green-400 shadow-md shadow-green-400/60' :
                        project.status === 'ONGOING' ? 'bg-yellow-400 shadow-md shadow-yellow-400/60' :
                        'bg-hud-primary shadow-md shadow-hud-primary/60'
                      }`}
                      animate={selectedId === project.id ? {
                        scale: [1, 1.3, 1],
                        opacity: [1, 0.6, 1]
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  
                  <motion.div 
                    className="text-xs text-hud-muted/70 font-mono text-left group-hover:text-hud-muted transition-colors duration-300 mb-1"
                    whileHover={{ x: 2 }}
                  >
                    {project.type}
                  </motion.div>
                  
                  {/* Progress indicator */}
                  <div className="w-full h-px bg-hud-border/20 group-hover:bg-hud-primary/30 transition-colors duration-500" />
                </div>
                
                {/* Active pulse glow with refined animation */}
                {selectedId === project.id && (
                  <motion.div 
                    className="absolute inset-0 border-2 border-hud-primary/50 pointer-events-none"
                    animate={{
                      opacity: [0.2, 0.6, 0.2],
                      scale: [1, 1.005, 1],
                      boxShadow: [
                        '0 0 20px rgba(0,180,216,0.3)',
                        '0 0 40px rgba(0,180,216,0.5)',
                        '0 0 20px rgba(0,180,216,0.3)'
                      ]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 16px))'
                    }}
                  />
                )}
              </div>
            </motion.button>
          ))}
        </div>
        
        <motion.div 
          className="mt-10 text-sm font-mono text-hud-primary border-t border-hud-border/60 pt-6 text-center relative"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="absolute -top-px left-1/2 transform -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-hud-primary to-transparent" />
          <motion.span
            className="inline-block mr-2"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            &gt;
          </motion.span>
          {projects.length} MODULES_LOADED | SELECT_TARGET_SYSTEM
        </motion.div>
      </div>
    </div>
  )
}

const ProjectDetail = ({ project, onBack }) => {
  return (
    <motion.div 
      className="h-full flex flex-col relative"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
    >
      {/* Subtle diagonal light sweep */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-hud-primary/20 via-transparent to-transparent"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 8, repeat: Infinity, repeatDelay: 12 }}
        />
      </div>
      
      {/* Header */}
      <div className="flex items-center gap-4 mb-8 relative z-10">
        <motion.button
          className="px-6 py-3 border border-hud-border text-hud-primary font-mono text-xs hover:border-hud-primary transition-all duration-300 relative overflow-hidden"
          onClick={onBack}
          whileHover={{ scale: 1.02, boxShadow: '0 0 15px rgba(0,180,216,0.2)' }}
          whileTap={{ scale: 0.98 }}
          style={{
            clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
            background: 'linear-gradient(135deg, rgba(15,23,42,0.4) 0%, rgba(0,0,0,0.8) 100%)'
          }}
        >
          <motion.div 
            className="absolute top-0 left-0 w-full h-px bg-hud-primary opacity-0 group-hover:opacity-100"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 1.5 }}
          />
          &lt; BACK_TO_TERMINAL
        </motion.button>
        <div className="text-hud-primary font-mono text-sm tracking-wider">
          PROJECT_DETAIL_VIEW
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-hud-primary/40 to-transparent ml-4" />
      </div>
      
      {/* Main Layout */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
        
        {/* Left Panel - Data Terminal */}
        <div className="relative h-fit">
          {/* Vertical HUD spine */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-hud-primary/60 via-hud-primary/30 to-transparent" />
          <div className="absolute left-0 top-4 w-3 h-px bg-hud-primary/60" />
          <div className="absolute left-0 top-8 w-2 h-px bg-hud-primary/40" />
          <div className="absolute left-0 bottom-8 w-2 h-px bg-hud-primary/40" />
          <div className="absolute left-0 bottom-4 w-3 h-px bg-hud-primary/60" />
          
          <div className="border border-hud-border rounded-lg bg-hud-panel/50 backdrop-blur-sm ml-4 h-fit"
               style={{ 
                 boxShadow: 'inset 0 1px 0 rgba(0,180,216,0.15), inset 0 -1px 0 rgba(0,0,0,0.4), 0 4px 12px rgba(0,0,0,0.3)' 
               }}>
            
            {/* Panel structure layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-hud-primary/[0.03] via-transparent to-hud-secondary/[0.02]" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-hud-primary/40 to-transparent" />
            
            <div className="relative z-10 p-5">
              <div className="flex items-center gap-2 mb-5 text-xs font-mono text-hud-primary tracking-wider">
                <div className="w-1.5 h-1.5 bg-hud-primary rounded-full animate-pulse" />
                DATA_TERMINAL
                <div className="flex-1 h-px bg-gradient-to-r from-hud-primary/50 to-transparent ml-3" />
              </div>
              
              <div className="space-y-4">
                {/* Project Name Row */}
                <div className="relative">
                  <div className="text-xs font-mono text-hud-primary/80 mb-1.5 tracking-wide">▸ PROJECT_NAME</div>
                  <div className="text-base font-bold text-hud-text font-orbitron pl-4">{project.name}</div>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-hud-border/40 via-hud-border/20 to-transparent" />
                </div>
                
                {/* Type Row */}
                <div className="relative">
                  <div className="text-xs font-mono text-hud-primary/80 mb-1.5 tracking-wide">▸ TYPE</div>
                  <div className="text-sm text-hud-muted font-mono pl-4">{project.type}</div>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-hud-border/40 via-hud-border/20 to-transparent" />
                </div>
                
                {/* Description Row */}
                <div className="relative">
                  <div className="text-xs font-mono text-hud-primary/80 mb-1.5 tracking-wide">▸ DESCRIPTION</div>
                  <div className="text-xs text-hud-muted/90 leading-relaxed pl-4">
                    {project.description}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-hud-border/40 via-hud-border/20 to-transparent" />
                </div>
                
                {/* Status Row */}
                <div className="relative">
                  <div className="text-xs font-mono text-hud-primary/80 mb-2 tracking-wide">▸ STATUS</div>
                  <div className="flex items-center gap-3 pl-4">
                    <div className={`relative px-6 py-1.5 font-mono text-xs tracking-wider border w-28 flex items-center gap-2 ${
                      project.status === 'ACTIVE' ? 'border-green-500/60 text-green-400 bg-green-500/10' :
                      project.status === 'ONGOING' ? 'border-yellow-500/60 text-yellow-400 bg-yellow-500/10' :
                      'border-hud-primary/60 text-hud-primary bg-hud-primary/10'
                    }`}
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
                      boxShadow: project.status === 'ACTIVE' ? 
                        'inset 0 1px 0 rgba(34,197,94,0.2), 0 0 12px rgba(34,197,94,0.15)' :
                        project.status === 'ONGOING' ? 
                        'inset 0 1px 0 rgba(234,179,8,0.2), 0 0 12px rgba(234,179,8,0.15)' :
                        'inset 0 1px 0 rgba(0,180,216,0.2), 0 0 12px rgba(0,180,216,0.15)'
                    }}>
                      <span>{project.status}</span>
                      <motion.div 
                        className={`w-1.5 h-1.5 rounded-full ${
                          project.status === 'ACTIVE' ? 'bg-green-400' :
                          project.status === 'ONGOING' ? 'bg-yellow-400' :
                          'bg-hud-primary'
                        }`}
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Center - Project Engine Core */}
        <div className="flex flex-col items-center justify-start relative pt-8">
          {/* Radial grid lines */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 opacity-[0.08]">
            <svg className="w-full h-full" viewBox="0 0 128 128">
              {[...Array(12)].map((_, i) => (
                <line 
                  key={i}
                  x1="64" 
                  y1="64" 
                  x2={64 + Math.cos(i * 30 * Math.PI / 180) * 55}
                  y2={64 + Math.sin(i * 30 * Math.PI / 180) * 55}
                  stroke="#00B4D8" 
                  strokeWidth="0.5" 
                  opacity="0.3"
                />
              ))}
            </svg>
          </div>
          
          {/* Logo container */}
          <motion.div 
            className="w-40 h-40 flex flex-col items-center justify-center relative mb-6"
          >
            <motion.img 
              src={project.logo}
              alt={project.name}
              className="w-36 h-36 object-contain relative z-10 mb-2"
              animate={{
                scale: [1, 1.03, 1],
                y: [0, -2, 0]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ 
                scale: 1.1,
                y: -5
              }}
            />
            
            <motion.div 
              className="text-xs font-mono text-hud-primary/70 tracking-wider"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ACTIVE_MODULE
            </motion.div>
          </motion.div>
          
          {/* Control Buttons Below Logo */}
          <div className="flex flex-col gap-3 w-full max-w-xs">
            {Object.entries(project.links).filter(([type]) => type !== 'case').map(([type, url], index) => (
              <motion.a
                key={type}
                href={url}
                className="relative px-6 py-2.5 border border-hud-border text-hud-primary font-mono text-xs uppercase tracking-wider overflow-hidden group transition-all duration-500 hover:border-hud-primary text-center"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 3px), calc(100% - 3px) 100%, 3px 100%, 0 calc(100% - 6px))',
                  background: 'linear-gradient(135deg, rgba(15,23,42,0.6) 0%, rgba(0,0,0,0.9) 100%)',
                  boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.3), inset 0 -1px 2px rgba(0,180,216,0.1)'
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: '0 0 15px rgba(0,180,216,0.3), inset 0 1px 2px rgba(0,0,0,0.3), inset 0 -1px 2px rgba(0,180,216,0.2)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-hud-primary to-transparent opacity-0 group-hover:opacity-100"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 1.5 }}
                />
                
                <motion.span
                  className="relative z-10 group-hover:text-white transition-colors duration-300"
                >
                  {type === 'demo' ? 'LIVE_DEMO' : 'SOURCE_CODE'}
                </motion.span>
              </motion.a>
            ))}
          </div>
        </div>
        
        {/* Right Panel - System Blocks */}
        <div className="border border-hud-border rounded-lg bg-hud-panel/50 backdrop-blur-sm h-fit relative overflow-hidden -ml-8 scale-90"
             style={{ 
               boxShadow: 'inset 0 1px 0 rgba(0,180,216,0.15), inset 0 -1px 0 rgba(0,0,0,0.4), 0 4px 12px rgba(0,0,0,0.3)' 
             }}>
          
          {/* Panel structure layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-hud-secondary/[0.03] via-transparent to-hud-primary/[0.02]" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-hud-primary/40 to-transparent" />
          
          <div className="relative z-10 p-5">
            <div className="flex items-center gap-2 mb-5 text-xs font-mono text-hud-primary tracking-wider">
              <div className="w-1.5 h-1.5 bg-hud-primary rounded-full animate-pulse" />
              SYSTEM_BLOCKS
              <div className="flex-1 h-px bg-gradient-to-r from-hud-primary/50 to-transparent ml-3" />
            </div>
            
            <div className="space-y-2">
              {Object.entries(project.techStack).map(([category, techs], groupIndex) => (
                <motion.div 
                  key={category}
                  className="group relative"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: groupIndex * 0.1 }}
                >
                  {/* Stack group frame */}
                  <div className="border border-hud-border/30 rounded bg-hud-secondary/5 p-2 group-hover:border-hud-primary/40 transition-all duration-300"
                       style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)' }}>
                    
                    <div className="flex items-center gap-2 text-xs font-mono text-hud-primary mb-1.5 uppercase tracking-wide">
                      <div className="w-1 h-1 bg-hud-secondary rounded-full" />
                      ▸ {category}
                    </div>
                    
                    {/* Animated underline */}
                    <motion.div 
                      className="absolute bottom-0 left-2 right-2 h-px bg-hud-primary/50 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                    />
                    
                    <div className="flex flex-wrap gap-1">
                      {techs.map((tech, i) => (
                        <motion.div 
                          key={i}
                          className="text-xs bg-hud-panel/40 text-hud-muted px-2 py-1 border border-hud-border/20 font-mono transition-all duration-300 hover:border-hud-primary/50 hover:bg-hud-primary/8 hover:text-hud-text cursor-default"
                          style={{
                            boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.2), inset 0 -1px 0 rgba(255,255,255,0.05)'
                          }}
                          whileHover={{ 
                            y: -1, 
                            boxShadow: '0 2px 8px rgba(0,180,216,0.15), inset 0 1px 2px rgba(0,0,0,0.2)'
                          }}
                        >
                          {tech}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const ProjectTerminal = ({ isActive }) => {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div className="h-full bg-hud-bg relative">
      <AnimatePresence mode="wait">
        {!selectedProject ? (
          <ProjectSelector 
            key="selector"
            projects={projects}
            onSelect={setSelectedProject}
            selectedId={selectedProject?.id}
          />
        ) : (
          <ProjectDetail 
            key="detail"
            project={selectedProject}
            onBack={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default ProjectTerminal