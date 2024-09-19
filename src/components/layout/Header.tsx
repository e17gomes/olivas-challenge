'use client';
import Link from "next/link";
import LogoHeader from "../ui/Logo-header";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import Search from "../ui/icons/Search";
import { useState } from "react";

const Header = () => {
  const [search, setSearch] = useState(true);

  const pathMenu = [
    { name: 'Sobre o teste', link: '#' },
    { name: 'SEO', link: '#SEO' },
    { name: 'Performance', link: '#' },
    { name: 'Blog', link: '#' },
  ];

  const renderedMenu = pathMenu.map((item, index) => (
    <Link
      className="text-menu_gray text-lg hover:text-Ybutton ease-in-out duration-300"
      key={index}
      href={item.link}
    >
      {item.name}
    </Link>
  ));

  return (
    <motion.header
      className="w-full h-28 sticky top-0 bg-white/95 py-2.5 px-[55px] z-50"
      initial={{opacity:0, y: -20}}
      whileInView={{opacity:1, y:0}}
      exit={{opacity:0}}
      transition={{duration:0.5}}
    >
      <div className="flex justify-around items-center">
        <LogoHeader widthSize="270" heightSize="83" />
        
        <nav className="flex gap-8 justify-center items-center">
          {search ? (
            <div className="flex gap-9">
              {renderedMenu}
            </div>
          ) : (
            <motion.input
            initial={{opacity:0, x: -20}}
            whileInView={{opacity:1, x:0}}
            exit={{opacity:0, x:-40}}
            transition={{duration:0.5}}

              className="border border-Ybutton w-[24.2rem] rounded-xl min-h-6 p-2 outline-yellow-300"
              placeholder="Digite o que procura..."
            />
          )}
          <button onClick={() => setSearch(!search)}>
            <Search className="pointer" />
          </button>
          <Button>Contato</Button>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
