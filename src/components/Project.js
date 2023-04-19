import React from 'react'
import { FiArrowRightCircle } from 'react-icons/fi'

const Project = ({ project, onClick }) => {
    return (
        <div
            className="h-[140px] w-[220px] 2xl:h-[300px] 2xl:w-[420px] lg:h-[202.5px] lg:w-[285px]"
            onClick={onClick}
        >
            <div
                className="h-[140px] w-[250px] rounded-[20px] lg:h-[202.5px] lg:w-[285px] 2xl:h-[280px] 2xl:w-[400px] 2xl:rounded-[40px] overflow-hidden relative "
                style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>

                <div className="absolute bottom-0 left-0 p-3 2xl:text-2xl text-white font-semibold tracking-[.10em] flex items-center justify-between w-full">
                    <span>{project.title.toUpperCase()}</span>
                    <FiArrowRightCircle size={36} color="#a1a1aa" />
                </div>
            </div>
        </div>
    )
}

export default Project
