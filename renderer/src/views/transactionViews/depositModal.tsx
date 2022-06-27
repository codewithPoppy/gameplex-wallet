import { Combobox, Dialog, Transition } from "@headlessui/react";
import { Tooltip } from "flowbite-react";
import { Fragment, useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { CheckIcon, SelectorIcon } from "@heroicons/react/outline";
import SettingsStore from "@/store/SettingsStore";
import { CopyToClipboard } from "react-copy-to-clipboard";

export interface DepositModalProps {
  modalHeader: string;
  buttonText: string;
  accounts: {
    accountName: string;
    accountSymbol: string;
    accountAddress: string;
    accountImage: string;
    accountAmount: string;
  }[];
}

export default function DepositModal({
  modalHeader,
  buttonText,
  accounts,
}: DepositModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);
  useEffect(() => {
    accounts?.length && setSelectedAccount(accounts[0]);
  }, [accounts]);

  const [query, setQuery] = useState("");

  const filteredAccounts =
    query === ""
      ? accounts
      : accounts.filter((account) => {
          return (
            account.accountName.toLowerCase().includes(query.toLowerCase()) ||
            account.accountSymbol.toLowerCase().includes(query.toLowerCase())
          );
        });

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={() => {
            setIsOpen(true);
          }}
          className="focus:border-transparent focus:ring-0 h-11 w-full text-white border-[#383838] border bg-[#2c2c2c] flex-auto transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 hover:shadow-lg font-normal rounded-xl text-md py-2 mt-5"
          type="submit"
        >
          <span className="inline-flex content-center">
            <svg
              id="import"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
            >
              <path
                d="M0,0,2.56,2.56,5.12,0"
                transform="translate(9.32 11.68)"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
              <path
                data-name="Vector"
                d="M0,0V10.17"
                transform="translate(11.88 4)"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
              <path
                data-name="Vector"
                d="M16,0A7.651,7.651,0,0,1,8,8,7.651,7.651,0,0,1,0,0"
                transform="translate(4 12.18)"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
              <path
                data-name="Vector"
                d="M0,0H24V24H0Z"
                transform="translate(24 24) rotate(180)"
                fill="none"
                opacity="0"
              />
            </svg>
            &nbsp;&nbsp;{buttonText}
          </span>
        </button>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* Background Blur */}
            <div className="fixed inset-0 backdrop-blur-sm bg-black/30" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[30rem] transform overflow-hidden rounded-xl bg-[#1e1e1e] border border-[#383838] text-left align-middle shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none transition-all">
                  <Dialog.Title
                    as="h1"
                    className="text-white text-lg font-semibold text-center bg-[#232323] py-6 px-3 rounded-xl w-100"
                  >
                    {modalHeader}
                  </Dialog.Title>

                  <div className="min-h-[32rem] mb-5 py-5 px-9">
                    <h1 className="text-sm mb-3 font-light">
                      Select an Account
                    </h1>
                    <div className="grid grid-cols-7 bg-[#1e1e1e] border border-[#383838] rounded-xl">
                      <Combobox
                        value={selectedAccount}
                        onChange={setSelectedAccount}
                      >
                        <div className="relative w-full col-span-12">
                          <Combobox.Input
                            placeholder="Select a cryptocurrency"
                            className="w-full focus:border-transparent font-light focus:ring-0 rounded-xl bg-[#1e1e1e] border-0 text-[#ffffff] text-left text-sm py-3"
                            displayValue={(account: any) =>
                              account
                                ? `${account.accountName} (${account.accountSymbol})`
                                : ""
                            }
                            onChange={(event) => setQuery(event.target.value)}
                          />
                          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                            <SelectorIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </Combobox.Button>
                          <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            afterLeave={() => setQuery("")}
                          >
                            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-[#232323] py-1 text-base shadow-lg drop-shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-20">
                              {filteredAccounts?.length === 0 &&
                              query !== "" ? (
                                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                  Nothing found.
                                </div>
                              ) : (
                                filteredAccounts.map((account) => (
                                  <Combobox.Option
                                    key={account.accountAddress}
                                    className={({ active }) =>
                                      `relative cursor-default select-none py-2 px-4 ${
                                        active ? "bg-[#1e1e1e]" : "text-white"
                                      }`
                                    }
                                    value={account}
                                  >
                                    {({ selected, active }) => (
                                      <>
                                        <div className="card cursor-pointer flex w-full">
                                          <img
                                            src={account.accountImage}
                                            alt=""
                                            className="w-12 h-12 rounded-full"
                                          />
                                          <h1 className="ml-2">
                                            <span className="text-md font-normal ">
                                              {account.accountName}
                                            </span>{" "}
                                            <br />
                                            <span className="opacity-40 font-thin text-sm">
                                              {account.accountSymbol}
                                            </span>
                                          </h1>
                                          <div className="flex-grow"></div>
                                          <h1 className="text-right w-auto">
                                            <span className="text-base font-normal text-[#FAFAFA]">
                                              {account.accountAmount}
                                            </span>{" "}
                                            <br />
                                            <span className="opacity-40 font-normal text-sm">
                                              Available
                                            </span>
                                          </h1>
                                        </div>
                                      </>
                                    )}
                                  </Combobox.Option>
                                ))
                              )}
                            </Combobox.Options>
                          </Transition>
                        </div>
                      </Combobox>
                    </div>

                    <div className="h-72 flex justify-center">
                      {/* QR Code SVG */}
                      <div className="rounded-xl bg-white h-52 w-52 my-auto p-3">
                        <QRCode
                          id="QRCodeDepositAddress"
                          size={185}
                          style={{
                            height: "auto",
                            maxWidth: "100%",
                            width: "100%",
                          }}
                          value={selectedAccount?.accountAddress || ""}
                        />
                      </div>
                    </div>
                    <h1 className="text-sm mb-3 font-light">
                      Wallet 1 Address
                    </h1>
                    <div className="grid grid-cols-7 bg-[#1e1e1e] border border-[#383838] rounded-xl mb-2">
                      <input
                        placeholder="NA"
                        type="text"
                        value={selectedAccount?.accountAddress || ""}
                        className="col-span-6 focus:border-transparent font-light focus:ring-0 rounded-xl bg-[#1e1e1e] border-0 text-[#ffffff] text-left text-xs py-3"
                      ></input>
                      <div className="flex justify-end rounded-xl">
                        <Tooltip content="Copied" trigger="click">
                          <CopyToClipboard
                            text={selectedAccount?.accountAddress || ""}
                            onCopy={() => setIsCopied(true)}
                          >
                            <button
                              type="button"
                              title="Copy"
                              className="bg-[#02ff63] p-3 text-sm rounded-xl text-[#ffffff99]"
                            >
                              <svg
                                id="copy"
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M14,4.9V9.1c0,3.5-1.4,4.9-4.9,4.9H4.9C1.4,14,0,12.6,0,9.1V4.9C0,1.4,1.4,0,4.9,0H9.1C12.6,0,14,1.4,14,4.9Z"
                                  transform="translate(2 8)"
                                  fill="none"
                                  stroke="#292d32"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="1.5"
                                />
                                <path
                                  data-name="Vector"
                                  d="M14,4.9V9.1c0,3.5-1.4,4.9-4.9,4.9H8V10.9C8,7.4,6.6,6,3.1,6H0V4.9C0,1.4,1.4,0,4.9,0H9.1C12.6,0,14,1.4,14,4.9Z"
                                  transform="translate(8 2)"
                                  fill="none"
                                  stroke="#292d32"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="1.5"
                                />
                                <path
                                  data-name="Vector"
                                  d="M0,0H24V24H0Z"
                                  fill="none"
                                  opacity="0"
                                />
                              </svg>
                            </button>
                          </CopyToClipboard>
                        </Tooltip>
                      </div>
                    </div>
                    <h1 className="text-xs mt-3 text-center font-light opacity-60">
                      This address can use only to receive
                      <br />
                      SOL and SPL tokens in Solana
                    </h1>
                  </div>
                  <div className="col-span-2 pb-8 px-6 w-full flex justify-center">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="focus:border-transparent focus:ring-0 w-64 text-black bg-[#02ff63] transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 hover:shadow-lg hover:shadow-[#02ff63cc] font-bold rounded-xl text-md p-2 ml-2 mt-3"
                      type="submit"
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
