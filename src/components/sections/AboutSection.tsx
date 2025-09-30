import Wave from '../Wave'
export default function AboutSection() {
  return (
    <section id="about" className="relative scroll-mt-24 bg-brand-muted flex flex-col items-start min-h-[400px] pt-[12rem] px-[10vw] pb-12">
      <Wave fill="var(--color-brand)" />
      <div className="w-full max-w-[1800px] mx-auto">
        <h2 className="mt-[-3.5rem] mb-4 text-[3.2rem] bg-[linear-gradient(252deg,var(--color-accent-strong)_0%,var(--color-deep)_100%)] bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-[1.4rem] text-body">
          Bringing an attitude of seeing hard work and growth as the end goal, I'm a Computer Science student at the University of Bath dedicated to pursuing every opportunity to learn as I grow my career in technology. Currently honing my programming and problem-solving skills as a Software Engineer at Confluent during my year in industry, I've gained significant experience as a full stack engineer, working with kubernetes, go, and react. I thrive in fast-paced environments that give me room to innovate and am incredibly eager to pursue any opportunity where I can grow my skillset and apply what I am learning to get results.
        </p>
      </div>
    </section>
  )
}
