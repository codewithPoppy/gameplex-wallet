import React from "react";
import { Navbar } from "./navbar/Navbar";

type NavBarProps = {
  navigation: any;
  showBrand: boolean;
  active: any;
  logo?: string;
  qRIcon?: string;
  notificationIcon?: string;
};

function NavBar({
  navigation,
  showBrand,
  active,
  logo = "/images/logo.svg",
  qRIcon,
  notificationIcon,
}: NavBarProps) {
  return (
    <>
      <Navbar fluid qRIcon={qRIcon} notificationIcon={notificationIcon}>
        <Navbar.Brand href="/home">
          {(() => {
            if (showBrand) {
              return (
                <div className="flex flex-row justify-center mx-auto">
                  <img
                    src={logo}
                    className="pt-1 mr-2 h-4 sm:h-6"
                    alt="Gameplex Logo"
                  />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    Gameplex
                  </span>
                </div>
              );
            }
          })()}
        </Navbar.Brand>

        <div className="flex justify-end md:hidden">
          {/* <button>Get started</button> */}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {Object.keys(navigation).map(function (key, index) {
            return (
              <Navbar.Link
                key={index}
                href={navigation[key].href}
                active={key == active}
              >
                {navigation[key].name}
              </Navbar.Link>
            );
          })}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
