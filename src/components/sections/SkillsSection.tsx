import { useState } from 'react'
import Wave from '../Wave'

type Skill = { title: string; description: string }

const skills: Skill[] = [
  {
    title: 'Python',
    description:
      'Used Python extensively at university in the AI, machine learning, and visual computing modules, for example to implement machine learning models using numpy and pytorch, and visual computing techniques using OpenCV, as well as for personal skills.',
  },
  {
    title: 'Golang',
    description:
      'Self-taught Golang before starting my internship at Confluent by solving Leetcode problems, and have since used it extensively for projects related to Kubernetes, and writing unit tests.',
  },
  {
    title: 'Java',
    description:
      'Self-taught Java to explore object-oriented programming, using it for a number of personal projects. Java has also been a key language in my studies, particularly for the frontend of our 1st-year group agile project.',
  },
  {
    title: 'C',
    description:
      'Explored programming concepts such as memory management and bitwise operations using C at university in the systems architecture and programming modules, and then applied these skills in Arduino projects, including developing a smart-blind system that combined both hardware and software components.',
  },
  { title: 'Git', description: 'I use GitHub and git commands in the command line daily, both as part of my internship and for personal projects.' },
  {
    title: 'Linux',
    description:
      'I frequently use Linux commands both on my personal computer running the Linux Mint distribution, and as part of my internship, using them within macOS.',
  },
  { title: 'LaTeX', description: 'Used LaTeX throughout university for writing reports and mathematical work, as well as incorporating LaTeX into the readmes of some personal skills.' },
  {
    title: 'AWS',
    description:
      'Experienced in using AWS for Kubernetes deployments during my internship at Confluent, including managing EKS clusters, configuring IAM roles, setting up VPCs and EC2 instances, and utilizing S3.',
  },
  {
    title: 'Google Cloud',
    description:
      'Used Google Cloud Platform for both personal projects, including running Golang scripts with Cloud Functions, and during my internship at Confluent, managing GKE clusters.',
  },
  { title: 'Azure', description: 'Managed Microsoft Azure AKS clusters during my internship at Confluent' },
  { title: 'Docker', description: 'Used Docker for containerizing applications and deploying them to Kubernetes clusters as part of training for my internship at Confluent.' },
  {
    title: 'Terraform',
    description:
      'Experienced using the infrastructure as code tool Terraform during my internship at Confluent for managing Kubernetes clusters across AWS, Azure, and GCP, and provisioning resources such as VPCs and Iam roles.',
  },
  { title: 'HTML and CSS', description: 'Completed the freeCodeCamp HTML and CSS course, putting the skills into practice to make this website, and a website for a small business.' },
  {
    title: 'SQL',
    description:
      'Gained a foundation in SQL and the relational algebra theory behind it in the Discrete Mathematics and Databases module, and put it into practise in a Golang web server project that I built based on the book "Let\'s Go - Alex Edwards" .',
  },
  {
    title: 'React and Typescript',
    description:
      'As part of the Experimental Systems Project at University, I worked in a team of 8 to develop "Racket Ready", a racket-sports matchmaking app, contributing to numerous components of the React and Typescript frontend',
  },
  {
    title: 'Quantitative Finance Knowledge',
    description:
      'I first read "Quantitative Finance For Dummies" by Steve Bell to explore some of the key concepts in quantitative finance. Currently, I\'m working through "Options, Futures, and Other Derivatives" by John Hull, to gain a deeper understanding in some areas such as modelling stock price behavior and option pricing models. I\'ve applied this knowledge through working through the exercises in the book, and implementing option pricing theories in a Python calculator and visualization tool.',
  },
]

export default function SkillsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="skills" className="relative scroll-mt-24 bg-brand-muted flex flex-col items-start min-h-[400px] pt-[12rem] px-[10vw] pb-12">
      <Wave fill="var(--color-brand-mid)" />
      <div className="w-full max-w-8xl mx-auto">
        <h2 className="mt-[-3.5rem] mb-4 text-[3.2rem] bg-[linear-gradient(252deg,var(--color-accent-strong)_0%,var(--color-deep)_100%)] bg-clip-text text-transparent">Skills</h2>

        <div className="flex flex-wrap items-start justify-center gap-4 py-4">
          {skills.map((s, idx) => {
            const open = openIndex === idx
            return (
              <div
                key={s.title}
                className={`flex flex-col bg-[color:var(--color-surface-alt)] rounded-[8px] p-4 shadow-[0_4px_8px_var(--color-shadow-stronger)] transition-transform flex-none max-w-md ${
                  open ? 'cursor-default' : 'cursor-pointer hover:scale-[1.05]'
                }`}
                onClick={() => setOpenIndex(open ? null : idx)}
              >
                <div className="font-bold text-[1.3rem]">{s.title}</div>
                {open && <div className="mt-2 text-[1.2rem] text-body break-words">{s.description}</div>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
