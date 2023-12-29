import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import bigimg from "../assests/images/bigimg.png";
import img1 from "../assests/images/img1.png";
import img2 from "../assests/images/img2.png";
import img3 from "../assests/images/img3.png";
import img4 from "../assests/images/img4.png";
import img5 from "../assests/images/img5.png";
import img6 from "../assests/images/img6.png";
import img7 from "../assests/images/img7.png";
import img8 from "../assests/images/img8.png";
import img9 from "../assests/images/img9.png";
import img10 from "../assests/images/img10.png";

const Section3 = () => {
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
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2 ,
                    slidesToScroll: 1,
                }
            }
        ]
    };
  return (
   
    <div>
            <section className='light-black pt-5 m t-5 position-relative overflow-hidden pb-370 z-1 d-none d-lg-block'>
                <div className='d-flex align-items-center justify-content-center flex-column pt-5' >
                    <h3 className='fs-xl fw-normal lh-108 text-white ff-SansUber'>THE KONGS</h3>
                    <img src={bigimg} alt="bigkongs" className='pt-3 d-none d-lg-block' />
                </div>
                <div className='d-none d-lg-block'>
                    <img src={img1} alt="kong1" className='img1' />
                    <img src={img2} alt="kong2" className='img2' />
                    <img src={img3} alt="kong3" className='img3' />
                    <img src={img4} alt="kong4" className='img4' />
                    <img src={img5} alt="kong5" className='img5' />
                    <img src={img6} alt="kong6" className='img6' />
                    <img src={img7} alt="kong7" className='img7' />
                    <img src={img8} alt="kong8" className='img8' />
                    <img src={img9} alt="kong9" className='img9' />
                    <img src={img10} alt="kong10" className='img10' />
                    <div className='yellow-ellipse1'></div>
                </div>
            </section >
            <div className='d-block d-lg-none py-5 light-black'>
                <h3 className='fs-xl fw-normal lh-108 text-white ff-SansUber text-center'>THE KONGS</h3>
                <Slider {...settings} className='pt-5'>
                    <div className='mx-3 '>
                        <img className='kong' src={img8} alt="kong" />
                    </div>
                    <div className='mx-3'>
                        <img className='kong' src={img7} alt="kong" />
                    </div>
                    <div className='mx-3'>
                        <img className='kong' src={img8} alt="kong" />
                    </div>
                    <div className='mx-3'>
                        <img className='kong' src={img2} alt="kong" />
                    </div>
                    <div className='mx-3'>
                        <img className='kong' src={img3} alt="kong" />
                    </div>
                </Slider>
                <div className='d-flex align-items-center justify-content-center position-relative py-4'>
                    <img src={bigimg} alt="bigimg" className='w-100' />
                    <div className='yellow-ellipse d-none d-sm-block'></div>
                </div>
                <div className='d-block d-lg-none'>
                    <Slider {...settings} className='pt-5'>
                        <div className='mx-3'>
                            <img className='kong' src={img4} alt="kong" />
                        </div>
                        <div className='mx-3'>
                            <img className='kong' src={img2} alt="kong" />
                        </div>
                        <div className='mx-3'>
                            <img className='kong' src={img3} alt="kong" />
                        </div>
                        <div className='mx-3'>
                            <img className='kong' src={img4} alt="kong" />
                        </div>
                        <div className='mx-3'>
                            <img className='kong' src={img7} alt="kong" />
                        </div>
                    </Slider>
                </div>
            </div>
    </div>
    
  )
};
export default Section3;
