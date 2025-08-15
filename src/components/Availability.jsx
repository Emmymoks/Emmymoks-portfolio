export default function Availability({ status='open', note='Taking new projects' }){
  const color = status === 'open' ? 'bg-green-400' : 'bg-red-500'
  return (
    <div className="inline-flex items-center gap-2 text-sm px-3 py-1 rounded-full border border-white/10 bg-white/5">
      <span className={`w-2.5 h-2.5 rounded-full ${color}`}></span>
      <span>{note}</span>
    </div>
  )
}
