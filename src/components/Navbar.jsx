import React from "react";

import { Flowbite, Navbar, DarkThemeToggle } from "flowbite-react";
const NavbarComponent = () => {
  return (
    <Flowbite>
      <Navbar>
        <Navbar.Brand href="/">
          <img
            src="logoyudha.png"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Flowbite React
            </span> */}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="items-center">
          <Navbar.Link href="#">Kenali Yudha</Navbar.Link>
          <Navbar.Link href="#">Rekam Jejak</Navbar.Link>
          <Navbar.Link href="#">Media</Navbar.Link>
          <Navbar.Link href="#">Projek</Navbar.Link>
          <Navbar.Link href="#">
            <DarkThemeToggle />
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </Flowbite>
  );
};

export default NavbarComponent;
