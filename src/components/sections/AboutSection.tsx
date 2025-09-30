import Wave from '../Wave'
export default function AboutSection() {
  return (
    <section id="about" className="relative scroll-mt-24 bg-brand-muted flex flex-col items-start min-h-[400px] pt-[12rem] px-[10vw] pb-12">
      <Wave fill="var(--color-brand)" />
      <div className="w-full max-w-[1800px] mx-auto">
        <h2 className="mt-[-3.5rem] mb-4 text-[3.2rem] font-extrabold bg-gradient-to-tr from-[var(--color-accent-strong)] to-[var(--color-deep)] bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-[1.4rem] text-body">
          Bringing an attitude of seeing hard work and learning as my primary goal, I am a final-year Computer Science student at the University of Bath, dedicated to pursuing competitive opportunities in the tech industry. Over 14 months at Confluent as a full-stack software engineer, I gained experience in cloud, Kubernetes, and React. Combined with a strong mathematical foundation and extensive programming experience through personal and group projects, I thrive in fast-paced environments that give me room to innovate and challenge me to grow.
        </p>
      </div>
    </section>
  )
}
