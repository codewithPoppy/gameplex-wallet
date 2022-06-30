import { Fragment, useEffect, useRef } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BellIcon, CheckCircleIcon } from "@heroicons/react/outline";

type NotificationsProps = {
  notificationIcon?: string;
};

export default function Notifications({
  notificationIcon = "/images/coins/sol.png",
}: NotificationsProps) {
  return (
    <Menu as="div" className="relative inline-block text-left mx-2">
      <div>
        <Menu.Button className="inline-flex justify-center w-full p-1.5 text-sm font-medium text-white bg-[#1e1e1e] border border-[#383838] rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <svg
            id="notification"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <path
              d="M8.046,0a6,6,0,0,0-6,6V8.89a4.778,4.778,0,0,1-.57,2.06L.326,12.86a1.919,1.919,0,0,0,1.08,2.93,20.921,20.921,0,0,0,13.27,0,2,2,0,0,0,1.08-2.93l-1.15-1.91a4.91,4.91,0,0,1-.56-2.06V6A6.018,6.018,0,0,0,8.046,0Z"
              transform="translate(3.974 2.91)"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeWidth="1.5"
            />
            <path
              data-name="Vector"
              d="M3.7,1.26a6.054,6.054,0,0,0-.96-.2A6.754,6.754,0,0,0,0,1.26a1.988,1.988,0,0,1,3.7,0Z"
              transform="translate(10.17 1.94)"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              data-name="Vector"
              d="M6,0A3.009,3.009,0,0,1,3,3,3.011,3.011,0,0,1,.88,2.12,3.011,3.011,0,0,1,0,0"
              transform="translate(9.02 19.06)"
              fill="none"
              stroke="#fff"
              strokeWidth="1.5"
            />
            <path
              data-name="Vector"
              d="M0,0H24V24H0Z"
              fill="none"
              opacity="0"
            />
          </svg>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute mt-2 right-0 w-[22rem] h-fit p-2 origin-top-right bg-[#1e1e1e] border border-[#383838] divide-y divide-[#383838] rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "text-[#fff]" : "text-white"
                  } group flex rounded-md items-center w-full px-2 pt-2 pb-0 text-[12px]`}
                >
                  <div className="grid grid-cols-2 text-center w-full">
                    <div className="col-span-2">
                      <img
                        className="w-14 h-14 rounded-xl mx-auto"
                        src={notificationIcon}
                        alt=""
                      />
                    </div>
                    <div className="col-span-2">
                      <h1 className="mt-3 text-white text-[16px]">
                        Approve Transaction
                      </h1>
                    </div>
                    <div className="col-span-2">
                      <h1 className="mt-2 text-[#ffffff99] text-xs">
                        radium.io
                      </h1>
                    </div>
                    <div className="col-span-2 bg-[#383838] p-3 rounded-xl mt-3 grid grid-cols-2 w-full">
                      <h1 className="text-left whitespace-nowrap">
                        Estimated Balance Changes
                      </h1>
                      <h1 className="flex justify-end">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M10,20A10,10,0,1,0,0,10,10.029,10.029,0,0,0,10,20Z"
                            transform="translate(2 2)"
                            fill="none"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                          />
                          <path
                            data-name="Vector"
                            d="M0,0V5"
                            transform="translate(12 8)"
                            fill="none"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                          />
                          <path
                            data-name="Vector"
                            d="M0,0H.009"
                            transform="translate(11.995 16)"
                            fill="none"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                          />
                          <path
                            data-name="Vector"
                            d="M0,0H24V24H0Z"
                            fill="none"
                            opacity="0"
                          />
                        </svg>
                      </h1>
                      <h1 className="text-left flex pt-3">SOL</h1>
                      <h1 className="text-right pt-3 text-[#FF5C59]">
                        -0.00001 SOL
                      </h1>
                      <h1 className="text-left flex pt-3">Ray</h1>
                      <h1 className="text-right pt-3 text-[#FF5C59]">
                        -0.9629 RAY
                      </h1>
                    </div>
                    <div className="col-span-2 bg-[#383838] p-3 rounded-xl mt-3 grid grid-cols-2 text-center w-full">
                      <h1 className="text-left flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M10,20A10,10,0,1,0,0,10,10.029,10.029,0,0,0,10,20Z"
                            transform="translate(2 2)"
                            fill="none"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                          />
                          <path
                            data-name="Vector"
                            d="M0,0V5"
                            transform="translate(12 8)"
                            fill="none"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                          />
                          <path
                            data-name="Vector"
                            d="M0,0H.009"
                            transform="translate(11.995 16)"
                            fill="none"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                          />
                          <path
                            data-name="Vector"
                            d="M0,0H24V24H0Z"
                            fill="none"
                            opacity="0"
                          />
                        </svg>
                        &nbsp;Network Fee
                      </h1>
                      <h1 className="text-right">&lt; 0.00001 SOL</h1>
                    </div>
                    <button
                      className="focus:border-transparent focus:ring-0 w-50 text-white bg-[#383838] transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 hover:shadow-lg hover:bg-[#FF5C59] hover:shadow-[#FF5C59cc] font-bold rounded-xl text-sm py-3 px-3 mr-2 mt-3"
                      type="submit"
                    >
                      Cancel
                    </button>
                    <button
                      className="focus:border-transparent focus:ring-0 w-50 text-black bg-[#02ff63] transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 hover:shadow-lg hover:shadow-[#02ff63cc] font-bold rounded-xl text-sm py-3 px-3 mt-3"
                      type="submit"
                    >
                      Approve
                    </button>
                  </div>
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
