// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

// import ban_resort from "../../assets/images/ban_resort.jpg";
// import ban_hotel from "../../assets/images/ban_hotel.jpg";
// import ban_lodge3 from "../../assets/images/ban_lodge3.jpg";
// import ban_lodge from "../../assets/images/ban_lodge.jpg";

const Banner = () => {
  return (
    <div>
      
      <>
        <Swiper
          className=" "
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
              className="w-full bg-center bg-contain"
              src="https://i.ibb.co/ChjVXS8/ban-resort.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className=" w-full bg-center bg-cover"
              src="https://i.ibb.co/ZNVxKrP/ban-hotel.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className=" w-full bg-center bg-cover"
              src="https://i.ibb.co/Rj88hJS/ban-lodge3.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className=" w-full bg-center bg-cover"
              src="https://i.ibb.co/tB81VB4/ban-lodge.jpg"
            />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Banner;
