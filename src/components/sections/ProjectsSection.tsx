import React, { useMemo, useState } from 'react'
import Wave from '../Wave'

type Project = {
  id: string
  icon: string
  github?: string
  title: string
  subtitle: string
  subsubtitle?: string
  description: React.ReactNode
  screenshots?: { src: string; alt: string }[]
}

const projects: Project[] = [
  {
    id: 'calkeeper',
    icon: '/img/calkeeper/icon.png',
    github: 'https://github.com/Sparky-Software/CalKeeper',
    title: 'CalKeeper',
    subtitle: 'Electrical Test Instrument Logbook App.',
    subsubtitle: 'Mobile app built in Flutter, published to the Google Play Store.',
    description: (
      <>
        CalKeeper is the comprehensive solution for helping UK electricians maintain accurate and up-to-date records of their electrical test instruments. Electrical test instruments must be calibrated every 3 years, and up-to-date records must be kept each month to ensure the instrument remains within calibration tolerance. With CalKeeper, electricians can:
        <ul className="list-[square] mt-4 ml-6 text-body">
          <li>Record instrument insulation, continuity, earth loop, and RCD values, with the flexibility to enter as much or as little detail as needed.</li>
          <li>Export reports for each instrument to PDF at the tap of a button.</li>
          <li>Receive automatic alerts if values deviate from baseline readings.</li>
          <li>Stay on top of testing with notifications for upcoming instrument tests.</li>
          <li>Get started easily with tutorial prompts guiding setup.</li>
        </ul>
        <br />
        The app is built in Flutter, with data stored on the device using Hive. This is my first mobile app released to an app store, and it has taught me a great deal about mobile app design and the process of public release. The app is currently under review on the Google Play Store, and will be released on IOS in early 2025.
      </>
    ),
    screenshots: [
      { src: '/img/calkeeper/s1.png', alt: 'Screenshot 1 - Home Screen' },
      { src: '/img/calkeeper/s2.png', alt: 'Screenshot 2 - PDF export' },
      { src: '/img/calkeeper/s3.png', alt: 'Screenshot 3 - Test overview' },
      { src: '/img/calkeeper/s4.png', alt: 'Screenshot 4 - Settings' },
      { src: '/img/calkeeper/s5.png', alt: 'Screenshot 5 - Tutorial' },
      { src: '/img/calkeeper/s6.png', alt: 'Screenshot 6 - Record values' },
      { src: '/img/calkeeper/s7.png', alt: 'Screenshot 7 - Instrument details' },
      { src: '/img/calkeeper/s8.png', alt: 'Screenshot 8 - Instrument tests' },
    ],
  },
  {
    id: 'options',
    icon: '/img/options_pricer/icon.jpg',
    github: 'https://github.com/ThomasCanning/OptionsPricing',
    title: 'Options Pricer',
    subtitle: 'Options pricing calculator and price visualisation tool.',
    subsubtitle: 'Desktop app built in Python.',
    description:
      'This tool calculates the price of European call and put options, using either the Black-Scholes formula or the binomial pricing model. The models are based on the book "Options, Futures, and Other Derivatives" by John C. Hull (5th edition). Additionally, you can plot each variable against the options call or put price to visualize the impact of each variable on the option price. The app is built in Python, with a Tkinter GUI. The binomial pricing model uses numpy for calculations, and the graphs are plotted with matplotlib. The calculator calls the alpha-vantage API to get the current 10-year US treasury yield rate for the default value for risk-free rate. This project was a great way of improving my understanding of option pricing models, and the mathematics behind them.',
    screenshots: [
      { src: '/img/options_pricer/s1.png', alt: 'Screenshot 1 - Call price' },
      { src: '/img/options_pricer/s2.png', alt: 'Screenshot 2 - Put price' },
    ],
  },
  {
    id: 'amaze',
    icon: '/img/amaze/icon.jpg',
    github: 'https://github.com/ThomasCanning/Amaze',
    title: 'Amaze',
    subtitle: 'Visualisation tool for graph search algorithms.',
    subsubtitle: 'Desktop app built in Java.',
    description:
      'Amaze is a visualisation tool for graph search algorithms. You are given a 25 by 25 grid and can create a maze of wall pieces with a start and end tile. You are then able to select a pathfinding algorithm (A*, depth first search, breadth first search, or random search) and display the path it finds. You can also choose to display all the nodes that the algorithm visits in the process of finding the path. This allows you to compare the path found by different algorithms, as well as see a rough time comparison for the time it takes to run. You can also save your created maze so it will be there next time the programme runs. This was a very useful project for understanding how graph search algorithms work.',
    screenshots: [
      { src: '/img/amaze/s1.png', alt: 'Screenshot 1 - A* search' },
      { src: '/img/amaze/s2.png', alt: 'Screenshot 2 - Depth-first search' },
      { src: '/img/amaze/s3.png', alt: 'Screenshot 3 - Breadth-first search' },
      { src: '/img/amaze/s4.png', alt: 'Screenshot 4 - Random search' },
      { src: '/img/amaze/s5.png', alt: 'Screenshot 5 - A* showing all nodes searched' },
      { src: '/img/amaze/s6.png', alt: 'Screenshot 6 - Depth first showing all nodes searched' },
    ],
  },
  {
    id: 'hangman',
    icon: '/img/hangman/icon.jpg',
    github: 'https://github.com/ThomasCanning/Hangman',
    title: 'Hangman',
    subtitle: 'A single and multiplayer graphical hangman game.',
    subsubtitle: 'Desktop app built in Java.',
    description:
      'This is a classical hangman game - guess the word without too many incorrect guesses or the man gets hung. In single-player, the word is a country, selected randomly from a text file, the player has 6 guesses to guess the word, with each incorrect guess bringing the man 1 step closer to being hung. Try to beat your highscore, which the game keeps track of by writing to a local file. There is also multiplayer mode, where players alternate between picking and guessing a word. I learnt lots about Java and developing a GUI in this project.',
    screenshots: [
      { src: '/img/hangman/s1.png', alt: 'Screenshot 1 - Main game screen' },
      { src: '/img/hangman/s2.png', alt: 'Screenshot 2 - End of game screen' },
      { src: '/img/hangman/s3.png', alt: 'Screenshot 3 - End of round screen' },
      { src: '/img/hangman/s4.png', alt: 'Screenshot 4 - Multiplayer mode' },
    ],
  },
  {
    id: 'racket_ready',
    icon: '/img/racket_ready/icon.jpg',
    github: 'https://github.com/ESP-Number-One/RacketReady',
    title: 'Racket Ready',
    subtitle: 'Racket-sports matchmaking app.',
    subsubtitle: 'Progressive web-app for mobile built in Typescript and React.',
    description:
      'I contributed to the development of Racket Ready as part of the Experimental Systems Project module during my second year at university. This year-long software engineering module involved developing a solution to a problem in the hobbies domain as part of a team of eight. Racket Ready helps players find the ideal racket-sports partner by matching them based on skill level and availability. It also features a league system which challenges players to climb the ranks. I worked on the frontend of the app, developing components in React and Typescript. This project provided valuable experience in developing software in a team, and deepened my understanding of the software engineering lifecycle.',
    screenshots: [
      { src: '/img/racket_ready/s1.png', alt: 'Screenshot 1 - Player profile' },
      { src: '/img/racket_ready/s2.png', alt: 'Screenshot 2 - Proposed matches' },
      { src: '/img/racket_ready/s3.png', alt: 'Screenshot 3 - Upcoming matches' },
      { src: '/img/racket_ready/s4.png', alt: 'Screenshot 4 - Leagues' },
    ],
  },
]

