import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
const AutoReplayVideo = ({ src, srcSafari, ...props }) => {
    const videoRef = useRef(null)
    useEffect(() => {
        const video = videoRef.current
        const playVideo = () => {
            video.play()
        }

        // Desencadenar programáticamente el evento click en el elemento de video
        video.addEventListener('click', playVideo)
        video.addEventListener('touchstart', playVideo)

        return () => {
            video.removeEventListener('click', playVideo)
            video.removeEventListener('touchstart', playVideo)
        }
    }, [])

    const handleEnded = ({ src, ...props }) => {
        videoRef.current.currentTime = 0
        videoRef.current.play()
    }

    return (
        <video
            {...props}
            ref={videoRef}
            onEnded={handleEnded}
            autoPlay
            muted
            loop
            playsInline
            webkit-playsinline
            preload="metadata"
        >
            <source src={src} type="video/webm" />
            <source src={srcSafari} type="video/mp4" />
        </video>
    )
}

export default AutoReplayVideo
