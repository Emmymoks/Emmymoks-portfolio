import { useEffect, useRef, useState } from 'react'

const data = [
  { name: 'Amaka N.', role: 'Product Manager — Nuture', quote: 'Emmanuel balances aesthetics with performance. Our web dashboard feels delightful and fast.', avatar: '/avatars/1.svg' },
  { name: 'Chinedu K.', role: 'Founder — Foodly', quote: 'Pixel-perfect UI, smooth animations, and clean code. Could not ask for more.', avatar: '/avatars/2.svg' },
  { name: 'Sarah O.', role: 'CMO — Koyi Labs', quote: 'Brand refresh and website redesign were a hit. Traffic and conversions improved.', avatar: '/avatars/3.svg' },
]

export default function Testimonials(){
  const [i, setI] = useState(0)
  const intervalRef = useRef(null)
  useEffect(() => {
    intervalRef.current = setInterval(() => setI(v => (v+1)%data.length), 4500)
    return () => clearInterval(intervalRef.current)
  }, [])
  return (
    <div className="overflow-hidden relative">
      <div className="flex transition-transform duration-700" style={{transform:`translateX(-${i*100}%)`}}>
        {data.map((t,idx) => (
          <div key={idx} className="min-w-full">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 flex items-center gap-4">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-white/10"/>
              <div>
                <p className="text-neutral-300 italic">“{t.quote}”</p>
                <p className="text-sm mt-2 text-neutral-400">{t.name} • {t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
