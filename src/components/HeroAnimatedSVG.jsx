import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function HeroAnimatedSVG(){
  const svgRef = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('#blob', { scale: 0.9, rotate: 0 }, { scale: 1.05, rotate: 360, transformOrigin: '50% 50%', duration: 20, repeat: -1, ease: 'none' })
    }, svgRef)
    const onMove = (e) => {
      const { innerWidth:w, innerHeight:h } = window
      const x = (e.clientX / w - 0.5) * 10
      const y = (e.clientY / h - 0.5) * 10
      gsap.to('#blob', { x, y, duration: 0.6, ease: 'power2.out' })
    }
    window.addEventListener('mousemove', onMove)
    return () => { ctx.revert(); window.removeEventListener('mousemove', onMove) }
  }, [])
  return (
    <svg ref={svgRef} viewBox="0 0 300 300" className="w-full h-[100vh] sm:h-[80vh]">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7CFFB2"/>
          <stop offset="100%" stopColor="#39FF14"/>
        </linearGradient>
      </defs>
      <g id="blob" filter="url(#f)">
        <path d="M105.3,13.6c21.9-7.2,48.9,2.3,67.5,17.3s29.6,35.2,33.8,56.9c4.2,21.8,1.9,45.3-9.5,63.7c-11.4,18.4-32.1,31.8-54.6,38.1
        c-22.4,6.4-46.5,5.9-66.9-3.5c-20.4-9.4-36.9-27.6-44.7-49.8c-7.9-22.2-7.1-48.3,3.4-67.8s30.1-33.8,50.9-45s-1.9 0 20.1-10z" fill="url(#g)"/>
      </g>
      <filter id="f">
        <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
        <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"/>
      </filter>
    </svg>
  )
}
