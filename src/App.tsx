import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ExperiencePage } from './pages/ExperiencePage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ProjectDetailPage } from './pages/ProjectDetailPage'
import { SkillsPage } from './pages/SkillsPage'
import { EducationPage } from './pages/EducationPage'
import { ContactPage } from './pages/ContactPage'
import { NotFoundPage } from './pages/NotFoundPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="a-propos" element={<AboutPage />} />
        <Route path="experience" element={<ExperiencePage />} />
        <Route path="projets" element={<ProjectsPage />} />
        <Route path="projets/:slug" element={<ProjectDetailPage />} />
        <Route path="competences" element={<SkillsPage />} />
        <Route path="formation" element={<EducationPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="apropos" element={<Navigate to="/a-propos" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
