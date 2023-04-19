import React, { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ValereLogo from '../../icons/valere-1.svg'
import ValereWink from '../../icons/valere-wink.png'
import SocialMobile from '../SocialMobile'

export default function Modal({ isOpen, onClose, activeSection }) {
    const modalRef = useRef()
    const [activeLink, setActiveLink] = useState(activeSection || 'home')

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose()
        }
    }
    useEffect(() => {
        setActiveLink(activeSection || 'home')
    }, [activeSection])

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    })

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.keyCode === 27) {
                onClose()
            }
        }

        document.addEventListener('keydown', handleEscape)

        return () => {
            document.removeEventListener('keydown', handleEscape)
        }
    })

    const modalVariants = {
        hidden: {
            opacity: 0,
            scale: 0.9,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 260,
                damping: 20,
                duration: 0.5,
            },
        },
        exit: {
            opacity: 0,
            scale: 0.9,
            transition: {
                duration: 0.2,
            },
        },
    }

    if (!isOpen) return null
    return (
        <AnimatePresence>
            <div
                className="fixed inset-0 z-50 flex  2xl:items-center justify-center bg-black bg-opacity-60"
                style={{
                    backdropFilter: 'blur(5px)',
                    WebkitBackdropFilter:'blur(5px)',
                }}
            >
                <motion.div
                    className="mr-24 bg-transparent 2xl:w-3/4 2xl:lg:w-3/5 rounded-lg p-8 relative"
                    ref={modalRef}
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <div className="flex justify-between items-center mb-3">
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
                        <div className="-mr-24">
                            <button
                                className="rounded-full w-10 h-10 flex items-center justify-center bg-transparent border-2 border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white transition duration-300"
                                onClick={onClose}
                            >
                                <span className="sr-only">Close</span>
                                <svg
                                    className="h-8 w-8 stroke-current"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                        <div className="mt-14 ml-6">
                        <ul className="text-2xl grid grid-cols-1 gap-4">
                            <li>
                                <a
                                    href="#home"
                                    className={`text-${
                                        activeLink === 'home'
                                            ? 'white'
                                            : 'zinc-400'
                                    } font-semibold`}
                                    onClick={onClose}
                                >
                                    HOME
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className={`text-${
                                        activeLink === 'about' ||
                                        activeLink === 'services'
                                            ? 'white'
                                            : 'zinc-400'
                                    } font-semibold`}
                                    onClick={onClose}
                                >
                                    ABOUT US
                                </a>

                            </li>
                            <li>
                                <a
                                    href="#projects"
                                    className={`text-${
                                        activeLink === 'projects'
                                            ? 'white'
                                            : 'zinc-400'
                                    } font-semibold`}
                                    onClick={onClose}
                                >
                                    PROJECTS
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact_us"
                                    className={`text-${
                                        activeLink === 'contact_us'
                                            ? 'white'
                                            : 'zinc-400'
                                    } font-semibold`}
                                    onClick={onClose}
                                >
                                    CONTACT US
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="ml-6 mt-16">
                        <SocialMobile />
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    )
}
