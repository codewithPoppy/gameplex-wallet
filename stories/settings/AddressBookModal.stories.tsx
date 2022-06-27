import { ComponentMeta, ComponentStory } from "@storybook/react";
import AddressBookModal from "../../renderer/src/views/settingsViews/addressBookModal";
import Lock from '../assets/icons/lock.svg'


export default {
  title: "Page/Settings/Address Book Modal",
  component: AddressBookModal,
} as ComponentMeta<typeof AddressBookModal>;

const Template: ComponentStory<typeof AddressBookModal> = (args) => (
  <AddressBookModal {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  modalHeader: "Address book",
  buttonText: "Manage commonly used addresses",
  icon: Lock,
  ipcRenderer: {
    send: (a: any, b: any) => a,
    sendSync: (a: any) => ["address 1", "address 2", "address 3"],
  },
  isModalOpen: true,
};
