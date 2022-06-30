import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

type AutoLockerModalProps = {
  modalHeader: string;
  buttonText: string;
  icon?: string;
  isModalOpen?: boolean;
};

export default function AutoLockerModal({
  modalHeader,
  buttonText,
  icon = "/icons/lock.svg",
  isModalOpen = false,
}: AutoLockerModalProps) {
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
                    <h1 className="text-center mb-12 mt-3 text-sm">
                      How long should we wait to lock your <br />
                      Wallet after it has been idle?
                    </h1>
                    <div className="grid grid-cols-4 bg-[#1e1e1e] border border-[#383838] rounded-xl w-100 mb-2">
                      <input
                        placeholder="15"
                        type="text"
                        className="col-span-3 focus:border-transparent focus:ring-0 rounded-xl bg-[#1e1e1e] border-0 text-[#ffffff] text-left text-sm py-3 pl-6"
                      ></input>
                      <div className="flex justify-end rounded-xl">
                        <button
                          type="button"
                          title="Revoke"
                          className="bg-[#272727] p-3 w-full text-sm rounded-xl text-[#ffffff99]"
                        >
                          minutes
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 pb-8 px-6 w-full flex justify-center">
                    <button
                      className="focus:border-transparent focus:ring-0 w-64 text-white bg-[#383838] border border-[#383838] transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 font-bold rounded-xl text-sm py-3 px-3 mr-2 mt-3"
                      type="submit"
                    >
                      Close
                    </button>
                    <button
                      className="focus:border-transparent focus:ring-0 w-64 text-black bg-[#02ff63] transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 hover:shadow-lg hover:shadow-[#02ff63cc] font-bold rounded-xl text-sm py-3 px-3 ml-2 mt-3"
                      type="submit"
                    >
                      Save
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
