import React, { useEffect, useRef, useState } from 'react'

// Simple rule-based AI chat component (no external APIs)
export default function AIChat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hi — I'm an assistant. Ask me about Emmanuel's projects, skills, contact info, or resume." }
  ])
  const [value, setValue] = useState('')
  const listRef = useRef(null)

  useEffect(() => {
    // scroll to bottom on new message
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight
    }
  }, [messages, open])

  function pushMessage(from, text) {
    setMessages((m) => [...m, { from, text }])
  }

  function getBotResponse(text) {
    if (!text || !text.trim()) return "Say something — I'm listening."
    const t = text.toLowerCase()

    if (/(hello|hi|hey)\b/.test(t)) return 'Hello! 👋 How can I help you today? You can ask about projects, skills, contact, or resume.'
    if (/(project|portfolio|work|example)/.test(t)) {
      return "I have multiple projects showcased on the portfolio page. Try 'Show me your projects' or go to /#/portfolio to view them."
    }
    if (/(contact|email|reach|hire)/.test(t)) {
      return "You can contact Emmanuel via the contact page or download the resume at /public/my-resume.pdf. The contact page has a form and email links."
    }
    if (/(skill|tech|stack|tools)/.test(t)) {
      return 'Emmanuel works with modern front-end tools: React, Tailwind CSS, Vite, GSAP and general UI/UX design. Ask about a specific technology for more details.'
    }
    if (/(resume|cv|paper)/.test(t)) {
      return 'The resume is available in the site public folder as `my-resume.pdf` — link: /#/my-resume.pdf or download from the homepage footer.'
    }
    if (/(help|what can you do)/.test(t)) {
      return "I can answer basic questions about Emmanuel's portfolio, projects, skills, contact info, and resume. Try: 'What projects have you built?' or 'How do I contact you?'"
    }
    if (/(thank|thanks)/.test(t)) return "You're welcome — glad to help!"

    // fallback: echo with guidance
    return "I don't fully understand that yet. Ask about projects, skills, contact, or resume."
  }

  function handleSend(e) {
    e && e.preventDefault()
    const text = value.trim()
    if (!text) return
    pushMessage('user', text)
    setValue('')

    // simulate thinking
    setTimeout(() => {
      const bot = getBotResponse(text)
      pushMessage('bot', bot)
    }, 300)
  }

  // quick suggestion buttons
  const suggestions = [
    'Show me your projects',
    'What skills do you have?',
    'How can I contact you?',
    'Where is your resume?'
  ]

  return (
    <div>
      {/* Floating toggle button */}
      <button
        aria-label={open ? 'Close chat' : 'Open chat'}
        onClick={() => setOpen((s) => !s)}
        className="fixed right-4 bottom-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-400 text-neutral-900 shadow-lg neon-btn"
      >
        {open ? '×' : 'AI'}
      </button>

      {/* Chat panel */}
      <div
        className={`fixed right-4 bottom-20 z-50 flex max-h-[75vh] w-[92vw] flex-col overflow-hidden rounded-lg bg-neutral-900 shadow-xl sm:w-80 ${open ? 'block' : 'hidden'}`}
        style={{ border: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-2">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-emerald-400" />
            <div>
              <div className="text-sm font-semibold">Emmanuel (Assistant)</div>
              <div className="text-xs text-neutral-400">Ask me anything</div>
            </div>
          </div>
          <div className="text-xs text-neutral-400">Responsive AI</div>
        </div>

        <div ref={listRef} className="flex-1 overflow-auto px-3 py-3 text-sm">
          {messages.map((m, i) => (
            <div key={i} className={`mb-3 flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`${m.from === 'user' ? 'bg-emerald-600 text-white' : 'bg-neutral-800 text-neutral-200'} max-w-[80%] rounded-lg px-3 py-2`}>{m.text}</div>
            </div>
          ))}
        </div>

        <div className="border-t border-neutral-800 px-3 py-2">
          <div className="mb-2 flex flex-wrap gap-2">
            {suggestions.map((s) => (
              <button key={s} onClick={() => { setValue(s); setTimeout(() => handleSend({ preventDefault: () => {} }), 60) }} className="rounded-full bg-neutral-800 px-3 py-1 text-xs text-neutral-200">
                {s}
              </button>
            ))}
          </div>

          <form onSubmit={handleSend} className="flex gap-2">
            <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Type a question..." className="w-full rounded-md bg-neutral-800 px-3 py-2 text-sm text-neutral-100 outline-none" />
            <button type="submit" className="rounded-md bg-emerald-400 px-3 py-2 text-sm font-semibold text-neutral-900">Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}
