import { useIsMobile } from "@/utils/useWindowSize";
import { Link } from "gatsby";

import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import { SocialIcons } from "../SocialIcons";

type NavButtonProps = {
  toggleMenu: () => void;
};

export const NavButton = ({ toggleMenu }: NavButtonProps) => {
  const [isOpen, setOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <div className="fixed flex-col items-center justify-between bottom-2 right-2 md:bottom-0 md:left-0 md:w-20 md:h-screen md:flex z-100">
      <Link
        to="/"
        className="hidden w-20 h-20 font-bold transition-all duration-300 bg-transparent border-2 md:items-center md:justify-center md:flex hover:text-tomato font-brother text-tiny border-purple-ultraDark"
      >
        HOME
      </Link>
      <div
        onClick={toggleMenu}
        role="button"
        aria-hidden="true"
        className="flex-col items-center justify-between md:py-4 md:w-20 md:h-screen md:flex md:bg-purple-ultraDark"
      >
        <span
          className={`flex items-center justify-center p-2 font-bold border-2 rounded-full lg:p-0 font-brother text-tiny md:justify-start md:items-start md:flex-1 border-purple-light md:border-none
            ${isMobile && "w-14 h-14"}
          `}
        >
          {isMobile ? "MENU" : <Hamburger toggled={isOpen} toggle={setOpen} />}
        </span>
        <SocialIcons className="flex-col justify-end flex-1 hidden gap-3 md:flex" />
      </div>
    </div>
  );
};
