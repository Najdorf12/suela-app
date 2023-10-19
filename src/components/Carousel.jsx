import slideImg1 from "../assets/slide-img1.jpg";
import slideImg2 from "../assets/slide-img2.jpg";
import slideImg3 from "../assets/slide-img3.jpg";
import slideImg4 from "../assets/slide-img4.jpg";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Carousel = () => {
  return (
    <div className = "swipper-container">
      <Swiper
        style={{
          '--swiper-navigation-color': ' rgba(172, 114, 8, 0.842)',
          '--swiper-pagination-color': ' rgba(172, 114, 8, 0.842)',
        }}
      
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={slideImg1}
            loading="lazy"
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slideImg2}
            loading="lazy"
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slideImg3}
            loading="lazy"
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slideImg4}
            loading="lazy"
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}

export default Carousel;