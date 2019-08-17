import React, { useState, useEffect, useRef, createRef } from "react"
import Img from "gatsby-image"

import "./carousel.scss"

const Carousel = ({images, altTexts}) => {
    const [slideIndex, setSlideIndex] = useState(0)
    const lastIndex = images.length - 1
    const imgRefs = useRef(images.map(() => createRef() ))
    let labelTexts = []

    // Next/previous controls
    const prevSlide = (() => {
        if (slideIndex >= 1) {
            setSlideIndex(slideIndex - 1)
        }
    })
    const nextSlide = (() => {
        if (slideIndex < lastIndex) {
            setSlideIndex(slideIndex + 1)
        }
    })
    // Thumbnail image controls
    const changeSlide = ((n) => {
        setSlideIndex(n)
    })
    // Labeling
    const prepLabel = ((num, imageName) => {
        let rval = 1
        for (var i = 2; i <= num; i++)
            rval = rval + i

        for (var k = 0; k < rval; k++)
            labelTexts.push(`${imageName}`)
        
        return labelTexts.toString()
    })

    // Focusing
    useEffect(() => {
        // current DIV wrapper
        imgRefs.current[slideIndex].current.focus()
    }, [slideIndex])

    return (
        <div className="slideshow-container">
            <div>
            {images.map((images, index) => {
                return <div
                    key={`image-${index}`}
                    className={`${slideIndex === index ? `visible` : ``} slideshow-slide`}
                    tabIndex="-1"
                    ref={imgRefs.current[index]}
                >
                    <Img
                        fluid={images.node.childImageSharp.fluid}
                        alt={`${prepLabel(index, altTexts[index])}`}
                    />
                </div>
                })
            }
            </div>
            {/* <!-- Next and previous buttons --> */}
            <div className={`${slideIndex === 0 ? 'hidden' : `` } slideshow-prev`} 
                onClick={prevSlide}>
                &#10094;
            </div>
            <div className={`${slideIndex === lastIndex ? 'hidden' : `` } slideshow-next`}
                onClick={nextSlide}>
                &#10095;
            </div>

            {/* <!-- The dots/circles --> */}
            <div className="slideshow-dots">
                {images.map((images, index) => {
                    return <span 
                        key={`dot-${index}`}
                        className={`${slideIndex === index ? `current` : ``} slideshow-dot`}
                        onClick={changeSlide.bind(this, index)}>
                    </span>
                })}
            </div>
        </div>
    )
}

export default Carousel
