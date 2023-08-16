import React from 'react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Carousel = () => {
  return (
    <div className='h-[600px] bg-amazonclone-background'>
        <Swiper 
            loop={true}
            spaceBetween={0}
            modules={[Navigation, Autoplay]}
            navigation={true}
            autoplay={{
                delay: 4500,
            }}
            className="h-[50%]"
        >
            <SwiperSlide>
                <img src={'../images/carousel_1.jpg'} alt="1"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={'../images/carousel_2.jpg'} alt="2"/>
            </SwiperSlide>
            <SwiperSlide>
                <video controls muted="muted">
                    <source src={'../images/carousel_vid.mp4'} type="video/mp4" />
                </video>
            </SwiperSlide>
            <SwiperSlide>
                <img src={'../images/carousel_4.jpg'} alt="2"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={'../images/carousel_5.jpg'} alt="2"/>
            </SwiperSlide>
        </Swiper>
        <div class="h-[50%] bg-gradient-to-b from-stone-900" />
    </div>
  )
}

export default Carousel