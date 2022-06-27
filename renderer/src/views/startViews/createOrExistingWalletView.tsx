function CreateOrExistingWalletView() {
    return (
        <div className="container bg-slate-900 mx-auto">
            <div className="flex h-screen">
                <div className="mx-auto my-auto text-center card rounded-2xl bg-[#1e1e1e]">
                    <div className="flex">
                        <div className="w-1/2 flex justify-start"><a className="p-6"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg></a></div>
                        <div className="w-1/2 flex justify-end"><a className="p-6"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                            <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                        </svg></a></div>
                    </div>
                    <div className=" px-20 pt-20 pb-28">
                        <img src="/images/logo.svg" className="mx-auto mb-1 h-6 sm:h-9" alt="Gameplex Logo" />
                        <p className="mb-3 self-center text-5xl font-semibold whitespace-nowrap dark:text-white">GamePlex</p>
                        <p className="mb-3 self-center text-sm whitespace-nowrap dark:text-white pb-6">A Crypto Wallet for DeFi & NFT</p>

                        <button className="focus:border-transparent focus:ring-0 text-black bg-[#02ff63] w-full flex-auto transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 hover:shadow-lg hover:shadow-[#02ff63cc] focus:ring-green-300 font-bold rounded-md text-sm px-12 py-3 mr-2 my-5" type="submit">Create New Wallet</button>
                        <br />
                        <a href="/create" className="focus:border-transparent focus:ring-0 text-white bg-gradient-to-r from-[#6A00FF] to-[#3C00B7] w-full flex-auto transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 hover:shadow-lg hover:shadow-[#3c00b7cc] focus:ring-blue-300 font-bold rounded-md text-sm px-5 py-3 mr-2 mb-2" type="submit">I Have a Wallet</a>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default CreateOrExistingWalletView;