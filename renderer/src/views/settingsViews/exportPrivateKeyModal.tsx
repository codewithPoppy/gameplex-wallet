import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

type ExportPrivateKeyModalProps = {
  modalHeader: string;
  buttonText: string;
  icon?: string;
  isModalOpen?: boolean;
};

export default function ExportPrivateKeyModal({
  modalHeader,
  buttonText,
  icon = "/icons/warning.svg",
  isModalOpen = false,
}: ExportPrivateKeyModalProps) {
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

                    <div className="mt-3">
                      <label
                        htmlFor="password"
                        className="relative text-gray-400 focus-within:text-gray-600 block"
                      >
                        <svg
                          className="pointer-events-none absolute top-[42px] text-white transform -translate-y-1/2 left-3"
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                        >
                          <g
                            id="vuesax_linear_unlock"
                            data-name="vuesax/linear/unlock"
                            transform="translate(-236 -252)"
                          >
                            <g id="unlock">
                              <path
                                d="M15,12H5c-4,0-5-1-5-5V5C0,1,1,0,5,0H15c4,0,5,1,5,5V7C20,11,19,12,15,12Z"
                                transform="translate(238 262)"
                                fill="none"
                                stroke="#fff"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                data-name="Vector"
                                d="M0,8V6C0,2.69,1,0,6,0c4.5,0,6,2,6,5"
                                transform="translate(242 254)"
                                fill="none"
                                stroke="#fff"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                data-name="Vector"
                                d="M5,2.5A2.5,2.5,0,1,1,2.5,0,2.5,2.5,0,0,1,5,2.5Z"
                                transform="translate(245.5 265.5)"
                                fill="none"
                                stroke="#fff"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                data-name="Vector"
                                d="M0,0H24V24H0Z"
                                transform="translate(260 276) rotate(180)"
                                fill="none"
                                opacity="0"
                              />
                            </g>
                          </g>
                        </svg>
                        <input
                          type="password"
                          className="focus:border-transparent focus:ring-0 text-white bg-[#313131] w-full border-[#383838] border-2 flex-auto transition ease-out font-bold rounded-xl placeholder:font-thin placeholder:text-[#FFFFFF33] text-sm px-5 pl-11 py-3 mr-2 mt-5 mb-5"
                          placeholder="Enter Password"
                        />
                      </label>
                      <br />
                    </div>
                  </div>
                  <div className="col-span-2 pb-8 px-6 w-full flex justify-center">
                    <button
                      className="focus:border-transparent focus:ring-0 w-64 text-white bg-[#383838] border border-[#383838] transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 hover:shadow-lg hover:shadow-[#FF5C59cc] font-bold rounded-xl text-sm py-3 px-3 mr-2 mt-3"
                      type="submit"
                    >
                      Close
                    </button>
                    <button
                      className="focus:border-transparent focus:ring-0 w-64 text-black bg-[#02ff63] transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 hover:shadow-lg hover:shadow-[#02ff63cc] font-bold rounded-xl text-sm py-3 px-3 ml-2 mt-3"
                      type="submit"
                    >
                      Next
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
