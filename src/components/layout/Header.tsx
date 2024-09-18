'use client'
import Link from "next/link";
import LogoHeader from "../ui/Logo-header"; // Complete the import statement
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Button } from "../ui/Button";


const Header = () => {

const pathMenu = [
  {name:'Sobre o teste',
    link:'#'
  },
  {name:'SEO',
    link:'#'
  },
  {name:'Performance',
    link:'#'
  },
  {name:'Blog',
    link:'#'
  },
 ];

const renderedMenu = pathMenu.map((item, index)=>(
<Link
className="text-menu_gray text-lg"
key={index}
href={item.link}
>
{item.name}
</Link>
))

  return (
    <motion.header
    className="w-full h-28 sticky top-0 bg-white/80 py-2.5 px-[55px]"
    initial={{opacity:1}}
    >
      <div className="flex justify-around items-center">
      <LogoHeader widthSize="270" heightSize="83"/>
      <div>

      </div>
      <nav
      className="flex gap-8 justify-center items-center"
      >
      {renderedMenu}
      <Search size={'19'}/>
      <Button>
        Contato
      </Button>
      </nav>

      </div>
    </motion.header>
  );
};

export default Header;
