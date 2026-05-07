import React from 'react';
import SkillsSection from './SkillsSection';
import ExperienceSection from './ExperienceSection';
import WorksSection from './WorksSection';
import ContactSection from './ContactSection';

const HeroContent = () => {
  return (
    <div 
      className="space-y-8 pb-24"
      style={{ width: '855px' }}
    >
      {/* Intro Block */}
      <div className="glass-card rounded-[40px] p-12 space-y-8 shadow-2xl border-white/5 bg-[#1a1a1a]" style={{ height: '676px' }}>
        <p className="text-xl text-gray-400">Hello, I'm <span className="text-white font-semibold underline decoration-brand-green underline-offset-8">Uttam Antala</span></p>
        
        <div className="space-y-4">
          <h1 className="text-7xl font-bold leading-tight tracking-tighter">
            Senior <span className="bg-brand-green/20 text-brand-green px-6 py-2 rounded-full border border-brand-green/30 italic">UI/UX Designer</span> / Bridging Design and Functionality
          </h1>
        </div>

        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
          I design simple, engaging, and accessible interfaces that blend usability with modern aesthetics to create memorable user experiences.
        </p>

        <div className="grid grid-cols-2 gap-6 pt-8">
          {/* Projects Completed Card */}
          <div className="glass-card rounded-2xl p-8 flex items-center border-white/5 bg-[#131313]">
            <p className="text-6xl font-medium text-white">30+</p>
            <div className="h-10 w-px bg-white/10 mx-8" />
            <p className="text-gray-400 text-base leading-tight">Completed<br />Projects</p>
          </div>
          
          {/* Years of Experience Card */}
          <div className="glass-card rounded-2xl p-8 flex items-center border-white/5 bg-[#131313]">
            <p className="text-6xl font-medium text-white">03+</p>
            <div className="h-10 w-px bg-white/10 mx-8" />
            <p className="text-gray-400 text-base leading-tight">Years<br />of Experience</p>
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
      <div className="w-full flex justify-center pt-24 pb-12">
        <h3 
          className="text-[100px] italic text-black/60 select-none"
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
