'use client'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';    
import Image from "next/image";

function Slider() {


    let slides=[
        {id:1, src:'/macha.jpg'},
        {id:2, src:'/four.jpg'},
        {id:3, src:'/three.jpg'},
        {id:4, src:'/two.jpg'},

    ]
    

  return (
    <>
      <Swiper
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="mySwiper"
    >
        {slides.map((a)=>(
        <SwiperSlide key={a.id} className=''>
       <div className='position-relative w-100' style={{height: '600px'}}>
      
        <Image src={a.src} alt='' fill style={{objectFit:'cover'}}  />

        <div className='position-absolute w-100 h-100 d-flex flex-column align-item-center justify-content-center' style={{backgroundColor:'rgba(0,0,0,0.3)'}}>

            <div className="text-center mt-3">
              
                   
                        <h2 className='text-white fw-bold fs-1  '>Travel Tour</h2>
                        <p className='text-white fw-bold fs-4 '> #1 The most complete tour management system for tour and hotel booking. </p>

                        <div className='mt-3'>
                            <button className="btn btn-primary mx-2">Book Now</button>
                            <button className="btn btn-secondary mx-2">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    
        </SwiperSlide>
    ))}
    </Swiper> 

    </>
  )
}

export default Slider
