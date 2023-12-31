import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { createSearchParams, useNavigate } from 'react-router-dom';

const CarouselCategory = () => {
    const navigate = useNavigate();
    const searchCategory = (category) => {
        navigate({
          pathname: "search",
          search: `${createSearchParams({
            category: `${category}`,
            searchTerm: ``,
          })}`,
        });
      };  



  return (
    <div className='bg-white m-3'>
        <div className='text-2xl font-semibold p-3'>Shop by category</div>
        <Swiper
            slidesPerView={5}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
        >
            <SwiperSlide
                className='cursor-pointer'
                onClick={()=>searchCategory("Deals")}    
            >
                <img src={'../images/category_0.jpg'} alt="0"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={'../images/category_1.jpg'} alt="1"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={'../images/category_2.jpg'} alt="2"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={'../images/category_3.jpg'} alt="3"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={'../images/category_4.jpg'} alt="4"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={'../images/category_5.jpg'} alt="5"/>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default CarouselCategory