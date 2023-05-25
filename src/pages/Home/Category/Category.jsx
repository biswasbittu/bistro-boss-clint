import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'

const Category = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper mb-24"
    >
      <SwiperSlide>
       <img src={slide1} alt="" />
       <h1 className="text-3xl font-[Cinzel] ms-20 -mt-16 text-white">Salads</h1>

      </SwiperSlide>
      <SwiperSlide>
       <img src={slide2} alt="" />
       <h1 className="text-3xl font-[Cinzel] ms-20 -mt-20 text-white">   pizzas  </h1>

      </SwiperSlide>
      <SwiperSlide>
       <img src={slide3} alt="" />
       <h1 className="text-3xl font-[Cinzel] ms-20 -mt-20 text-white">desserts</h1>

      </SwiperSlide>
      <SwiperSlide>
       <img src={slide5} alt="" />
       <h1 className="text-3xl font-[Cinzel] ms-20 -mt-20 text-white">Salads</h1>

      </SwiperSlide>
      
    </Swiper>
  );
};

export default Category;
