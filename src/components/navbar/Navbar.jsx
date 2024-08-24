import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/logo.png";
import { navItems } from "../../constants";
import Btn from "../btn/Btn";

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleMenu = () => {
    setIsToggled(!isToggled);
  };

  const closeMenu = () => {
    setIsToggled(false);
  };

  return (
    <nav className="b sticky left-0 top-0 z-50 border-b border-neutral-700/80 py-3 backdrop-blur-lg lg:px-20">
      {/*desktop nav  */}
      <div className="mx-auto hidden items-center justify-between px-4 text-sm lg:flex">
        <div className="flex items-center justify-between gap-2">
          <img src={logo} alt="logo" className="w-10" />
          <p className="text-xl tracking-tight">VirtualR</p>
        </div>
        <ul className="flex gap-6 xl:gap-12">
          {navItems.map((navItem) => (
            <li key={navItem.href}>
              <a
                href={`${navItem.href}`}
                className="opacity-50 duration-200 hover:opacity-100"
              >
                {navItem.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex justify-between gap-4 xl:gap-10">
          <Btn text="sign in" />
          <Btn text="sign up" variant="accent" />
        </div>
      </div>

      {/* mobile nav */}
      <div className="relative">
        <div className="mx-auto flex items-center justify-between gap-4 px-4 lg:hidden">
          {/* left side */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-10" />
            <p className="text-xl tracking-tight">VirtualR</p>
          </div>
          {/* right side */}
          <div>
            {isToggled ? (
              <X onClick={toggleMenu} />
            ) : (
              <Menu onClick={toggleMenu} />
            )}
          </div>
        </div>
        {/* nav dropdown menu */}
        {isToggled && (
          <div className="fixed mt-3 w-full bg-neutral-900 py-10 lg:hidden">
            <ul className="flex flex-col items-center gap-6">
              {navItems.map((navItem) => (
                <li key={navItem.href}>
                  <a href={`${navItem.href}`} onClick={closeMenu}>
                    {navItem.label}
                  </a>
                </li>
              ))}
              <div className="mt-4 flex gap-4 sm:gap-10">
                <Btn text="sign in" variant="accent" />
                <Btn text="sign up" />
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
