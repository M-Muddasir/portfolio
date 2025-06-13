import { content } from "../Content";
import resume from '../assets/Muddasir_Resume.pdf';
import LazyLoad from "react-lazyload";

const Hireme = () => {
  const { Hireme } = content;

  const openCV = () =>{
    window.open(resume,'_blank')
  }
  return (
    <section style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="md:container px-5 pt-14" style={{ background: 'transparent' }}>
      <h2 className="title" data-aos="fade-down">
          {Hireme.fullName}
        </h2>
        <h2 className="title" data-aos="fade-down">
          {Hireme.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Hireme.subtitle}
        </h4>
        <br />
        <div className="flex items-center md:flex-row flex-col-reverse">
          <img
            src={Hireme.image1}
            alt="..."
            data-aos="fade-right"
            className="max-w-sm md:block hidden"
          />
          <img
            src={Hireme.image2}
            data-aos="fade-up"
            alt="..."
            className="max-w-sm md:hidden"
          />
          <div
            data-aos="fade-left"
            className="border-2 border-dark_primary max-w-sm p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
            style={{ background: 'var(--color-bg)' }}
          >
            <p className="leading-7">{Hireme.para}</p>
            <br />
            <button className="btn" style={{ background: 'var(--color-accent)', color: '#fff' }} onClick={openCV}>
              {Hireme.btnText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
