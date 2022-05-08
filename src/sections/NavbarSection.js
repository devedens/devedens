import React from "react";
import { mainMenu } from "../data/main-menu";

const NavbarSection =() => {
  return (
    <nav className="navbar__container">
          {mainMenu.map((data) => (
             <a className="navbar__option" href={"#"+data.href}>
             {data.name}
           </a>
          ))}
         
    </nav>
  );
}
export default NavbarSection;