import React, { SetStateAction } from "react";
import HamburgerButton from "./hamburgerButton/hamburgerButton";
import SideBar from "./sidebar/sideBar";

type Props = {
  visible: boolean;
  setVisible: React.Dispatch<SetStateAction<boolean>>;
};

function MobileNav({ visible, setVisible }: Props) {
  return (
    <div>
      <HamburgerButton
        onClick={() => {
          setVisible((prevState) => !prevState);
        }}
      />
      {/* Sidebar */}
      <SideBar visible={visible} setVisible={setVisible} />
    </div>
  );
}

export default MobileNav;
