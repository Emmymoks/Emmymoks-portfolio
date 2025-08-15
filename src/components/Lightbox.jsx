export default function Lightbox({ open, onClose, children }){
  if(!open) return null
  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
      <div className="max-w-4xl w-full bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden" onClick={(e)=>e.stopPropagation()}>
        <div className="p-3 border-b border-white/10 flex justify-between items-center">
          <span className="uppercase tracking-widest text-xs text-neutral-400">Preview</span>
          <button className="px-2 py-1 text-sm border border-white/10 rounded" onClick={onClose}>Close</button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  )
}
