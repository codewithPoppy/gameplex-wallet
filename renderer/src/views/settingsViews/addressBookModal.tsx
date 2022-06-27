import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";

function AddressCard({ label, address, onDelete }) {
  return (
    <div className="col-span-2 grid grid-cols-3 bg-[#232323] border border-[#383838] rounded-xl w-100 mb-3">
      <div className="col-span-2">
        <h1 className="text-white text-left text-xs pt-3 pl-6">{label}</h1>
        <h1 className="text-white opacity-60 text-left text-[.56rem] pb-3 pl-6">
          {address}
        </h1>
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          onClick={onDelete}
          title="Delete"
          className="focus:border-transparent focus:ring-0 bg-[#272727] p-3 rounded-xl"
        >
          <svg
            className=""
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <g data-name="vuesax/bulk/trash" transform="translate(-108 -188)">
              <g>
                <path
                  d="M18.824,3.98c-1.61-.16-3.22-.28-4.84-.37V3.6l-.22-1.3c-.15-.92-.37-2.3-2.71-2.3H8.434C6.1,0,5.884,1.32,5.724,2.29l-.21,1.28c-.93.06-1.86.12-2.79.21l-2.04.2a.748.748,0,1,0,.14,1.49l2.04-.2a79.729,79.729,0,0,1,15.82.21h.08a.757.757,0,0,0,.75-.68A.766.766,0,0,0,18.824,3.98Z"
                  transform="translate(110.246 189.25)"
                  fill="#ff5c59"
                />
                <path
                  data-name="Vector"
                  d="M14.8.39a1.264,1.264,0,0,0-.91-.39H1.252a1.248,1.248,0,0,0-.91.39A1.288,1.288,0,0,0,0,1.33l.62,10.26c.11,1.52.25,3.42,3.74,3.42h6.42c3.49,0,3.63-1.89,3.74-3.42l.62-10.25A1.3,1.3,0,0,0,14.8.39Z"
                  transform="translate(112.428 195.75)"
                  fill="#ff5c59"
                  opacity="0.399"
                />
                <path
                  data-name="Vector (Stroke)"
                  d="M0,.75A.75.75,0,0,1,.75,0H4.08a.75.75,0,0,1,0,1.5H.75A.75.75,0,0,1,0,.75Z"
                  transform="translate(117.58 204.25)"
                  fill="#ff5c59"
                />
                <path
                  data-name="Vector (Stroke)"
                  d="M0,.75A.75.75,0,0,1,.75,0h5a.75.75,0,0,1,0,1.5h-5A.75.75,0,0,1,0,.75Z"
                  transform="translate(116.75 200.25)"
                  fill="#ff5c59"
                />
                <path
                  data-name="Vector"
                  d="M0,0H24V24H0Z"
                  transform="translate(108 188)"
                  fill="none"
                  opacity="0"
                />
              </g>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}

/**
 * Address Empty View Component
 */
function AddressEmptyCard() {
  return (
    <div className="h-96">
      <div className="h-full flex">
        <div className="m-auto">
          <img
            className="w-32 h-32 mx-auto my-auto"
            src="/icons/nosession.svg"
            alt="QR Code Icon"
          ></img>

          <h1 className="text-center text-sm font-thin">
            Nothing here, nothing there…
            <br /> No sessions added yet
          </h1>
        </div>
      </div>
    </div>
  );
}

/**
 * Add Address Book Modal Component
 */
function AddAddressBookCard({
  label,
  address,
  onChangeLabel,
  onChangeAddress,
  icon,
}) {
  return (
    <div className="min-h-[32rem] mb-5 py-10 px-5">
      <div className="h-50 flex justify-center">
        {/* SVG */}
        <img
          className="w-32 h-32 mx-auto my-auto"
          src={icon}
          alt="QR Code Icon"
        ></img>
      </div>
      <h1 className="text-center mb-12 mt-3 text-md font-bold">Add address</h1>
      <div className="bg-[#1e1e1e] border border-[#383838] rounded-xl w-100 mb-2">
        <input
          value={label}
          onChange={onChangeLabel}
          placeholder="Label"
          type="text"
          className="col-span-3 focus:border-transparent focus:ring-0 rounded-xl bg-[#1e1e1e] border-0 text-[#ffffff] text-left text-sm py-3 pl-6"
        ></input>
      </div>
      <div className="grid grid-cols-3 bg-[#1e1e1e] border border-[#383838] rounded-xl w-100 mb-2">
        <textarea
          value={address}
          onChange={onChangeAddress}
          placeholder="Address"
          className="col-span-3 focus:border-transparent focus:ring-0 rounded-xl bg-[#1e1e1e] border-0 text-[#ffffff] text-left text-sm py-3 pl-6"
        ></textarea>
      </div>
    </div>
  );
}

type AddressBookModalProps = {
  modalHeader: string;
  buttonText: string;
  icon?: string;
  ipcRenderer: any;
  isModalOpen?: boolean;
};

export default function AddressBookModal({
  modalHeader,
  buttonText,
  icon = "/icons/lock.svg",
  ipcRenderer,
  isModalOpen = false,
}: AddressBookModalProps) {
  const [isOpen, setIsOpen] = useState(isModalOpen);
  const [address, setAddress] = useState("");
  const [label, setLabel] = useState("");
  const [addresses, setAddresses] = useState([]);
  const [addressBookState, setAddressBookState] =
    useState<"view" | "add">("view");

  const onAddressChange = (e) => setAddress(e.target.value);
  const onLabelChange = (e) => setLabel(e.target.value);
  const onAddressDelete = (address, e) => {
    e.preventDefault();

    ipcRenderer.send("delete-address", address);
    setAddresses(ipcRenderer.sendSync("get-addresses"));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    ipcRenderer.send("add-address", {
      address: address,
      label: label,
    });
    setAddress("");
    setLabel("");

    setAddressBookState("view");
  };

  useEffect(() => {
    // like componentDidMount()
    setAddresses(ipcRenderer.sendSync("get-addresses"));

    return () => {
      // like componentWillUnmount()
    };
  }, [addressBookState]);

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

                  <div className="col-span-2 min-h-[32rem] py-6 px-12">
                    {/* Addresses */}
                    {addressBookState === "view" && (
                      <>
                        {Object.keys(addresses).length > 0 ? (
                          <>
                            <div className="h-96">
                              <div className="h-full flex">
                                <div className="mx-auto">
                                  {Object.keys(addresses).map((address) => (
                                    <AddressCard
                                      key={address}
                                      address={address}
                                      label={addresses[address]}
                                      onDelete={(e) =>
                                        onAddressDelete(address, e)
                                      }
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>
                          </>
                        ) : (
                          <AddressEmptyCard />
                        )}
                        <div className="col-span-2 pb-8 w-full flex justify-center">
                          <button
                            onClick={() => setAddressBookState("add")}
                            className="focus:border-transparent focus:ring-0 w-64 text-black bg-[#02ff63] transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 hover:shadow-lg hover:shadow-[#02ff63cc] font-bold rounded-xl text-sm py-3 px-3 mt-3"
                            type="submit"
                          >
                            Add
                          </button>
                        </div>
                      </>
                    )}

                    {/* Add Address */}
                    {addressBookState === "add" && (
                      <form onSubmit={onSubmit}>
                        <AddAddressBookCard
                          address={address}
                          label={label}
                          onChangeAddress={onAddressChange}
                          onChangeLabel={onLabelChange}
                          icon={icon}
                        />
                        <div className="col-span-2 pb-8 px-6 w-full flex justify-center">
                          <button
                            onClick={() => {
                              setAddressBookState("view");
                              setAddress("");
                              setLabel("");
                            }}
                            className="focus:border-transparent focus:ring-0 w-64 text-white bg-[#383838] border border-[#383838] transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 hover:shadow-lg hover:shadow-[#FF5C59cc] font-bold rounded-xl text-sm py-3 px-3 mr-2 mt-3"
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
                      </form>
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
