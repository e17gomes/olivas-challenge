"use client";

import { useState } from "react";

const RendSessions = () => {
  const [indexFocus, setIndexFocus] = useState<number>(0);

  const handleFocus = (index: number) => {
    setIndexFocus(index); // Atualiza o índice ao clicar
  };

  const sessions = [1, 2, 3];

  return (
    <div className="flex gap-2 text-transparent select-none ease-in-out duration-300">
      {sessions.map((session, index) => (
        <li
          key={index}
          onClick={() => handleFocus(index)} // Atualiza o índice ao clicar
          className={`h-5 w-5 rounded-full cursor-pointer flex items-center justify-center transition-colors duration-300 ease-in-out ${
            indexFocus === index ? "bg-circle_session" : "bg-gray-200"
          }`}
        >
          {session}
        </li>
      ))}
    </div>
  );
};

export default RendSessions;
