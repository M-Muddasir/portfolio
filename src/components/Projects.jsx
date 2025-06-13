import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import LazyLoad from "react-lazyload";

const Projects = () => {
  const { Projects } = content;
  const OpenPdf = (pdf) => {
    window.open(pdf, '_blank')
  }
  const swiperSettings = {
    slidesPerView: 1, // Show 1 slide per view on mobile screens
    spaceBetween: 20,
    autoplay: {
      delay: 3000, // Auto play delay in milliseconds
    },
    pagination: { clickable: true },
    modules: [Pagination],
    className: "rounded-3xl pb-16 self-start",
    breakpoints: {
      // Adjust slide count on different screen sizes
      600: {
        slidesPerView: 3, // Show 4 slides per view on larger screens
        className: "rounded-3xl pb-16 max-w-xs self-start",
      },
      1000: {
        slidesPerView: 4, // Show 4 slides per view on larger screens
        className: "rounded-3xl pb-16 max-w-xs self-start",
      },
    },
  };

  return (
    <section id="projects" style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="md:container px-5 py-14" style={{ height: '100%' }}>
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5" style={{ height: '100%', width: '100%' }}>
          <Swiper {...swiperSettings} data-aos="fade-left" style={{ height: '100%', width: '100%' }}>
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
                style={{ background: 'var(--color-bg)' }}
              >
                <LazyLoad once>
                  <img src={content.image} alt="..." />
                </LazyLoad>
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">{content.title}</h5>
                  <button className="font-bold text-gray self-end" onClick={() => OpenPdf(content.read_more)}>
                    READ MORE
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
