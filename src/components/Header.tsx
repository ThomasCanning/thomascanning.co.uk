export default function Header() {
  const links = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#education', label: 'Education' },
    { href: '#work-experience', label: 'Work Experience' },
  ]
  return (
    <header className="text-[color:var(--color-on-brand)] bg-gradient-to-b from-[var(--color-brand-dark)] to-[var(--color-brand)]">
      <nav className="mx-auto max-w-[1800px] px-[10vw]">
        <div className="flex items-center justify-between py-3">
          <div className="flex-1 min-w-0">
            <ul className="flex items-center gap-1.5 md:gap-4 text-[0.9rem] md:text-[0.95rem] overflow-x-auto">
              {links.map((l) => (
                <li key={l.href} className={l.href === '#about' ? 'hidden sm:block' : undefined}>
                  <a
                    href={l.href}
                    className="inline-block px-2 md:px-3 py-1 rounded whitespace-nowrap font-semibold text-[color:var(--color-on-brand)]/90 hover:text-[color:var(--color-on-brand)] hover:bg-[color:var(--color-surface)]/10 focus:bg-[color:var(--color-surface)]/10 focus:outline-none transition-colors underline-offset-4 hover:underline"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:flex items-center gap-3 shrink-0">
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
      </nav>
      <h1 className="bg-"></h1>
    </header>
  )
}
