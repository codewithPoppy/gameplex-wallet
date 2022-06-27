import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import SendModalPage1 from "../../views/transactionViews/sendModalPage1";
import SendModalPage2 from "../../views/transactionViews/sendModalPage2";

export default function SendModal({ modalHeader, buttonText }) {
  const [activePage, setActivePage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

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
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
            >
              <g
                id="vuesax_linear_export"
                data-name="vuesax/linear/export"
                transform="translate(-492 -444)"
              >
                <g id="export">
                  <path
                    d="M0,2.56,2.56,0,5.12,2.56"
                    transform="translate(501.32 447.94)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <path
                    data-name="Vector"
                    d="M0,10.17V0"
                    transform="translate(503.88 448.01)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <path
                    data-name="Vector"
                    d="M0,0A7.651,7.651,0,0,0,8,8a7.651,7.651,0,0,0,8-8"
                    transform="translate(496 456)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <path
                    data-name="Vector"
                    d="M0,0H24V24H0Z"
                    transform="translate(516 468) rotate(180)"
                    fill="none"
                    opacity="0"
                  />
                </g>
              </g>
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

                  <div className="min-h-[32rem] mb-5 py-3 px-9">
                    <div className="grid grid-cols-11 mb-6">
                      <div className="flex justify-end rounded-xl col-span-5">
                        <button
                          type="button"
                          onClick={() => {
                            setActivePage(1);
                          }}
                          title="1"
                          className="bg-[#1e1e1e] p-1 rounded-2xl text-[#fff] border-2 border-[#6A00FF] h-12 w-12"
                        >
                          1
                        </button>
                      </div>
                      <div>
                        <hr className="my-6 mx-3 opacity-40" />
                      </div>
                      <div className="rounded-xl  col-span-5">
                        <button
                          type="button"
                          onClick={() => {
                            setActivePage(2);
                          }}
                          title="2"
                          className="bg-[#1e1e1e] p-1 rounded-2xl text-[#fff] border-2 border-[#383838] h-12 w-12"
                        >
                          2
                        </button>
                      </div>
                    </div>

                    {activePage === 1 && <SendModalPage1 />}

                    {activePage === 2 && <SendModalPage2 />}
                  </div>
                  <div className="col-span-2 pb-8 px-6 w-full flex justify-center">
                    {activePage === 1 && (
                      <button
                        onClick={() => {
                          setActivePage(2);
                        }}
                        className="focus:border-transparent focus:ring-0 w-64 text-black bg-[#02ff63] transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 hover:shadow-lg hover:shadow-[#02ff63cc] font-bold rounded-xl text-md p-2 ml-2 mt-3"
                        type="submit"
                      >
                        Next
                      </button>
                    )}
                    {activePage === 2 && (
                      <button
                        className="focus:border-transparent focus:ring-0 w-64 text-black bg-[#02ff63] transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 hover:shadow-lg hover:shadow-[#02ff63cc] font-semibold rounded-xl text-md p-2 ml-2 mt-3"
                        type="submit"
                      >
                        Confirm transaction
                      </button>
                    )}
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
