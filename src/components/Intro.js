import React from 'react'
import MediaQuery from 'react-responsive'
import ValereIntro from '../assets/valere-intro.webm'
import ValereIntroSafari from '../assets/valere-intro-safari.mp4'
import ValereIntroPng from '../assets/Valere Robot HP Say Hi SAFARI.png'
import ValereLogo from '../icons/valere-1.svg'
import { GoTriangleDown } from 'react-icons/go'

import IntroMobile from './IntroMobile'
import AutoReplayVideo from './AutoReplayVideo/AutoReplayVideo'

const Intro = () => {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

    return (
        <div>
            <div className="2xl:max-w-7xl xl:max-w-4xl lg:max-w-3xl md:max-w-2xl mx-auto 2xl:flex xl:flex lg:flex md:flex items-center font-body max-md:hidden">
                <div className="w-1/2 pr-4">
                    {/* {isSafari ? (
                        <img
                            // className="object-cover w-full bg-transparent h-full translate-y-[-4.5rem] translate-x-28 xl:translate-y-[-6.0rem] lg:translate-x-[7.5rem] lg:translate-y-[-4.0rem] md:translate-x-[6.0rem] md:translate-y-[-2.8rem]"
                            className="object-cover w-full h-full"
                            src={ValereIntroPng}
                            autoPlay
                            muted
                            alt="Valere Labs awards"
                        />
                    ) : (
                        <video
                            className="object-cover w-full h-full"
                            id="valere-float"
                            src={ValereIntro}
                            autoPlay
                            muted
                            loop
                            alt="Valerian programming animation"
                        />
                        
                    )} */}
                    {//Prueba con video mp4 en safari
                        
                        <AutoReplayVideo
                        id="valere-float"
                        alt="Valerian programming animation"
                        className="object-cover w-full h-full"
                        src={ValereIntro}
                        srcSafari={ValereIntroSafari}
                        />
                    }
                </div>
                <div className="w-3/5 mt-40">
                    <img
                        src={ValereLogo}
                        className="h-24 2xl:h-24 md:h-16 sm:h-12"
                        alt="Valere Labs logo"
                        style={{position:'relative',zIndex:1}}
                    />
                    <h2 className="text-3xl 2xl:text-3xl md:text-xl sm:text-lg font-bold mt-8 text-white tracking-[.05em] font-heading">
                        BUILD SOMETHING MEANINGFUL
                    </h2>
                    <p className="text-3xl 2xl:text-3xl md:text-xl sm:text-lg font-semibold text-white opacity-50 mt-4 tracking-[.05em]">
                        We help companies develop technologies that bend the
                        universe
                    </p>

                    <div className="flex justify-center pt-10">
                        <span className="text-xl md:text-base sm:text-sm font-semibold text-white opacity-50 mt-4 tracking-[.10em]">
                            <p className="flex justify-center">|</p>
                            <a href="#about">FIND OUT HOW</a>
                            <p className="flex justify-center lg:-mb-3">|</p>
                            <GoTriangleDown className="mt-[-0.5rem] ml-[3.35rem] md:ml-[3.72rem] md:mt-[-0.65rem] lg:ml-[3.74rem] lg:mt-[-0.65rem] xl:mt-[-0.65rem]" />
                        </span>
                    </div>
                </div>
            </div>

            {/* <MediaQuery minWidth={320} and maxWidth={640}>
                <IntroMobile />
            </MediaQuery> */}

            <div className="md:hidden lg:hidden xl:hidden 2xl:hidden">
                <div className="flex flex-col items-center justify-center h-screen font-body">
                    <AutoReplayVideo
                        id="valere-float"
                        alt="Valerian programming animation"
                        className="w-full  mr-8 sm:w-1/2"
                        width="550"
                        height="844"
                        src={ValereIntro}
                        srcSafari={ValereIntroSafari}
                    />

                    <img
                        src={ValereLogo}
                        alt="Company Logo"
                        className="w-72 h-24 mt-1"
                        style={{position:'relative',zIndex:1}}
                    />

                    <h1 className="text-md font-bold text-center mt-1 tracking-[.05em] text-white font-heading sm:text-xl">
                        BUILD SOMETHING MEANINGFUL
                    </h1>

                    <p className="text-md font-bold text-center mt-2 tracking-[.05em] text-white opacity-50 sm:text-xl sm:text-center sm:px-20 sm:ml-7 mbl:px-0 mbl:ml-0">
                        We help companies develop technologies that bend the
                        universe
                    </p>

                    <div className="flex justify-center pt-1">
                        <span className="text-xs font-semibold text-white opacity-50 tracking-wider mt-10">
                            <a href="#about">FIND OUT HOW</a>
                            <p className="flex justify-center">|</p>
                            <GoTriangleDown className="ml-[2.4rem] mt-[-0.4rem]" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro
