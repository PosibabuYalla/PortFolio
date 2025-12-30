import { useState, Suspense, useRef } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, OrbitControls, Environment } from '@react-three/drei'
import { FaReact, FaNodeJs, FaPhp, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaWordpress } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiMongoose, SiPostman, SiFigma, SiVercel, SiNetlify, SiCpanel } from 'react-icons/si'
import { BiData } from 'react-icons/bi'
import { MdShoppingCart } from 'react-icons/md'

const skills = {
  frontend: [
    { name: "React.js", icon: FaReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "JavaScript", icon: FaJs }
  ],
  backend: [
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express.js", icon: SiExpress },
    { name: "PHP", icon: FaPhp }
  ],
  database: [
    { name: "MongoDB", icon: SiMongodb },
    { name: "SQL", icon: BiData },
    { name: "Mongoose", icon: SiMongoose }
  ],
  tools: [
    { name: "WordPress", icon: FaWordpress },
    { name: "WooCommerce", icon: MdShoppingCart },
    { name: "Git", icon: FaGitAlt },
    { name: "GitHub", icon: FaGithub },
    { name: "Postman", icon: SiPostman },
    { name: "Figma", icon: SiFigma },
    { name: "Vercel", icon: SiVercel },
    { name: "Netlify", icon: SiNetlify },
    { name: "cPanel", icon: SiCpanel }
  ]
}

const ParticleSystem = () => {
  const particlesRef = useRef()
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })
  
  return (
    <group ref={particlesRef}>
      {[...Array(200)].map((_, i) => {
        const phi = Math.acos(-1 + (2 * i) / 200)
        const theta = Math.sqrt(200 * Math.PI) * phi
        const radius = 2.5 + (Math.random() - 0.5) * 0.5
        
        return (
          <mesh 
            key={i}
            position={[
              radius * Math.cos(theta) * Math.sin(phi),
              radius * Math.cos(phi),
              radius * Math.sin(theta) * Math.sin(phi)
            ]}
          >
            <sphereGeometry args={[0.015, 4, 4]} />
            <meshBasicMaterial color="#FFD700" opacity={0.6} transparent />
          </mesh>
        )
      })}
    </group>
  )
}

const BrainModel = ({ activePanel, mousePosition }) => {
  const { scene } = useGLTF('/models/brain.glb')
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      // Continuous slow rotation
      meshRef.current.rotation.y += 0.003
      
      // Mouse interaction overlay
      if (mousePosition) {
        meshRef.current.rotation.x = mousePosition.y * Math.PI + state.clock.elapsedTime * 0.05
        meshRef.current.rotation.y += mousePosition.x * 0.1
      }
    }
  })
  
  return (
    <primitive 
      ref={meshRef}
      object={scene} 
      scale={2}
      rotation={[0, 0, 0]}
    />
  )
}

const BrainCore = ({ activePanel, mousePosition }) => {
  return (
    <motion.group
      animate={{ 
        rotateY: activePanel ? 0 : Math.PI * 2,
        rotateX: activePanel === 'frontend' ? -0.2 : activePanel === 'backend' ? 0.2 : activePanel === 'database' ? -0.1 : activePanel === 'tools' ? 0.1 : 0
      }}
      transition={{ 
        rotateY: { duration: activePanel ? 0 : 12, repeat: activePanel ? 0 : Infinity, ease: "linear" },
        rotateX: { duration: 0.5 }
      }}
    >
      <Suspense fallback={null}>
        <BrainModel activePanel={activePanel} mousePosition={mousePosition} />
      </Suspense>
      
      <ParticleSystem />
    </motion.group>
  )
}

