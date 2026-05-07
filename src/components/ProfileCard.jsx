import React from 'react';
import profilePic from '../assets/uttam-assets/IMG-20250203-WA0033 1.png';

const SocialIcon = ({ icon }) => (
  <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white/5 transition-all duration-300 group">
    <div className="text-gray-400 group-hover:text-white transition-colors scale-125">
      {icon}
    </div>
  </div>
);

const ProfileCard = () => {
  return (
    <div 
      className="relative glass-card rounded-[40px] flex flex-col items-center shadow-2xl overflow-hidden w-full max-w-[500px] min-h-[750px]"
      style={{ background: '#1a1a1a' }}
    >
      {/* Image Container */}
      <div className="w-[90%] mt-6 aspect-[4/4.5] bg-[#e5e5e5] rounded-[30px] overflow-hidden relative border border-white/5">
        <img 
          src={profilePic} 
          alt="Uttam Antala" 
          className="w-full h-full object-cover object-top translate-y-4"
        />
      </div>
      
      {/* Text Section */}
      <div className="flex-1 flex flex-col items-center justify-center space-y-6 w-full px-10">
        <div className="text-center">
          <p className="text-gray-400 text-xl font-medium tracking-wide flex items-center justify-center gap-1">
            UI/UX DESIGNER <span className="text-brand-green font-bold animate-pulse">|</span>
          </p>
          <h2 className="text-5xl font-bold tracking-tight text-white mt-4">Uttam Antala</h2>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <SocialIcon icon={
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          } />
          <SocialIcon icon={
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
          } />
          <SocialIcon icon={
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          } />
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="w-full flex border-t border-white/10">
        <button className="flex-1 py-10 text-white text-xl font-medium hover:bg-white/5 transition-all duration-300">
          Download CV
        </button>
        <div className="w-px bg-white/10 h-auto" />
        <button className="flex-1 py-10 text-white text-xl font-medium hover:bg-white/5 transition-all duration-300">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
