import React from 'react';
import resumeIcon from '../assets/uttam-assets/RESUM.png';

const ExperienceEntry = ({ date, company, role, points, isLatest }) => (
  <div className="relative pl-12 pb-12 group last:pb-0">
    {/* Dot */}
    <div 
      className={`absolute left-0 top-0 w-4 h-4 rounded-full border-4 border-[#1a1a1a] z-10 transition-colors duration-300 ${
        isLatest ? 'bg-brand-green' : 'bg-gray-500 group-hover:bg-gray-300'
      }`} 
    />
    
    {/* Content Card */}
    <div className="space-y-4">
      {/* Date Pill */}
      <div 
        className={`inline-block px-3 py-1 rounded-full border text-[10px] font-bold tracking-widest uppercase transition-colors duration-300 ${
          isLatest ? 'border-brand-green text-brand-green' : 'border-gray-500 text-gray-500 group-hover:border-gray-300 group-hover:text-gray-300'
        }`}
      >
        {date}
      </div>

      <div className="space-y-1">
        <h3 className="text-2xl font-bold text-white group-hover:text-brand-green transition-colors">{company}</h3>
        <p className="text-lg text-gray-400 font-medium">{role}</p>
      </div>

      <ul className="space-y-3">
        {points.map((point, i) => (
          <li key={i} className="flex gap-3 text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
            <span className="text-brand-green mt-1.5">•</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const ExperienceSection = () => {
  const experiences = [
    {
      date: 'Feb 2026 - Present',
      company: 'Clapstick Media LLP',
      role: 'UI/UX Designer',
      isLatest: true,
      points: [
        'Designing and optimizing influencer management dashboards and admin panels with a focus on clean, modern SaaS UI.',
        'Creating wireframes, user flows, and high-fidelity prototypes in Figma using Auto Layout, components, and variants for scalable design systems.'
      ]
    },
    {
      date: 'Nov 2023 - Dec 2025',
      company: 'Orbitwebtech LLP',
      role: 'UI/UX Designer',
      points: [
        'Designed intuitive UI/UX for web and mobile applications, enhancing user satisfaction and engagement.',
        'Collaborated with developers and stakeholders to ensure design feasibility and seamless user flows.',
        'Improved website performance and SEO, contributing to a 30% increase in organic traffic.'
      ]
    },
    {
      date: 'Dec 2022 - Nov 2023',
      company: 'Zechrome Technologies LLP',
      role: 'UI/UX Designer',
      points: [
        'Led the creation of cross-platform design systems ensuring consistency and brand alignment.',
        'Conducted user testing and feedback sessions to refine UI/UX based on real-world interaction.',
        'Developed social media visuals and ad creatives that aligned with marketing strategies and increased campaign effectiveness'
      ]
    },
    {
      date: 'May 2022 - Dec 2022',
      company: 'SkillQode - IT institute in Surat',
      role: 'UI/UX Designer Intern',
      points: [
        'Created wireframes and prototypes for student projects and in-house tools.',
        'Learned and applied UI/UX best practices under senior designers’ mentorship.',
        'Participated in brainstorming sessions, contributing fresh ideas for design challenges.'
      ]
    }
  ];

  return (
    <div 
      className="glass-card rounded-[40px] p-12 space-y-10 shadow-2xl border-white/5 overflow-hidden" 
      style={{ 
        width: '855px',
        background: 'linear-gradient(125.04deg, #121212 0%, #222222 100%)'
      }}
    >
      {/* Header Tag */}
      <div className="flex">
        <div className="flex items-center gap-2 px-6 py-2 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md">
          <img src={resumeIcon} alt="" className="w-5 h-5" />
          Resume
        </div>
      </div>

      <h2 className="text-4xl font-bold text-white">Work Experience</h2>

      <div className="relative pt-4">
        {/* Vertical Line */}
        <div className="absolute left-[7px] top-4 bottom-4 w-px bg-white/10" />
        
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <ExperienceEntry key={index} {...exp} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
