import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "./styles/slider.css";

import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";

const Slider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <div className="swiperWrap">
        <Swiper
          /*     style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }} */
          spaceBetween={10}
          /*  navigation={true} */
          navigation={{
            nextEl: ".button-next",
            prevEl: ".button-prev",
          }}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <img className="slide__image" src={image1} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slide__image" src={image2} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slide__image" src={image3} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slide__image" src={image4} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slide__image" src={image5} />
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={12}
          slidesPerView={4}
          loop={true}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="slide__image" src={image1} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slide__image" src={image2} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slide__image" src={image3} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slide__image" src={image4} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slide__image" src={image5} />
          </SwiperSlide>
        </Swiper>
        <div className="innerNavButtons">
          <div className="button-prev">
            <svg
              width="10"
              height="20"
              viewBox="0 0 10 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.43811 19.3333C8.04878 19.3333 7.66211 19.164 7.39811 18.836L0.960778 10.836C0.563445 10.3413 0.568778 9.63467 0.975445 9.14667L7.64211 1.14667C8.11278 0.581337 8.95411 0.505337 9.52078 0.976004C10.0861 1.44667 10.1621 2.288 9.69011 2.85334L3.72344 10.0147L9.47678 17.164C9.93811 17.7373 9.84744 18.5773 9.27278 19.0387C9.02744 19.2373 8.73144 19.3333 8.43811 19.3333"
                fill="#1551E5"
              />
            </svg>
          </div>
          <div className="button-next">
            <svg
              width="10"
              height="20"
              viewBox="0 0 10 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.33266 19.3333C1.03133 19.3333 0.728661 19.232 0.479327 19.024C-0.0860061 18.5533 -0.162006 17.712 0.308661 17.1467L6.27666 9.98534L0.523327 2.83601C0.061994 2.26267 0.152661 1.42267 0.725994 0.961339C1.30066 0.500006 2.13933 0.590672 2.60199 1.16401L9.03933 9.16401C9.43666 9.65867 9.43133 10.3653 9.02466 10.8533L2.35799 18.8533C2.09399 19.1693 1.71533 19.3333 1.33266 19.3333"
                fill="#1551E5"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
