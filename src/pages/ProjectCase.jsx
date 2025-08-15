import { useParams, Link } from 'react-router-dom'
import projects from '../data/projects.js'

export default function ProjectCase(){
  const { slug } = useParams()
  const p = projects.find(x => x.slug===slug)
  if(!p) return <div className="max-w-6xl mx-auto px-4 py-16">Project not found. <Link to="/portfolio" className="underline">Back to portfolio</Link></div>
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-6">
      <Link to="/portfolio" className="text-sm text-neutral-400 underline">← Back to portfolio</Link>
      <h1 className="font-display text-4xl">{p.title}</h1>
      <div className="text-neutral-300 text-sm">
        <p><span className="text-neutral-400">Role:</span> {p.role}</p>
        <p><span className="text-neutral-400">Tools:</span> {p.tools.join(', ')}</p>
        {p.external && <p><a className="underline" href={p.external} target="_blank" rel="noreferrer">Live Demo</a></p>}
        {p.figma && <p><a className="underline" href={p.figma} target="_blank" rel="noreferrer">Figma Prototype</a></p>}
      </div>
      <p className="text-neutral-300">{p.description}</p>
      <div className="grid sm:grid-cols-2 gap-4">
        {p.screens.map((s, i) => <img key={i} src={s} alt={`${p.title} screen ${i+1}`} className="rounded-xl border border-white/10"/>)}
      </div>
    </div>
  )
}
