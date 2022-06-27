function CreatePasswordView() {
    return (
        <div className="container bg-slate-900 mx-auto">
            <div className="flex h-screen">
                <div className="mx-auto my-auto text-center card rounded-2xl bg-[#1e1e1e]">
                    <div className="flex">
                        <div className="w-1/2 flex justify-start"><a title='back' href='/login' className="p-6"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg></a></div>
                        <div className="w-1/2 flex justify-end"><a title='close' href='/recovery' className="p-6"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                            <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                        </svg></a></div>
                    </div>
                    <div className="px-16 pt-6 pb-24">
                        <p className="mb-3 self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Create password</p>
                        <p className="mb-3 self-center text-sm whitespace-nowrap dark:text-white pb-6">Essential when unlocking the wallet</p>

                        <input type="password" className="focus:border-transparent focus:ring-0 text-white bg-[#313131] w-full border-[#383838] border-2 flex-auto transition ease-out font-bold rounded-xl placeholder:font-thin placeholder:text-[#FFFFFF33] text-sm px-6 py-3 mr-2 mt-5 mb-2" placeholder='Password' />
                        <br />
                        <input type="password" className="focus:border-transparent focus:ring-0 text-white bg-[#313131] w-full border-[#383838] border-2 flex-auto transition ease-out font-bold rounded-xl placeholder:font-thin placeholder:text-[#FFFFFF33] text-sm px-6 py-3 mr-2 my-5" placeholder='Confirm Password' />
                        <br />
                        <input placeholder="Accept" className="focus:border-transparent focus:ring-0 form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-[#313131] checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer" type="checkbox" value="" />
                        <label className="form-check-label inline-block text-white-800 pb-5">
                            I agree to <a className='text-[#3c00b7]' href='#'>terms</a>
                        </label>
                        <a href="/create" className="focus:outline-none text-white bg-[#3c00b7] w-full flex-auto transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 focus:ring-4 hover:shadow-lg hover:shadow-[#3c00b7cc] focus:ring-blue-300 font-bold rounded-md text-sm px-5 py-3 mr-2 mb-2" type="submit">Continue</a>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default CreatePasswordView;