/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(rgba(0,245,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.1) 1px, transparent 1px)',
        'neon-glow': 'radial-gradient(circle at center, rgba(0,245,255,0.3) 0%, transparent 70%)',
        'hologram': 'linear-gradient(45deg, rgba(0,245,255,0.1) 0%, rgba(255,20,147,0.1) 50%, rgba(57,255,20,0.1) 100%)',
      },
      colors: {
        'hud-bg': '#0A0F14',
        'hud-panel': 'rgba(15, 23, 42, 0.8)',
        'hud-primary': '#00F5FF',
        'hud-secondary': '#FF6B35',
        'hud-accent': '#FFD700',
        'hud-success': '#00FF88',
        'hud-warning': '#FF4081',
        'hud-purple': '#8B5CF6',
        'hud-text': '#FFFFFF',
        'hud-muted': '#B0BEC5',
        'hud-border': 'rgba(0,245,255,0.6)',
        'neon-blue': '#00F5FF',
        'neon-pink': '#FF1493',
        'neon-green': '#39FF14',
        'neon-orange': '#FF6600',
        'neon-purple': '#BF00FF',
        'neon-yellow': '#FFFF00',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'mono': ['JetBrains Mono', 'monospace'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'type': 'type 3s steps(40, end)',
        'grid': 'grid 20s linear infinite',
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite alternate',
        'color-shift': 'color-shift 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-rotate': 'glow-rotate 8s linear infinite',
        'particle-float': 'particle-float 3s ease-in-out infinite',
        'hologram-flicker': 'hologram-flicker 0.1s infinite linear',
        'data-stream': 'data-stream 2s linear infinite',
        'cyber-scan': 'cyber-scan 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%': { boxShadow: '0 0 5px rgba(0,245,255,0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(0,245,255,1), 0 0 60px rgba(255,20,147,0.5)' },
        },
        'type': {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        'grid': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(20px)' },
        },
        'neon-pulse': {
          '0%': { 
            boxShadow: '0 0 5px rgba(0,245,255,0.5), inset 0 0 5px rgba(0,245,255,0.2)',
            borderColor: 'rgba(0,245,255,0.5)'
          },
          '100%': { 
            boxShadow: '0 0 30px rgba(0,245,255,1), 0 0 60px rgba(255,20,147,0.5), inset 0 0 20px rgba(0,245,255,0.3)',
            borderColor: 'rgba(0,245,255,1)'
          },
        },
        'color-shift': {
          '0%': { color: '#00F5FF' },
          '25%': { color: '#FF1493' },
          '50%': { color: '#39FF14' },
          '75%': { color: '#FFD700' },
          '100%': { color: '#00F5FF' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-rotate': {
          '0%': { 
            transform: 'rotate(0deg)',
            filter: 'hue-rotate(0deg)'
          },
          '100%': { 
            transform: 'rotate(360deg)',
            filter: 'hue-rotate(360deg)'
          },
        },
        'particle-float': {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-10px) scale(1.1)' },
        },
        'hologram-flicker': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'data-stream': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        'cyber-scan': {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      }
    },
  },
  plugins: [],
}