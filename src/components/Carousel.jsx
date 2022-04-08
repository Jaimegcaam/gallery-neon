import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import gsap from 'gsap';
import { Power4 } from 'gsap';
import 'swiper/css';
import './Carousel.css';

function Carrousel(){

    const [direction, setDirection] = useState('horizontal');
    
    function directionHandler(){
        if(window.innerWidth <= 630)
            setDirection("vertical");
        else    
            setDirection("horizontal");
    }

    return(
        <div className="max-w-[1240px] h-[90%]">
            
            <Swiper
            slidesPerView={"auto"}
            direction={direction}
            centeredSlides={true}
            spaceBetween={150}
            className="swiper-container"
            onResize={() => {
                directionHandler()}}
            onAfterInit={() => {
                directionHandler()
                gsap.to('.swiper-slide-active .slide-text .glitch span', .2, {
                    y: 0,
                    delay: .5
                })
                gsap.to('.swiper-slide-active .slide-text .glitch span', 0, {
                    y: '100px'
                })
                gsap.to('.swiper-slide-active .slide-number span', .2, {
                    x: 0,
                    delay: .7
                })
                gsap.to('.swiper-slide-active .slide-number span', 0, {
                    x: '100px'
                })
                gsap.to('.swiper-slide-active', .5, {
                    scale: 1.2,
                    ease: Power4.easeOut,
                })
                gsap.to('.slide-text .glitch span', .2, {
                    y: '-100px',
                })
                gsap.to('.slide-number span', .2, {
                    x: '-100px',
                }) 
                
            }}
            onSlideChange={() => {
                gsap.to('.slide-text .glitch span', .2, {
                    y: '-100px',
                })
                gsap.to('.slide-number span', .2, {
                    x: '-100px',
                }) 
                gsap.to('.swiper-slide-active', .5, {
                    scale: 1,
                })

            }}
            onSlideChangeTransitionEnd={() =>{
                gsap.to('.swiper-slide-active .slide-text .glitch span', .2, {
                    y: 0,
                    delay: .5
                })
                gsap.to('.swiper-slide-active .slide-text .glitch span', 0, {
                    y: '100px'
                })
                gsap.to('.swiper-slide-active .slide-number span', .2, {
                    x: 0,
                    delay: .7
                })
                gsap.to('.swiper-slide-active .slide-number span', 0, {
                    x: '100px'
                })
                gsap.to('.swiper-slide-active', .5, {
                    scale: 1.2,
                    ease: Power4.easeOut,
                })
                gsap.to('.swiper-slide-active .swiper-slide-next .slide-text', 0, {
                    autoAlpha: 1
                })
                gsap.to('.swiper-slide-active .swiper-slide-prev .slide-text', 0, {
                    autoAlpha: 1
                })
                
                //Slider siguiente
                gsap.to('.swiper-slide-next .slide-text .glitch span', .2, {
                    y: '-100px',
                })
                gsap.to('.swiper-slide-next .slide-number span', .2, {
                    x: '-100px',
                }) 
                gsap.to('.swiper-slide-next .swiper-slide-active', .5, {
                    scale: 1,
                })
                //Slider anterior
                gsap.to('.swiper-slide-prev .slide-text .glitch span', .2, {
                    y: '-100px',
                })
                gsap.to('.swiper-slide-prev .slide-number span', .2, {
                    x: '-100px',
                }) 
                gsap.to('.swiper-slide-prev .swiper-slide-active', .5, {
                    scale: 1,
                })

            }}
            >
                <SwiperSlide className="swiper-slide">
                    <div className="slide-number">
                        <p><span>001</span></p>
                    </div>
                    <div className="slide-text" >
                        <h2 className="glitch">
                            <span aria-hidden="true">KOREA</span>
                            <span>KOREA</span>
                            <span aria-hidden="true">KOREA</span>
                        </h2>
                    </div>
                    <div className="slide-img"></div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="slide-number">
                        <p><span>002</span></p>
                    </div>
                    <div className="slide-text" >
                        <h2 className="glitch">
                            <span aria-hidden="true">SAPPORO</span>
                            <span>SAPPORO</span>
                            <span aria-hidden="true">SAPPORO</span>
                        </h2>                    </div>
                    <div className="slide-img"></div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="slide-number">
                        <p><span>003</span></p>
                    </div>
                    <div className="slide-text" >
                        <h2 className="glitch">
                            <span aria-hidden="true">MELBOURNE</span>
                            <span>MELBOURNE</span>
                            <span aria-hidden="true">MELBOURNE</span>
                        </h2>
                    </div>
                    <div className="slide-img"></div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="slide-number">
                        <p><span>004</span></p>
                    </div>
                    <div className="slide-text" >
                        <h2 className="glitch">
                            <span aria-hidden="true">KYOBASHI</span>
                            <span>KYOBASHI</span>
                            <span aria-hidden="true">KYOBASHI</span>
                        </h2>
                    </div>
                    <div className="slide-img"></div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="slide-number">
                        <p><span>005</span></p>
                    </div>
                    <div className="slide-text" >
                        <h2 className="glitch">
                            <span aria-hidden="true">COFFEE$</span>
                            <span>COFFEE_$</span>
                            <span aria-hidden="true">COFFEE_$</span>
                        </h2>
                    </div>
                    <div className="slide-img"></div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="slide-number">
                        <p><span>006</span></p>
                    </div>
                    <div className="slide-text" >
                        <h2 className="glitch">
                            <span aria-hidden="true">CHINA</span>
                            <span>CHINA</span>
                            <span aria-hidden="true">CHINA</span>
                        </h2>
                    </div>
                    <div className="slide-img"></div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="slide-number">
                        <p><span>007</span></p>
                    </div>
                    <div className="slide-text" >
                        <h2 className="glitch">
                            <span aria-hidden="true">HYAKKENDANA</span>
                            <span>HYAKKENDANA</span>
                            <span aria-hidden="true">HYAKKENDANA</span>
                        </h2>
                    </div>
                    <div className="slide-img"></div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="slide-number">
                        <p><span>008</span></p>
                    </div>
                    <div className="slide-text" >
                        <h2 className="glitch">
                            <span aria-hidden="true">HONG_KONG</span>
                            <span>HONG_KONG</span>
                            <span aria-hidden="true">HONG_KONG</span>
                        </h2>
                    </div>
                    <div className="slide-img"></div>
                </SwiperSlide>

            </Swiper>

        </div>
  );
}

export default Carrousel;