import React from 'react'
import Icon from '@mdi/react'
import { mdiPhoneOutline, mdiEmailOutline } from '@mdi/js'
import ValereTestimonials from '../assets/valere-testimonials.webm'
import ValereTestimonialsSafari from '../assets/valere-testimonials-safari.mp4'
import ValereAwards from '../assets/valere-awards.png'

import { RiAwardFill } from 'react-icons/ri'
import {
    FaLinkedinIn,
    FaSkype,
    FaInstagram,
    FaFacebookF,
    FaTwitter,
} from 'react-icons/fa'
import classNames from 'classnames'
import AutoReplayVideo from './AutoReplayVideo/AutoReplayVideo'

const AwardsMobile = () => {
    const socialMedia = [
        {
            name: 'LinkedIn',
            icon: FaLinkedinIn,
            link: 'https://www.linkedin.com/company/valerelabs',
        },
        {
            name: 'Skype',
            icon: FaSkype,
            link: '#',
        },
        {
            name: 'Instagram',
            icon: FaInstagram,
            link: 'https://www.instagram.com/valerelabs',
        },
        {
            name: 'Facebook',
            icon: FaFacebookF,
            link: '#',
        },
        {
            name: 'Twitter',
            icon: FaTwitter,
            link: 'https://www.twitter.com/Valerelabs',
        },
    ]

    return (
        <div className="mt-[320px] 2xl:hidden xl:hidden lg:hidden md:hidden sm:mt-0 sm:ml-14">
            <div className="mr-4">
                <div className="mr-4 -ml-4 px-10 sm:px-6 md:px-8">
                    <div className="text-left">
                        <h2 className="ml-4 text-3xl font-bold text-zinc-400 mt-[19.0rem] sm:mt-20 mbl:mt-[-18rem]">
                            AWARDS
                        </h2>
                        <div className="translate-y-[1rem] translate-x-[3.5rem] overflow-hidden sm:w-2/3 sm:translate-x-[8.0rem]">
                            <div>
                                <AutoReplayVideo
                                    className="w-3/4 translate-x-[2rem]"
                                    id="valere-float"
                                    alt='valerian awards'
                                    src={ValereTestimonials}
                                    srcSafari={ValereTestimonialsSafari}
                                />
                                
                                <img
                                    className="translate-y-[-3.0rem]  w-3/4 overflow-hidden"
                                    src={ValereAwards}
                                    autoPlay
                                    muted
                                    alt='valere awards'
                                />
                            </div>
                        </div>
                        <div className="h-[350px] overflow-y-auto scrollbar-hidden">
                            <ul className="mt-0 w-1/10">
                                <li className="flex text-left text-white font-semibold mb-2">
                                    <RiAwardFill className="mr-2 text-white w-10 h-10" />
                                    <p className="bg-white bg-opacity-5 rounded-3xl w-full py-2 px-10 text-sm">
                                        Clutch 2023 - Top Company for B2B
                                        Services
                                    </p>
                                </li>
                                <li className="flex text-left text-white font-semibold mb-2 ml-10">
                                    <p className="bg-white bg-opacity-5 rounded-3xl w-full py-2 px-10 text-sm">
                                        Clutch 2022 - Clutch 100 Software
                                        Developers
                                    </p>
                                </li>
                                <li className="flex text-left text-white font-semibold mb-2 ml-10">
                                    <p className="bg-white bg-opacity-5 rounded-3xl py-2 px-10 text-sm">
                                        Expertise.com Best Software Development
                                        Companies in Worcester 2023
                                    </p>
                                </li>
                                <li className="flex text-left text-white font-semibold mb-2 ml-10">
                                    <p className="bg-white bg-opacity-5 rounded-3xl w-full py-2 px-10 text-sm">
                                        UpWork - Top Rated Plus
                                    </p>
                                </li>
                                <li className="flex text-left text-white font-semibold mb-2 ml-10">
                                    <p className="bg-white bg-opacity-5 rounded-3xl w-full py-2 px-10 text-sm">
                                        Achievers' Award 2021 for Emerging
                                        Company
                                    </p>
                                </li>
                                <li className="flex text-left text-white font-semibold mb-2 ml-10">
                                    <p className="bg-white bg-opacity-5 rounded-3xl w-full py-2 px-10 text-sm">
                                        Apple App Store - Top 10 Paid Apps
                                    </p>
                                </li>
                                <li className="flex text-left text-white font-semibold mb-2 ml-10">
                                    <p className="bg-white bg-opacity-5 rounded-3xl w-full py-2 px-10 text-sm">
                                        Top App Developers
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AwardsMobile
