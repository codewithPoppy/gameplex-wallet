import { useQuery } from "react-query";
import get from "lodash.get";
import { getAccount, getTokens } from "../../web3/solscan/api";
import { Combobox, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/outline";
import { randomIntFromInterval } from "../../utils/numberUtils";

export default function SendModalPage1() {
  const [assets, setAssets] = useState([]);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [query, setQuery] = useState("");
  const filteredAssets =
    query === ""
      ? assets
      : assets.filter((asset) => {
          return (
            asset.assetName.toLowerCase().includes(query.toLowerCase()) ||
            asset.assetSymbol.toLowerCase().includes(query.toLowerCase())
          );
        });
  if (!process.env.NEXT_PUBLIC_STORYBOOK) {
    const address = process.env.NEXT_PUBLIC_SOL_PUBLIC_KEY;
    const { data: accountData } = useQuery(
      ["getAccount", { address }],
      getAccount,
      { enabled: !!address }
    );
    const { data: tokensData } = useQuery(
      ["getTransfers", { address }],
      getTokens,
      { enabled: !!address }
    );

    useEffect(() => {
      setAssets(
        get(tokensData, "data", [])
          .filter(
            (t) =>
              get(t, "tokenIcon", false) &&
              get(t, "tokenName", false) &&
              get(t, "tokenSymbol", false)
          )
          .map((token, i) => ({
            assetImage: get(token, "tokenIcon", ""),
            assetAddress: get(token, "tokenAddress", ""),
            assetName: get(token, "tokenName", ""),
            assetSymbol: get(token, "tokenSymbol", ""),
            assetAmount: get(token, "tokenAmount.uiAmount", 0),
            assetAmountInUSD: randomIntFromInterval(1000, 10000),
            assetPercentChange: randomIntFromInterval(-100, 100),
          }))
      );
    }, [tokensData]);

    useEffect(() => {
      if (!assets || !assets.length) return;
      if (selectedAsset) return;
      setSelectedAsset(assets[0]);
    }, [assets, selectedAsset]);
  } else {
  }
  // console.log(assets);

  return (
    <>
      <h1 className="text-sm mb-3 font-light">Select a currency to send</h1>
      <div className="grid grid-cols-7 bg-[#1e1e1e] border border-[#383838] rounded-xl mb-8">
        <Combobox value={selectedAsset} onChange={setSelectedAsset}>
          <div className="relative w-full col-span-12">
            <Combobox.Input
              placeholder="Select a cryptocurrency"
              className="w-full focus:border-transparent font-light focus:ring-0 rounded-xl bg-[#1e1e1e] border-0 text-[#ffffff] text-left text-sm py-3"
              displayValue={(asset: any) =>
                asset ? `${asset.assetName} (${asset.assetSymbol})` : ""
              }
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery("")}
            >
              <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-[#232323] py-1 text-base shadow-lg drop-shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-20">
                {filteredAssets.length === 0 && query !== "" ? (
                  <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                    Nothing found.
                  </div>
                ) : (
                  filteredAssets.map((asset) => (
                    <Combobox.Option
                      key={asset.assetAddress}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 px-4 ${
                          active ? "bg-[#1e1e1e]" : "text-white"
                        }`
                      }
                      value={asset}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="card cursor-pointer flex w-full">
                            <img
                              src={asset.assetImage}
                              alt=""
                              className="w-12 h-12 rounded-full"
                            />
                            <h1 className="ml-2">
                              <span className="text-md font-normal ">
                                {asset.assetName}
                              </span>{" "}
                              <br />
                              <span className="opacity-40 font-thin text-sm">
                                {asset.assetSymbol}
                              </span>
                            </h1>
                            <div className="flex-grow"></div>
                            <h1 className="text-right w-auto">
                              <span className="text-base font-normal text-[#FAFAFA]">
                                {asset.assetAmount}
                              </span>{" "}
                              <br />
                              <span className="opacity-40 font-normal text-sm">
                                Available
                              </span>
                              {/* <span className={classnames('font-normal text-sm',
                                  asset.assetPercentChange > 0 ? 'text-[#01DB6A]' : 'text-[#FF4136]')}>
                                  {asset.assetPercentChange > 0 ? '+' : '-'} {Math.abs(asset.assetPercentChange)}%</span> */}
                            </h1>
                          </div>
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
      </div>

      {/* Native SOL Value */}
      {/* `${get(accountData, "data.lamports", 0) / 1000000000} SOL` */}
      <h1 className="text-sm mb-3 font-light">Select an amount</h1>
      <div className="bg-[#1e1e1e] border border-[#383838] rounded-xl h-24">
        <input
          title="Value"
          value={
            selectedAsset
              ? `${selectedAsset.assetAmount} ${selectedAsset.assetSymbol}`
              : ``
          }
          type="text"
          className="w-full focus:border-transparent focus:ring-0 rounded-xl bg-[#1e1e1e] border-0 text-[#ffffff] text-right text-3xl pt-3 pb-0"
        ></input>
        <input
          title="Value"
          value={"- $ 22,7115,67"}
          type="text"
          className="w-full focus:border-transparent focus:ring-0 rounded-xl bg-[#1e1e1e] border-0 text-[#ffffff] opacity-60 text-right font-light text-lg pb-3"
        ></input>
      </div>

      <div className="relative pt-1 mb-16">
        <input
          title="range"
          type="range"
          className="slider form-range accent-[#02FF63] w-full h-10 p-0 bg-transparent outline-none ring-0 shadow-none"
          min="0"
          max="100"
          step="0.5"
        />
        <ul className="flex justify-between w-full px-12">
          <li className="flex justify-center relative">
            <span className="absolute bg-[#02FF63] text-xs font-semibold py-1 px-8 text-black rounded-xl">
              25%
            </span>
          </li>
          <li className="flex justify-center relative">
            <span className="absolute bg-[#02FF63] text-xs font-semibold py-1 px-8 text-black rounded-xl">
              50%
            </span>
          </li>
          <li className="flex justify-center relative">
            <span className="absolute bg-[#383838] text-xs font-semibold py-1 px-8 text-white rounded-xl">
              75%
            </span>
          </li>
          <li className="flex justify-center relative">
            <span className="absolute bg-[#383838] text-xs font-semibold py-1 px-8 text-white rounded-xl">
              Max
            </span>
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-12">
        <h1 className="text-sm mb-3 col-span-11 font-light">
          Address of the recipient
        </h1>
        <div className="ml-3">
          {/* Change the Icon Accordingly */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
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
        </div>
      </div>
      <div className="bg-[#1e1e1e] border border-[#383838] rounded-xl mb-2">
        <input
          placeholder="Please enter received address"
          type="text"
          className="w-full focus:border-transparent font-light focus:ring-0 rounded-xl bg-[#1e1e1e] border-0 text-[#ffffff] text-left text-sm py-3"
        ></input>
      </div>
    </>
  );
}
