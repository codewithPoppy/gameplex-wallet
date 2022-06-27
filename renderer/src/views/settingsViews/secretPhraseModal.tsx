import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

type SecretPhraseModalProps = {
  buttonText: string;
  modalHeader: string;
  icon?: string;
  isModalOpen?: boolean;
};
export default function SecretPhraseModal({
  modalHeader,
  buttonText,
  icon = "/icons/warning.svg",
  isModalOpen = false,
}: SecretPhraseModalProps) {
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
                    <div className="mt-3 border border-[#FFC805] p-4 bg-[#FFC80508] rounded-xl">
                      <h1 className="text-center pb-2 text-[#FFC805] font-bold text-sm">
                        Do not share your secret phrase!
                      </h1>
                      <h1 className="text-center text-[#FFC805] text-sm">
                        If someone has your secret phrase they will Have full
                        control of your wallet.
                      </h1>
                    </div>

                    <div className="">
                      <div className="relative">
                        <button
                          title="view"
                          className="focus:border-transparent focus:ring-0 z-50 absolute bottom-2.5 right-0 h-10 w-10 mx-2 text-black rounded-lg backdrop-blur-sm bg-[#02FF63] border-[#fafafa36] border-2 px-[10px]"
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
                        <p
                          title="secret"
                          className="focus:outline-none text-[#02FF63] bg-[#313131] w-full leading-9 border-[#383838] min-h-[9rem] border rounded-xl text-xs p-3 mr-2 mt-5 mb-2"
                        >
                          {/* Space After each phrase is Critical */}
                          <span className="p-2 bg-[#cdffcc66] border border-[#02FF63] mr-3 rounded-xl">
                            coxer{" "}
                          </span>
                          <span className="p-2 bg-[#cdffcc66] border border-[#02FF63] mr-3 rounded-xl">
                            coxer{" "}
                          </span>
                          <span className="p-2 bg-[#cdffcc66] border border-[#02FF63] mr-3 rounded-xl">
                            coxer{" "}
                          </span>
                          <span className="p-2 bg-[#cdffcc66] border border-[#02FF63] mr-3 rounded-xl">
                            coxer{" "}
                          </span>
                          <span className="p-2 bg-[#cdffcc66] border border-[#02FF63] mr-3 rounded-xl">
                            coxer{" "}
                          </span>
                          <span className="p-2 bg-[#cdffcc66] border border-[#02FF63] mr-3 rounded-xl">
                            coxer{" "}
                          </span>
                          <span className="p-2 bg-[#cdffcc66] border border-[#02FF63] mr-3 rounded-xl">
                            coxer{" "}
                          </span>
                          <span className="p-2 bg-[#cdffcc66] border border-[#02FF63] mr-3 rounded-xl">
                            coxer{" "}
                          </span>
                          <span className="p-2 bg-[#cdffcc66] border border-[#02FF63] mr-3 rounded-xl">
                            Coxer{" "}
                          </span>
                          <span className="p-2 bg-[#cdffcc66] border border-[#02FF63] mr-3 rounded-xl">
                            coxer{" "}
                          </span>
                          <span className="p-2 bg-[#cdffcc66] border border-[#02FF63] mr-3 rounded-xl">
                            coxer{" "}
                          </span>
                          <span className="p-2 bg-[#cdffcc66] border border-[#02FF63] mr-3 rounded-xl">
                            coxer{" "}
                          </span>
                          {/* Space After each phrase is Critical */}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 pb-8 px-6 w-full flex justify-center">
                    <button
                      className="focus:border-transparent focus:ring-0 w-64 text-white bg-[#2c2c2c] border border-[#383838] transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 hover:shadow-lg font-bold rounded-xl text-sm py-3 px-3 mr-2 mt-3"
                      type="submit"
                    >
                      Done
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
