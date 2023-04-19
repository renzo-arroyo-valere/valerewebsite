import React from 'react'
import ValereOffices from '../assets/valere-offices-mobile.mp4'

export default function OfficesMobile() {
    return (
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
                <div className="absolute top-20 left-0 w-full text-left ml-8">
                    <h1 className="text-3xl font-bold text-white tracking-[.10em]">
                        OFFICES
                    </h1>
                </div>
            </div>

            <div className="absolute inset-x-0 top-0 h-2/5 z-10">
                <div className="h-full bg-gradient-to-b from-black"></div>
            </div>
        </div>
    )
}
