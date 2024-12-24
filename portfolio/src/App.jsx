import './App.css'
import { BrowserRouter as Router} from 'react-router-dom'
import { AuroraHero } from './pages/AuroraHero'
import AboutPage from './pages/AboutPage'
import SkillsPage from './pages/SkillsPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactForm from './pages/ContactPage'


function App() {
  return (
    <Router>
    <div>
      <AuroraHero />
      <AboutPage />
      <SkillsPage />
      <ProjectsPage />
      <ContactForm />
    </div>
    
    </Router>
  )
}

export default App
