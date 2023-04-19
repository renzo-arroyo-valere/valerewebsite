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

const SocialMobile = () => {
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
        <div className="">
            <div className="font-body">
                <ul>
                    <li className="flex items-center text-white font-semibold">
                        <Icon
                            path={mdiPhoneOutline}
                            className="mr-2 text-white w-5 h-5"
                        />
                        <p className="rounded-md text-sm tracking-[.05em]">
                            +1 (508) 844-9011
                        </p>
                    </li>

                    <li className="flex items-center text-white font-semibold mt-1">
                        <Icon
                            path={mdiEmailOutline}
                            className="mr-2 text-white w-5 h-5"
                        />
                        <p className="rounded-md text-sm tracking-[.05em]">
                            contact@valere.io
                        </p>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                {/* <h1 className="text-3xl font-bold text-white opacity-50 tracking-[.05em] mt-5 font-heading sm:tracking-[0.20em]">
                    SOCIAL
                </h1> */}
                <ul className="flex flex-row items-left mt-2">
                    {socialMedia.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <li key={index} className="mr-2">
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="bg-white rounded-full w-10 h-10 flex justify-center items-center">
                                        <Icon className="text-zinc-800 w-6 h-6" />
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

export default SocialMobile
