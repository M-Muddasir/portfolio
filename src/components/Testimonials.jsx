import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import LazyLoad from "react-lazyload";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { useState,useRef,useEffect } from "react";

const Testimonials = () => {
  const { Testimonials } = content;
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current) {
        const newIndex = (activeIndex + 1) % Testimonials.testimonials_content.length;
        swiperRef.current.slideTo(newIndex);
        setActiveIndex(newIndex);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex, Testimonials.testimonials_content.length]);

  return (
    <section style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="md:container px-5 py-14" style={{ background: 'transparent' }}>
        <h2 className="title" data-aos="fade-down">
          {Testimonials.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Testimonials.subtitle}
        </h4>
        <br />
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000, // Auto play delay in milliseconds
          }}
          data-aos="fade-up"
          loop={true}
          spaceBetween={40}
          slidesPerView={1.7}
          onSlideChange={(e) => {
            console.log(e?.realIndex);
            setActiveIndex(e?.realIndex);
          }}
          modules={[Pagination]}
          className="md:h-96 h-[40rem] max-w-3xl"
        >
          {Testimonials.testimonials_content.map((content, i) => (
            <SwiperSlide key={i}>
              <div
                className={` duration-500 p-8 h-full rounded-2xl flex items-center gap-6
               border-slate-200 md:flex-row flex-col
                ${activeIndex !== i && "scale-75 blur-sm"}`}
                style={{ background: 'var(--color-bg)' }}
              >
                 <LazyLoad once>
                <img src={content.img} alt="..." className="h-24" />
                </LazyLoad>
                <div>
                  <p className="sm:text-base text-sm">{content.review}</p>
                  <br />
                  <h6>{content.name}</h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
