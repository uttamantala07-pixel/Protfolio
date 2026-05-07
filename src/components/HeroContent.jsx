import React from 'react';
import SkillsSection from './SkillsSection';
import ExperienceSection from './ExperienceSection';
import WorksSection from './WorksSection';
import ContactSection from './ContactSection';

const HeroContent = () => {
  return (
    <div 
      className="space-y-8 pb-24 w-full max-w-[855px]"
    >
      {/* Intro Block */}
      <div className="relative glass-card rounded-[40px] p-6 md:p-12 shadow-2xl border-white/5 bg-[#1a1a1a] min-h-[500px] lg:min-h-[676px]">
        <p className="text-lg md:text-xl text-gray-400 mb-8 lg:mb-0">Hello, I'm <span className="text-white font-semibold underline decoration-brand-green underline-offset-8">Uttam Antala</span></p>
        
        <div className="lg:absolute lg:left-[50px] lg:top-[146px] lg:w-[723px] lg:h-[225px] relative">
          <h1 
            className="text-white lg:text-[50px] lg:leading-[75px] tracking-tight relative"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
          >
            {/* Senior */}
            <span className="block lg:inline">Senior</span>
            
            {/* Badge */}
            <span 
              className="inline-flex lg:absolute lg:left-[174.59px] lg:top-[3.52px] items-center justify-center bg-[#78CC6D] text-[#1e1e1e] lg:text-[37px] lg:leading-[56px] px-6 py-1 lg:w-[331px] lg:h-[58px] rounded-[55px] shadow-[3px_5px_0px_#2D2D2D] -rotate-[1.69deg] mx-2 lg:mx-0 align-middle"
              style={{ fontWeight: 500 }}
            >
              UI/UX Designer
            </span>

            {/* Slash */}
            <span className="hidden lg:block lg:absolute lg:left-[518px] lg:top-0 lg:w-[26px] lg:h-[75px]">
              /
            </span>

            {/* Bridging text */}
            <span className="block lg:mt-[-10px]">
              Bridging Design and Functionality
            </span>
          </h1>
        </div>

        {/* Spacer to prevent overlap on desktop - Adjusted for 3-line headline height */}
        <div className="lg:h-[300px] hidden lg:block" />

        <div className="space-y-8 mt-12 lg:mt-16">
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl">
            I design simple, engaging, and accessible interfaces that blend usability with modern aesthetics to create memorable user experiences.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pt-4 md:pt-8">
            {/* Projects Completed Card */}
            <div className="glass-card rounded-2xl p-6 md:p-8 flex items-center border-white/5 bg-[#131313]">
              <p className="text-4xl md:text-6xl font-medium text-white">30+</p>
              <div className="h-10 w-px bg-white/10 mx-6 md:mx-8" />
              <p className="text-gray-400 text-sm md:text-base leading-tight">Completed<br />Projects</p>
            </div>
            
            {/* Years of Experience Card */}
            <div className="glass-card rounded-2xl p-6 md:p-8 flex items-center border-white/5 bg-[#131313]">
              <p className="text-4xl md:text-6xl font-medium text-white">03+</p>
              <div className="h-10 w-px bg-white/10 mx-6 md:mx-8" />
              <p className="text-gray-400 text-sm md:text-base leading-tight">Years<br />of Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <SkillsSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Works Section */}
      <WorksSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer text */}
      <div className="w-full flex justify-center pt-12 md:pt-24 pb-12 overflow-hidden">
        <h3 
          className="text-6xl sm:text-7xl md:text-8xl lg:text-[100px] italic text-black/60 select-none whitespace-nowrap"
          style={{ 
            fontFamily: "'Great Vibes', cursive", 
            lineHeight: '1.2',
            WebkitTextStroke: '1px rgba(0,0,0,0.1)'
          }}
        >
          Thanks for watching
        </h3>
      </div>
    </div>
  );
};

export default HeroContent;
