export default function HeaderHero() {
  return (
    <header className="relative text-[color:var(--color-on-brand)] bg-gradient-to-b from-[var(--color-brand-dark)] to-[var(--color-brand)] py-[6vw]">
      <div className="max-w-[1800px] mx-auto px-[10vw]">
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between text-center md:text-left gap-6">
          <div className="flex flex-col items-center md:items-start justify-center mx-auto">
            <h1 className="font-extrabold leading-tight drop-shadow-[0_4px_12px_var(--color-shadow-strong)] text-[clamp(2.75rem,7vw,5rem)] tracking-tight">
              Thomas Canning
            </h1>
            <p className="text-[color:var(--color-on-brand)] text-[clamp(1.1rem,2.2vw,1.6rem)] opacity-90 mt-2">
              University of Bath final year Computer Science BSc Student with 1+ years experience as a Software Engineer at Confluent.
            </p>
            <div className="mt-6 flex items-center justify-center md:justify-start gap-3 text-[color:var(--color-on-brand)]">
              <a
                href="https://github.com/ThomasCanning/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-[10px] bg-[color:var(--color-surface)]/10 hover:bg-[color:var(--color-surface)]/15 transition-colors text-[clamp(0.95rem,1.5vw,1.05rem)] font-semibold"
              >
                <i className="fab fa-github text-[1.25rem]"></i>
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/thomasjcanning/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-[10px] bg-[color:var(--color-surface)]/10 hover:bg-[color:var(--color-surface)]/15 transition-colors text-[clamp(0.95rem,1.5vw,1.05rem)] font-semibold"
              >
                <i className="fab fa-linkedin text-[1.25rem]"></i>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center rounded-full p-2 overflow-hidden w-[85%] sm:w-[75%] md:w-[70%] lg:w-[58%] xl:w-[50%] max-w-[960px] aspect-square md:rounded-full mx-[6vw]">
            <img
              className="w-full h-full object-cover rounded-full shadow-[0_0_20px_var(--color-shadow-medium)]"
              src="/img/personal_portrait.png"
              alt="Portrait Photo"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
