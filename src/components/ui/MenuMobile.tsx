import Link from "next/link";

import { Button }  from "./Button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import pathMenu from "@/constants/pathMenu";
import { Menu } from "lucide-react";



export function MenuDrawer() {
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
    <Drawer>
      <DrawerTrigger asChild>
        <button ><Menu/></button>
      </DrawerTrigger>
      <DrawerContent className="backdrop-blur-md bg-transparent">
        <div className="p-6 flex justify-center items-center flex-col w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="underline text-gray-50 font-normal">Caminhos</DrawerTitle>
            <DrawerDescription className="text-"></DrawerDescription>
          </DrawerHeader>
            {renderedMenu}
          <DrawerFooter>
            <DrawerClose asChild>
              <Button >Contato</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
