import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const onSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const name = form.name.value
    const email = form.email.value
    const message = form.message.value

    // Encode WhatsApp message
    const whatsappMessage = encodeURIComponent(
      `Hello, my name is ${name} (from ${email}).\n\n${message}`
    )

    const whatsappURL = `https://wa.me/17154758328?text=${whatsappMessage}`

    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank')

    // Show status and reset form AFTER a tiny delay
    setStatus('Redirecting you to WhatsApp...')
    setTimeout(() => {
      form.reset()
    }, 1000)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="font-display text-4xl mb-6">Contact</h1>
      <form onSubmit={onSubmit} className="max-w-xl space-y-4">
        <input
          name="name"
          required
          placeholder="Name"
          className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10"
        />
        <textarea
          name="message"
          required
          placeholder="Message"
          rows="5"
          className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10"
        ></textarea>
        <button className="px-5 py-3 rounded-xl border border-accent-500 text-neutral-900 bg-accent-500 font-semibold neon-btn">
          Send
        </button>
      </form>
      {status && <p className="mt-4 text-sm text-neutral-300">{status}</p>}
      <div className="mt-8 text-sm text-neutral-300 space-y-1">
        <p>
          Direct email:{' '}
          <a className="underline" href="mailto:Mokwunyeemmanuel@gmail.com">
            Mokwunyeemmanuel@gmail.com
          </a>
        </p>
        <p>
          WhatsApp:{' '}
          <a
            className="underline"
            href="https://wa.me/17154758328"
            target="_blank"
            rel="noopener noreferrer"
          >
            +1 715 475 8328
          </a>
        </p>
      </div>
    </div>
  )
}
