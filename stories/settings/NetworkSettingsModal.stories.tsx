import { ComponentMeta, ComponentStory } from "@storybook/react";
import NetworkSettingsModal from "../../renderer/src/views/settingsViews/networkSettingsModal";
export default {
  title: "Page/Settings/Network Settings Modal",
  component: NetworkSettingsModal,
} as ComponentMeta<typeof NetworkSettingsModal>;

const Template: ComponentStory<typeof NetworkSettingsModal> = (args) => (
  <NetworkSettingsModal {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  modalHeader: "Change network",
  buttonText: "Configure network settings",
  isModalOpen: true,
  ipcRenderer: {
    send: (a: any, b: any) => a,
    sendSync: (a: any) => ["address 1", "address 2", "address 3"],
  },
};
