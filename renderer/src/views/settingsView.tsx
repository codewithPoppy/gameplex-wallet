import NetworkSettingsModal from "./settingsViews/networkSettingsModal";
import TrustedAppsSettingsModal from "./settingsViews/trustedAppsSettingsModal";
import LanguageSettingsModal from "./settingsViews/languageSettingsModal";
import AddressBookModal from "./settingsViews/addressBookModal";
import AutolockerModal from "./settingsViews/autolockerModal";
import SecretPhraseModal from "./settingsViews/secretPhraseModal";
import ResetSecretPhraseModal from "./settingsViews/resetSecretPhraseModal";
import ExportPrivateKeyModal from "./settingsViews/exportPrivateKeyModal";

function SettingOptionItem({
  optionIndex,
  optionHeader,
  optionDescription,
  ipcRenderer,
  icon,
}) {
  return (
    <div className="flex flex-col gap-1 py-2 px-6">
      <table className="table-auto p">
        <tbody>
          <tr>
            <td>
              <h1 className="text-base w-1/2 whitespace-nowrap">
                {optionHeader}
              </h1>
            </td>
          </tr>
        </tbody>
      </table>
      {/* Adding Modals based on Index */}
      {optionIndex === "LanguageSettingsModal" && (
        <LanguageSettingsModal
          modalHeader={optionHeader}
          buttonText={optionDescription}
        />
      )}
      {optionIndex === "AddressBookModal" && (
        <AddressBookModal
          modalHeader={optionHeader}
          buttonText={optionDescription}
          ipcRenderer={ipcRenderer}
          icon={icon}
        />
      )}
      {optionIndex === "TrustedAppsSettingsModal" && (
        <TrustedAppsSettingsModal
          modalHeader={optionHeader}
          buttonText={optionDescription}
        />
      )}
      {optionIndex === "AutoLockerModal" && (
        <AutolockerModal
          modalHeader={optionHeader}
          buttonText={optionDescription}
          icon={icon}
        />
      )}
      {optionIndex === "NetworkSettingsModal" && (
        <NetworkSettingsModal
          modalHeader={optionHeader}
          buttonText={optionDescription}
          ipcRenderer={ipcRenderer}
        />
      )}
      {optionIndex === "SecretPhraseModal" && (
        <SecretPhraseModal
          modalHeader={optionHeader}
          buttonText={optionDescription}
          icon={icon}
        />
      )}
      {optionIndex === "ExportPrivateKeyModal" && (
        <ExportPrivateKeyModal
          modalHeader={optionHeader}
          buttonText={optionDescription}
          icon={icon}
        />
      )}
      {optionIndex === "ResetSecretPhraseModal" && (
        <ResetSecretPhraseModal
          modalHeader={optionHeader}
          buttonText={optionDescription}
          icon={icon}
        />
      )}
    </div>
  );
}

type Option = {
  id: string;
  optionHeader: string;
  optionDescription: string;
  icon: null | string;
};

type SettingsViewProps = {
  walletName: string;
  walletAddress: string;
  onChangeWalletName?: (a: any) => void;
  onChangeWalletAddress?: (a: any) => void;
  leftCardOptions: Option[];
  rightCardOptions: Option[];
  ipcRenderer: any;
};
function SettingsView({
  walletName,
  walletAddress,
  onChangeWalletName,
  onChangeWalletAddress,
  leftCardOptions,
  rightCardOptions,
  ipcRenderer,
}: SettingsViewProps) {
  return (
    <div className="mx-3 mb-3 rounded-xl bg-[#121212]">
      <div className="container mx-auto min-h-[90vh] md:px-6 lg:px-16 xl:px-44">
        <div className="grid grid-cols-2 gap-5 p-3 content-center">
          {/* Wallet Selection Area */}
          <div className="card content-center text-center col-span-2 border-[#383838] border md:mx-auto max-w-lg mt-3 pt-5 pb-3 px-3 bg-[#1e1e1e] rounded-xl">
            <h1 className="text-center text-3xl py-3 inline w-full px-auto">
              {walletName}
              <svg
                className="inline-block mx-2 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <g id="edit" transform="translate(-620 -252)">
                  <path
                    d="M9,0H7C2,0,0,2,0,7v6c0,5,2,7,7,7h6c5,0,7-2,7-7V11"
                    transform="translate(622 254)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <path
                    data-name="Vector"
                    d="M8.991,1.271l-7.88,7.88a2.712,2.712,0,0,0-.66,1.32l-.43,3.01a1.424,1.424,0,0,0,1.7,1.7l3.01-.43a2.8,2.8,0,0,0,1.32-.66l7.88-7.88c1.36-1.36,2-2.94,0-4.94S10.351-.089,8.991,1.271Z"
                    transform="translate(627.049 253.749)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <path
                    data-name="Vector"
                    d="M0,0A7.144,7.144,0,0,0,4.94,4.94"
                    transform="translate(634.91 256.15)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <path
                    data-name="Vector"
                    d="M0,0H24V24H0Z"
                    transform="translate(620 252)"
                    fill="none"
                    opacity="0"
                  />
                </g>
              </svg>
            </h1>
            <p className="text-center text-sm opacity-40 break-words py-3 px-5">
              ({walletAddress})
            </p>
          </div>

          {/* Left Options Card */}
          <div className="card py-3 bg-[#1e1e1e] border-[#383838] border rounded-xl w-full max-w-2xl mx-auto">
            {leftCardOptions.map((option, index) => {
              return (
                <SettingOptionItem
                  optionIndex={option.id}
                  optionHeader={option.optionHeader}
                  optionDescription={option.optionDescription}
                  key={index}
                  ipcRenderer={ipcRenderer}
                  icon={option.icon}
                />
              );
            })}
          </div>

          {/* Right Options Card */}
          <div className="card py-2 bg-[#1e1e1e] border-[#383838] border rounded-xl w-full max-w-2xl mx-auto">
            {rightCardOptions.map((option, index) => {
              return (
                <SettingOptionItem
                  optionIndex={option.id}
                  optionHeader={option.optionHeader}
                  optionDescription={option.optionDescription}
                  key={index}
                  icon={option.icon}
                  ipcRenderer={ipcRenderer}
                />
              );
            })}
          </div>
        </div>

        {/* Delete button */}
        <div className="w-full flex justify-center">
          <button
            className="focus:border-transparent focus:ring-0 w-64 text-white bg-[#B72C42] transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 hover:shadow-lg hover:shadow-[#B72C42cc] font-bold rounded-md text-sm py-2 mr-2 my-5"
            type="submit"
          >
            Delete Wallet
          </button>
        </div>
      </div>
    </div>
  );
}

export default SettingsView;
