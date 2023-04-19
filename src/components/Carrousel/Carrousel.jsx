import { useState } from 'react'
import Slider from 'react-slick'

import './Carrousel.css'
const Carousel = ({ images, sliderRef, onSlideChange }) => {
    const relativeClassName = (idx) => {
        const relativeIndex = (idx - imageIndex + images.length) % images.length
        if (relativeIndex === 0) return 'activeSlide'
        if (relativeIndex === 1) return 'nextSlide'
        if (relativeIndex === 2) return 'thirdSlide'
        if (relativeIndex === 3) return 'fourthSlide'
        return ''
    }

    const [imageIndex, setImageIndex] = useState(0)

    const settings = {
        infinite: true,
        swipe: true,
        draggable: true,
        touchThreshold: 10,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 4,
        centerMode: false,
        nextArrow: <div style={{ display: 'none' }} />,
        prevArrow: <div style={{ display: 'none' }} />,
        beforeChange: (current, next) => {
            setImageIndex(next)
            onSlideChange(next)
        },

        // swipeToSlide: true,
    }
    return (
        <div className="carousel">
            <Slider ref={sliderRef} {...settings}>
                {images.map((img, idx) => (
                    <div className={`slide ${relativeClassName(idx)}`}>
                        <img src={img} alt={img} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Carousel
