import React from 'react';

// Import Icons
import figmaIcon from '../assets/uttam-assets/figma.png';
import psIcon from '../assets/uttam-assets/photoshop.png';
import xdIcon from '../assets/uttam-assets/xd.png';
import aiIcon from '../assets/uttam-assets/ai.png';
import canvaIcon from '../assets/uttam-assets/canava.png';
import skillsTagIcon from '../assets/uttam-assets/SKILLS.png';

const SoftwareSkillCard = ({ icon, name, percentage, color }) => (
  <div className="glass-card rounded-[30px] p-6 flex flex-col gap-4 border-white/5 relative overflow-hidden group">
    <div className="flex items-center gap-4">
      <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center p-3 shadow-inner">
        <img src={icon} alt={name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-1">
          <h4 className="text-xl font-medium text-gray-200">{name}</h4>
          <span className="text-[10px] font-bold bg-[#1a1a1a] px-2 py-1 rounded-full border border-white/10 text-gray-400">{percentage}%</span>
        </div>
        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-4">
          <div 
            className="h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(255,255,255,0.1)]" 
            style={{ width: `${percentage}%`, backgroundColor: color }} 
          />
        </div>
      </div>
    </div>
  </div>
);

const LanguageSkill = ({ name, percentage }) => {
  const dots = Array.from({ length: 10 }, (_, i) => i < (percentage / 10));
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <span className="text-gray-300 font-medium">{name}</span>
      </div>
      <div className="flex justify-between items-center gap-4">
        <div className="flex gap-2">
          {dots.map((active, i) => (
            <div 
              key={i} 
              className={`w-3 h-3 rounded-full ${active ? 'bg-brand-green shadow-[0_0_8px_rgba(74,222,128,0.4)]' : 'bg-white/10'}`} 
            />
          ))}
        </div>
        <span className="text-[10px] font-bold bg-[#1a1a1a] px-2 py-1 rounded-full border border-white/10 text-gray-400">{percentage}%</span>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const softwareSkills = [
    { icon: figmaIcon, name: 'Figma', percentage: 98, color: '#A259FF' },
    { icon: psIcon, name: 'Adobe Photoshop', percentage: 85, color: '#31A8FF' },
    { icon: xdIcon, name: 'Adobe XD', percentage: 80, color: '#FF61F6' },
    { icon: aiIcon, name: 'Adobe Illustrator', percentage: 70, color: '#FF9A00' },
    { icon: canvaIcon, name: 'Canva', percentage: 96, color: '#00C4CC' },
  ];

  const knowledgeSkills = [
    'iOS & Android App Design',
    'Logo Design',
    'Print Design',
    'Responsive & Mobile-Ready Design',
    'Graphics & Animations',
    'Search Engine Marketing (SEM)',
    'Business Card Mockups',
  ];

  return (
    <div className="glass-card rounded-[40px] p-6 md:p-12 space-y-12 shadow-2xl border-white/5 w-full">
      {/* Header Tag */}
      <div className="flex">
        <div className="flex items-center gap-2 px-6 py-2 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md">
          <img src={skillsTagIcon} alt="" className="w-5 h-5" />
          Skills
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Software Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {softwareSkills.map((skill, index) => (
            <SoftwareSkillCard key={index} {...skill} />
          ))}
        </div>
      </div>

      <div className="w-full h-px bg-white/5" />

      <div className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Additional Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Languages */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">
              <span className="text-lg">あ</span>
              Languages
            </div>
            <div className="space-y-6">
              <LanguageSkill name="English" percentage={80} />
              <LanguageSkill name="Hindi" percentage={90} />
              <LanguageSkill name="Gujarati" percentage={100} />
            </div>
          </div>

          {/* Knowledge */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">
              <span className="text-lg">💡</span>
              Knowledge
            </div>
            <ul className="space-y-3">
              {knowledgeSkills.map((skill, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <div className="w-1.5 h-1.5 bg-brand-green rounded-full" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
