import { ComponentMeta, ComponentStory } from "@storybook/react";
import LanguageSettingsModal from "../../renderer/src/views/settingsViews/languageSettingsModal";
export default {
  title: "Page/Settings/Language Settings Modal",
  component: LanguageSettingsModal,
} as ComponentMeta<typeof LanguageSettingsModal>;

const Template: ComponentStory<typeof LanguageSettingsModal> = (args) => (
  <LanguageSettingsModal {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  buttonText: "Select the language you prefer.",
  modalHeader: "Display language",
  isModalOpen: true,
};
