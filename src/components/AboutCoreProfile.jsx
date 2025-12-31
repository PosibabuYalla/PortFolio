import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const SystemAvatar = () => {
  return (
    <group>
      {/* Abstract humanoid silhouette */}
      <mesh position={[0, 0.5, 0]}>
        <capsuleGeometry args={[0.3, 1.2, 4, 8]} />
        <meshStandardMaterial 
          color="#00F5FF" 
          emissive="#00F5FF"
          emissiveIntensity={0.1}
          wireframe
          transparent
          opacity={0.8}
        />
      </mesh>
      
      {/* Head */}
      <mesh position={[0, 1.3, 0]}>
        <sphereGeometry args={[0.25, 8, 6]} />
        <meshStandardMaterial 
          color="#00F5FF" 
          emissive="#00F5FF"
          emissiveIntensity={0.2}
          wireframe
          transparent
          opacity={0.9}
        />
      </mesh>
      
      {/* Platform */}
      <mesh position={[0, -0.8, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.8, 1.2, 32]} />
        <meshStandardMaterial 
          color="#00F5FF" 
          emissive="#00F5FF"
          emissiveIntensity={0.1}
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  )
}

const ProfileDataTerminal = () => {
  const profileData = [
    { label: "ROLE_CLASS", value: "Full-Stack Developer / WordPress Plugin Engineer" },
    { label: "ORIGIN", value: "Mechanical Engineering → Software Engineering" },
    { label: "EXPERIENCE_LEVEL", value: "1+ Years (Production Systems)" },
    { label: "CURRENT_MISSION", value: "Building scalable web applications and plugins" },
    { label: "TRAITS", value: "Disciplined • Fast Learner • System Thinker • Problem Solver" }
  ]

  return (
    <div className="h-full border border-hud-border rounded-lg bg-hud-panel/50 backdrop-blur-sm p-4">
      <div className="flex items-center gap-2 mb-4 text-xs font-mono text-hud-primary">
        <div className="w-1.5 h-1.5 bg-hud-primary rounded-full animate-pulse"></div>
        PROFILE_DATA_TERMINAL
      </div>
      
      <div className="space-y-3">
        {profileData.map((item, index) => (
          <motion.div 
            key={item.label}
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="text-xs font-mono text-hud-primary/80 mb-1 tracking-wide">
              ▸ {item.label}
            </div>
            <div className="text-sm text-hud-text pl-4 leading-relaxed">
              {item.value}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-hud-border/40 via-hud-border/20 to-transparent" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const AbilitySystemSkills = () => {
  const abilities = [
    { name: "CORE_LOGIC", tech: "JavaScript / PHP", status: "ACTIVE" },
    { name: "UI_ENGINEERING", tech: "React / Tailwind", status: "ACTIVE" },
    { name: "BACKEND_SYSTEMS", tech: "Node.js / APIs", status: "DEPLOYED" },
    { name: "DATA_HANDLING", tech: "MongoDB / SQL", status: "TRAINED" },
    { name: "PLATFORM_INTEGRATION", tech: "WordPress / WooCommerce", status: "ACTIVE" }
  ]

  const getStatusColor = (status) => {
    switch(status) {
      case 'ACTIVE': return '#39FF14'
      case 'DEPLOYED': return '#00F5FF'
      case 'TRAINED': return '#FFD700'
      default: return '#9CA3AF'
    }
  }

  return (
    <div className="h-full border border-hud-border rounded-lg bg-hud-panel/50 backdrop-blur-sm p-4">
      <div className="flex items-center gap-2 mb-4 text-xs font-mono text-hud-primary">
        <div className="w-1.5 h-1.5 bg-hud-primary rounded-full animate-pulse"></div>
        ABILITY_SYSTEM_SKILLS
      </div>
      
      <div className="space-y-2">
        {abilities.map((ability, index) => (
          <motion.div 
            key={ability.name}
            className="border border-hud-border/30 rounded bg-hud-bg/30 p-3 group hover:border-hud-primary/40 transition-all duration-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between mb-1">
              <div className="text-xs font-mono text-hud-text font-bold">
                {ability.name}
              </div>
              <div 
                className="text-xs font-mono px-2 py-1 rounded border"
                style={{ 
                  color: getStatusColor(ability.status),
                  borderColor: getStatusColor(ability.status) + '40',
                  backgroundColor: getStatusColor(ability.status) + '10'
                }}
              >
                {ability.status}
              </div>
            </div>
            <div className="text-xs text-hud-muted font-mono">
              {ability.tech}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const SystemMetrics = () => {
  const metrics = [
    { name: "CODE_ACCURACY", level: "High" },
    { name: "SYSTEM_RELIABILITY", level: "Stable" },
    { name: "PROJECT_COMPLETION", level: "Consistent" },
    { name: "LEARNING_VELOCITY", level: "Fast" }
  ]

  return (
    <div className="border border-hud-border rounded-lg bg-hud-panel/50 backdrop-blur-sm p-4">
      <div className="flex items-center gap-2 mb-4 text-xs font-mono text-hud-primary">
        <div className="w-1.5 h-1.5 bg-hud-primary rounded-full animate-pulse"></div>
        SYSTEM_METRICS
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <motion.div 
            key={metric.name}
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="w-16 h-16 mx-auto mb-2 relative">
              <div className="absolute inset-0 border-2 border-hud-border rounded-full"></div>
              <div className="absolute inset-1 border border-hud-primary/50 rounded-full bg-hud-primary/10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 bg-hud-primary rounded-full animate-pulse"></div>
              </div>
            </div>
            <div className="text-xs font-mono text-hud-muted mb-1">
              {metric.name}
            </div>
            <div className="text-xs font-mono text-hud-primary font-bold">
              {metric.level}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const ActionControls = ({ onNavigate }) => {
  const controls = [
    { label: "VIEW_PROJECTS", action: "projects" },
    { label: "VIEW_SKILLS", action: "skills" },
    { label: "CONTACT_OPERATOR", action: "contact" }
  ]

  return (
    <div className="flex justify-center gap-4">
      {controls.map((control, index) => (
        <motion.button
          key={control.label}
          className="px-6 py-2 border border-hud-border text-hud-primary font-mono text-xs hover:border-hud-primary transition-all duration-300 relative overflow-hidden group"
          onClick={() => onNavigate(control.action)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
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
          {control.label}
        </motion.button>
      ))}
    </div>
  )
}

const AboutCoreProfile = ({ onNavigate }) => {
  return (
    <div className="min-h-full flex flex-col cyber-grid py-4">
      {/* Main Layout Grid */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-0">
        
        {/* Left Panel - Profile Data Terminal */}
        <div className="order-2 lg:order-1">
          <ProfileDataTerminal />
        </div>
        
        {/* Center - System Avatar Core */}
        <div className="order-1 lg:order-2 flex flex-col items-center justify-center">
          <div className="relative w-80 h-96 mb-6">
            {/* Holographic Platform */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-4">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-hud-primary/40 to-transparent rounded-full animate-pulse"></div>
              <div className="absolute inset-2 bg-gradient-to-r from-transparent via-hud-primary/60 to-transparent rounded-full"></div>
            </div>
            
            {/* Volumetric Light from Below */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-32 bg-gradient-to-t from-hud-primary/20 via-hud-primary/10 to-transparent rounded-full blur-xl"></div>
            
            {/* Character Image */}
            <motion.div
              className="relative z-10 w-full h-full flex items-end justify-center"
              animate={{ 
                y: [0, -8, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <img 
                src="/images/posiprofwb.png"
                alt="Posibabu Yalla - System Engineer"
                className="w-72 h-80 object-contain object-bottom"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(0,245,255,0.3)) drop-shadow(0 0 40px rgba(0,245,255,0.1))',
                  maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)'
                }}
              />
            </motion.div>
            
            {/* Rim Light Effects */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-56 h-64 bg-gradient-to-b from-hud-primary/10 via-transparent to-transparent rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-40 h-48 bg-gradient-to-b from-hud-primary/20 via-transparent to-transparent rounded-full blur-xl pointer-events-none"></div>
          </div>
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="text-2xl font-orbitron font-bold text-hud-primary neon-text mb-2">
              POSIBABU YALLA
            </div>
            <div className="text-sm font-mono text-hud-muted">
              SYSTEM ENGINEER / SOFTWARE DEVELOPER
            </div>
          </motion.div>
        </div>
        
        {/* Right Panel - Ability & System Skills */}
        <div className="order-3">
          <AbilitySystemSkills />
        </div>
      </div>
      
      {/* Bottom Panel - System Metrics */}
      <div className="flex-shrink-0 mt-4">
        <SystemMetrics />
      </div>
      
      {/* Action Controls */}
      <div className="flex-shrink-0 mt-4 border-t border-hud-border pt-4">
        <ActionControls onNavigate={onNavigate} />
      </div>
    </div>
  )
}

export default AboutCoreProfile