import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const StatusBar = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [systemUptime, setSystemUptime] = useState(0)
  const [showFullInfo, setShowFullInfo] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
      setSystemUptime(prev => prev + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const statusData = [
    { label: "LOCATION", value: "Kunavaram, East Godavari, AP", shortValue: "AP, IN" },
    { label: "LANGUAGES", value: "English | Hindi | Telugu", shortValue: "EN|HI|TE" },
    { label: "STATUS", value: "ACTIVE" },
    { label: "UPTIME", value: `${Math.floor(systemUptime / 60)}:${(systemUptime % 60).toString().padStart(2, '0')}` }
  ]

  const contacts = [
    { 
      type: "EMAIL", 
      value: "posibabu.yalla@gmail.com",
      icon: "✉",
      shortType: "@",
      href: "mailto:posibabu.yalla@gmail.com"
    },
    { 
      type: "GITHUB", 
      value: "github.com/posibabu",
      icon: "⚡",
      shortType: "GH",
      href: "https://github.com/posibabu"
    },
    { 
      type: "LINKEDIN", 
      value: "linkedin.com/in/posibabu-yalla",
      icon: "🔗",
      shortType: "LI",
      href: "https://linkedin.com/in/posibabu-yalla"
    }
  ]

  return (
    <div className="border-t border-hud-border bg-hud-panel/50 backdrop-blur-sm">
      {/* Mobile Toggle for Full Info */}
      <div className="md:hidden border-b border-hud-border/30">
        <motion.button
          className="w-full px-3 py-2 text-xs font-mono text-hud-primary hover:bg-hud-primary/10 transition-colors flex items-center justify-center gap-2"
          onClick={() => setShowFullInfo(!showFullInfo)}
          whileTap={{ scale: 0.98 }}
        >
          <span>SYSTEM_INFO</span>
          <motion.span
            animate={{ rotate: showFullInfo ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            ▼
          </motion.span>
        </motion.button>
      </div>

      {/* Main Status Bar Content */}
      <div className="px-3 sm:px-6 py-2 sm:py-3">
        
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between">
          
          {/* System Status Ticker */}
          <div className="flex items-center gap-6 overflow-x-auto scrollbar-thin">
            {statusData.map((item, index) => (
              <motion.div
                key={item.label}
                className="flex items-center gap-2 text-xs font-mono whitespace-nowrap"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-hud-primary">{item.label}:</span>
                <span className="text-hud-muted">{item.value}</span>
              </motion.div>
            ))}
          </div>

          {/* System Time */}
          <div className="text-xs font-mono text-hud-primary">
            {currentTime.toLocaleTimeString('en-US', { 
              hour12: false,
              timeZone: 'Asia/Kolkata'
            })} IST
          </div>

          {/* Contact Links */}
          <div className="flex items-center gap-4">
            {contacts.map((contact, index) => (
              <motion.a
                key={contact.type}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono cursor-pointer group"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-hud-primary group-hover:text-white transition-colors">
                  {contact.icon}
                </span>
                <span className="text-hud-muted group-hover:text-hud-primary transition-colors">
                  {contact.type}
                </span>
              </motion.a>
            ))}
            
            {/* System Indicator */}
            <div className="flex items-center gap-2 ml-4">
              <motion.div 
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-xs font-mono text-hud-primary">SYSTEM_ONLINE</span>
            </div>
          </div>

        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          
          {/* Always Visible - Time and Status */}
          <div className="flex items-center justify-between mb-2">
            <div className="text-xs font-mono text-hud-primary">
              {currentTime.toLocaleTimeString('en-US', { 
                hour12: false,
                timeZone: 'Asia/Kolkata'
              })} IST
            </div>
            
            <div className="flex items-center gap-2">
              <motion.div 
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-xs font-mono text-hud-primary">ONLINE</span>
            </div>
          </div>

          {/* Expandable Content */}
          <motion.div
            initial={false}
            animate={{ height: showFullInfo ? 'auto' : 0, opacity: showFullInfo ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {/* System Status */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              {statusData.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="text-xs font-mono"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: showFullInfo ? 1 : 0, y: showFullInfo ? 0 : 10 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <span className="text-hud-primary">{item.label}:</span>
                  <br />
                  <span className="text-hud-muted text-xs">{item.shortValue || item.value}</span>
                </motion.div>
              ))}
            </div>

            {/* Contact Links */}
            <div className="flex items-center justify-center gap-6 pt-2 border-t border-hud-border/30">
              {contacts.map((contact, index) => (
                <motion.a
                  key={contact.type}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1 text-xs font-mono cursor-pointer group"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: showFullInfo ? 1 : 0, y: showFullInfo ? 0 : 10 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-hud-primary group-hover:text-white transition-colors text-sm">
                    {contact.icon}
                  </span>
                  <span className="text-hud-muted group-hover:text-hud-primary transition-colors">
                    {contact.shortType}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  )
}

export default StatusBar