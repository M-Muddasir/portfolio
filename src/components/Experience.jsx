import { createElement, useRef } from "react";
import { content } from "../Content";
import toast, { Toaster } from "react-hot-toast";
import LazyLoad from "react-lazyload";

const Experience = () => {
  const { experience } = content;
  return (
    <section id="experience" className="contact-section-theme">
      <Toaster />
      <div className="md:container px-5 py-14" style={{ background: 'transparent' }}>
        <h2 className="title" data-aos="fade-down">
          {experience.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {experience.subtitle}
        </h4>
        <br />
        <div className="flex flex-col md:flex-row">
          {/* <div className="flex-1 flex flex-wrap gap-9 justify-center">
            {experience.experience_logo.map((data, i) => (
              <div key={i}>
                <div className="rounded-full w-20 h-20 flex items-center justify-center bg-blue-300" data-aos="fade-up">
                <LazyLoad once>
                  <img src={data.logo} alt="Figma" width={50} height={50} />
                  </LazyLoad>
                </div>
                <p className="p-text flex justify-center">{data.description}</p>
              </div>
            ))}
          </div> */}
          <div className="flex-1 flex flex-col gap-5 md:container px-5 py-14">
            {experience.experience_details.map((data, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-5">
                <div className="text-blue-500 md:w-30" data-aos="fade-right">{data.year}</div>
                <div data-aos="fade-down">
                  <h6 className="text-white">{data.designation}</h6>
                  <p className="text-white">{data.company}</p>
                  <p className="font-bold text-white">{data.description}</p>
                </div>
                <div className="ml-auto text-white" data-aos="fade-left">{data.location}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
