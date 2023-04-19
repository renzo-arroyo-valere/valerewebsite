import React, { useEffect, useState } from 'react'
import Project from './Project'
import PaginationButtons from './PaginationButtons/PaginationButtons.jsx'
import PaginationDots from './PaginationDots/PaginationDots.jsx'
import Modal from './ModalDetail/Modal'
import { motion } from 'framer-motion'
import { valereProjects } from '../utils/projects_constants'
import '../App.css'
import { SliderMobile } from './SliderMobile.jsx'
export default function Projects() {
    const projects = valereProjects
    const [currentPage, setCurrentPage] = useState(1)
    const [selectedProject, setSelectedProject] = useState(null)
    const [loading, setLoading] = useState(false)
    const projectsPerPage = window.innerWidth <= 390 ? 3 : 6
    const totalPages = Math.ceil(projects.length / projectsPerPage)
    const indexOfLast = currentPage * projectsPerPage
    const indexOfFirst = indexOfLast - projectsPerPage
    const currentProjects = projects.slice(indexOfFirst, indexOfLast)

    const projectsToRender =
        window.innerWidth <= 390 ? projects : currentProjects

    const render = window.innerWidth <= 390 ? true : false
    const openModal = (project) => {
        setSelectedProject(project)
    }

    const closeModal = () => {
        setSelectedProject(null)
    }
    const [fade, setFade] = useState('opacity-100')
    const pageVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    }
    useEffect(() => {
        setFade('opacity-0')
        const timer = setTimeout(() => {
            setFade('opacity-100')
        }, 100)
        return () => clearTimeout(timer)
    }, [currentPage, render])

    return (
        <>
            <div className="snap-start h-screen w-screen max-md:hidden">
                <section
                    className="mt-4  2xl:-ml-20 2xl:flex 2xl:justify-center 2xl:mt-4 items-start px-6 py-12 bg-transparent h-screen w-screen overflow-x-hidden font-body"
                    id="projects"
                >
                    <div className="mbl:ml-6 2xl:max-w-full xl:max-w-5xl lg:max-w-3xl lg:ml-16 2xl:flex 2xl:items-center">
                        <div className="2xl:ml-50 lg:ml-40 lg:mt-14 w-full 2xl:mt-6">
                            <h2 className="mb-2 text-3xl 2xl:text-6xl font-bold 2xl:mt-8 2xl:mb-6 2xl:ml-16 text-zinc-400 2xl:text-left tracking-[.10em] font-heading">
                                PROJECTS
                            </h2>

                            <div className="flex 2xl:justify-center 2xl:items-center h-full">
                                <div className="flex lg:justify-center lg:items-center 2xl:justify-center 2xl:items-center 2xl:h-full">
                                    <PaginationButtons
                                        totalPages={totalPages}
                                        currentPage={currentPage}
                                        setCurrentPage={setCurrentPage}
                                        type="prev"
                                    />

                                    <div className="flex lg:flex-col lg:items-start lg:h-[429px] 2xl:flex-col 2xl:items-start 2xl:h-[628px]">
                                        <motion.div
                                            className="grid grid-cols-1 gap-2  lg:grid-cols-3  lg:gap-6 2xl:mx-4"
                                            key={`page-${currentPage}`}
                                            variants={pageVariants}
                                            initial="hidden"
                                            animate="visible"
                                        >
                                            {projectsToRender.map(
                                                (project, index) => {
                                                    return (
                                                        <Project
                                                            key={index}
                                                            project={project}
                                                            onClick={() =>
                                                                openModal(
                                                                    project
                                                                )
                                                            }
                                                        />
                                                    )
                                                }
                                            )}
                                        </motion.div>
                                        <div className="hidden 2xl:block 2xl:ml-0 lg:block 2xl:mt-auto ml-1 lg:-ml-4 lg:mt-auto">
                                            <PaginationDots
                                                totalPages={totalPages}
                                                currentPage={currentPage}
                                            />
                                        </div>
                                    </div>

                                    <PaginationButtons
                                        totalPages={totalPages}
                                        currentPage={currentPage}
                                        setCurrentPage={setCurrentPage}
                                        type="next"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Modal
                    isOpen={selectedProject !== null}
                    onClose={closeModal}
                    project={selectedProject}
                />
            </div>

            <div className="md:hidden lg:hidden xl:hidden 2xl:hidden">
                <section
                    className="mt-16  2xl:-ml-20 2xl:flex 2xl:justify-center 2xl:mt-4 items-start px-6 py-12 bg-transparent h-screen w-screen overflow-x-hidden font-body"
                    id="projects"
                >
                    <div className="mbl:ml-6 2xl:max-w-full xl:max-w-5xl lg:max-w-3xl lg:ml-16 2xl:flex 2xl:items-center">
                        <div className="2xl:ml-50 lg:ml-40 lg:mt-14 w-full 2xl:mt-6">
                            <h2 className="mb-2 text-3xl 2xl:text-6xl font-bold 2xl:mt-8 2xl:mb-6 2xl:ml-16 text-zinc-400 2xl:text-left tracking-[.10em] font-heading">
                                PROJECTS
                            </h2>

                            <div className="flex 2xl:justify-center 2xl:items-center h-full mt-16">
                                <SliderMobile
                                    projects={projects}
                                    openModal={openModal}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <Modal
                    isOpen={selectedProject !== null}
                    onClose={closeModal}
                    project={selectedProject}
                />
            </div>
        </>
    )
}
