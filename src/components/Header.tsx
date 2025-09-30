export default function Header() {
  const links = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#education', label: 'Education' },
    { href: '#work-experience', label: 'Work Experience' },
  ]
  return (
    <header className="bg-brand text-on-brand">
      <nav className="mx-auto max-w-[1800px] px-[10vw]">
        <ul className="flex items-center gap-4 py-3 text-[0.95rem]">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="inline-block px-3 py-1 rounded hover:bg-[color:var(--color-surface)]/10 focus:bg-[color:var(--color-surface)]/10 focus:outline-none"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <h1 className="bg-"></h1>
    </header>
  )
}
