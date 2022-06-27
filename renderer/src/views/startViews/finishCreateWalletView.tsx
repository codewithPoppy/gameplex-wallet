function FinishCreateWallet() {
    return (
        <div className="container bg-slate-900 mx-auto">
            <div className="flex h-screen">
                <div className="mx-auto my-auto text-center card rounded-2xl bg-[#1e1e1e]">
                    <div className="flex">
                        <div className="w-1/2 flex justify-start"><a title='back' href='/create' className="p-6"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg></a></div>
                        <div className="w-1/2 flex justify-end"><a title='close' href='/enter' className="p-6"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                            <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                        </svg></a></div>
                    </div>
                    <div className=" px-12 pt-6 pb-12">
                        <p className="mb-3 self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Everything is ready!</p>
                        <p className="mb-3 self-center text-sm whitespace-nowrap dark:text-white pb-6">Follow our product updates or contact<br /> us if you have any question.</p>

                        <button className="focus:border-transparent focus:ring-0 text-white bg-[#313131] w-full border-[#383838] border-2 flex  rounded-xl text-sm px-6 pr-2 py-4 mr-2 mt-5 mb-2">
                            <div className="w-1/5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                </svg>
                            </div>
                            <div className='w-4/5 text-left'> Follow us on Twitter</div>
                            <div className="w-1/5 flex justify-end"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                            </div>
                        </button>
                        <br />
                        <button className="focus:border-transparent focus:ring-0 text-white bg-[#313131] w-full flex border-[#383838] border-2 rounded-xl text-sm px-6 pr-2 py-4 mr-2 my-5">
                        <div className="w-1/5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                            <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>
                            </div>
                            <div className='w-4/5 text-left'> Visit out support center</div>
                            <div className="w-1/5 flex justify-end"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                            </div>
                                </button>
                        <br />
                        <a href="/create" className="focus:outline-none text-white bg-gradient-to-r from-[#6A00FF] to-[#3C00B7] w-full flex-auto transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 focus:ring-4 hover:shadow-lg hover:shadow-[#3c00b7cc] focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-3 mr-2 mb-2" type="submit">Finish</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinishCreateWallet;