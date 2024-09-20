import LogoHeader from "./Logo-header"
import { useState } from "react"
import { MenuDrawer } from "./MenuMobile"


const NavMobile = () => {
  return (
    <nav className="w-full md:hidden flex justify-between py-4 items-center">
      <LogoHeader/>
      <MenuDrawer/>
    </nav>
  )
}

export default NavMobile
