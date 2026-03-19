import Navbar        from './components/layout/Navbar'
import SidebarLeft   from './components/layout/SidebarLeft'
import SidebarRight  from './components/layout/SidebarRight'
import Footer        from './components/layout/Footer'
import Hero          from './components/sections/Hero'
import About         from './components/sections/About'
import Experience    from './components/sections/Experience'
import Work          from './components/sections/Work'
import Skills        from './components/sections/Skills'
import Contact       from './components/sections/Contact'
import BackToTop     from './components/ui/BackToTop'
import CursorGlow    from './components/ui/CursorGlow'

export default function App() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <SidebarLeft />
      <SidebarRight />
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
