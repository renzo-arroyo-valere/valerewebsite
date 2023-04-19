import React, { useState, useEffect } from 'react'
import { FiMail } from 'react-icons/fi'

const ProgressBar = ({ activeSection, setActiveSection }) => {
    let views = ['about', 'services', 'projects', 'offices', 'contact_us'] // Number of circles that are displayed
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 414)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    // if(isMobile){
    //     views=['services', 'awards', 'projects', 'offices', 'contact_us'];
    // }else views=['about', 'services', 'projects', 'offices', 'contact_us'];

    let currentProgressValue = views.indexOf(activeSection)
    if (isMobile) {
        if (activeSection === 'about') {
            currentProgressValue = 0
        } else if (activeSection === 'services') {
            currentProgressValue = 1
        } else if (activeSection === 'projects') {
            currentProgressValue = 2
        } else if (activeSection === 'offices') {
            currentProgressValue = 3
        } else if (activeSection === 'contact_us') {
            currentProgressValue = 4
        }
    } else {
        if ( activeSection === 'about') {
            currentProgressValue = 0
        }
        if (activeSection === 'services') {
            currentProgressValue = 1
        }
        if (activeSection === 'projects') {
            currentProgressValue = 2
        }
        if (activeSection === 'offices') {
            currentProgressValue = 3
        }
        if (activeSection === 'contact_us') {
            currentProgressValue = 4
        }
    }
    const handleClick = (view) => {
        setActiveSection(view)
    }
    return (
        <div>
            <div className="fixed right-4 2xl:left-24 xl:left-14 lg:left-12 md:left-12 sm:left-12 top-0 h-full w-12 flex flex-col justify-center items-center">
                <div className="mbl:h-[85%] 2xl:mt-12 2xl:h-5/6 border-l-2 lg:h-3/4 border-gray-600 absolute left-6"></div>
                {views.map((view, index) => (
                    <a
                        key={view}
                        className={`h-6 w-6 rounded-full mb-7 z-10 ${
                            index === currentProgressValue
                                ? 'bg-white bg-no-repeat bg-clip-padding border-2 border-white opacity-100'
                                : 'bg-zinc-800 bg-no-repeat bg-clip-padding border-2 border-gray-600 opacity-100'
                        }`}
                        onClick={() => handleClick(view)}
                        href={`#${view}`}
                    >
                    </a>
                ))}
                <div>
                    <a
                        href="mailto:contact@valere.io"
                        className="ml-0.5 bg-white opacity-100 w-9 h-9 flex items-center justify-center rounded-full mb-4 left-1/2 transform -translate-x-1/2 absolute bottom-0 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden"
                    >
                        <FiMail className="mbl:w-6 mbl:h-6 text-gray-400 opacity-100" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar
