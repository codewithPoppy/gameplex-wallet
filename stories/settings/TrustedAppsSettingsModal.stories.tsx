import { ComponentMeta, ComponentStory } from "@storybook/react";
import TrustedAppsSettingsModal from "../../renderer/src/views/settingsViews/trustedAppsSettingsModal";
import Logo from "../assets/images/nfts/1.png";

export default {
  title: "Page/Settings/Trusted Apps Settings Modal",
  component: TrustedAppsSettingsModal,
} as ComponentMeta<typeof TrustedAppsSettingsModal>;

const Template: ComponentStory<typeof TrustedAppsSettingsModal> = (args) => (
  <TrustedAppsSettingsModal {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  modalHeader: "Trusted Apps",
  buttonText: "Manage your trusted Applications",
  isModalOpen: true,
  appList: [
    {
      key: "some-key",
      logo: Logo,
      url: "https://trusted-app.com",
      name: "Trusted App",
    },
    {
      key: "some-key",
      logo: Logo,
      url: "https://trusted-app.com",
      name: "Trusted App",
    },
    {
      key: "some-key",
      logo: Logo,
      url: "https://trusted-app.com",
      name: "Trusted App",
    },
    {
      key: "some-key",
      logo: Logo,
      url: "https://trusted-app.com",
      name: "Trusted App",
    },
  ],
};
