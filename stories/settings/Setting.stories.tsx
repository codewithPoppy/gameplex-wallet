import { ComponentMeta, ComponentStory } from "@storybook/react";
import SettingsView from "../../renderer/src/views/settingsView";
import Lock from '../assets/icons/lock.svg'
import Warning from '../assets/icons/warning.svg'
import Danger from '../assets/icons/danger.svg'


export default {
  title: "Page/Settings",
  component: SettingsView,
} as ComponentMeta<typeof SettingsView>;

const Template: ComponentStory<typeof SettingsView> = (args) => (
  <SettingsView {...args} />
);

export const SettingsPage = Template.bind({});
SettingsPage.args = {
  walletName: "Wallet 1",
  walletAddress: "EP8YfUCpbbLVL3zZUZmDWPboFSjpYaSUYYXKc2HRjft9",
  onChangeWalletAddress: (e) => {
    console.log(e.target.value);
  },
  onChangeWalletName: (e) => {
    console.log(e.target.value);
  },
  leftCardOptions: [
    {
      id: "LanguageSettingsModal",
      optionHeader: "Display language",
      optionDescription: "Select the language you prefer.",
      icon: "",
    },
    {
      id: "AddressBookModal",
      optionHeader: "Address book",
      optionDescription: "Manage commonly used addresses",
      icon: Lock,
    },
    {
      id: "TrustedAppsSettingsModal",
      optionHeader: "Trusted Apps",
      optionDescription: "Manage your trusted Applications",
      icon: Lock,
    },
    {
      id: "AutoLockerModal",
      optionHeader: "Auto lock timer",
      optionDescription: "Change auto lock timer",
      icon: Lock,
    },
  ],
  rightCardOptions: [
    {
      id: "NetworkSettingsModal",
      optionHeader: "Change network",
      optionDescription: "Configure network settings",
      icon: Lock,
    },
    {
      id: "SecretPhraseModal",
      optionHeader: "Show secret phrase",
      optionDescription: "Do not share your secret phrase with anyone",
      icon: Warning,
    },
    {
      id: "ExportPrivateKeyModal",
      optionHeader: "Export private key",
      optionDescription: "Do not share your secret phrase with anyone",
      icon: Warning,
    },
    {
      id: "ResetSecretPhraseModal",
      optionHeader: "Reset secret phrase",
      optionDescription: "Do not share your secret phrase with anyone",
      icon: Danger,
    },
  ],
  ipcRenderer: {
    send: (a: any, b: any) => a,
    sendSync: (a: any) => ["address 1", "address 2", "address 3"],
  },
};
