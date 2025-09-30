import { useState } from 'react'

export default function SiteFooter() {
  const email = 'tom@thomascanning.co.uk'
  const [copied, setCopied] = useState(false)

  async function copyEmailToClipboard() {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback if clipboard API is unavailable
      setCopied(false)
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <footer className="text-[color:var(--color-on-brand)] bg-gradient-to-b from-[var(--color-brand-dark)] to-[var(--color-brand)] py-6">
      <div className="max-w-[1800px] mx-auto px-[10vw] flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={copyEmailToClipboard}
            aria-live="polite"
            aria-label={copied ? 'Email copied' : 'Copy email address'}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-[10px] bg-[color:var(--color-surface)]/10 hover:bg-[color:var(--color-surface)]/15 transition-colors text-[0.95rem] font-semibold"
          >
            <i className={`far fa-copy text-[1.1rem] ${copied ? 'opacity-0' : 'opacity-100'} transition-opacity`}></i>
            <span>{copied ? 'Copied!' : email}</span>
          </button>
          <a
            href="https://github.com/ThomasCanning/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-[10px] bg-[color:var(--color-surface)]/10 hover:bg-[color:var(--color-surface)]/15 transition-colors text-[0.95rem] font-semibold"
          >
            <i className="fab fa-github text-[1.1rem]"></i>
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/thomasjcanning/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-[10px] bg-[color:var(--color-surface)]/10 hover:bg-[color:var(--color-surface)]/15 transition-colors text-[0.95rem] font-semibold"
          >
            <i className="fab fa-linkedin text-[1.1rem]"></i>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
