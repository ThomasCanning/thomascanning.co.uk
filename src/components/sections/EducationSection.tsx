import Wave from '../Wave'

export default function EducationSection() {
  return (
    <section id="education" className="relative scroll-mt-24 bg-brand-mid flex flex-col items-start min-h-[400px] pt-[12rem] px-[10vw] pb-12">
      <Wave fill="var(--color-brand-muted)" />
      <div className="w-full max-w-[1800px] mx-auto">
        <h2 className="mt-[-3.5rem] mb-4 text-[3.2rem] bg-[linear-gradient(252deg,var(--color-accent-strong)_0%,var(--color-deep)_100%)] bg-clip-text text-transparent">
          Education
        </h2>

        <h3 className="text-[1.6rem] font-normal text-body"><strong>BSc Computer Science with Year in Industry</strong> - University of Bath (09/2022 - 06/2026)</h3>

        <details className="group m-2 rounded-[10px] overflow-hidden bg-panel shadow-[0_4px_8px_var(--color-shadow-stronger)] transition-transform hover:scale-[1.01] open:hover:scale-100">
          <summary className="flex items-center font-bold text-body p-2 cursor-pointer">
            <h4 className="m-0 text-[1.4rem]">2nd year modules | 81%</h4>
            <p className="pl-2 pb-[2px] text-[1.1rem] transition-transform group-open:rotate-90">▶</p>
          </summary>
          <div className="p-4">
            <ul className="list-[square] mt-4 ml-6 text-body text-[1.4rem]">
              <li><strong>Machine learning</strong>: 85% – Studied neural networks (including convolutional, GANs, large-language models), and other supervised/unsupervised techniques such as regression, Naive-Bayes, PCA, and Gaussian Mixture Models - implementing each in Python.</li>
              <li><strong>Data Structures and Algorithms</strong>: 85% – Learnt about the mathematics behind sorting, hash tables, graphs, and trees, data collections, and cryptography, with a focus on proving the correctness of the algorithms, and determining their complexity, alongside implementing each in Java.</li>
              <li><strong>Experimental Systems Project</strong>: 73% – Took "Racket Ready", a racket-sports matchmaking app concept, through the entire software engineering lifecycle in a team of 8, from coming up with the initial idea, to requirements design, agile development, testing, and evaluation, ultimately producing a mobile app in React.</li>
              <li><strong>Foundations of Computation</strong>: 84% – Explored fundamental models of computation, including deterministic and non-deterministic finite automata, regular and context-free languages, Turing machines, and the Church-Turing thesis.</li>
              <li><strong>Comparative Programming Languages</strong>: 93% – Discussed the question "How do you pick the right programming language?", by comparing concepts such as types, compilers, memory management, programming paradigms, and object-oriented programming. </li>
              <li><strong>Fundamentals of Visual Computing</strong>: 89% – Investigated visual computing concepts from image filtering, the Fourier Transform, and lighting models, to curves, and textures rendering, and then implementing these concepts in Python.</li>
              <li><strong>Functional Programming</strong>: 63% –  Studied lambda calculus, the theoretical foundation of functional programming, and applied the theory to programming in Haskell.</li>
              <li><strong>Human-Computer Interaction and User Experience</strong>: 81% – Applied HCI and user-experience theories to design a VR "Lego Builder" app, working in a group to develop low and high-fidelity prototypes, conduct user testing, and perform statistical analysis on the data.</li>
            </ul>
          </div>
        </details>

        <details className="group m-2 rounded-[10px] overflow-hidden bg-panel shadow-[0_4px_8px_var(--color-shadow-stronger)] transition-transform hover:scale-[1.01] open:hover:scale-100">
          <summary className="flex items-center font-bold text-body p-2 cursor-pointer">
            <h4 className="m-0 text-[1.4rem]">1st year modules | 77% </h4>
            <p className="pl-2 pb-[2px] text-[1.1rem] transition-transform group-open:rotate-90">▶</p>
          </summary>
          <div className="p-4">
            <ul className="list-[square] mt-4 ml-6 text-body text-[1.4rem]">
              <li id="spam"><strong>Software Processes and Modelling</strong>: 77% – Led a team of 5 as Scrum Master in developing a fitness app. I led the development of the Java frontend, organised meetings, and learnt how software projects can be effectively organised using agile development and object-oriented programming.</li>
              <li><strong>Mathematics for Computation</strong>: 78% – Studied fundamental topics in mathematical analysis crucial to Computer Science, including linear algebra, derivatives, and series.</li>
              <li><strong>Principles of Programming</strong>: 79% – Gained the skills to quickly pick up and solve problems in any language. I became proficient in Python and Java, and explored memory management with C.</li>
              <li><strong>Discrete Mathematics and Databases</strong>: 82% – Developed knowledge of logic, maps, and relational algebra, then applied it to databases and SQL.</li>
              <li><strong>Artificial Intelligence</strong>: 69% – Explored a broad range of AI concepts, from search techniques and constraint satisfaction, to probability and machine learning. I used Python to implement each concept, with a focus on writing fast code, and was inspired to explore deep learning beyond the unit.</li>
              <li><strong>Computer Systems Architecture</strong>: 79% – Gained a deeper understanding of how computers work at varying levels of abstraction, focusing on logic, hardware, and data representation, which was put into practise with group Arduino projects using C++, while semester 2 focused on operating systems and networks.</li>
            </ul>
          </div>
        </details>

        <h3 className="mt-2 text-[1.6rem] font-normal text-body"><strong>A-Levels</strong> - Wymondham College (09/2020 - 07/2022)</h3>
        <h4 className="mb-6 text-[1.4rem] text-body">A* Maths, A Further Maths, A* Physics, A* Geography</h4>
        <h3 className="text-[1.6rem] font-normal text-body"><strong>GCSEs</strong>, Wymondham College (09/2015 - 07/2020)</h3>
        <h4 className="text-[1.4rem] text-body">10 grade 9s, 1 grade 8, and 1 grade 7</h4>
      </div>
    </section>
  )
}
