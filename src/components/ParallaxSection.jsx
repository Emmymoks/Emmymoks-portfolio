import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function ParallaxSection({ children }){
  useEffect(() => {
    const els = gsap.utils.toArray('[data-parallax]')
    els.forEach((el, idx) => {
      gsap.fromTo(el, { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%' }
      })
    })
  }, [])
  return (<div data-parallax>{children}</div>)
}
