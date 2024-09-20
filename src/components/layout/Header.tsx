'use client';
import { motion } from "framer-motion";
import NavMovile from "@/components/ui/NavMobile"
import NavBarDesk from "../ui/NavBarDesk";


const Header = () => {
  

  return (
    <motion.header
      className="w-full h-24 sticky top-0 bg-white/95 pt-4 pb-2 px-4 md:px-[55px] z-50"
      initial={{opacity:0, y: -20}}
      whileInView={{opacity:1, y:0}}
      exit={{opacity:0}}
      transition={{duration:0.5}}
    >
    <NavMovile/>
    <NavBarDesk/>
    </motion.header>
  );
};

export default Header;
