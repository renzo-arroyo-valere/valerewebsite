import React from 'react'
import ValereAbout from '../assets/valere-about.webm'
import ValereAboutSafari from '../assets/valere-about-safari.mp4'
import { BiCog } from 'react-icons/bi'
import { FiBox } from 'react-icons/fi'
import { MdComputer, MdOutlineComputer } from 'react-icons/md'
import { ImMobile } from 'react-icons/im'
import { BiServer } from 'react-icons/bi'
import {
    mdiBatteryLockOpen,
    mdiCellphoneScreenshot,
    mdiCogBox,
    mdiMonitorAccount,
    mdiMonitorArrowDown,
    mdiMonitorDashboard,
} from '@mdi/js'

import AboutMobile from './AboutMobile'
import AutoReplayVideo from './AutoReplayVideo/AutoReplayVideo'

export default function ServicesAndTechnologies() {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

    return (
        <div>
            <div className="max-w-7xl 2xl:max-w-5xl xl:max-w-4xl lg:max-w-3xl md:max-w-lg sm:max-w-lg mx-auto flex items-center tracking-[.25em] xl:mr-12 font-body max-md:hidden">
                <div className="w-3/5">
                    <h1 className="text-6xl 2xl:text-6xl md:text-4xl sm:text-4xl font-bold mt-8 text-zinc-400 w-screen font-heading">
                        SERVICES
                    </h1>
                    <p className="text-3xl 2xl:text-3xl md:text-xl sm:text-xl text-white mt-4 font-semibold" style={{zIndex:1,position:'relative'}}>
                        <ul>
                            <li className="mb-3 flex items-center">
                                <BiCog className="text-white opacity-50 mr-3 text-5xl" />
                                Software: augmentation, fixed-scope,
                                transformation
                            </li>
                            <li className="flex items-center">
                                <FiBox className="text-white opacity-50 mr-3 text-5xl" />
                                Complementary: discovery, management, UX/UI
                            </li>
                        </ul>
                    </p>

                    <h1 className="text-6xl 2xl:text-6xl md:text-4xl sm:text-4xl font-bold mt-8 2xl:mt-14 text-zinc-400 w-screen font-heading">
                        TECHNOLOGIES
                    </h1>
                    <p className="text-3xl 2xl:text-3xl md:text-xl sm:text-xl text-white mt-4 font-semibold w-screen" style={{zIndex:1,position:'relative'}}>
                        <ul>
                            <li className="mb-3 flex items-center">
                                <MdComputer className="text-white opacity-50 mr-3 text-5xl" />
                                Frontend web: React
                            </li>
                            <li className="mb-3 flex items-center">
                                <ImMobile className="text-white opacity-50 mr-3 text-5xl" />
                                Mobile: Flutter, React Native, iOS, Android
                            </li>
                            <li className="flex items-center">
                                <BiServer className="text-white opacity-50 mr-3 text-5xl" />
                                Backend: Node, PHP, Python
                            </li>
                        </ul>
                    </p>
                </div>
                <div className="max-w-8xl mx-auto flex items-center">
                    <div className="max-w-10xl">
                        {/* {isSafari ? (
                            <img
                                className="object-cover w-full bg-transparent h-full translate-y-[-4.5rem] translate-x-28 xl:translate-y-[-6.0rem] lg:translate-x-[7.5rem] lg:translate-y-[-4.0rem] md:translate-x-[6.0rem] md:translate-y-[-2.8rem]"
                                src={ValerePngAboutSafari}
                                autoPlay
                                muted
                                alt="Valere Labs awards"
                            />
                        ) : (
                            <video
                                className="object-cover w-full h-full"
                                id="valere-float"
                                src={ValereAbout}
                                autoPlay
                                muted
                                loop
                                alt="Valerian programming animation"
                            />
                        )} */}
                        <AutoReplayVideo
                            className="object-cover w-full h-full"
                            id="valere-float"
                            alt="Valerian programming animation"
                            src={ValereAbout}
                            srcSafari={ValereAboutSafari}
                        />
                    </div>
                </div>
            </div>

            <div className="md:hidden lg:hidden xl:hidden 2xl:hidden">
                <div className="mt-0 mr-4 sm:ml-[3rem] sm:mt-16 mbl:mt-[-0rem]">
                    

                    <div className="mt-3 sm:mt-8">
                        <div className="px-10 sm:px-6 md:px-8">
                            <div className="text-left">
                                <h2 className="text-3xl font-bold text-zinc-400 sm:text-4xl sm:tracking-[0.10em]">
                                    SERVICES
                                </h2>
                                <ul className="mt-2 text-xs text-white font-semibold sm:text-base sm:mt-4">
                                    <li className="mb-1 flex items-center sm:mb-4">
                                        <BiCog className="text-white opacity-50 mr-3 text-2xl sm:text-5xl" />
                                        Software: augmentation, fixed-scope,
                                        transformation
                                    </li>
                                    <li className="flex items-center">
                                        <FiBox className="text-white opacity-50 mr-3 text-2xl sm:text-5xl" />
                                        Complementary: discovery, management,
                                        UX/UI
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-3 sm:mt-8">
                        <div className="px-10 sm:px-6 md:px-8">
                            <div className="text-left" style={{zIndex:1,position:'relative'}}>
                                <h2 className="text-3xl font-bold text-zinc-400 sm:text-4xl sm:mt-4 sm:tracking-[0.10em]" >
                                    TECHNOLOGIES
                                </h2>
                                <ul className="mt-1 text-xs text-white font-semibold sm:text-base" style={{zIndex:1,position:'relative'}}>
                                    <li className="mb-1 flex items-center sm:mb-4">
                                        <MdComputer className="text-white opacity-50 mr-3 text-2xl sm:text-5xl" />
                                        Frontend web: React
                                    </li>
                                    <li className="mb-1 flex items-center sm:mb-4">
                                        <ImMobile className="text-white opacity-50 mr-3 text-2xl sm:text-5xl" />
                                        Mobile: Flutter, React Native, iOS,
                                        Android
                                    </li>
                                    <li className="flex items-center">
                                        <BiServer className="text-white opacity-50 mr-3 text-2xl sm:text-5xl" />
                                        Backend: Node, PHP, Python
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="translate-y-2 translate-x-[1rem] sm:translate-x-[9rem]">
                        <div className="inset-0 ">
                            <AutoReplayVideo
                                id="valere-float"
                                alt="Valerian programming animation"
                                className=" mt-10 mr-8 w-4/5"
                                src={ValereAbout}
                                srcSafari={ValereAboutSafari}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
