import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere } from '@react-three/drei'

const HologramCore = () => {
  return (
    <mesh>
      <torusGeometry args={[1, 0.3, 16, 100]} />
      <meshStandardMaterial 
        color="#00B4D8" 
        emissive="#00B4D8"
        emissiveIntensity={0.2}
        wireframe
      />
    </mesh>
  )
}

const CoreIdentity = () => {
  const [textVisible, setTextVisible] = useState(false)
  const [currentText, setCurrentText] = useState('')
  
  const fullBio = `Versatile and results-driven Software Developer with 1+ years of experience
designing, building, and deploying scalable full-stack applications and
production-grade WordPress plugins. Specialized in React, Node.js, PHP,
MongoDB, and performance optimization. Core contributor to the widely
adopted Click to Chat WhatsApp plugin.`

  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (textVisible) {
      let i = 0
      const typeTimer = setInterval(() => {
        setCurrentText(fullBio.slice(0, i))
        i++
        if (i > fullBio.length) {
          clearInterval(typeTimer)
        }
      }, 30)
      return () => clearInterval(typeTimer)
    }
  }, [textVisible, fullBio])

  return (
    <div className="h-full flex flex-col justify-center items-center relative px-2 sm:px-4">
      
      {/* 3D Hologram Core - Hidden on mobile */}
      <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 hidden sm:block">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <motion.group
            animate={{ rotateY: Math.PI * 2 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          >
            <HologramCore />
          </motion.group>
        </Canvas>
      </div>

      {/* System Status */}
      <motion.div 
        className="absolute top-0 left-0 text-xs font-mono text-hud-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-hud-primary rounded-full animate-pulse"></div>
          <span className="hidden sm:inline">CORE_MODULE_ACTIVE</span>
          <span className="sm:hidden">CORE_ACTIVE</span>
        </div>
      </motion.div>

      {/* Profile Image with Gaming Animation - Hidden on mobile */}
      <motion.div 
        className="absolute top-15 left-2 z-10 hidden sm:block"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="relative w-48 h-48 sm:w-64 sm:h-64">
          {/* Profile image */}
          <motion.img 
            src="/images/posiprofwb.png"
            alt="Posibabu Yalla"
            className="w-64 h-64 sm:w-80 sm:h-80 object-contain grayscale border-hud-primary/50 rounded-lg"
            whileHover={{ 
              scale: 1.05,
              opacity: 1,
              filter: 'blur(0px) grayscale(1)',
            }}
            animate={{
              opacity: [1, 0.8, 0.3, 0.9, 0.1, 0.7, 1],
              filter: ['blur(0px) grayscale(1)', 'blur(1px) grayscale(1)', 'blur(0px) grayscale(1)', 'blur(2px) grayscale(1)', 'blur(0px) grayscale(1)']
            }}
            transition={{
              opacity: { duration: 2, repeat: Infinity, ease: "linear" },
              filter: { duration: 1.5, repeat: Infinity, ease: "linear" }
            }}
          />
        </div>
      </motion.div>

      {/* Core Identity */}
      <div className="text-center space-y-4 sm:space-y-8 max-w-3xl w-full">
        
        <motion.h1 
          className="text-3xl sm:text-4xl lg:text-6xl font-orbitron font-bold text-hud-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          POSIBABU YALLA
        </motion.h1>

        <motion.div 
          className="text-sm sm:text-lg lg:text-2xl font-inter text-hud-text px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Software Developer | MERN Stack | WordPress Plugin Engineer
        </motion.div>

        <motion.div 
          className="text-xs sm:text-sm font-mono text-hud-muted leading-relaxed border border-hud-border rounded-lg p-3 sm:p-6 bg-black/20 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: textVisible ? 1 : 0 }}
          transition={{ delay: 1 }}
        >
          <div className="text-hud-primary mb-2 sm:mb-4 text-left">&gt; SYSTEM_BIO.exe</div>
          <div className="min-h-[100px] sm:min-h-[140px] text-left whitespace-pre-line">
            {currentText}
            {textVisible && currentText.length < fullBio.length && (
              <span className="animate-pulse text-hud-primary">|</span>
            )}
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default CoreIdentity