export function Radial({ label, value }){
  const circumference = 2 * Math.PI * 42
  const stroke = (value/100) * circumference
  return (
    <div className="flex flex-col items-center gap-2">
      <svg viewBox="0 0 100 100" className="w-28 h-28">
        <circle cx="50" cy="50" r="42" stroke="rgba(255,255,255,.15)" strokeWidth="8" fill="none"/>
        <circle cx="50" cy="50" r="42" stroke="url(#grad)" strokeWidth="8" fill="none" strokeLinecap="round"
          strokeDasharray={`${stroke} ${circumference}`} transform="rotate(-90 50 50)"/>
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7CFFB2"/>
            <stop offset="100%" stopColor="#39FF14"/>
          </linearGradient>
        </defs>
      </svg>
      <div className="text-sm text-neutral-300">{label} — <span className="font-semibold text-white">{value}%</span></div>
    </div>
  )
}
