export default function HeaderHero() {
  return (
    <header className="relative text-[#eef2f8] bg-[linear-gradient(180deg,rgba(20,49,75,1)_0%,rgba(32,75,114,1)_100%)] py-[6vw]">
      <div className="max-w-[1800px] mx-auto px-[10vw]">
        <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between text-center md:text-left gap-6">
          <div className="flex flex-col items-center md:items-center justify-center mx-auto">
            <h1 className="font-extrabold drop-shadow-[5px_5px_10px_rgba(0,0,0,0.4)] text-[max(5vw,4rem)]">
              Thomas Canning
            </h1>
            <p className="text-[#eef2f8] text-[clamp(1rem,2.5vw,1.5rem)]">
              Computer Science BSc Student and Software Engineer
            </p>
            <div className="mt-4 flex items-center justify-center text-white">
              <a
                href="https://github.com/ThomasCanning/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex items-center font-bold mx-2 text-[min(1.2vw,1rem)] hover:underline"
              >
                <i className="fab fa-github mr-2 text-[1.2rem]"></i>
                <div>GitHub</div>
              </a>
              <span className="mx-2 text-white">|</span>
              <a
                href="https://www.linkedin.com/in/thomasjcanning/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex items-center font-bold mx-2 text-[min(1.2vw,1rem)] hover:underline"
              >
                <i className="fab fa-linkedin mr-2 text-[1.2rem]"></i>
                <div>LinkedIn</div>
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center rounded-full p-2 overflow-hidden w-[60%] md:w-[min(40%,700px)] md:h-[min(40%,800px)] md:rounded-full mx-[6vw]">
            <img
              className="w-full h-full object-cover rounded-full shadow-[0_0_15px_rgba(0,0,0,0.3)]"
              src="/img/personal_portrait.png"
              alt="Your Photo"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
