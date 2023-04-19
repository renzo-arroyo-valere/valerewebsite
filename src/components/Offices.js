import React from 'react'
import MediaQuery from 'react-responsive'
import ValereOffices from '../assets/valere-offices-desktop.mp4'
import OfficesMobile from './OfficesMobile'

export default function Offices() {
    return (
        <div>
            <div className="snap-start h-screen w-screen font-body max-md:hidden">
                <section
                    className="flex justify-center mt-4 2xl:ml-32 items-center px-8 py-12 bg-transparent h-screen md:h-fit md:py-24 w-screen overflow-x-hidden"
                    id="offices"
                >
                    <div className="2xl:max-w-6xl xl:max-w-4xl lg:max-w-3xl md:max-w-xl sm:max-w-md mx-auto flex items-center 2xl:ml-52">
                        <div className="w-full">
                            <h1 className="text-6xl 2xl:text-6xl md:text-4xl sm:text-4xl font-bold mt-8 text-zinc-400 text-left tracking-[.10em] font-heading">
                                OFFICES
                            </h1>
                            <div className="flex justify-left">
                                <div className="w-full pr-4 pt-6">
                                    <video
                                        className="object-cover w-full h-full rounded-3xl"
                                        src={ValereOffices}
                                        autoPlay
                                        muted
                                        loop
                                        alt="Video of Valere offices"
                                        playsInline
                                        webkit-playsinline
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="md:hidden lg:hidden xl:hidden 2xl:hidden">
                <div className="relative h-screen w-screen">
                    <div className="absolute inset-0 z-0">
                        <video
                            className="object-cover w-full h-full"
                            src={ValereOffices}
                            loop
                            autoPlay={true}
                            muted={true}
                            playsInline
                            webkit-playsinline
                        />
                    </div>

                    <div className="relative z-20">
                        <div className="h-20"></div>
                        <div className="absolute top-20 left-0 w-full text-left ml-8 sm:ml-[4.5rem] sm:mt-[1rem]">
                            <h1 className="text-4xl font-bold text-zinc-400 tracking-[.10em]">
                                OFFICES
                            </h1>
                        </div>
                    </div>

                    <div className="absolute inset-x-0 top-0 h-2/5 z-10">
                        <div className="h-full bg-gradient-to-b from-black"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
