import React from 'react'
import ValereAbout from '../assets/valere-about.webm'
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

const AboutMobile = () => {
    return (
        <div>
            <div className="mt-[7rem] font-body">
                <div className="px-10 sm:px-6 md:px-8">
                    <div className="text-left">
                        <h2 className="text-3xl font-bold text-zinc-400 font-heading">
                            ABOUT
                        </h2>
                        <p className="mt-1 text-xs text-white font-semibold">
                            We build high performance software across a
                            multitude of technologies and verticals for startups
                            &amp; Fortune 500.
                        </p>
                    </div>

                    <div className="translate-y-20 translate-x-[-2rem]">
                        <div className="inset-0 overflow-hidden">
                            <video
                                className="bottom-5 w-full"
                                id="valere-float"
                                src={ValereAbout}
                                loop
                                autoPlay={true}
                                muted={true}
                                playsInline={true}
                                style={{ height: '100%' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMobile

// To fix autoplay not working sometimes on iOS

// https://www.reddit.com/r/react/comments/sgikw4/video_autoplay_not_working_on_some_phone_browsers/
