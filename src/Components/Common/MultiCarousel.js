import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1280 },
        items: 3,
        slidesToSlide: 2 
    },
    laptop: {
        breakpoint: { max: 1280, min: 1024 },
        items: 3,
        slidesToSlide: 2 
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 
    }
};
let images = [
    '/images/egleblue.png',
    '/images/aprochokelate.png',
    '/images/max.png',
    '/images/jinnew.png',
    '/images/cabana.png',
    '/images/egle.png',
    '/images/apro.png',
    
];

function MultiCarousel() {
    return (
        <div>
            <Carousel
                responsive={responsive}
                autoPlayo={true}
                autoPlaySpeed={2000}
                
            >
                {
                    images.map((e) => {
                        return (
                            <div className='flex justify-center w-full'>
                                <img src={e} className='h-[214.39px] w-[297px] md:w-[342px]'/>
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default MultiCarousel