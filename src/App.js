import '@ionic/react/css/core.css'
import './App.css'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import About from './components/About'
import ServicesAndTechnologies from './components/ServicesAndTechnologies'
// import Testimonials from './components/Testimonials'
import Projects from './components/Projects'
import Offices from './components/Offices'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProgressBar from './components/ProgressBar/ProgressBar'
import AwardsMobile from './components/AwardsMobile';
import { useEffect, useState } from 'react'

function App() {
    const [activeSection, setActiveSection] = useState('home')
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            { threshold: 0.5 } // Component will be active when more than half of the view is shown.
        )

        const sections = document.querySelectorAll('section')
        sections.forEach((section) => observer.observe(section))

        return () => observer.disconnect()
    }, [])

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

    return (
        <div
            className={`snap-y snap-mandatory h-screen w-screen overflow-x-hidden overflow-scroll scrollbar-hidden ${
                isSafari
                    ? 'bg-custom-gray'
                    : 'bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-zinc-700 via-zinc-800 to-zinc-900'
            }`}
            style={{ scrollBehavior: 'smooth' }}
        >
            <Navbar activeSection={activeSection} />
            <section
                id="home"
                className="snap-start flex justify-center items-center px-8 py-12 bg-transparent h-screen w-screen"
            >
                <Intro />
            </section>
            <section
                id="about"
                className="snap-start flex justify-center items-center py-4 2xl:h-screen 2xl:w-screen"
            >
                <About />
            </section>
            <section
                id="services"
                className="snap-start flex justify-center items-center py-4 h-screen w-screen"
            >
                <ServicesAndTechnologies />
            </section>
            {/* <section
                id="awards"
                className="snap-start flex justify-center items-center py-4 h-screen w-screen 2xl:hidden xl:hidden lg:hidden md:hidden"
            >
                <AwardsMobile />
            </section> */}

            {/* <section
          id="testimonials"
          className="flex justify-center items-center px-8 py-12 bg-transparent h-screen w-screen"
        >
          <Testimonials />
        </section> */}
            <section
                id="projects"
                className="snap-start flex justify-center items-center px-8 py-12 bg-transparent h-screen w-screen"
            >
                <Projects />
            </section>
            <section
                id="offices"
                className="snap-start flex justify-center items-center px-8 py-12 bg-transparent h-screen w-screen"
            >
                <Offices />
            </section>

            <section
                id="contact_us"
                className="snap-start flex justify-center items-center px-8 py-12 bg-transparent h-screen w-screen"
            >
                <Contact />
            </section>
            {activeSection !== 'home' && (
                <ProgressBar
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                />
            )}
        </div>
    )
}

export default App
