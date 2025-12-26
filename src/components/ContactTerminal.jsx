import { motion } from 'framer-motion'
import { useState } from 'react'

const contacts = [
  {
    id: 1,
    type: "EMAIL",
    value: "posibabu.yalla@gmail.com",
    icon: "✉",
    status: "ACTIVE",
    color: "#00FF41"
  },
  {
    id: 2,
    type: "GITHUB",
    value: "github.com/posibabu",
    icon: "⚡",
    status: "LIVE",
    color: "#FF6B35"
  },
  {
    id: 3,
    type: "LINKEDIN",
    value: "linkedin.com/in/posibabu-yalla",
    icon: "🔗",
    status: "ACTIVE",
    color: "#0077B5"
  },
  {
    id: 4,
    type: "PHONE",
    value: "+91 XXXX XXXX XX",
    icon: "📞",
    status: "AVAILABLE",
    color: "#FFD700"
  }
]

const ContactTerminal = ({ isActive }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isTransmitting, setIsTransmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsTransmitting(true)
    setTimeout(() => setIsTransmitting(false), 2000)
  }

  return (
    <div className="h-full flex gap-6 relative">
      
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
          {[...Array(96)].map((_, i) => (
            <motion.div
              key={i}
              className="border border-hud-primary/20"
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 4, delay: i * 0.02, repeat: Infinity }}
            />
          ))}
        </div>
      </div>

      {/* Left Side - Contact Channels */}
      <div className="flex-1 flex flex-col relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 bg-hud-primary rounded-full animate-pulse shadow-lg shadow-hud-primary/50"></div>
          <span className="font-mono text-sm text-hud-primary tracking-wider">COMMUNICATION_CHANNELS</span>
          <div className="flex-1 h-px bg-gradient-to-r from-hud-primary/50 to-transparent"></div>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-4">
          {contacts.map((contact, index) => (
            <motion.div
              key={contact.id}
              className="relative border-2 rounded-lg p-4 bg-gradient-to-br from-black/60 to-black/30 backdrop-blur-sm group cursor-pointer overflow-hidden"
              style={{ borderColor: `${contact.color}40` }}
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ 
                scale: 1.05,
                borderColor: contact.color,
                boxShadow: `0 0 30px ${contact.color}40`
              }}
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2" style={{ borderColor: contact.color }} />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2" style={{ borderColor: contact.color }} />
              
              {/* Glow Effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at center, ${contact.color}40, transparent 70%)` }}
              />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <motion.div 
                    className="text-2xl p-2 rounded-full border-2 relative"
                    style={{ 
                      borderColor: contact.color,
                      backgroundColor: `${contact.color}20`,
                      boxShadow: `0 0 20px ${contact.color}30`
                    }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {contact.icon}
                    <div className="absolute inset-0 rounded-full animate-ping" style={{ backgroundColor: `${contact.color}20` }} />
                  </motion.div>
                  
                  <div className="text-xs px-3 py-1 rounded-full border font-mono" style={{ 
                    borderColor: contact.color,
                    color: contact.color,
                    backgroundColor: `${contact.color}10`
                  }}>
                    {contact.status}
                  </div>
                </div>
                
                <div className="text-sm font-mono mb-2" style={{ color: contact.color }}>
                  {contact.type}_CHANNEL
                </div>
                
                <div className="text-xs text-hud-text group-hover:text-white transition-colors break-all font-mono">
                  {contact.value}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Side - Message Terminal */}
      <div className="w-96 flex flex-col relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/50"></div>
          <span className="font-mono text-sm text-red-400 tracking-wider">MESSAGE_TRANSMISSION</span>
          <div className="flex-1 h-px bg-gradient-to-r from-red-400/50 to-transparent"></div>
        </div>

        <motion.form 
          onSubmit={handleSubmit} 
          className="flex-1 flex flex-col gap-4 p-6 border-2 border-hud-border rounded-lg bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-sm relative overflow-hidden"
          whileHover={{ borderColor: '#00B4D8' }}
        >
          {/* Animated Corner Elements */}
          <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-hud-primary opacity-60" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-hud-primary opacity-60" />
          
          <div className="relative z-10">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-hud-primary mb-2 tracking-wider">&gt; OPERATOR_NAME:</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-black/50 border-2 border-hud-border rounded px-4 py-3 text-sm text-hud-text font-mono focus:border-hud-primary focus:outline-none focus:shadow-lg focus:shadow-hud-primary/20 transition-all duration-300"
                  placeholder="Enter designation..."
                />
              </div>
              
              <div>
                <label className="block text-xs font-mono text-hud-primary mb-2 tracking-wider">&gt; COMM_FREQUENCY:</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-black/50 border-2 border-hud-border rounded px-4 py-3 text-sm text-hud-text font-mono focus:border-hud-primary focus:outline-none focus:shadow-lg focus:shadow-hud-primary/20 transition-all duration-300"
                  placeholder="Enter transmission ID..."
                />
              </div>
              
              <div className="flex-1 flex flex-col">
                <label className="block text-xs font-mono text-hud-primary mb-2 tracking-wider">&gt; MESSAGE_PAYLOAD:</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="flex-1 min-h-[120px] bg-black/50 border-2 border-hud-border rounded px-4 py-3 text-sm text-hud-text font-mono focus:border-hud-primary focus:outline-none focus:shadow-lg focus:shadow-hud-primary/20 transition-all duration-300 resize-none"
                  placeholder="Enter encrypted message..."
                />
              </div>
            </div>
            
            <motion.button
              type="submit"
              disabled={isTransmitting}
              className="w-full mt-6 bg-gradient-to-r from-hud-primary/20 to-hud-primary/30 border-2 border-hud-primary text-hud-primary px-6 py-4 rounded font-mono text-sm tracking-wider hover:bg-hud-primary hover:text-black transition-all duration-300 relative overflow-hidden disabled:opacity-50"
              whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0,180,216,0.5)' }}
              whileTap={{ scale: 0.98 }}
            >
              {isTransmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-hud-primary rounded-full animate-pulse"></div>
                  TRANSMITTING...
                </div>
              ) : (
                '> INITIATE_TRANSMISSION'
              )}
              
              {isTransmitting && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-hud-primary/20 to-transparent animate-pulse" />
              )}
            </motion.button>
          </div>
        </motion.form>
      </div>

    </div>
  )
}

export default ContactTerminal