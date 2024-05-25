// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";



const Banner = () => {
  return (
    <div className="max-w-[1200px] max-h-[400px]  mx-auto mb-4">
      <Swiper
        className="max-h-[400px] "
        cssMode={true}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      >
        <SwiperSlide>
          <img
            className=""
            src="https://i.ibb.co/ChjVXS8/ban-resort.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="bg-no-repeat bg-cover image-full bg-center"
            src="https://i.ibb.co/ZNVxKrP/ban-hotel.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="bg-no-repeat bg-cover image-full bg-center"
            src="https://i.ibb.co/Rj88hJS/ban-lodge3.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="bg-no-repeat bg-cover image-full bg-center"
            src="https://i.ibb.co/tB81VB4/ban-lodge.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
