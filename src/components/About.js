import React from 'react'
import ValereTestimonials from '../assets/valere-testimonials.webm'
import ValereTestimonialsSafari from '../assets/valere-testimonials-safari.mp4'
import ValereAwards from '../assets/valere-awards.png'

import AboutMobile from './AboutMobile'
import AutoReplayVideo from './AutoReplayVideo/AutoReplayVideo'

export default function About() {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

    return (
        <div className="">
            <div className="max-w-7xl 2xl:max-w-5xl xl:max-w-4xl lg:max-w-2xl md:max-w-lg sm:max-w-lg mx-auto flex items-center tracking-[.25em] mt-10 sm:ml-28 xl:ml-40 lg:mr-52 md:mr-28 font-body max-md:hidden">
                <div className="w-3/5">
                    <h2 className="text-6xl 2xl:text-6xl md:text-4xl sm:text-4xl font-bold mt-0 text-zinc-400 w-screen font-heading">
                        ABOUT
                    </h2>
                    <p className="text-3xl 2xl:text-3xl md:text-xl sm:text-xl text-white mt-4 font-semibold">
                        We build high performance software across a multitude of
                        technologies and verticals for startups & Fortune 500.
                    </p>
                </div>
                <div className="max-w-8xl xl:max-w-5xl sm:max-w-xl mx-auto flex items-center">
                    <div className="max-w-10xl">
                        {/* {isSafari ? (
                            <img
                                // className="object-cover w-full bg-transparent h-full translate-y-[-4.5rem] translate-x-28 xl:translate-y-[-6.0rem] lg:translate-x-[7.5rem] lg:translate-y-[-4.0rem] md:translate-x-[6.0rem] md:translate-y-[-2.8rem]"
                                className="object-cover w-full h-full lg:ml-24 md:ml-20 xl:mt-10"
                                src={ValerePngTestimonial}
                                autoPlay
                                muted
                                alt="Valere Labs awards"
                            />
                        ) : (
                            <video
                                // className="object-cover w-full h-full"
                                className="object-cover w-full h-full lg:ml-24 md:ml-20 xl:mt-10"
                                id="valere-float"
                                src={ValereTestimonials}
                                autoPlay
                                muted
                                loop
                                alt="Valerian programming animation"
                            />
                        )} */}
                        <AutoReplayVideo
                            id="valere-float"
                            alt="Valerian programming animation"
                            className=" mt-10 mr-8"
                            src={ValereTestimonials}
                            srcSafari={ValereTestimonialsSafari}
                        />
                        <img
                            className="object-cover w-full h-full translate-y-[-4.5rem] translate-x-28 xl:translate-y-[-6.0rem] lg:translate-x-[7.5rem] lg:translate-y-[-4.0rem] md:translate-x-[6.0rem] md:translate-y-[-2.8rem]"
                            src={ValereAwards}
                            autoPlay
                            muted
                            alt="Valere Labs awards"
                        />
                    </div>
                </div>
            </div>

            <div className="md:hidden lg:hidden xl:hidden 2xl:hidden h-screen">
                <div className="mt-40 font-body mb-10 mr-4 ">
                    <div className="px-10 sm:px-6 md:px-8 ">
                        <div className="text-left">
                            <h2 className="text-3xl font-bold text-zinc-400 font-heading">
                                ABOUT
                            </h2>
                            <p className="mt-1 text-xs text-white font-semibold mr-4">
                                We build high performance software across a
                                multitude of technologies and verticals for
                                startups &amp; Fortune 500.
                            </p>
                        </div>

                        <div className="translate-y-10 ">
                            <div className="inset-0 ">
                                
                                <AutoReplayVideo
                                    className="object-cover w-full h-full"
                                    id="valere-float"
                                    alt="Valerian programming animation"
                                    src={ValereTestimonials}
                                    srcSafari={ValereTestimonialsSafari}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
