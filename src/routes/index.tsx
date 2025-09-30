import { createFileRoute } from '@tanstack/react-router'
import Header from '../components/Header'
import HeaderHero from '../components/HeaderHero'
import AboutSection from '../components/sections/AboutSection'
import ProjectsSection from '../components/sections/ProjectsSection'
import SkillsSection from '../components/sections/SkillsSection'
import EducationSection from '../components/sections/EducationSection'
import WorkExperienceSection from '../components/sections/WorkExperienceSection'
import SiteFooter from '../components/SiteFooter'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="bg-brand">
      <Header />
      <HeaderHero />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <WorkExperienceSection />
      <SiteFooter />
    </div>
  )
}
