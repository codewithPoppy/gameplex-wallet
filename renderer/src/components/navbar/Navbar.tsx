import { FC, useState } from "react";
import classNames from "classnames";
import { NavbarBrand } from "./NavbarBrand";
import { NavbarCollapse } from "./NavbarCollapse";
import { NavbarContext } from "./NavbarContext";
import { NavbarLink } from "./NavbarLink";
import { NavbarToggle } from "./NavbarToggle";
import MoreOptions from "./MoreOptions";
import Notifications from "./Notifications";
import QrModal from "./QrModal";

export type NavbarCompnentProps = {
  menuOpen?: boolean;
  fluid?: boolean;
  rounded?: boolean;
  border?: boolean;
  qRIcon?: string;
  notificationIcon?: string;
};

const NavbarComponent: FC<NavbarCompnentProps> = ({
  children,
  menuOpen,
  fluid,
  rounded,
  border,
  qRIcon,
  notificationIcon,
}) => {
  const [isOpen, setIsOpen] = useState(menuOpen);

  return (
    <NavbarContext.Provider value={{ isOpen, setIsOpen }}>
      <nav
        className={classNames(
          "border-gray-200 shadow-md px-2 py-2.5 dark:border-[#1e1e1e] bg-[#1e1e1e] sm:px-4 pt-3",
          {
            rounded: rounded,
            border: border,
          }
        )}
      >
        <div
          className={classNames("grid grid-cols-2 md:grid-cols-3", {
            container: !fluid,
          })}
        >
          {children}

          <div className="hidden md:block order-3 text-right pr-4 py-1">
            {/* Qr Wallet Connect */}
            <QrModal qRIcon={qRIcon}></QrModal>

            {/* Notifications */}
            <Notifications notificationIcon={notificationIcon}></Notifications>

            {/* More Options */}
            <MoreOptions></MoreOptions>
          </div>
        </div>
      </nav>
    </NavbarContext.Provider>
  );
};

NavbarComponent.displayName = "Navbar";
NavbarBrand.displayName = "Navbar.Brand";
NavbarCollapse.displayName = "Navbar.Collapse";
NavbarLink.displayName = "Navbar.Link";
NavbarToggle.displayName = "Navbar.Toggle";

export const Navbar = Object.assign(NavbarComponent, {
  Brand: NavbarBrand,
  Collapse: NavbarCollapse,
  Link: NavbarLink,
  Toggle: NavbarToggle,
});
