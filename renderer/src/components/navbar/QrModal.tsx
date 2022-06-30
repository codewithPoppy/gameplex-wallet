import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import dynamic from "next/dynamic";
import { walletConnectClient } from "../../utils/WalletConnectUtil";
import { Spinner } from "flowbite-react";

/**
 * You can use normal import if you are not within next / ssr environment
 * @info https://nextjs.org/docs/advanced-features/dynamic-import
 */
const ReactQrReader = dynamic(() => import("react-qr-reader-es6"), {
  ssr: false,
});

/**
 * Component
 */
type QrModalProps = {
  qRIcon?: string;
};

export default function QrModal({ qRIcon = "/icons/qr.svg" }: QrModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [uri, setUri] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingUri, setLoadingUri] = useState(false);

  async function onConnect(uri: string) {
    if (!process.env.NEXT_PUBLIC_STORYBOOK) {
      try {
        setLoadingUri(true);
        await walletConnectClient.pair({ uri });
      } catch (err: unknown) {
        alert(err);
      } finally {
        setUri("");
        setLoadingUri(false);
      }
    }
  }

  function onError() {
    setShow(false);
  }

  async function onScan(data: string | null) {
    if (!process.env.NEXT_PUBLIC_STORYBOOK) {
      if (data) {
        await onConnect(data);
        setShow(false);
      }
    }
  }

  function onShowScanner() {
    setLoading(true);
    setShow(true);
  }

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          title="Scan QR"
          onClick={() => {
            setIsOpen(true);
          }}
          className="focus:border-transparent focus:ring-0 inline-flex justify-center w-full p-1.5 text-sm font-medium text-white rounded-xl bg-[#02FF63] border border-[#383838] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <g id="scan" transform="translate(-364 -252)">
              <path
                d="M0,7V4.5A4.494,4.494,0,0,1,4.5,0H7"
                transform="translate(366 254)"
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
              <path
                data-name="Vector"
                d="M0,0H2.5A4.494,4.494,0,0,1,7,4.5V7"
                transform="translate(379 254)"
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
              <path
                data-name="Vector"
                d="M6,0V1.5A4.494,4.494,0,0,1,1.5,6H0"
                transform="translate(380 268)"
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
              <path
                data-name="Vector"
                d="M7,7H4.5A4.494,4.494,0,0,1,0,2.5V0"
                transform="translate(366 267)"
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
              <path
                data-name="Vector"
                d="M10,3V8a2.652,2.652,0,0,1-3,3H3A2.652,2.652,0,0,1,0,8V3A2.652,2.652,0,0,1,3,0H7A2.652,2.652,0,0,1,10,3Z"
                transform="translate(371 258.5)"
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
              <path
                data-name="Vector"
                d="M14,0H0"
                transform="translate(369 264)"
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
              <path
                data-name="Vector"
                d="M0,0H24V24H0Z"
                transform="translate(388 276) rotate(180)"
                fill="none"
                opacity="0"
              />
            </g>
          </svg>
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
                    Scan QR Code
                  </Dialog.Title>

                  <div className="container mb-5 py-6 px-16">
                    <div className="bg-[#232323] border-2 h-80 border-dashed border-[#383838] rounded-xl w-100 mb-4">
                      {show ? (
                        <Fragment>
                          <div className="h-10 flex justify-center">
                            {loading && (
                              <svg
                                role="status"
                                className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                  fill="currentFill"
                                />
                              </svg>
                            )}
                          </div>
                          <div className="w-100 rounded-2xl relative">
                            <ReactQrReader
                              onLoad={() => setLoading(false)}
                              showViewFinder={false}
                              onError={onError}
                              onScan={onScan}
                              style={{ width: "100%" }}
                            />
                          </div>
                        </Fragment>
                      ) : (
                        <div>
                          <div className="h-60 flex justify-center">
                            {/* QR Code SVG */}
                            <img
                              className="w-32 h-32 mx-auto my-auto"
                              src={qRIcon}
                              alt="QR Code Icon"
                            ></img>
                          </div>
                          <div className="flex justify-center">
                            <button
                              onClick={onShowScanner}
                              className="focus:outline-none w-64 text-white bg-gradient-to-r from-[#6A00FF] to-[#3C00B7] transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 focus:ring-1 hover:shadow-lg hover:shadow-[#3c00b7cc] font-bold rounded-xl text-sm py-2 px-6 mr-2 my-3"
                              type="submit"
                            >
                              Scan QR Code
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                    <h1 className="text-center mt-12 mb-3 text-sm">
                      Or use wallet connect uri
                    </h1>
                    <div className="grid grid-cols-4 bg-[#1e1e1e] border border-[#383838] rounded-xl w-100 mb-2">
                      <input
                        aria-label="wc url connect input"
                        placeholder="e.g. wc:a281567bb3e4..."
                        onChange={(e) => setUri(e.target.value)}
                        value={uri}
                        type="text"
                        className="col-span-3 rounded-xl bg-[#1e1e1e] border-0 text-[#ffffff] text-left text-xs py-4 pl-6"
                      ></input>
                      <div className="flex justify-end rounded-xl">
                        <button
                          disabled={!uri}
                          onClick={() => onConnect(uri)}
                          type="button"
                          title="Revoke"
                          className="bg-[#272727] p-3 w-full text-sm rounded-xl text-[#ffffff99]"
                        >
                          {loadingUri ? (
                            <Spinner color="green" size="sm" />
                          ) : (
                            "Connect"
                          )}
                        </button>
                      </div>
                    </div>
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
