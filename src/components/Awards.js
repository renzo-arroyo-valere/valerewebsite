import React from 'react'
import Icon from '@mdi/react'
import { mdiPhoneOutline, mdiEmailOutline } from '@mdi/js'

import { RiAwardFill } from 'react-icons/ri'
import {
    FaLinkedinIn,
    FaSkype,
    FaInstagram,
    FaFacebookF,
    FaTwitter,
} from 'react-icons/fa'
import classNames from 'classnames'

const Awards = () => {
    const socialMedia = [
        {
            name: 'LinkedIn',
            icon: FaLinkedinIn,
            link: 'https://www.linkedin.com/company/valerelabs',
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
    ]

    return (
        <div className="w-1/2 flex flex-col md:flex-row gap-4 2xl:mt-40 2xl:ml-10 mt-40 tracking-[.05em] font-body lg:w-fit lg:-mt-10 lg:ml-12 md:w-fit 2xl:w-1/2 2xl:mb-[14rem]">
            <div className="flex-auto">
                <ul>
                    <li className="flex items-center text-white font-semibold mb-2">
                        <Icon
                            path={mdiPhoneOutline}
                            className="mr-2 text-white w-10 h-10"
                        />
                        <p className="rounded-md w-full py-2 px-10 text-2xl tracking-[.05em] lg:text-lg md:text-lg 2xl:text-xl">
                            +1 (508) 844-9011
                        </p>
                    </li>

                    <li className="flex items-center text-white font-semibold mb-2">
                        <Icon
                            path={mdiEmailOutline}
                            className="mr-2 text-white w-10 h-10"
                        />
                        <p className="rounded-md w-full py-2 px-10 text-2xl tracking-[.05em] lg:text-lg md:text-base 2xl:text-xl">
                            contact@valere.io
                        </p>
                    </li>
                    <div className="2xl:h-full h-[450px] overflow-y-auto scrollbar-hidden">
                        <li className="flex items-center text-white font-semibold mb-2">
                            <RiAwardFill className="mr-2 text-white w-10 h-10" />
                            <p className="bg-white bg-opacity-5 rounded-3xl w-full py-2 px-10 text-2xl lg:text-lg md:text-base 2xl:text-xl">
                                Clutch 2023 - Top Company for B2B Services
                            </p>
                        </li>
                        <li className="flex items-center text-white font-semibold mb-2 ml-10">
                            <p className="bg-white bg-opacity-5 rounded-3xl w-full py-2 px-10 text-2xl lg:text-lg md:text-base 2xl:text-xl">
                                Clutch 2022 - Clutch 100 Software Developers
                            </p>
                        </li>
                        <li className="flex items-center text-white font-semibold mb-2 ml-10">
                            <p className="bg-white bg-opacity-5 rounded-3xl py-2 px-10 text-2xl lg:text-lg md:text-base 2xl:text-xl">
                                Expertise.com Best Software Development
                                Companies in Worcester 2023
                            </p>
                        </li>
                        <li className="flex items-center text-white font-semibold mb-2 ml-10">
                            <p className="bg-white bg-opacity-5 rounded-3xl w-full py-2 px-10 text-2xl lg:text-lg md:text-base 2xl:text-xl">
                                UpWork - Top Rated Plus
                            </p>
                        </li>
                        <li className="flex items-center text-white font-semibold mb-2 ml-10">
                            <p className="bg-white bg-opacity-5 rounded-3xl w-full py-2 px-10 text-2xl lg:text-lg md:text-base 2xl:text-xl">
                                Achievers' Award 2021 for Emerging Company
                            </p>
                        </li>
                        <li className="flex items-center text-white font-semibold mb-2 ml-10">
                            <p className="bg-white bg-opacity-5 rounded-3xl w-full py-2 px-10 text-2xl lg:text-lg md:text-base 2xl:text-xl">
                                Apple App Store - Top 10 Paid Apps
                            </p>
                        </li>
                        <li className="flex items-center text-white font-semibold mb-2 ml-10">
                            <p className="bg-white bg-opacity-5 rounded-3xl w-full py-2 px-10 text-2xl lg:text-lg md:text-base 2xl:text-xl">
                                Top App Developers
                            </p>
                        </li>
                    </div>
                </ul>
            </div>
            <div className="flex-1 ml-20 md:ml-10">
                {/* <h1 className="text-6xl font-bold mb-4 text-white opacity-50 tracking-[.05em] font-heading lg:text-4xl md:text-3xl 2xl:text-6xl">
                    SOCIAL
                </h1> */}
                <ul className="flex flex-col items-left">
                    {socialMedia.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <li key={index} className="mb-4">
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="bg-white rounded-full w-16 h-16 lg:w-12 lg:h-12 flex justify-center items-center">
                                        <Icon className="text-zinc-800 w-10 h-10 lg:w-6 lg:h-6" />
                                    </div>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Awards
