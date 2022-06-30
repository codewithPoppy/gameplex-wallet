import { truncate } from "../utils/HelperUtil";
import { Tab } from "@headlessui/react";
import classNames from "classnames";
import { formatDistance } from "date-fns";
import get from "lodash.get";

type ParsedInstruction = {
  programId: string;
  type: string;
  program: string;
};

type Data = {
  blockTime: number;
  slot: number;
  txHash: string;
  fee: number;
  status: string;
  lamport: number;
  signer: string[];
  parsedInstruction: ParsedInstruction[];
  includeSPLTransfer?: boolean;
};

type transactionsData = {
  succcess: boolean;
  data: Data[];
};

type tokenItem = {
  id: number;
  amount: string;
  from: string;
  date: string;
};
interface nftItem extends tokenItem {
  icon: string;
}

export interface ActivityViewProps {
  token_categories: {
    Received: tokenItem[];
    Sent: tokenItem[];
    Deposit: tokenItem[];
  };
  transactionsData: transactionsData;
  nft_categories: {
    Completed: nftItem[];
    Pending: nftItem[];
    Cancelled: nftItem[];
  };
}

export default function ActivityView({
  token_categories,
  transactionsData,
  nft_categories,
}: ActivityViewProps) {
  return (
    <div className="w-5xl mx-auto px-2 sm:px-6 lg:px-8">
      {/* Tabs - Token | NFT */}
      <div className="w-full px-2 py-8 mx-auto sm:px-0">
        <Tab.Group>
          <Tab.List className="flex max-w-md mx-auto p-1 space-x-1 bg-[#232323] rounded-xl">
            {/* Token */}
            <Tab
              key="Token"
              className={({ selected }) =>
                classNames(
                  "w-full py-3.5 text-lg leading-5 font-medium text-[#FAFAFA] rounded-lg",
                  "focus:outline-none",
                  selected
                    ? "text-white bg-gradient-to-r from-[#6A00FF] to-[#3C00B7] shadow"
                    : "text-[#FAFAFA] hover:bg-white/[0.12] hover:text-[#FAFAFA]"
                )
              }
            >
              Token
            </Tab>

            {/* NFT */}
            <Tab
              key="NFT"
              className={({ selected }) =>
                classNames(
                  "w-full py-3.5 text-lg leading-5 font-medium text-[#FAFAFA] rounded-lg",
                  "focus:outline-none",
                  selected
                    ? "text-white bg-gradient-to-r from-[#6A00FF] to-[#3C00B7] shadow"
                    : "text-[#FAFAFA] hover:bg-white/[0.12] hover:text-[#FAFAFA]"
                )
              }
            >
              NFT
            </Tab>
          </Tab.List>
          <Tab.Panels className="mt-2">
            {/* Token Tab Content */}
            <Tab.Panel>
              <div className="w-full px-2 py-8 sm:px-0">
                <Tab.Group>
                  <Tab.List className="flex max-w-sm p-1 pb-0 space-x-1 bg-[#121212] rounded-xl">
                    {Object.keys(token_categories).map((category) => (
                      <Tab
                        key={category}
                        className={({ selected }) =>
                          classNames(
                            "pb-10 w-full py-2.5 mb-0 text-sm leading-5 text-[#FAFAFA] inline-block rounded-t-lg",
                            "focus:outline-none",
                            selected
                              ? "text-black bg-gradient-to-r from-[#02FF63] to-[#01B76B] shadow"
                              : "text-[#FAFAFA] hover:bg-white/[0.12] hover:text-[#FAFAFA]"
                          )
                        }
                      >
                        {category}
                      </Tab>
                    ))}
                  </Tab.List>
                  <Tab.Panels className="mt-0 ml-1">
                    {Object.values(token_categories).map((txs, idx) => (
                      <Tab.Panel key={idx}>
                        <div className="w-full relative top-[-1.9rem] bg-[#1e1e1e] rounded-xl p-5">
                          {/* Filter Buttons */}
                          <div className="text-right mb-2">
                            <button className="focus:border-transparent focus:ring-0 text-black mx-3 transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 hover:shadow-lg hover:text-black hover:shadow-[#02ff6355] hover:bg-[#02ff63] bg-[#02ff63] font-bold rounded-xl text-sm py-2 px-3 mr-2 my-3">
                              7 Days
                            </button>
                            <button className="focus:border-transparent focus:ring-0 text-white mx-3 transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 hover:shadow-lg hover:text-black hover:shadow-[#02ff6355] hover:bg-[#02ff63] font-bold rounded-xl text-sm py-2 px-3 mr-2 my-3">
                              24 Days
                            </button>
                            <button className="focus:border-transparent focus:ring-0 text-white mx-3 transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 hover:shadow-lg hover:text-black hover:shadow-[#02ff6355] hover:bg-[#02ff63] font-bold rounded-xl text-sm py-2 px-3 mr-2 my-3">
                              30 Days
                            </button>
                          </div>
                          <table className="rounded-xl w-full text-sm mb-3">
                            <thead className="">
                              <tr>
                                <th className="text-[#99ffa2] font-light pb-5 pt-2 text-left pl-16">
                                  SIGNATURE
                                </th>
                                <th className="text-[#99ffa2] font-light pb-5 pt-2 text-left">
                                  BLOCK
                                </th>
                                <th className="text-[#99ffa2] font-light pb-5 pt-2 text-left">
                                  TIME
                                </th>
                                <th className="text-[#99ffa2] font-light pb-5 pt-2 text-left pr-16">
                                  INSTRUCTIONS
                                </th>
                                <th className="text-[#99ffa2] font-light pb-5 pt-2 text-left pr-16">
                                  BY
                                </th>
                                <th className="text-[#99ffa2] font-light pb-5 pt-2 text-left pr-16">
                                  FEE (SOL)
                                </th>
                              </tr>
                            </thead>
                            <tbody className="rounded-xl overflow-y-scroll">
                              {get(transactionsData, "data", []).map(
                                (transaction, id) => (
                                  <tr
                                    className={classNames(
                                      id % 2 == 0
                                        ? "bg-[#232323]"
                                        : "bg-[#2c2c2c]",
                                      id == 0 ? "rounded-t-lg" : ""
                                    )}
                                    key={id}
                                  >
                                    <td className="pl-16 py-5 px-5">
                                      {truncate(
                                        get(transaction, "txHash", ""),
                                        19
                                      )}
                                    </td>
                                    <td className="py-3 px-2">
                                      #{get(transaction, "slot", "")}
                                    </td>
                                    <td className="pr-16 py-3 px-2">
                                      {formatDistance(
                                        new Date(
                                          get(transaction, "blockTime", 0) *
                                            1000
                                        ),
                                        new Date(),
                                        { addSuffix: true }
                                      )}
                                    </td>
                                    <td className="py-3 px-2 text-ellipsis overflow-hidden">
                                      {get(transaction, "parsedInstruction", [])
                                        .map((i) => i.type)
                                        .join(", ")}
                                    </td>
                                    <td className="pl-16 py-5 px-5">
                                      {truncate(
                                        get(transaction, "signer[0]", ""),
                                        19
                                      )}
                                    </td>
                                    <td className="pr-16 py-3 px-2">
                                      {get(transaction, "fee", 0) / 1000000000}
                                    </td>
                                  </tr>
                                )
                              )}
                              {/* {txs.map((tx, id) => (
                            <tr className={classNames(id % 2 == 0 ?'bg-[#232323]' : 'bg-[#2c2c2c]',
                            id == 0 ? 'rounded-t-lg': '')} key={id}>
                              <td className="pl-16 py-5 px-5">{tx.amount}</td>
                              <td className="py-3 px-2">{tx.from}</td>
                              <td className="pr-16 py-3 px-2">{tx.date}</td>
                            </tr>
                          ))} */}
                            </tbody>
                          </table>
                        </div>
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>
              </div>
            </Tab.Panel>

            {/* NFT Tab Content */}
            <Tab.Panel>
              <div className="w-full px-2 py-8 sm:px-0">
                <Tab.Group>
                  <Tab.List className="flex max-w-sm p-1 pb-0 space-x-1 bg-[#121212] rounded-xl">
                    {Object.keys(nft_categories).map((category) => (
                      <Tab
                        key={category}
                        className={({ selected }) =>
                          classNames(
                            "pb-10 w-full py-2.5 mb-0 text-sm leading-5 text-[#FAFAFA] inline-block rounded-t-lg",
                            "focus:outline-none",
                            selected
                              ? "text-black bg-gradient-to-r from-[#02FF63] to-[#01B76B] shadow"
                              : "text-[#FAFAFA] hover:bg-white/[0.12] hover:text-[#FAFAFA]"
                          )
                        }
                      >
                        {category}
                      </Tab>
                    ))}
                  </Tab.List>
                  <Tab.Panels className="mt-0 ml-1">
                    {Object.values(nft_categories).map((txs, idx) => (
                      <Tab.Panel key={idx}>
                        <div className="w-full relative top-[-1.9rem] bg-[#1e1e1e] rounded-xl p-5">
                          {/* Filter Buttons */}
                          <div className="text-right mb-2">
                            <button className="focus:border-transparent focus:ring-0 text-white mx-3 transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 hover:shadow-lg hover:text-black hover:shadow-[#02ff6355] hover:bg-[#02ff63] bg-[#02ff63] font-bold rounded-xl text-sm py-2 px-3 mr-2 my-3">
                              7 Days
                            </button>
                            <button className="focus:border-transparent focus:ring-0 text-white mx-3 transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 hover:shadow-lg hover:text-black hover:shadow-[#02ff6355] hover:bg-[#02ff63] font-bold rounded-xl text-sm py-2 px-3 mr-2 my-3">
                              24 Days
                            </button>
                            <button className="focus:border-transparent focus:ring-0 text-white mx-3 transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 hover:shadow-lg hover:text-black hover:shadow-[#02ff6355] hover:bg-[#02ff63] font-bold rounded-xl text-sm py-2 px-3 mr-2 my-3">
                              30 Days
                            </button>
                          </div>

                          <table className="table-auto w-full text-xs mb-3">
                            <thead>
                              <tr>
                                <th className=""></th>
                                <th className="text-[#99ffa2] font-light pb-5 pt-2 text-left">
                                  NAME
                                </th>
                                <th className="text-[#99ffa2] font-light pb-5 pt-2 text-left">
                                  TRANSACTION ID
                                </th>
                                <th
                                  className="text-[#99ffa2] font-light pb-5 pt-2 text-left"
                                  colSpan={2}
                                >
                                  TRANSACTION TYPE
                                </th>
                                <th className="text-[#99ffa2] font-light pb-5 pt-2 text-left">
                                  TIME
                                </th>
                                <th className="text-[#99ffa2] font-light pb-5 pt-2 text-left">
                                  TOTAL AMOUNT
                                </th>
                                <th className="text-[#99ffa2] font-light pb-5 pt-2 text-left">
                                  BUYER
                                </th>
                                <th className="text-[#99ffa2] font-light pb-5 pt-2 text-left pr-16">
                                  SELLER
                                </th>
                              </tr>
                            </thead>
                            <tbody className=" rounded-xl max-h-[90vh] overflow-y-scroll">
                              {txs.map(({ icon }, id) => (
                                <tr
                                  className={
                                    id % 2 == 0
                                      ? "bg-[#232323]"
                                      : "bg-[#2c2c2c]"
                                  }
                                  key={id}
                                >
                                  <td className="py-5 px-5">
                                    <img
                                      className="w-12 h-12 rounded-xl mx-auto"
                                      src={icon}
                                      alt=""
                                    />
                                  </td>
                                  <td className="py-5 pr-5">
                                    Bizarre Platypus #4688
                                  </td>
                                  <td className="py-5 pr-5">Lmahm … pfB</td>
                                  <td className="py-5 pr-5 text-[#99ffa2]">
                                    Sale
                                  </td>
                                  <td className="py-5 pr-5 text-[#D099ff]">
                                    (ME v2)
                                  </td>
                                  <td className="py-5 pr-5">37 min ago</td>
                                  <td className="py-5 pr-5">16.9 SOL</td>
                                  <td className="py-5 pr-5">DKjHw…jWy</td>
                                  <td className="py-5 pr-5">DKjHw…jWy</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
