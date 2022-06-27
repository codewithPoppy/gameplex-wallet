import { ComponentMeta, ComponentStory } from "@storybook/react";
import ResetSecretPhraseModal from "../../renderer/src/views/settingsViews/resetSecretPhraseModal";
import Danger from '../assets/icons/danger.svg'


export default {
  title: "Page/Settings/Reset Secret Phrase Modal",
  component: ResetSecretPhraseModal,
} as ComponentMeta<typeof ResetSecretPhraseModal>;

const Template: ComponentStory<typeof ResetSecretPhraseModal> = (args) => (
  <ResetSecretPhraseModal {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  modalHeader: "Reset secret phrase",
  buttonText: "Do not share your secret phrase with anyone",
  icon: Danger,
  isModalOpen: true,
};
