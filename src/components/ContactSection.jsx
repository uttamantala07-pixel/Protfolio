import React from 'react';
import contactTagIcon from '../assets/uttam-assets/CONTACT.png';

const ContactCard = ({ icon, label, value }) => (
  <div className="glass-card rounded-[10px] p-6 flex items-center gap-6 border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300">
    <div className="w-14 h-14 bg-[#1a1a1a] rounded-lg flex items-center justify-center border border-white/10 group">
      <div className="text-[#78CC6D]">
        {icon}
      </div>
    </div>
    <div className="flex-1 flex flex-col justify-center border-l border-white/10 pl-6 h-full">
      <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">{label}</p>
      <p className="text-lg font-medium text-white">{value}</p>
    </div>
  </div>
);

const ContactSection = () => {
  const contactInfo = [
    {
      label: 'Phone No.',
      value: '+91 63542 39188',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      )
    },
    {
      label: 'Email',
      value: 'uttam.antala07@gmail.com',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      )
    },
    {
      label: 'Address',
      value: 'Ahmedabad, Gujarat',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      )
    }
  ];

  return (
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
          <img src={contactTagIcon} alt="" className="w-5 h-5" />
          Contact
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-4xl font-medium text-white">Let's Get in Touch!</h2>
        
        <div className="grid grid-cols-2 gap-6">
          <ContactCard {...contactInfo[0]} />
          <ContactCard {...contactInfo[1]} />
          <div className="col-span-2">
            <ContactCard {...contactInfo[2]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
