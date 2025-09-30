import Wave from '../Wave'

export default function WorkExperienceSection() {
  return (
    <section id="work-experience" className="relative scroll-mt-24 bg-brand-mid flex flex-col items-start min-h-[400px] pt-[12rem] px-[10vw] pb-12">
      <Wave fill="var(--color-brand-muted)" />
      <div className="w-full max-w-[1800px] mx-auto">
        <h2 className="mt-[-3.5rem] mb-4 text-[3.2rem] font-extrabold bg-gradient-to-tr from-[var(--color-accent-strong)] to-[var(--color-deep)] bg-clip-text text-transparent">
          Work Experience
        </h2>

        <h3 id="confluent-internship" className="text-[1.6rem] font-normal text-body"><strong>Software Engineer (Placement Year)</strong> - Confluent (06/2024 - 08/2025)</h3>
        <p className="text-[1.4rem] text-body">
          Completed a 14+ month placement in Confluent’s Kubernetes platform team. I joined as a Cloud Infrastructure Engineer and grew into a full‑stack role,
          helping shape continuous deployment by building a platform that automates company‑wide artifact delivery pipelines and taking ownership of its UI.
          Working in a small Agile sub‑team, I gained hands‑on experience with Kubernetes, Golang, Linux, Terraform, AWS/GCP/Azure, Docker, and Helm. Projects included:
        </p>
        <ul className="list-[square] mt-4 ml-6 text-body text-[1.4rem]">
          <li>Reduced Datadog metric cardinality, saving approximately $30,000 per month.</li>
          <li>Resolved Azure Storage Accounts quota monitoring by adding new metrics and unit tests in Go.</li>
          <li>Migrated internal app installations from Terraform to Flux using Helm charts and kubectl.</li>
        </ul>

        <h3 className="mt-4 text-[1.6rem] font-normal text-body"><strong>Peer Assisted Learning Leader</strong> - University of Bath (09/2023 - 05/2024)</h3>
        <p className="mb-6 text-[1.4rem] text-body">
          I volunteered to lead multiple tutorial-style sessions per week, as part of a team, to the 1st year Computer Science cohort, recapping all the material learnt in lectures, getting regular experience presenting to a large group, alongside keeping the Computer Science content I learnt in 1st year fresh in my memory.
        </p>

        <h3 className="text-[1.6rem] font-normal text-body"><strong>Outdoor Activities Instructor</strong> - Hautbois Activity Centre (04/2022 - 06/2024)</h3>
        <p className="text-[1.4rem] text-body">
          I led a variety of outdoor activities to groups of young people, taking responsibility for participants, instructing with enthusiasm and maintaining high standards. I encouraged teamwork amongst groups, and often worked collaboratively with other instructors.
        </p>
      </div>
    </section>
  )
}
