import { ComponentMeta, ComponentStory } from "@storybook/react";
import ExportPrivateKeyModal from "../../renderer/src/views/settingsViews/exportPrivateKeyModal";
import Warning from '../assets/icons/warning.svg'


export default {
  title: "Page/Settings/Export Private Key Modal",
  component: ExportPrivateKeyModal,
} as ComponentMeta<typeof ExportPrivateKeyModal>;

const Template: ComponentStory<typeof ExportPrivateKeyModal> = (args) => (
  <ExportPrivateKeyModal {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  modalHeader: "Export private key",
  buttonText: "Do not share your secret phrase with anyone",
  icon: Warning,
  isModalOpen: true,
};
