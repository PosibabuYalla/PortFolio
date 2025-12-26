import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const panels = [
  { id: 'core', name: 'CORE_IDENTITY', icon: '◉' },
  { id: 'about', name: 'ABOUT_CORE_PROFILE', icon: '👤' },
  { id: 'experience', name: 'EXPERIENCE_LOGS', icon: '⚡' },
  { id: 'skills', name: 'SKILLS_MATRIX', icon: '◈' },
  { id: 'projects', name: 'PROJECT_TERMINAL', icon: '▣' },
  { id: 'contact', name: 'CONTACT_TERMINAL', icon: '📡' }
]

const PanelSelector = ({ activePanel, setActivePanel }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="border-b border-hud-border bg-hud-panel/30 backdrop-blur-sm">
      <div className="flex items-center justify-between px-3 sm:px-6 py-2 sm:py-3">
        
        {/* Logo/Brand */}
        <div className="flex items-center gap-2 text-hud-primary font-mono text-xs sm:text-sm">
          <div className="w-2 h-2 bg-hud-primary rounded-full animate-pulse"></div>
          <span className="hidden sm:inline">POSIBABU_YALLA</span>
          <span className="sm:hidden">HUD_SYS</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {panels.map((panel) => (
            <motion.button
              key={panel.id}
              className={`px-3 lg:px-4 py-2 text-xs font-mono border rounded transition-all duration-300 whitespace-nowrap ${
                activePanel === panel.id 
                  ? 'bg-hud-primary/20 border-hud-primary text-hud-primary' 
                  : 'border-hud-border text-hud-muted hover:border-hud-primary hover:text-hud-primary'
              }`}
              onClick={() => setActivePanel(panel.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">{panel.icon}</span>
              <span className="hidden lg:inline">{panel.name}</span>
              <span className="lg:hidden">{panel.name.split('_')[0]}</span>
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 border border-hud-border rounded text-hud-primary hover:border-hud-primary transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="w-4 h-0.5 bg-hud-primary mb-1"
            animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 2 : 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.div
            className="w-4 h-0.5 bg-hud-primary mb-1"
            animate={{ opacity: isMenuOpen ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.div
            className="w-4 h-0.5 bg-hud-primary"
            animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -2 : 0 }}
            transition={{ duration: 0.2 }}
          />
        </motion.button>

        {/* Status Indicator */}
        <div className="text-xs font-mono text-hud-muted hidden lg:block">
          PANEL_ACTIVE: {panels.find(p => p.id === activePanel)?.name}
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden border-t border-hud-border bg-hud-panel/50 backdrop-blur-sm"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-3 grid grid-cols-2 gap-2">
              {panels.map((panel) => (
                <motion.button
                  key={panel.id}
                  className={`px-3 py-2 text-xs font-mono border rounded transition-all duration-300 ${
                    activePanel === panel.id 
                      ? 'bg-hud-primary/20 border-hud-primary text-hud-primary' 
                      : 'border-hud-border text-hud-muted hover:border-hud-primary hover:text-hud-primary'
                  }`}
                  onClick={() => {
                    setActivePanel(panel.id)
                    setIsMenuOpen(false)
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="mr-2">{panel.icon}</span>
                  <span>{panel.name.split('_')[0]}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default PanelSelector