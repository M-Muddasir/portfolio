import { content } from "../Content";
import LazyLoad from "react-lazyload";

const Education = () => {
  const { education } = content;
  
  return (
    <section id="education" style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="md:container px-5 py-14" style={{ background: 'transparent' }}>
        <h2 className="title" data-aos="fade-down">
          {education.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {education.subtitle}
        </h4>
        <br />
        
        <div className="grid grid-cols-1 gap-8">
          {education.education_details.map((item, i) => (
            <div
              key={i}
              className="rounded-lg shadow-lg p-6 transition-all hover:shadow-xl" style={{ background: 'var(--color-bg)' }}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="md:w-1/4">
                  <h5 className="text-xl font-bold text-blue-600">{item.degree}</h5>
                  <p className="text-gray-600">{item.year}</p>
                </div>
                
                <div className="md:w-3/4">
                  <h6 className="text-lg font-semibold">{item.institution}</h6>
                  <p className="text-gray-700 my-2">{item.description}</p>
                  
                  {item.courses && (
                    <div className="mt-4">
                      <h6 className="text-md font-semibold mb-2">Key Courses:</h6>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {item.courses.map((course, j) => (
                          <div key={j} className="flex items-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                            <p className="text-sm text-gray-600">{course}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
