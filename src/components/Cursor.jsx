import { useEffect, useRef } from 'react'

export default function Cursor(){
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    const move = (e) => {
      const { clientX:x, clientY:y } = e
      dot.current.style.transform = `translate(${x-4}px, ${y-4}px)`
      ring.current.style.left = x + 'px'
      ring.current.style.top = y + 'px'
    }
    const enter = () => ring.current.style.transform = 'translate(-50%, -50%) scale(0.8)'
    const leave = () => ring.current.style.transform = 'translate(-50%, -50%) scale(1)'
    window.addEventListener('mousemove', move)
    document.querySelectorAll('a,button,[data-hover]').forEach(el => {
      el.addEventListener('mouseenter', enter)
      el.addEventListener('mouseleave', leave)
    })
    return () => {
      window.removeEventListener('mousemove', move)
    }
  }, [])

  return (<>
    <div className="cursor-dot" ref={dot}></div>
    <div className="cursor-ring" ref={ring}></div>
  </>)
}
