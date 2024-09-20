"use client";
import { Phone } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

const Floater: React.FC = () => {
  const [hover, setHover] = useState(false);
  const [showLink, setShowLink] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
    setShowLink(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
    setTimeout(() => {
      if (!hover) setShowLink(false);
    }, 300); // Tempo para a animação
  };

  return (
    <div className="fixed bottom-4 right-4 hidden md:flex items-center space-x-2">
      {showLink && (
        <Link href={'/'} className="bg-icons_color text-white p-2 px-8 rounded-full transition transform duration-300 opacity-100 translate-x-0" style={{ transitionDelay: '0.1s' }}>
          Orçamento
        </Link>
      )}
      <div
        className={`bg-icons_color text-white w-16 h-16 rounded-full flex items-center justify-center cursor-pointer hover:bg-icons_color/90 transition duration-300 ${hover ? 'scale-110' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Phone />
      </div>
    </div>
  );
};

export default Floater;
