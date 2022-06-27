import React from "react";
import SettingsView from "@/views/settingsView";
import NavigationStore from "@/store/NavigationStore";
import electron from "electron";

const leftCardOptions = [
  {
    id: "LanguageSettingsModal",
    optionHeader: "Display language",
    optionDescription: "Select the language you prefer.",
    icon: null,
  },
  {
    id: "AddressBookModal",
    optionHeader: "Address book",
    optionDescription: "Manage commonly used addresses",
    icon: "/icons/lock.svg",
  },
  {
    id: "TrustedAppsSettingsModal",
    optionHeader: "Trusted Apps",
    optionDescription: "Manage your trusted Applications",
    icon: null,
  },
  {
    id: "AutoLockerModal",
    optionHeader: "Auto lock timer",
    optionDescription: "Change auto lock timer",
    icon: "/icons/lock.svg",
  },
];

const rightCardOptions = [
  {
    id: "NetworkSettingsModal",
    optionHeader: "Change network",
    optionDescription: "Configure network settings",
    icon: null,
  },
  {
    id: "SecretPhraseModal",
    optionHeader: "Show secret phrase",
    optionDescription: "Do not share your secret phrase with anyone",
    icon: "/icons/warning.svg",
  },
  {
    id: "ExportPrivateKeyModal",
    optionHeader: "Export private key",
    optionDescription: "Do not share your secret phrase with anyone",
    icon: "/icons/warning.svg",
  },
  {
    id: "ResetSecretPhraseModal",
    optionHeader: "Reset secret phrase",
    optionDescription: "Do not share your secret phrase with anyone",
    icon: "/icons/danger.svg",
  },
];

const ipcRenderer = electron.ipcRenderer;

function Settings() {
  NavigationStore.active("Settings");

  return (
    <React.Fragment>
      {/* Settings View */}
      <SettingsView
        walletName={"Wallet 1"}
        walletAddress={"EP8YfUCpbbLVL3zZUZmDWPboFSjpYaSUYYXKc2HRjft9"}
        onChangeWalletAddress={(e) => {
          console.log(e.target.value);
        }}
        onChangeWalletName={(e) => {
          console.log(e.target.value);
        }}
        leftCardOptions={leftCardOptions}
        rightCardOptions={rightCardOptions}
        ipcRenderer={ipcRenderer}
      ></SettingsView>
    </React.Fragment>
  );
}

export default Settings;
