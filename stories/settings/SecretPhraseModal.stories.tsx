import { ComponentMeta, ComponentStory } from "@storybook/react";
import SecretPhraseModal from "../../renderer/src/views/settingsViews/secretPhraseModal";
import Warning from '../assets/icons/warning.svg'


export default {
  title: "Page/Settings/Secret Phrase Modal",
  component: SecretPhraseModal,
} as ComponentMeta<typeof SecretPhraseModal>;

const Template: ComponentStory<typeof SecretPhraseModal> = (args) => (
  <SecretPhraseModal {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  buttonText: "Do not share your secret phrase with anyone",
  modalHeader: "Show secret phrase",
  icon: Warning,
  isModalOpen: true,
};
