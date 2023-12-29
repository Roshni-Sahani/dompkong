
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderimg1 from '../assests/images/sliderimg1.png'
import sliderimg2 from '../assests/images/sliderimg2.png'
import sliderimg3 from '../assests/images/sliderimg3.png'
import sliderimg4 from '../assests/images/sliderimg4.png'
import lineimg from '../assests/images/lineimg.png'


const Slidersec = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        centreMode: true,
        speed: 2000,
        cssEase: 'Linear',
        slidesToShow: 4,
        pauseOnHover: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1124,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 968,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
             {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <>
            <section className='py-5 light-black'>
                <div className='container py-5'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <h2 className='ff-SansUber text-white fs-xl fw-normal'>Partners</h2>
                    </div>
                    <Slider {...settings} className='pt-4'>
                        <div className='d-flex justify-content-center align-items-center gap-3'>
                            <img src={sliderimg1} alt="sliderimg1" />
                            <img src={lineimg} alt="sliderline" />
                        </div>
                        <div className='d-flex justify-content-center align-items-center gap-3'>
                            <img src={sliderimg2} alt="sliderimg2" />
                            <img src={lineimg} alt="sliderline" />
                        </div>
                        <div className='d-flex justify-content-center align-items-center gap-3'>
                            <img src={sliderimg3} alt="sliderimg3" />
                            <img src={lineimg} alt="sliderline" />
                        </div>
                        <div className='d-flex justify-content-center align-items-center gap-3'>
                            <img src={sliderimg4} alt="sliderimg4" />
                            <img src={lineimg} alt="sliderline" />
                        </div>
                        <div className='d-flex justify-content-center align-items-center gap-3'>
                            <img src={sliderimg2} alt="sliderimg5" />
                            <img src={lineimg} alt="sliderline" />
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default Slidersec