export default function ProjectsSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const selectedProject = useMemo(
    () => projects.find((p) => p.id === selectedId) ?? null,
    [selectedId],
  )

  return (
    <section id="projects" className="relative scroll-mt-24 bg-brand-mid flex flex-col items-start min-h-[400px] pt-[12rem] px-[10vw] pb-12">
      <Wave fill="var(--color-brand-muted)" />
      <div className="w-full max-w-[1800px] mx-auto">
        <h2 className="mt-[-3.5rem] mb-4 text-[3.2rem] font-extrabold bg-gradient-to-tr from-[var(--color-accent-strong)] to-[var(--color-deep)] bg-clip-text text-transparent">
          Personal Projects
        </h2>

        {/* Top featured area */}
        <div className="py-4 w-full min-h-0">
          <div className="w-full">
            {selectedProject ? (
              <ProjectCard project={selectedProject} expanded onToggle={() => setSelectedId(null)} />
            ) : null}
          </div>
        </div>

        {/* Bottom grid of projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-4 w-full">
          {projects.filter((p) => p.id !== selectedId).map((p) => (
            <ProjectCard
              key={p.id}
              project={p}
              expanded={false}
              onToggle={() => setSelectedId(p.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  expanded,
  onToggle,
}: {
  project: Project
  expanded?: boolean
  onToggle?: () => void
}) {
  const handleLinkClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    // Prevent toggling card when clicking GitHub link
    e.stopPropagation()
  }

  return (
    <div
      className={`bg-panel border border-panel rounded-[8px] p-4 flex items-start gap-4 shadow-[0_4px_8px_var(--color-shadow-stronger)] transition-transform ${
        expanded ? 'cursor-pointer' : 'cursor-pointer hover:scale-[1.05]'
      }`}
      onClick={onToggle}
    >
      <div className="w-[150px] shrink-0 flex flex-col items-center justify-center">
        <img
          src={project.icon}
          alt="Project Icon"
          className="w-full h-full object-cover rounded"
        />
        {project.github && !expanded && (
          <div className="mt-2 flex items-center text-[1.2rem] font-bold text-body">
            <i className="fab fa-github mr-2"></i>
            <a href={project.github} target="_blank" rel="noreferrer" className="hover:underline" onClick={handleLinkClick}>
              GitHub
            </a>
          </div>
        )}
      </div>

      <div className="flex-1">
        <div className="text-[1.8rem] font-bold text-body">{project.title}</div>
        <div className="text-[1.4rem] text-body">{project.subtitle}</div>
        {project.subsubtitle && (
          <div className="text-[1.2rem] text-body leading-7"><em>{project.subsubtitle}</em></div>
        )}

        {expanded && (
          <div className="mt-2 text-[1.2rem] text-body">
            {project.github && (
              <div className="mb-2 flex items-center text-[1.2rem] font-bold text-body">
                <i className="fab fa-github mr-2"></i>
                <a href={project.github} target="_blank" rel="noreferrer" className="hover:underline" onClick={handleLinkClick}>
                  GitHub
                </a>
              </div>
            )}
            <div>{project.description}</div>
            {!!project.screenshots?.length && (
              <div className="mt-4 grid gap-4"
                style={{
                  gridTemplateColumns:
                    project.id === 'calkeeper'
                      ? 'repeat(4,1fr)'
                      : project.id === 'options'
                      ? 'repeat(2,1fr)'
                      : project.id === 'amaze'
                      ? 'repeat(3,1fr)'
                      : project.id === 'racket_ready'
                      ? 'repeat(4,1fr)'
                      : project.id === 'hangman'
                      ? 'repeat(2,1fr)'
                      : 'repeat(3,1fr)',
                }}
              >
                {project.screenshots.map((s, i) => (
                  <img key={i} src={s.src} alt={s.alt} className="w-full h-auto rounded-lg shadow-[0_4px_8px_var(--color-shadow-light)]" />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
