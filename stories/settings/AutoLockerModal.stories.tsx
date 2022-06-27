import { ComponentMeta, ComponentStory } from "@storybook/react";
import AutoLockerModal from "../../renderer/src/views/settingsViews/autolockerModal";
import Lock from '../assets/icons/lock.svg'

export default {
  title: "Page/Settings/Auto Locker Modal",
  component: AutoLockerModal,
} as ComponentMeta<typeof AutoLockerModal>;

const Template: ComponentStory<typeof AutoLockerModal> = (args) => (
  <AutoLockerModal {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  modalHeader: "Auto lock timer",
  buttonText: "Change auto lock timer",
  icon: Lock,
  isModalOpen: true,
};
