function toggle() {
    var x = document.getElementById("viewed");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function SecretRecoveryView() {
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
                    <div className="px-10 pt-6 pb-12">
                        <p className="mb-3 self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Secret recovery phrase</p>
                        <p className="mb-3 self-center text-sm whitespace-nowrap dark:text-white pb-6">This phrase is the only way to recovery <br /> your wallet. Do not share it with anyone!</p>
                        <div className="relative">
                            <div  id='viewed' className='backdrop-blur-sm bg-[#ffffff26] h-32 w-full absolute top-5 z-10 rounded-xl'></div>

                            <button title="view" className="focus:border-transparent focus:ring-0 z-50 absolute bottom-5 right-0 h-10 w-10 mx-2 text-white rounded-lg backdrop-blur-sm bg-[#ffffff26] border-[#fafafa36] border-2 px-[10px]" onClick={toggle}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                                    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                                    <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                                </svg>
                            </button>
                            <textarea rows={5} title='secret' className="focus:outline-none text-white bg-[#313131] w-full border-[#383838] border-2 flex-auto transition ease-out font-bold rounded-xl placeholder:font-thin placeholder:text-[#FFFFFF33] text-sm px-6 py-3 mr-2 mt-5 mb-2" value="hello World How Are You" />
                        </div>
                        <br />
                        <input placeholder="Accept" className="focus:border-transparent focus:ring-0 form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-[#313131] checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 my-10 cursor-pointer" type="checkbox" value="" />
                        <label className="form-check-label inline-block text-xs text-white-800 pb-5">
                            I saved my secret recovery key
                        </label>
                        <a href="/create" className="focus:outline-none text-white bg-gradient-to-r from-[#6A00FF] to-[#3C00B7] w-full flex-auto transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 focus:ring-4 hover:shadow-lg hover:shadow-[#3c00b7cc] focus:ring-blue-300 font-bold rounded-md text-sm px-5 py-3 mr-2 mb-2" type="submit">Continue</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SecretRecoveryView;