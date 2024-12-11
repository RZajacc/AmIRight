import React from "react";
import MobileNav from "./mobileNav/mobileNav";
import DestktopNav from "./desktopNav/destktopNav";

type Props = {};

function MainHeader({}: Props) {
  return (
    <header>
      {/* Mobile navigation */}
      <MobileNav />
      {/* Desktop navigation */}
      <DestktopNav />
    </header>
  );
}

export default MainHeader;
