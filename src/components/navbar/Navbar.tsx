import React, { useState } from "react";

import "/src/css/navbar.scss";
import NavbarOption from "./NavbarOption";
import NavbarBelowLine from "./NavbarBelowLine";

interface NavbarProps {
  userData: {
    pageData: {
      [key: string]: {
        icon: string;
      };
    };
  };
  currentPage: string;
  updateCurrentPage: (page: string) => void;
}

const Navbar = (props: NavbarProps) => {
  const [visibility, setVisibility] = useState(false);

  function mobileVisibility() {
    return visibility ? "navbar" : "mobile-hidden-navbar";
  }

  function isSelected(title: string) {
    return title === props.currentPage ? "active-button" : "";
  }

  const pageTitles = Object.keys(props.userData.pageData);

  return (
    <React.Fragment>
      <div id="mobile-navbar-button">
        <i
          className="bi-chevron-expand"
          onClick={() => setVisibility(!visibility)}
          role="button"
          tabIndex={0}
        />
      </div>

      <div id={mobileVisibility()}>
        <div id="navbar-side-flourish1" />
        <div id="navbar-side-flourish2" />

        {pageTitles.map((title) => (
          <NavbarOption
            icon={props.userData.pageData[title].icon}
            key={title}
            page={title}
            active={isSelected(title)}
            updateCurrentPage={props.updateCurrentPage}
          />
        ))}
      </div>

      <NavbarBelowLine />
    </React.Fragment>
  );
};

export default Navbar;
