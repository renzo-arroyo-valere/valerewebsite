import React, { useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ValereLogo from '../../icons/valere-1.svg'
import ValereWink from '../../icons/valere-wink.png'
import styles from './styles.module.css'
export default function Modal({ isOpen, onClose, project }) {
    const modalRef = useRef()

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose()
        }
    }

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
                className="fixed inset-0 z-50 flex  lg:items-center 2xl:items-center justify-center bg-black bg-opacity-60"
                style={{
                    backdropFilter: 'blur(5px)',
                    WebkitBackdropFilter:'blur(5px)',
                }}
            >
                <motion.div
                    className=" bg-transparent 2xl:w-3/4 lg:w-3/5 rounded-lg p-8 relative "
                    ref={modalRef}
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <div className="2xl:translate-x-36 2xl:-translate-y-16">
                        <div className="py-3 -ml-5 mb-6 flex items-center gap-3">
                            <img
                                src={ValereWink}
                                className="2xl:h-10 h-8"
                                alt="Valerian winking"
                            />
                            <img
                                src={ValereLogo}
                                className="2xl:h-7 h-5"
                                alt="Valere Labs logo"
                            />
                        </div>

                        <div className="grid grid-cols-1 2xl:flex lg:flex" >
                            <div className={`rounded-[20px] 2xl:w-1/4  2xl:-mt-2 h-[210px]  lg:mr-5 ${styles.videoContainer}`}>
                                <video
                                    className={` ${styles.video}`}
                                    src={project.video}
                                    autoPlay
                                    loop
                                    alt="Project Video"
                                    playsInline
                                    webkit-playsinline
                                    preload="metadata"
                                />
                            </div>
                            {/* <img
                            className="h-[183px] w-[305px] ml-4 mb-4 2xl:mr-4 2xl:w-[320px] 2xl:h-[200px] object-cover bg-transparent bg-no-repeat bg-cover shadow rounded-xl opacity-100"
                            src={project.image}
                            alt={project.title}
                        /> */}
                            <div className="2xl:ml-12 mbl:ml-1">
                                <h3 className="hidden lg:block 2xl:mb-7 2xl:block 2xl:text-2xl text-base text-white font-bold">
                                    PROJECTS
                                </h3>
                                <h1 className="text-2xl 2xl:text-5xl 2xl:mt-3 text-zinc-400 tracking-[.10em] font-bold">
                                    {project.title.toUpperCase()}
                                </h1>
                                <button
                                    className="absolute lg:-translate-y-10 2xl:-translate-x-56 2xl:-translate-y-16  mbl:mr-2 mbl:right-6 mbl:-mt-6 rounded-full 2xl:w-10 2xl:h-10 flex items-center justify-center bg-transparent border-2 border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white transition duration-300  "
                                    onClick={onClose}
                                >
                                    <span className="sr-only">Close</span>
                                    <svg
                                        className="h-5 w-5 2xl:w-10 2xl:h-10 stroke-current"
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
                                <h1 className="hidden 2xl:block 2xl:text-xl  lg:block text-white text-base mt-3 font-bold">
                                    DESCRIPTION
                                </h1>
                                <p className="2xl:text-xl h-96 text-sm text-white font-semibold mt-4 tracking-[.10em] lg:w-[600px] lg:h-[200px] 2xl:w-[750px] 2xl:h-[250px] overflow-y-auto whitespace-normal scrollbar-hidden" style={{whiteSpace:'prewrap'}}>
                                    {/* <p className="mt-4 text-white 2xl:text-justify font-bold"> */}
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    )
}
