"use client";
import { Phone } from 'lucide-react';
import Link from 'next/link';
import React, { useState, useRef } from 'react';

const Floater: React.FC = () => {
  const [hover, setHover] = useState(false);
  const [showLink, setShowLink] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setHover(true);
    setShowLink(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
    timeoutRef.current = setTimeout(() => {
      setShowLink(false);
    }, 5000); // Define um delay de 300ms para esconder o link
  };

  return (
    <div className="fixed bottom-4 right-4 hidden md:flex items-center space-x-2">
      {showLink && (
        <Link
          href="https://api.whatsapp.com/send?phone=5511977970984&text=Parab%C3%A9ns%20voc%C3%AA%20foi%20aprovado!%20%F0%9F%A4%A3%20brincadeira%20haha%20(ou%20n%C3%A3o)"
          className="bg-icons_color text-white p-2 px-8 rounded-full transition transform duration-300 opacity-100 translate-x-0"
          style={{ transitionDelay: '0.1s' }}
        >
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
