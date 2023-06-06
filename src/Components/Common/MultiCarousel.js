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
    '/images/crossel1.png',
    '/images/crossel8.png',
    '/images/crossel3.png',
    '/images/crossel4.png',
    '/images/crossel5.png',
    '/images/crossel6.png',
    '/images/crossel7.png',
  

    
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