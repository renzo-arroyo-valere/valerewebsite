import React, { useRef, useState } from 'react'
import ValereTestimonials from '../assets/valere-testimonials.webm'
import ValereAwards from '../assets/valere-awards.png'

import {valereTestimonials} from '../utils/projects_constants'

// import './Testimonials.css'

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import Carousel from './Carrousel/Carrousel'

export default function Testimonials() {
    const imageTestimonials = valereTestimonials.map((element) => element.image)
    const newImages = imageTestimonials.slice(0, 5)
    const sliderRef = useRef()
    const [testimonialActive,setTestimonialActive] = useState({
        image: valereTestimonials[0].image,
        title: valereTestimonials[0].title,
        description: valereTestimonials[0].description,
        
    })

    const handleTestimonialChange = (index) => {
        setTestimonialActive({
            image: valereTestimonials[index].image,
            title: valereTestimonials[index].title,
            description: valereTestimonials[index].description,
        })
    }
    const handleNext = () => {

        sliderRef.current.slickNext()
    }

    const handlePrev = () => {
        sliderRef.current.slickPrev()
    }
    const NextArrow = () => {
        return (
            <div
                className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-full bg-white ml-4"
                onClick={handleNext}
            >
                <BsChevronRight size={25} color="grey" />
            </div>
        )
    }

    const PrevArrow = () => {
        return (
            <div
                className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-full bg-white mr-4"
                onClick={handlePrev}
            >
                <BsChevronLeft size={25} color="grey" />
            </div>
        )
    }
    return (
        <div className="snap-start h-screen w-screen overflow-x-hidden mt-10">
            <section
                id="testimonials"
                className="flex justify-center items-center px-8 py-12 bg-transparent h-screen w-screen overflow-x-hidden"
            >
                <div className="max-w-7xl mx-auto flex items-center">
                    <div className="w-3/4 pl-4">
                        <h2 className="text-2xl font-bold mt-8 text-zinc-400 tracking-[.10em]">
                            TESTIMONIALS
                        </h2>
                        <h2 className="text-5xl font-bold mt-8 text-zinc-400 tracking-[.10em] ">
                            {testimonialActive.title.toUpperCase()}
                           
                        </h2>

                        <div className="w-[750px] pr-4 py-4 overflow-hidden" >
                            <Carousel
                                images={imageTestimonials}
                                sliderRef={sliderRef}
                                onSlideChange={handleTestimonialChange}
                            />
                        </div>
                        <p className="text-2xl text-white font-semibold mt-4 tracking-[.10em] w-[750px] h-[192px] overflow-y-auto whitespace-normal scrollbar-none">
                            {testimonialActive.description}
                        </p>


                        <button className="py-10">
                            <a
                                href="#"
                                className="text-gray-900 text-3xl bg-white rounded-full px-5 py-2 hover:text-white hover:bg-gray-300 font-bold tracking-[.10em]"
                            >
                                LEARN MORE
                            </a>
                        </button>
                        <div className="flex justify-end -translate-y-20 translate-x-6">
                            <PrevArrow  />
                            <NextArrow />
                        </div>
                    </div>

                    <div>
                        <div className="max-w-7xl pl-20 mt-10 ">
                            <video
                                className="object-cover w-full h-full bg-transparent"
                                id="valere-float"
                                src={ValereTestimonials}
                                autoPlay
                                muted
                            />
                            <img
                                className="object-cover w-full h-full translate-y-[-8.5rem] translate-x-10"
                                src={ValereAwards}
                                autoPlay
                                muted
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
