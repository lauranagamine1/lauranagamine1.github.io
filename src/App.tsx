import { Footer } from '@/components/layout/Footer'
import { Loader } from '@/components/layout/Loader'
import { Navbar } from '@/components/layout/Navbar'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { Hero } from '@/components/sections/Hero'
import { Projects } from '@/components/sections/Projects'
import { Resume } from '@/components/sections/Resume'
import { Skills } from '@/components/sections/Skills'

function App() {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <Navbar />

      {/* Keyboard users can jump straight past the navigation */}
      <a
        href="#main"
        className="sr-only rounded-full bg-white px-4 py-2 text-sm font-medium text-ink shadow-lift focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-70"
      >
        Skip to content
      </a>

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
