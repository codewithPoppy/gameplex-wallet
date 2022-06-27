import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

type ResetSecretPhraseModalProps = {
  modalHeader: string;
  buttonText: string;
  icon?: string;
  isModalOpen?: boolean;
};

export default function ResetSecretPhraseModal({
  modalHeader,
  buttonText,
  icon = "/icons/danger.svg",
  isModalOpen = false,
}: ResetSecretPhraseModalProps) {
  const [isOpen, setIsOpen] = useState(isModalOpen);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={() => {
            setIsOpen(true);
          }}
          className="focus:border-transparent focus:ring-0 text-sm w-full p-3 text-[#ffffff66] border border-[#383838] bg-[#232323] rounded-xl"
        >
          <table className="table-auto">
            <tbody>
              <tr>
                <td>
                  <h1 className="text-sm whitespace-nowrap">{buttonText}</h1>
                </td>
                <td className="text-right w-full">&gt;</td>
              </tr>
            </tbody>
          </table>
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
                <Dialog.Panel className="w-full max-w-[30rem] min-h-[42rem] transform overflow-hidden rounded-xl bg-[#1e1e1e] border border-[#383838] text-left align-middle shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none transition-all">
                  <Dialog.Title
                    as="h1"
                    className="text-white text-lg font-bold text-center bg-[#232323] py-6 px-3 rounded-xl w-100"
                  >
                    {modalHeader}
                  </Dialog.Title>

                  <div className="min-h-[32rem] mb-5 py-10 px-16">
                    <div className="h-50 flex justify-center">
                      {/* QR Code SVG */}
                      <img
                        className="w-32 h-32 mx-auto my-auto"
                        src={icon}
                        alt="QR Code Icon"
                      ></img>
                    </div>
                    <div className="mt-3 border border-[#FF5C59] p-8 bg-[#FF5C5908] rounded-xl">
                      <h1 className="text-center text-[#FF5C59] font-bold text-sm">
                        Resetting your secret <br />
                        recovery phrase
                      </h1>
                    </div>
                    <h1 className="text-center text-sm mt-8 opacity-60">
                      This will remove all existing wallets and replace them
                      with new ones. Make sure you have your existing secret
                      phrase and private keys backed up.
                    </h1>
                  </div>
                  <div className="col-span-2 pb-8 px-6 w-full flex justify-center">
                    <button
                      className="focus:border-transparent focus:ring-0 w-64 text-white bg-[#383838] border border-[#383838] transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 hover:shadow-lg hover:shadow-[#FF5C59cc] font-bold rounded-xl text-sm py-3 px-3 mr-2 mt-3"
                      type="submit"
                    >
                      Cancel
                    </button>
                    <button
                      className="focus:border-transparent focus:ring-0 w-64 text-black bg-[#02ff63] transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 hover:shadow-lg hover:shadow-[#02ff63cc] font-bold rounded-xl text-sm py-3 px-3 ml-2 mt-3"
                      type="submit"
                    >
                      Continue
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
