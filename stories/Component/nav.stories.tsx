import { ComponentMeta, ComponentStory } from "@storybook/react";
import NavBar from "../../renderer/src/components/NavBar";
import logo from "../assets/images/logo.svg";
import qRIcon from "../assets/icons/qr.svg";
import notificationIcon from "../assets/images/coins/sol.png";

export default {
  title: "Component/Nav",
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Nav = Template.bind({});
Nav.args = {
  navigation: {
    MyCollection: { name: "My Collection", href: "/home", active: false },
    Activity: { name: "Activity", href: "/activity", active: false },
    Settings: { name: "Settings", href: "/settings", active: false },
  },
  showBrand: true,
  active: true,
  logo,
  qRIcon,
  notificationIcon,
};
