import React from "react";
import { mainMenu } from "../data/main-menu";

const NavbarSection =() => {
  return (
    <div className="navbar-container">
          {mainMenu.map((data) => (
             <a href={"#"+data.href}>
             {data.name}
           </a>
          ))}
         
    </div>
  );
}
export default NavbarSection;