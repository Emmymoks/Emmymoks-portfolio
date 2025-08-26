import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function HeroAnimatedSVG() {
  const svgRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Core pulse animation
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

      // Floating particles animation
      const particles = gsap.utils.toArray('.particle')
      particles.forEach((particle) => {
        gsap.to(particle, {
          x: 'random(-30, 30)',
          y: 'random(-30, 30)',
          opacity: 'random(0.3, 1)',
          scale: 'random(0.6, 1.2)',
          duration: 'random(3, 6)',
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        })
      })

      // Nebula pulse
      gsap.to('#nebula', {
        scale: 1.1,
        opacity: 0.6,
        duration: 6,
        repeat: -1,
        yoyo: true,
        transformOrigin: '50% 50%',
        ease: 'sine.inOut'
      })
    }, svgRef)

    // Parallax & scroll-based warp
    const onMove = (e) => {
      const { innerWidth: w, innerHeight: h } = window
      const x = (e.clientX / w - 0.5) * 20
      const y = (e.clientY / h - 0.5) * 20
      gsap.to(svgRef.current, { x, y, duration: 0.6, ease: 'power2.out' })
    }

    const onScroll = () => {
      const scrollY = window.scrollY
      const warp = scrollY * 0.05 // more scroll → more warp
      gsap.to('.particle', {
        x: (i) => `+=${(Math.random() - 0.5) * warp}`,
        y: (i) => `+=${(Math.random() - 0.5) * warp}`,
        duration: 1,
        ease: 'power1.out'
      })
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('scroll', onScroll)

    return () => {
      ctx.revert()
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('scroll', onScroll)
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

        {/* Nebula gradient */}
        <radialGradient id="nebulaGrad" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#0ff" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#006" stopOpacity="0" />
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

      {/* Nebula background */}
      <circle
        id="nebula"
        cx="200"
        cy="200"
        r="160"
        fill="url(#nebulaGrad)"
        opacity="0.4"
      />

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

      {/* Floating neon particles */}
      <g filter="url(#glow)">
        {Array.from({ length: 15 }).map((_, i) => (
          <circle
            key={i}
            className="particle"
            cx={Math.random() * 400}
            cy={Math.random() * 400}
            r={Math.random() * 4 + 2}
            fill={Math.random() > 0.5 ? '#00f7ff' : '#00ff88'}
            opacity="0.6"
          />
        ))}
      </g>
    </svg>
  )
}
