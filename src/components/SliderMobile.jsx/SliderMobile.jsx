import React from 'react'
import Project from '../Project'
import styles from './styles.module.css'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const SliderMobile = ({ projects, openModal }) => {
    const settings = {
        rows: 3,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dotsClass:`slick-dots ${styles.dots}`
    }
    return (
        <div className={styles.slider}>
                <Slider {...settings}>
                    {projects.map((project, index) => {
                        return (
                            <div className={styles.project} key={index}>
                                <Project
                                    project={project}
                                    onClick={() => openModal(project)}
                                />
                            </div>
                        )
                    })}
                </Slider>
        </div>
    )
}

export default SliderMobile
