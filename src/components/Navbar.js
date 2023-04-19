import React, { useState } from 'react'
import MediaQuery from 'react-responsive'
import ValereLogo from '../icons/valere-1.svg'
import ValereWink from '../icons/valere-wink.png'
import NavbarMobile from './NavbarMobile'
import { FiMenu, FiMail } from 'react-icons/fi'
import Modal from './ModalNavBar/ModalNavBar.jsx'

export default function Navbar({ activeSection }) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <div>
            <header className="fixed 2xl:inset-x-8 xl:inset-x-0 lg:inset-x-0 top-8 md:inset-x-0 tracking-widest font-bold z-20 font-heading">
                <nav className="max-sm:mt-[-2.3rem]">
                    <div className="flex items-center justify-between px-8 py-4 transparent text-white text-3xl xl:text-xl lg:text-lg md:text-sm">
                        <div className="flex items-center gap-3">
                            <img
                                src={ValereWink}
                                className="h-8"
                                alt="Valerian winking"
                            />
                            <img
                                src={ValereLogo}
                                className="h-5"
                                alt="Valere Labs logo"
                            />
                        </div>

                        <div className="mbl:ml-44 translate-x-2 md:hidden lg:hidden xl:hidden 2xl:hidden">
                            <div className="sm:flex sm:items-center mbl:flex mbl:items-center">
                                <button
                                    className="bg-white opacity-100 w-8 h-8 flex items-center justify-center rounded-full sm:mr-4 mbl:mr-"
                                    onClick={() => setIsModalOpen(true)}
                                >
                                    <FiMenu className="sm:w-6 sm:h-6 mbl:w-5 mbl:h-5 text-gray-400 opacity-100" />
                                </button>
                                {/* <a href="mailto:hello@example.com" className="ml-auto">
            <FiMail className="w-6 h-6" />
          </a> */}
                            </div>
                        </div>

                        <div className="max-md:hidden">
                            <ul className="flex ml-auto">
                                <li>
                                    <a
                                        href="#home"
                                        className="text-gray-300 hover:text-white px-3 py-2"
                                    >
                                        HOME
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#about"
                                        className="text-gray-300 hover:text-white px-3 py-2"
                                    >
                                        ABOUT
                                    </a>
                                </li>
                                {/* <li>
                                <a
                                    href="#testimonials"
                                    className="text-gray-300 hover:text-white px-3 py-2"
                                >
                                    TESTIMONIALS
                                </a>
                            </li> */}
                                <li>
                                    <a
                                        href="#projects"
                                        className="text-gray-300 hover:text-white px-3 py-2"
                                    >
                                        PROJECTS
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#contact_us"
                                        className="text-gray-900 bg-white rounded-full px-5 py-2 xl:px-3 xl:py-2 hover:text-white hover:bg-gray-300"
                                    >
                                        CONTACT US
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {isModalOpen && (
                        <Modal
                            activeSection={activeSection}
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                        />
                    )}
                </nav>
            </header>

            {/* <MediaQuery minWidth={320} and maxWidth={960}>
                <NavbarMobile />
            </MediaQuery> */}
        </div>
    )
}
