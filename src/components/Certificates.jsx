import React, { useState } from 'react';
import { content } from '../Content';
import LazyLoad from "react-lazyload";
import { FiAward, FiCalendar, FiExternalLink } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';

const Certificates = () => {
  const { certificates } = content;
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // Calculate how many certificates to show by default (2 rows)
  const columns = 3; // default for desktop, adjust for mobile if needed
  const defaultRows = 2;
  const defaultVisible = columns * defaultRows;
  const visibleCertificates = showAll ? certificates.certificates_list : certificates.certificates_list.slice(0, defaultVisible);
  
  // Function to open certificate modal
  const openCertificateModal = (certificate) => {
    setSelectedCertificate(certificate);
  };

  // Function to close certificate modal
  const closeCertificateModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <section id="certificates" className="contact-section-theme" style={{ padding: '2.5rem 0' }}>
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {certificates.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {certificates.subtitle}
        </h4>
        <br />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleCertificates.map((certificate, i) => (
            <div 
              key={i} 
              className="p-5 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border group" style={{ background: 'var(--color-bg)' }}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              onClick={() => openCertificateModal(certificate)}
            >
              <div className="overflow-hidden rounded-md mb-4 border border-gray-100">
                <LazyLoad once>
                  <img 
                    src={`${import.meta.env.BASE_URL}${certificate.image.replace('./', '')}`} 
                    alt={certificate.title} 
                    className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </LazyLoad>
              </div>
              
              <div className="space-y-3">
                <h5 className="font-bold text-lg text-gray-800 dark:text-gray-200 group-hover:text-blue-600 transition-colors">
                  {certificate.title}
                </h5>
                
                <div className="flex items-center gap-2">
                  <FiAward className="text-blue-500" />
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{certificate.issuer}</p>
                </div>
                
                <div className="flex items-center gap-2">
                  <FiCalendar className="text-blue-500" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">{certificate.date}</p>
                </div>
                
                <div className="pt-2 mt-3 border-t flex justify-between items-center">
                  <span className="text-sm text-gray-700 dark:text-gray-300">Certificate</span>
                  <div className="flex items-center gap-1 text-blue-600 font-medium group-hover:gap-2 transition-all">
                    <span>View</span>
                    <FiExternalLink className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Show More/Less Button */}
      {certificates.certificates_list.length > defaultVisible && (
        <div className="flex justify-center mt-6">
          <button
            className="px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70" onClick={closeCertificateModal}>
          <div 
            className="relative rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            style={{ background: 'var(--color-bg)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 p-2 rounded-full shadow-md transition-colors z-10"
              style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }}
              onClick={closeCertificateModal}
            >
              <FiX size={24} />
            </button>
            
            <div className="h-full overflow-auto p-1">
              <img 
                src={`${import.meta.env.BASE_URL}${selectedCertificate.fullImage.replace('./', '')}`} 
                alt={selectedCertificate.title} 
                className="w-full h-auto object-contain"
              />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-4" style={{ background: 'linear-gradient(to top, var(--color-bg), transparent)' }}>
              <h3 className="text-xl font-bold" style={{ color: 'var(--color-text)' }}>{selectedCertificate.title}</h3>
              <div className="flex items-center gap-2 mt-1">
                <FiAward className="text-blue-500" />
                <p className="text-sm font-medium">{selectedCertificate.issuer}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
