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

      {/* Main Container - Fixed height on desktop, natural on mobile */}
      <div className="w-full lg:h-screen lg:overflow-hidden flex justify-center">
        <div className="flex flex-col lg:flex-row items-start gap-6 max-w-[1500px] w-full px-4 lg:px-8">
          
          {/* Left Section - Fixed/Sticky on the left */}
          <div className="flex-shrink-0 flex flex-col md:flex-row lg:flex-col xl:flex-row items-center lg:items-start gap-6 w-full lg:w-auto py-8 lg:py-12">
            
            {/* Sidebar Navigation */}
            <nav className="flex md:flex-col items-center gap-4 xl:gap-6 z-50 w-full md:w-auto overflow-x-auto no-scrollbar md:overflow-visible py-2 md:py-0 justify-center">
              {/* Logo */}
              <div className="w-14 h-14 xl:w-[84px] xl:h-[84px] bg-[#1a1a1a] rounded-full flex-shrink-0 flex items-center justify-center border border-white/5 shadow-xl cursor-pointer hover:bg-white/5 transition-all">
                <img src={logoIcon} alt="Logo" className="w-8 h-8 xl:w-12 xl:h-12" />
              </div>

              {/* Navigation Group */}
              <div className="flex md:flex-col bg-[#1a1a1a] rounded-full xl:rounded-[50px] p-1.5 xl:p-2 gap-1.5 xl:gap-2 border border-white/10 shadow-2xl">
                {navIcons.map((icon, index) => (
                  <div 
                    key={index} 
                    className="w-12 h-12 xl:w-[68px] xl:h-[68px] rounded-full flex-shrink-0 flex items-center justify-center hover:bg-white/10 transition-all cursor-pointer group"
                  >
                    <img 
                      src={icon.src} 
                      alt={icon.alt} 
                      className="w-8 h-8 xl:w-14 xl:h-14 group-hover:scale-110 transition-transform object-contain" 
                    />
                  </div>
                ))}
              </div>

              {/* Theme Toggle */}
              <div className="w-14 h-14 xl:w-[84px] xl:h-[84px] bg-[#1a1a1a] rounded-full flex-shrink-0 flex items-center justify-center border border-white/5 shadow-xl cursor-pointer hover:bg-white/5 transition-all">
                <img src={sunIcon} alt="Theme" className="w-6 h-6 xl:w-8 xl:h-8" />
              </div>
            </nav>

            {/* Profile Card */}
            <div className="w-full md:w-auto flex justify-center">
              <ProfileCard />
            </div>
          </div>

          {/* Scrolling Right Section - Independent scroll on desktop */}
          <main className="w-full lg:flex-1 lg:h-full lg:overflow-y-auto no-scrollbar py-8 lg:py-12">
            <HeroContent />
          </main>
        </div>
      </div>

    </div>
  );
}

export default App;
