// EnterPasswordView : Enter your wallet password

function EnterPasswordView() {
    return (
        <div className="container bg-slate-900 mx-auto">
            <div className="flex h-screen">
                <div className="mx-auto my-auto text-center card rounded-2xl bg-[#1e1e1e]">
                    <div className="flex">
                        <div className="w-1/2 flex justify-start"><a title='back' href='/login' className="p-6"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg></a></div>
                        <div className="w-1/2 flex justify-end"><a title='close' href='/finish' className="p-6"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                            <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                        </svg></a></div>
                    </div>
                    <div className=" px-20 pt-10 pb-12">
                        <img src="/images/logo.svg" className="mx-auto mb-5 h-18 sm:h-9" alt="Gameplex Logo" />
                        <p className="mb-3 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Enter your password</p>


                        <label htmlFor="password" className="relative text-gray-400 focus-within:text-gray-600 block">
                            <svg className='pointer-events-none absolute top-[42px] text-white transform -translate-y-1/2 left-3' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                                <g id="vuesax_linear_unlock" data-name="vuesax/linear/unlock" transform="translate(-236 -252)">
                                    <g id="unlock">
                                        <path d="M15,12H5c-4,0-5-1-5-5V5C0,1,1,0,5,0H15c4,0,5,1,5,5V7C20,11,19,12,15,12Z" transform="translate(238 262)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                        <path data-name="Vector" d="M0,8V6C0,2.69,1,0,6,0c4.5,0,6,2,6,5" transform="translate(242 254)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                        <path data-name="Vector" d="M5,2.5A2.5,2.5,0,1,1,2.5,0,2.5,2.5,0,0,1,5,2.5Z" transform="translate(245.5 265.5)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                        <path data-name="Vector" d="M0,0H24V24H0Z" transform="translate(260 276) rotate(180)" fill="none" opacity="0" />
                                    </g>
                                </g>
                            </svg>
                            <input type="password" className="focus:border-transparent focus:ring-0 text-white bg-[#313131] w-full border-[#383838] border-2 flex-auto transition ease-out font-bold rounded-xl placeholder:font-thin placeholder:text-[#FFFFFF33] text-sm px-5 pl-11 py-3 mr-2 mt-5 mb-5" placeholder='Password' />
                        </label>
                        <br />
                        <a href="/create" className="focus:outline-none text-white bg-gradient-to-r from-[#6A00FF] to-[#3C00B7] w-full flex-auto transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 focus:ring-4 hover:shadow-lg hover:shadow-[#3c00b7cc] focus:ring-blue-300 font-bold rounded-md text-sm px-5 py-3 mr-2 mb-12" type="submit">Unlock</a>
                        <a href='#'>Support</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EnterPasswordView;