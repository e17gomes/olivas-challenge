import LogoHeader from "./Logo-header"
import { MenuDrawer } from "./MenuMobile"


const NavMobile = () => {
  return (
    <nav className="w-full md:hidden flex justify-between p-4 items-center">
      <LogoHeader/>
      <MenuDrawer/>
    </nav>
  )
}

export default NavMobile
