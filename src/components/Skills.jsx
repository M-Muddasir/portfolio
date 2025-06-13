// import content
import { createElement, useState } from "react";
import { content } from "../Content";
import toast, { Toaster } from 'react-hot-toast';
import LazyLoad from "react-lazyload";
// import modal package
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '30rem',
    width: '90%',
    padding: '2rem',
    borderRadius: '0.75rem',
    backgroundColor: '#111827', // black for light mode
    color: 'white', // white text for contrast
  },
  overlay: {
    padding: '2rem',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
};
Modal.setAppElement('#root');

const Skills = () => {
  const { skills } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section className="min-h-fit" id="skills" style={{ background: 'var(--color-bg-secondary)' }}>
      <Toaster />
      <div className="md:container px-5 py-14" style={{ background: 'transparent' }}>
        <h2 className="title" data-aos="fade-down">
          {skills.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {skills.subtitle}
        </h4>
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="bg-white hover:bg-blue-50 sm:cursor-pointer 
               relative group flex items-center
                gap-5 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500"
              onClick={() => {
                setSelectSkill(skill);
                openModal();
              }}
            >
              <div className="bg-blue-100 p-3 rounded-full">
                <LazyLoad once>
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-10 h-10 object-contain group-hover:scale-110 duration-200"
                  />
                </LazyLoad>
              </div>
              <div className="flex-1">
                <h6 className="text-lg font-bold">{skill.name}</h6>
                <p className="text-sm text-gray-600">{skill.para}</p>
                <div
                  className="text-xl absolute top-4 right-4 text-blue-500 opacity-70 hover:opacity-100"
                >
                  {createElement(skills.icon)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Skill Details"
      >
        <div className="flex items-center gap-3 border-b pb-3 text-white">
          <div className="bg-blue-100 p-3 rounded-full">
            <LazyLoad once>
              <img className="h-10 w-10 object-contain" src={selectSkill?.logo} alt={selectSkill?.name} />
            </LazyLoad>
          </div>
          <h6 className="text-xl font-bold text-white">{selectSkill?.name}</h6>
        </div>
        <div className="my-4 text-white">
          <p className="italic mb-3 text-white">{selectSkill?.para}</p>
          <h6 className="font-semibold text-blue-400 mb-2">Key Features:</h6>
          <ul className="space-y-2 font-Poppins">
            {selectSkill?.points?.map((point, i) => (
              <li key={i} className="flex items-start">
                <span className="text-white mr-2">•</span>
                <span className="text-white">{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-end mt-4 pt-2 border-t">
          <button 
            onClick={closeModal} 
            className="px-4 py-2 rounded transition-colors"
            style={{ background: 'var(--color-accent)', color: '#fff' }}
          >
            Close
          </button>
        </div>
      </Modal>
    </section>
  );
};

export default Skills;