const SkillPanel = ({ title, skills, position, onHover, onLeave }) => {
  return (
    <motion.div 
      className={`border border-[#00B4D8]/30 rounded-lg p-2 sm:p-3 bg-[#0F172A] h-full flex flex-col ${position}`}
      onMouseEnter={() => onHover(title.toLowerCase())}
      onMouseLeave={onLeave}
      whileHover={{ borderColor: '#00B4D8', boxShadow: '0 0 20px rgba(0,180,216,0.3)' }}
    >
      {/* Fixed Header */}
      <div className="flex items-center gap-1 sm:gap-2 mb-2 h-4 sm:h-5">
        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#00B4D8] rounded-full animate-pulse"></div>
        <div className="text-xs font-mono text-[#00B4D8] tracking-wider">
          {title.toUpperCase()}_SYS
        </div>
      </div>
      
      {/* Skill Grid Container */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#00B4D8]/30">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
            {skills.map((skill, i) => {
              const IconComponent = skill.icon
              return (
                <motion.div
                  key={skill.name}
                  className="bg-[#0A0F14] p-1 sm:p-1.5 rounded border border-[#00B4D8]/20 relative group cursor-pointer flex items-center justify-center h-6 sm:h-8"
                  whileHover={{ 
                    borderColor: '#00B4D8',
                    backgroundColor: 'rgba(0,180,216,0.1)'
                  }}
                  title={skill.name}
                >
                  <IconComponent className="text-[#9CA3AF] group-hover:text-[#00B4D8] text-sm sm:text-lg" />
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-1.5 py-0.5 bg-[#0F172A] border border-[#00B4D8] rounded text-xs text-[#E5E7EB] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-20">
                    {skill.name}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const SkillsMatrix = ({ isActive }) => {
  const [activePanel, setActivePanel] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHoveringBrain, setIsHoveringBrain] = useState(false)

  const handleBrainMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1
    const y = -((event.clientY - rect.top) / rect.height) * 2 + 1
    setMousePosition({ x, y })
  }

  return (
    <div className="h-full bg-[#0A0F14] relative">
      
      {/* Grid Layout */}
      <div className="h-full grid grid-cols-1 md:grid-cols-3 grid-rows-5 md:grid-rows-2 gap-2 sm:gap-4 p-2 sm:p-4">
        
        {/* Top Left - Frontend */}
        <SkillPanel 
          title="Frontend"
          skills={skills.frontend}
          position=""
          onHover={setActivePanel}
          onLeave={() => setActivePanel(null)}
        />
        
        {/* Center - Brain Core (spans 2 rows on desktop, 1 row on mobile) */}
        <div 
          className="md:row-span-2 border border-[#00B4D8]/30 rounded-lg bg-[#0F172A] flex flex-col items-center justify-center"
          onMouseEnter={() => setIsHoveringBrain(true)}
          onMouseLeave={() => {
            setIsHoveringBrain(false)
            setMousePosition({ x: 0, y: 0 })
          }}
          onMouseMove={handleBrainMouseMove}
        >
          <div className="w-full h-full flex flex-col items-center justify-center">
            <Canvas 
              camera={{ position: [0, 0, 4], fov: 50 }}
              gl={{ antialias: true, alpha: true }}
            >
              <ambientLight intensity={0.6} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <pointLight position={[-10, -10, -5]} intensity={0.5} color="#00B4D8" />
              <BrainCore activePanel={activePanel} mousePosition={isHoveringBrain ? mousePosition : null} />
            </Canvas>
          </div>
          <div className="text-xs sm:text-sm font-mono text-[#00B4D8] mb-2 sm:mb-4 tracking-wider">
            CORE_SKILL_ENGINE
          </div>
        </div>
        
        {/* Top Right - Database */}
        <SkillPanel 
          title="Database"
          skills={skills.database}
          position=""
          onHover={setActivePanel}
          onLeave={() => setActivePanel(null)}
        />
        
        {/* Bottom Left - Backend */}
        <SkillPanel 
          title="Backend"
          skills={skills.backend}
          position=""
          onHover={setActivePanel}
          onLeave={() => setActivePanel(null)}
        />
        
        {/* Bottom Right - Tools */}
        <SkillPanel 
          title="Tools"
          skills={skills.tools}
          position=""
          onHover={setActivePanel}
          onLeave={() => setActivePanel(null)}
        />
        
      </div>
      
    </div>
  )
}

export default SkillsMatrix