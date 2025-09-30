import Wave from '../Wave'

export default function WorkExperienceSection() {
  return (
    <section id="work-experience" className="relative scroll-mt-24 bg-[color:var(--color-brand-muted)] flex flex-col items-start min-h-[400px] pt-[12rem] px-[10vw] pb-12">
      <Wave fill="var(--color-brand-mid)" />
      <div className="w-full max-w-[1800px] mx-auto">
        <h2 className="mt-[-3.5rem] mb-4 text-[3.2rem] bg-[linear-gradient(252deg,var(--color-accent-strong)_0%,var(--color-deep)_100%)] bg-clip-text text-transparent">
          Work Experience
        </h2>

        <h3 id="confluent-internship" className="text-[1.6rem] font-normal text-body"><strong>Software Engineering Internship</strong> - Confluent (05/2024 - 05/2025)</h3>
        <p className="text-[1.4rem] text-body">
          I am currently on a software engineering internship at Confluent, working as a cloud infrastructure engineer within the Kubernetes platform team –
          the team that manages the Kubernetes clusters running Confluent Cloud, a Kafka-based real-time data streaming service.
          I’ve gained hands-on experience with Kubernetes, Golang, Linux, Git commands, Terraform, AWS, GCP, Azure, Docker, and Helm, by delivering several projects, including:
        </p>
        <ul className="list-[square] mt-4 ml-6 text-body text-[1.4rem]">
          <li>Reducing Datadog metric cardinality, resulting in approximately $30,000/month savings.</li>
          <li>Resolving an Azure Storage Accounts quota monitoring issue by creating new metrics and unit tests using Go.</li>
          <li>Migrating several internal app installations from Terraform to Flux using Helm charts and kubectl.</li>
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
