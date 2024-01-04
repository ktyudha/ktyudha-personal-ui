import React from "react";
import NavbarComponent from "../components/Navbar";
import MediaSosialComponent from "../components/MedSos";
import FooterComponent from "../components/Footer";

const GuestLayout = ({ children }) => {
  return (
    <div>
      <NavbarComponent />
      <div>{children}</div>
      <MediaSosialComponent />
      <FooterComponent />
    </div>
  );
};

export default GuestLayout;
