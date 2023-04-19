import React from 'react'
import ValereIntro from '../assets/valere-intro.webm'
import ValereLogo from '../icons/valere-1.svg'
import { GoTriangleDown } from 'react-icons/go'

const Intro = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen font-body">
            <video
                className="w-full mt-10 mr-8"
                width="550"
                height="844"
                autoPlay={true}
                muted={true}
                playsInline={true}
            >
                <source src={ValereIntro} type="video/webm" />
            </video>

            <img
                src={ValereLogo}
                alt="Company Logo"
                className="w-72 h-24 mt-1"
            />

            <h1 className="text-md font-bold mt-1 tracking-[.05em] text-white font-heading">
                BUILD SOMETHING MEANINGFUL
            </h1>

            <p className="text-md font-bold text-left mt-2 tracking-[.05em] text-white opacity-50">
                We help companies develop technologies that bend the universe
            </p>

            <div className="flex justify-center pt-1">
                <span className="text-xl font-semibold text-white opacity-50 tracking-wider">
                    <a href="#about">FIND OUT HOW</a>
                    <p className="flex justify-center">|</p>
                    <GoTriangleDown className="ml-16 mt-[-0.5rem]" />
                </span>
            </div>
        </div>
    )
}

export default Intro
