import React from 'react';
import ProfileCard from './components/ProfileCard';
import HeroContent from './components/HeroContent';

// Import Icons
import logoIcon from './assets/uttam-assets/Group 1000003766.png';
import sunIcon from './assets/uttam-assets/wb_sunny_24dp_434343_FILL0_wght400_GRAD0_opsz24 1.png';
import aboutIcon from './assets/uttam-assets/ABOUT.png';
import skillsIcon from './assets/uttam-assets/SKILLS.png';
import resumeIcon from './assets/uttam-assets/RESUM.png';
import worksIcon from './assets/uttam-assets/WORKS.png';
import contactIcon from './assets/uttam-assets/CONTACT.png';

function App() {
  const navIcons = [
    { src: aboutIcon, alt: 'About' },
    { src: skillsIcon, alt: 'Skills' },
    { src: resumeIcon, alt: 'Resume' },
    { src: worksIcon, alt: 'Works' },
    { src: contactIcon, alt: 'Contact' },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background Layer */}
      <div className="concrete-bg" />

      {/* Sidebar Nav */}
      <div className="fixed left-6 top-[100px] flex flex-col gap-6 z-50">
        {/* Logo */}
        <div className="w-[84px] h-[84px] bg-[#1a1a1a] rounded-full flex items-center justify-center border border-white/5 shadow-xl cursor-pointer hover:bg-white/5 transition-all">
          <img src={logoIcon} alt="Logo" className="w-12 h-12" />
        </div>

        {/* Theme Toggle */}
        <div className="w-[84px] h-[84px] bg-[#1a1a1a] rounded-full flex items-center justify-center border border-white/5 shadow-xl cursor-pointer hover:bg-white/5 transition-all">
          <img src={sunIcon} alt="Theme" className="w-8 h-8" />
        </div>

        {/* Navigation Group */}
        <div className="bg-[#1a1a1a] rounded-[50px] p-2 flex flex-col gap-2 border border-white/10 shadow-2xl">
          {navIcons.map((icon, index) => (
            <div 
              key={index} 
              className="w-[68px] h-[68px] rounded-full flex items-center justify-center hover:bg-white/10 transition-all cursor-pointer group"
            >
              <img 
                src={icon.src} 
                alt={icon.alt} 
                className="w-14 h-14 group-hover:scale-110 transition-transform object-contain" 
              />
            </div>
          ))}
        </div>
      </div>

      {/* Main content centered */}
      <div className="w-full flex justify-center">
        <main className="relative flex pt-[100px] gap-[25px] pb-24 px-[50px]">
          <ProfileCard />
          <HeroContent />
        </main>
      </div>

    </div>
  );
}

export default App;
