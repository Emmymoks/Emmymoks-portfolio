import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function HeroAnimatedSVG() {
  const svgRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Core floating pulse
      gsap.fromTo(
        '#core',
        { scale: 0.95 },
        { scale: 1.05, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut' }
      )

      // Rotating rings
      gsap.to('#ring1', {
        rotate: 360,
        transformOrigin: '50% 50%',
        duration: 20,
        repeat: -1,
        ease: 'linear'
      })

      gsap.to('#ring2', {
        rotate: -360,
        transformOrigin: '50% 50%',
        duration: 12,
        repeat: -1,
        ease: 'linear'
      })
    }, svgRef)

    // Mouse movement parallax
    const onMove = (e) => {
      const { innerWidth: w, innerHeight: h } = window
      const x = (e.clientX / w - 0.5) * 20
      const y = (e.clientY / h - 0.5) * 20
      gsap.to(svgRef.current, { x, y, duration: 0.6, ease: 'power2.out' })
    }

    window.addEventListener('mousemove', onMove)
    return () => {
      ctx.revert()
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 400 400"
      className="w-full h-[100vh] sm:h-[80vh]"
    >
      <defs>
        {/* Neon gradient */}
        <radialGradient id="neonGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00f7ff" stopOpacity="1" />
          <stop offset="100%" stopColor="#00ff88" stopOpacity="0.3" />
        </radialGradient>

        {/* Outer glow filter */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Pulsing core */}
      <circle
        id="core"
        cx="200"
        cy="200"
        r="45"
        fill="url(#neonGlow)"
        filter="url(#glow)"
      />

      {/* Rotating rings */}
      <g id="ring1">
        <circle
          cx="200"
          cy="200"
          r="90"
          stroke="url(#neonGlow)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="6 12"
        />
      </g>

      <g id="ring2">
        <circle
          cx="200"
          cy="200"
          r="130"
          stroke="url(#neonGlow)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="4 10"
        />
      </g>

      {/* Particle orbs */}
      <g filter="url(#glow)">
        <circle cx="140" cy="120" r="4" fill="#00f7ff" />
        <circle cx="260" cy="150" r="3" fill="#00ff88" />
        <circle cx="170" cy="280" r="5" fill="#00f7ff" />
        <circle cx="230" cy="250" r="4" fill="#00ff88" />
      </g>
    </svg>
  )
}
