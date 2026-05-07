import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import worksTagIcon from '../assets/uttam-assets/WORKS.png';

// Import Website Images
import web1 from '../assets/work-assets-website/01.png';
import web2 from '../assets/work-assets-website/02.png';
import web3 from '../assets/work-assets-website/03.png';
import web4 from '../assets/work-assets-website/04.png';
import web5 from '../assets/work-assets-website/05.png';

// Import Hero Section Images
import hero1 from '../assets/work-assets-herosection/021.png';
import hero2 from '../assets/work-assets-herosection/022.png';
import hero3 from '../assets/work-assets-herosection/023.png';
import hero4 from '../assets/work-assets-herosection/024.png';
import hero5 from '../assets/work-assets-herosection/025.png';

// Import Mobile App Images
import mob1 from '../assets/mobile-app-design/031.png';
import mob2 from '../assets/mobile-app-design/032.png';
import mob3 from '../assets/mobile-app-design/033.png';

// Import Logo Images
import logo1 from '../assets/logo-design/041.png';
import logo2 from '../assets/logo-design/042.png';
import logo3 from '../assets/logo-design/043.png';
import logo4 from '../assets/logo-design/044.png';
import logo5 from '../assets/logo-design/045.png';
import logo6 from '../assets/logo-design/046.png';
import logo7 from '../assets/logo-design/047.png';
import logo8 from '../assets/logo-design/048.png';
import logo9 from '../assets/logo-design/049.png';
import logo10 from '../assets/logo-design/050.png';

// Import Social Media Images
import sm1 from '../assets/socialmediapost/051.png';
import sm2 from '../assets/socialmediapost/052.png';
import sm3 from '../assets/socialmediapost/053.png';
import sm4 from '../assets/socialmediapost/054.png';
import sm5 from '../assets/socialmediapost/055.png';
import sm6 from '../assets/socialmediapost/056.png';
import sm7 from '../assets/socialmediapost/057.png';

const ProjectCarousel = ({ images, title, onImageClick, staggerDelay = 0 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Initial delay to stagger the start times
    const startTimer = setTimeout(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }, staggerDelay);

    return () => clearTimeout(startTimer);
  }, [images.length, staggerDelay]);

  return (
    <div 
      className="group cursor-pointer relative" 
      onClick={() => onImageClick(images[index])}
    >
      <div className="glass-card rounded-[30px] p-6 border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 shadow-xl overflow-hidden mb-4">
        <div className="aspect-[4/3] rounded-2xl overflow-hidden relative bg-[#0a0a0a]">
          <AnimatePresence initial={false}>
            <motion.img
              key={index}
              src={images[index]}
              alt={`${title} view ${index + 1}`}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ 
                duration: 1, 
                ease: [0.4, 0, 0.2, 1] // Custom cubic-bezier for smooth slide
              }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          
          {/* Progress Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <div 
                key={i} 
                className={`h-1 rounded-full transition-all duration-500 ${i === index ? 'w-6 bg-brand-green' : 'w-1.5 bg-white/20'}`}
              />
            ))}
          </div>

          {/* Overlay effect */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center z-20">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 backdrop-blur-md border border-white/30 scale-90 group-hover:scale-100">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <h3 className="text-xl font-medium text-center text-gray-300 group-hover:text-brand-green transition-colors duration-300">{title}</h3>
    </div>
  );
};

const WorksSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    { 
      title: 'Website Landing Page', 
      images: [web1, web2, web3, web4, web5] 
    },
    { 
      title: 'Hero Section', 
      images: [hero1, hero2, hero3, hero4, hero5] 
    },
    { 
      title: 'Mobile App Design', 
      images: [mob1, mob2, mob3] 
    },
    { 
      title: 'Logo', 
      images: [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10] 
    },
    { 
      title: 'Social Media Post', 
      images: [sm1, sm2, sm3, sm4, sm5, sm6, sm7] 
    },
  ];

  const closeModal = () => setSelectedImage(null);

  return (
    <>
      <div 
        className="glass-card rounded-[40px] p-12 space-y-12 shadow-2xl border-white/5" 
        style={{ 
          width: '855px',
          background: 'linear-gradient(125.04deg, #121212 0%, #222222 100%)'
        }}
      >
      {/* Header Tag */}
      <div className="flex">
        <div className="flex items-center gap-2 px-6 py-2 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md">
          <img src={worksTagIcon} alt="" className="w-5 h-5" />
          Works
        </div>
      </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-12">
          {projects.map((project, index) => (
            <ProjectCarousel 
              key={index} 
              {...project} 
              staggerDelay={index * 1000} // 1s staggered start
              onImageClick={setSelectedImage} 
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8"
          >
            {/* Close Button */}
            <motion.button 
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              onClick={closeModal}
              className="absolute top-6 right-6 sm:top-10 sm:right-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white border border-white/20 transition-all duration-300 hover:rotate-90 z-50 group"
            >
              <svg className="w-6 h-6 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {/* Image Container */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-[95vw] max-h-[90vh] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
            >
              <img 
                src={selectedImage} 
                alt="Project Full View" 
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* Click outside to close area */}
            <div className="absolute inset-0 -z-10" onClick={closeModal} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WorksSection;
