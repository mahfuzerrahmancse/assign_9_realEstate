
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import chef02 from '../../assets/images/chef02.jpg'

const Banner = () => {
  return (
    <div>
      <h2 className="mb-4 pb-4">Banner Section</h2>
      <>
        <Swiper
          className=" w-full"
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          //   className="mySwiper"
        >
          <SwiperSlide>
            Slide 1
            <img className=" w-full bg-center bg-cover" src={chef02} />
          </SwiperSlide>
          <SwiperSlide>
            Slide 2
            <img className=" w-full bg-center bg-cover" src={chef02} />
          </SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Banner;
