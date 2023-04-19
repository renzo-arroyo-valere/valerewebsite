import React, { useState } from 'react'
import Awards from './Awards'
import SocialMobile from './SocialMobile'
import Footer from './Footer'
import ContactMobile from './ContactMobile'
const encode = (data) => {
    return Object.keys(data)
        .map(
            (key) =>
                encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&')
}

export default function Contact() {
    const [form, setForm] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: '',
    })
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }
    
    console.log('form: ', form)
    return (
        <div>
            <div className=" overflow-x-hidden font-body max-md:hidden lg:w-fit lg:mt-14 lg:mr-32 md:w-fit md:mr-20 2xl:mt-0 scrollbar-hidden relative">
                <section
                    id="contact_us"
                    className="ml-40 flex justify-evenly items-center px-8 bg-transparent h-screen"
                >
                    <div className="lg:h-full 2xl:h-4/5 2xl:mt-0  lg:w-3/5 2xl:w-2/5 w-2/5 bg-transparent lg:mt-24">
                        <div className="w-full p-8 2xl:p-6 lg:p-6">
                            <h1 className="text-6xl font-bold mb-4 text-white opacity-50 tracking-[.05em] font-heading lg:text-4xl md:text-3xl 2xl:text-6xl">
                                CONTACT
                            </h1>
                            <form
                                className="gap-4 text-3xl"
                                
                                name="contact"
                                netlify
                                netlify-honeypot="bot-field"
                                hidden
                            >
                                <input
                                    type="hidden"
                                    name="form-name"
                                    value="contact"
                                />
                                <div className="py-0">
                                    <label
                                        htmlFor="fullName"
                                        className="block font-bold mb-2 text-white opacity-50 2xl:py-2 py-2 lg:py-0 tracking-[.05em] lg:text-base md:text-base 2xl:text-2xl"
                                    >
                                        FULL NAME
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        className="text-white font-bold w-full mt-0 block px-0.5 border-0 border-b-2 focus: ring-0 focus:border-white bg-transparent focus: outline-0 text-2xl"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="py-4">
                                    <label
                                        htmlFor="email"
                                        className="block bg-transparent font-bold mb-2 text-white opacity-50 py-2 2xl:py-2 lg:py-0 tracking-[.05em] lg:text-base md:text-base 2xl:text-2xl"
                                    >
                                        EMAIL
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="text-white font-bold w-full mt-0 block px-0.5 border-0 border-b-2 focus: ring-0 focus:border-white bg-transparent focus: outline-0 text-2xl"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="py-4 2xl:py-4 lg:py-2">
                                    <label
                                        htmlFor="phone"
                                        className="block font-bold mb-2 text-white opacity-50 tracking-[.05em] lg:text-base md:text-base 2xl:text-2xl"
                                    >
                                        PHONE NUMBER (OPTIONAL)
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="text-white font-bold w-full mt-0 block px-0.5 border-0 border-b-2 focus: ring-0 focus:border-white bg-transparent focus: outline-0 text-2xl"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-span-2 relative">
                                    <label
                                        htmlFor="message"
                                        className="block mb-2 text-white opacity-50 py-2"
                                    ></label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="3"
                                        placeholder="MESSAGE"
                                        className={`2xl:text-2xl md:text-base lg:text-base pl-[14px] pt-[14px] resize-none text-white font-bold rounded-3xl w-full mt-0 block px-0.5 py-20 border-2 focus: ring-0 focus:border-white bg-transparent focus: outline-0 text-2xl tracking-[.05em] textareaUnfocused`}
                                        onInput={(event) => {
                                            event.target.scrollTop =
                                                event.target.scrollHeight
                                        }}
                                        onChange={handleChange}
                                    ></textarea>
                                    <button
                                        type="submit"
                                        className="absolute bottom-2 right-2 inline-flex items-center px-4 py-2 border border-transparent text-base font-semibold rounded-3xl shadow-sm text-slate-900 bg-white hover:text-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white tracking-widest"
                                    >
                                        SEND
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <Awards />
                    <div className="max-md:hidden footer-wrapper">
                        <div className="">
                            <Footer />
                        </div>
                    </div>
                </section>
                {/* <div className="max-md:hidden 2xl:">
                    <Footer />
                </div> */}
            </div>

            <div className="md:hidden lg:hidden xl:hidden 2xl:hidden mr-10 sm:mt-20 sm:ml-20 scrollbar-hidden">
                <div className="text-white mt-0 px-0 font-body">
                    <h1 className="text-3xl font-bold text-white opacity-50 mb-2 tracking-widest font-heading">
                        CONTACT
                    </h1>
                    <form
                        name="contact"
                        netlify
                        netlify-honeypot="bot-field"
                        hidden
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        <div className="mb-4">
                            <label
                                className="block text-white opacity-50 text-sm font-bold mb-2 tracking-[.05em]"
                                htmlFor="full-name"
                            >
                                FULL NAME
                            </label>
                            <input
                                className="shadow appearance-none w-full py-0 px-3 text-white font-bold leading-tight focus:outline-none focus:shadow-outline border-0 border-b-2 focus: ring-0 focus:border-white bg-transparent focus: outline-0"
                                id="fullName"
                                type="text"
                                onChange={handleChange}
                                name="fullName"
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
                                className="shadow appearance-none w-full py-0 px-3 text-white font-bold leading-tight focus:outline-none focus:shadow-outline border-0 border-b-2 focus: ring-0 focus:border-white bg-transparent focus: outline-0"
                                id="email"
                                type="email"
                                onChange={handleChange}
                                name="email"
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
                                className="shadow appearance-none w-full py-0 px-3 text-white font-bold leading-tight focus:outline-none focus:shadow-outline border-0 border-b-2 focus: ring-0 focus:border-white bg-transparent focus: outline-0"
                                id="phone"
                                type="tel"
                                name="phone"
                                onChange={handleChange}
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
                                rows="5"
                                placeholder="MESSAGE"
                                className="pl-[14px] pt-[14px] resize-none text-white font-bold rounded-3xl w-full mt-0 block px-0.5 py-20 border-2 focus: ring-0 focus:border-white bg-transparent focus: outline-0 text-sm tracking-[.05em]"
                                onInput={(event) => {
                                    event.target.scrollTop =
                                        event.target.scrollHeight
                                }}
                                onChange={handleChange}
                            ></textarea>
                            <button
                                type="submit"
                                className="absolute bottom-[1rem] right-[1rem] inline-flex items-center border border-transparent px-1 py-1 text-xs font-semibold rounded-3xl shadow-sm text-slate-900 bg-white hover:text-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                            >
                                SEND
                            </button>
                        </div>
                    </form>
                </div>

                <SocialMobile />
            </div>
        </div>
    )
}
