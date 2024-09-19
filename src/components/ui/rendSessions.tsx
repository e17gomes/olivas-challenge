"use client";

import { FC } from "react";

interface RendSessionsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const RendSessions: FC<RendSessionsProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pagesToShow = 3;

  // Define a página inicial e final a serem exibidas
  const startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

  // Ajusta o início das páginas a serem exibidas
  const adjustedStartPage = Math.max(1, endPage - pagesToShow + 1);
  const pages = Array.from({ length: endPage - adjustedStartPage + 1 }, (_, i) => adjustedStartPage + i);

  return (
    <div className="flex gap-2 pt-6 text-transparent select-none ease-in-out duration-300">
      {pages.map((page) => (
        <li
          key={page}
          onClick={() => onPageChange(page)} // Passa o número da página para a função de mudança
          className={`h-5 w-5 rounded-full cursor-pointer flex items-center justify-center transition-colors duration-300 ease-in-out ${
            currentPage === page ? "bg-circle_session" : "bg-gray-200"
          }`}
        >
          {page}
        </li>
      ))}
    </div>
  );
};

export default RendSessions;
