import React from 'react'
import SocialMobile from './SocialMobile'

export default function ContactMobile() {
    return (
        <div>
            <div className="text-white mt-8 px-4 font-body">
                <h1 className="text-3xl font-bold text-white opacity-50 mb-8 tracking-[.05em] font-heading">
                    CONTACT US
                </h1>
                <div className="mb-4">
                    <label
                        className="block text-white opacity-50 text-sm font-bold mb-2 tracking-[.05em]"
                        htmlFor="full-name"
                    >
                        FULL NAME
                    </label>
                    <input
                        className="shadow appearance-none w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline border-0 border-b-2 focus: ring-0 focus:border-white bg-transparent focus: outline-0"
                        id="full-name"
                        type="text"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-white opacity-50 text-sm font-bold mb-2 tracking-[.05em]"
                        htmlFor="email"
                    >
                        EMAIL
                    </label>
                    <input
                        className="shadow appearance-none w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline border-0 border-b-2 focus: ring-0 focus:border-white bg-transparent focus: outline-0"
                        id="email"
                        type="email"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-white opacity-50 text-sm font-bold mb-2 tracking-[.05em]"
                        htmlFor="phone"
                    >
                        PHONE
                    </label>
                    <input
                        className="shadow appearance-none w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline border-0 border-b-2 focus: ring-0 focus:border-white bg-transparent focus: outline-0"
                        id="phone"
                        type="tel"
                    />
                </div>
                <div className="mb-4 relative">
                    <label
                        className="block text-white opacity-50 text-sm font-bold mb-2 tracking-[.05em]"
                        htmlFor="message"
                    ></label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        placeholder="MESSAGE"
                        className="pl-[14px] pt-[14px] resize-none text-white font-bold rounded-3xl w-full mt-0 block px-0.5 py-20 border-2 focus: ring-0 focus:border-white bg-transparent focus: outline-0 text-sm tracking-[.05em]"
                        onInput={(event) => {
                            event.target.scrollTop = event.target.scrollHeight
                        }}
                    ></textarea>
                    <button
                        type="submit"
                        className="absolute bottom-[1rem] right-[1rem] inline-flex items-center border border-transparent px-1 py-1 text-xs font-semibold rounded-3xl shadow-sm text-slate-900 bg-white hover:text-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                    >
                        SEND
                    </button>
                </div>
                <div className="flex items-center justify-center"></div>
                <div className="mt-0"></div>
            </div>

            <SocialMobile />
        </div>
    )
}
