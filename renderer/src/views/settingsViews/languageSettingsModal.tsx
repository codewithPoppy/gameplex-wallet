import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

type LanguageSettingsModalProps = {
  buttonText: string;
  modalHeader: string;
  isModalOpen?: boolean;
};

export default function LanguageSettingsModal({
  modalHeader,
  buttonText,
  isModalOpen = false,
}: LanguageSettingsModalProps) {
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
                <Dialog.Panel className="w-full max-w-[30rem] transform overflow-hidden rounded-xl bg-[#1e1e1e] border border-[#383838] text-left align-middle shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none transition-all">
                  <Dialog.Title
                    as="h1"
                    className="text-white text-lg font-bold text-center bg-[#232323] py-6 px-3 rounded-xl w-100"
                  >
                    {modalHeader}
                  </Dialog.Title>

                  <div className="mb-5 py-3 px-0">
                    <div className="min-h-[32rem] py-6 px-12">
                      <div className="col-span-2 grid grid-cols-4 bg-[#232323] border border-[#383838] rounded-xl w-100 mb-3">
                        <div className="col-span-3">
                          <h1 className="text-[#ffffff66] text-left text-xs py-3 pl-6">
                            English
                          </h1>
                        </div>
                        <div className="flex justify-end">
                          <button
                            type="button"
                            title="Revoke"
                            className="focus:border-transparent focus:ring-0 bg-[#272727] px-3 py-2 rounded-xl"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                            >
                              <g transform="translate(-748 -188)">
                                <path
                                  d="M10,20A10,10,0,1,0,0,10,10.029,10.029,0,0,0,10,20Z"
                                  transform="translate(750 190)"
                                  fill="none"
                                  stroke="#fff"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="1.5"
                                />
                                <path
                                  data-name="Vector"
                                  d="M0,2.83,2.83,5.66,8.5,0"
                                  transform="translate(755.75 197.17)"
                                  fill="none"
                                  stroke="#fff"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="1.5"
                                />
                                <path
                                  data-name="Vector"
                                  d="M0,0H24V24H0Z"
                                  transform="translate(748 188)"
                                  fill="none"
                                  opacity="0"
                                />
                              </g>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="col-span-2 grid grid-cols-4 bg-[#232323] border border-[#383838] rounded-xl w-100 mb-3">
                        <div className="col-span-3">
                          <h1 className="text-[#ffffff66] text-left text-xs py-3 pl-6">
                            Español
                          </h1>
                        </div>
                      </div>
                    </div>
                    {/*<div className='col-span-2 pb-8 w-full flex justify-center'>
                                            <button className="focus:border-transparent focus:ring-0 w-64 text-white bg-[#272727] border-[#383838] border transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 hover:shadow-lg font-bold rounded-xl text-sm py-3 px-3 mt-3" type="submit">Done</button>
    </div>*/}
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
