import React from "react";
import NextLink from "next/link";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { MdLaptop } from "react-icons/md";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="left">
          <NextLink href={"/"}>
            <a>
              <MdLaptop className="logoIcon"/>
              Jeffreyson Nguyen
            </a>
          </NextLink>
          <ul className="links">
            <li className="link">
              <NextLink href={"/projects"}>
                <a>Projects</a>
              </NextLink>
            </li>
            <li className="link">
              <NextLink href={"/#contact"}>
                <a>Contact</a>
              </NextLink>
            </li>
          </ul>
        </div>

        <div className="right">
          <LightModeOutlinedIcon className="themeButton" />
          <MenuOutlinedIcon className="menuButton" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
