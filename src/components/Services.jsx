import { content } from "../Content";
import LazyLoad from "react-lazyload";

const Services = () => {
  const { services } = content;
  return (
    <section id="services" style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="md:container px-5 py-14" style={{ background: 'transparent' }}>
        <h2 className="title" data-aos="fade-down">
          {services.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {services.subtitle}
        </h4>
        <br />
        <div className="flex gap-5 justify-between flex-wrap group">
          {services.service_content.map((content, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 600}
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center p-6 flex-1 group-hover:blur-sm hover:!blur-none"
              style={{ background: 'var(--color-bg)' }}
            >
              <LazyLoad once className="card bg-white">
                <img src={content.logo} alt="..." className="mx-auto" width={50} height={50} />
              </LazyLoad>
              <h6 className="my-3">{content.title}</h6>
              <p className="leading-7">{content.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
