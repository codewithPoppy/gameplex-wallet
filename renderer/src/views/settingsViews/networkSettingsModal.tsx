import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { Cluster, clusterApiUrl, Connection } from "@solana/web3.js";
import { CheckCircleIcon } from "@heroicons/react/outline";

function NetworkCard({
  network,
  rpcName,
  rpcEndpoint,
  currRpcEndpoint,
  setRpcEndpoint,
}: {
  network: Cluster;
  rpcName: string;
  rpcEndpoint: string;
  currRpcEndpoint: string;
  setRpcEndpoint: (rpcEndpoint: string) => void;
}) {
  return (
    <div className="col-span-2 grid grid-cols-4 bg-[#232323] border border-[#383838] rounded-xl w-100 mb-4">
      <div className="col-span-3">
        <h1 className="text-white text-left text-xs pt-4 pb-1 pl-6">
          {rpcName}
        </h1>
        <h1 className="text-[#ffffff66] text-left text-xs pb-4 pl-6">
          {rpcEndpoint}
        </h1>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => setRpcEndpoint(network)}
          type="button"
          title="Revoke"
          className="bg-[#272727] p-3 px-6 w-[4.2rem] rounded-xl"
        >
          {rpcEndpoint === currRpcEndpoint && <CheckCircleIcon />}
        </button>
      </div>
    </div>
  );
}

type NetworkSettingsModalProps = {
  modalHeader: string;
  buttonText: string;
  isModalOpen?: boolean;
  ipcRenderer: any;
};

export default function NetworkSettingsModal({
  modalHeader,
  buttonText,
  isModalOpen = false,
  ipcRenderer,
}: NetworkSettingsModalProps) {
  const [isOpen, setIsOpen] = useState(isModalOpen);
  const [network, setNetwork] = useState("mainnet-beta");
  const [rpcEndpoint, setRpcEndpoint] = useState("");

  useEffect(() => {
    setNetwork(ipcRenderer.sendSync("get-network"));
  }, []);

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_STORYBOOK) {
      const connection = new Connection(clusterApiUrl(network as Cluster));
      setRpcEndpoint(connection.rpcEndpoint);
    }

    return () => {};
  }, [network]);

  const handleNetworkChange = (network) => {
    setNetwork(network);
    ipcRenderer.send("set-network", network);
  };

  // TODO: Move to someplace common?
  const NetworkList = {
    "mainnet-beta": {
      name: "Mainnet Beta",
      rpcEndpoint: "https://api.mainnet-beta.solana.com/",
    },
    testnet: {
      name: "Testnet",
      rpcEndpoint: "https://api.testnet.solana.com",
    },
    devnet: {
      name: "Devnet",
      rpcEndpoint: "https://api.devnet.solana.com",
    },
  };

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
                      {Object.keys(NetworkList).map((_network) => (
                        <NetworkCard
                          key={_network}
                          network={_network as Cluster}
                          rpcName={NetworkList[_network].name}
                          rpcEndpoint={NetworkList[_network].rpcEndpoint}
                          currRpcEndpoint={rpcEndpoint}
                          setRpcEndpoint={handleNetworkChange}
                        />
                      ))}
                    </div>
                    <div className="col-span-2 pb-8 w-full flex justify-center">
                      <button
                        onClick={() => setIsOpen(false)}
                        className="focus:border-transparent focus:ring-0 w-64 text-white bg-[#272727] border-[#383838] border transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 font-bold rounded-xl text-sm py-3 px-3 mt-3"
                        type="submit"
                      >
                        Done
                      </button>
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
