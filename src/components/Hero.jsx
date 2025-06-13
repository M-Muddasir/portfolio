// import content
import { useEffect } from "react";
import { content } from "../Content";
import resume from '../assets/Muddasir_Resume.pdf';
import LazyLoad from "react-lazyload";

const Hero = () => {
  const { hero } = content;
  const openCV = () =>{
    window.open(resume, '_blank');  }
  return (
    <section id="home" className="overflow-hidden contact-section-theme">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        {/* Hero right section (light blue with navy text) */}
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bottom-0 -z-10 contact-section-theme"
        >
          <h1 
            className="rotate-90 absolute top-[30%] right-[-15%] font-bold text-5xl tracking-widest text-white"
          >
            {hero.fullName}
          </h1>
        </div>

        {/* first col */}
        <div className="pb-16 px-6 pt-0 text-white">
        <h2>{hero.fullName}</h2>
<br/>
          <h2>{hero.title}</h2>
          <br />
          <div className="flex justify-end">
            <button className="btn" onClick={openCV}>{hero.btnText}</button>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3>{content.count}</h3>
                <p className="text-white">{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[37rem] h-96">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
