"use client"
import { useState } from "react";
import LogoHeader from "./Logo-header"
import Link from "next/link";
import { motion } from "framer-motion";
import Search from "./icons/Search";
import { Button } from "./Button";
import pathMenu from "@/constants/pathMenu";




const NavBarDesk = () => {
    const [search, setSearch] = useState(true);


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
    <div className="md:flex justify-around items-center hidden ">
    <LogoHeader/>
    
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
  )
}

export default NavBarDesk
