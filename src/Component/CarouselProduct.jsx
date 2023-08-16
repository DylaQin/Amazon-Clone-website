import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const CarouselProduct = () => {
  return (
    <div className='bg-white'>
        <div className='text-2xl font-semibold p-3'>Best sellers!</div>
        <Swiper
            slidesPerView={7}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
        >
            {Array.from({ length: 9 }, (_, i) => (
                <SwiperSlide key={i}>
                    <Link to={`/product/${i}`}>
                    <img
                        src={`../images/product_${i}_small.jpg`}
                        alt="Carousel product"
                    />
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default CarouselProduct