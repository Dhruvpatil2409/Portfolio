import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'

function Footer() {
  return (
    <footer className="footer">
      <span className="footer__copy">© {new Date().getFullYear()} Dhruv</span>
      <span className="footer__made">
        Built with <a href="https://react.dev" target="_blank" rel="noopener noreferrer">React</a>
        {' & '}
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">Vite</a>
      </span>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
