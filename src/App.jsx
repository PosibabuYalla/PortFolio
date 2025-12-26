import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CoreIdentity from './components/CoreIdentity'
import AboutCoreProfile from './components/AboutCoreProfile'
import ExperienceLogs from './components/ExperienceLogs'
import SkillsMatrix from './components/SkillsMatrix'
import ProjectTerminal from './components/ProjectTerminal'
import ContactTerminal from './components/ContactTerminal'
import StatusBar from './components/StatusBar'
import PanelSelector from './components/PanelSelector'

function App() {
  const [activePanel, setActivePanel] = useState('core')
  const [systemBooted, setSystemBooted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setSystemBooted(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const renderActivePanel = () => {
    switch(activePanel) {
      case 'core': return <CoreIdentity />
      case 'about': return <AboutCoreProfile onNavigate={setActivePanel} />
      case 'experience': return <ExperienceLogs isActive={true} />
      case 'skills': return <SkillsMatrix isActive={true} />
      case 'projects': return <ProjectTerminal isActive={true} />
      case 'contact': return <ContactTerminal isActive={true} />
      default: return <CoreIdentity />
    }
  }

  return (
    <div className="h-screen w-full bg-hud-bg grid-bg overflow-hidden">
      <motion.div 
        className="h-full w-full p-1 xs:p-2 sm:p-3 md:p-4 flex flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: systemBooted ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <div className="h-full w-full border border-hud-border xs:border-2 rounded-lg hud-glow flex flex-col">
          
          {/* Panel Selector */}
          <PanelSelector 
            activePanel={activePanel} 
            setActivePanel={setActivePanel} 
          />
          
          {/* Main Panel Area */}
          <div className="flex-1 p-1 xs:p-2 sm:p-3 md:p-4 lg:p-6 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePanel}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full hud-panel rounded-lg p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 overflow-hidden"
              >
                {renderActivePanel()}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Status Bar - Footer */}
          <StatusBar />

        </div>
      </motion.div>
    </div>
  )
}

export default App