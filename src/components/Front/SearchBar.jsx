const SearchBar = (props) => {
    return (
        <div className=" absolute z-40 lg:top-40 md:top-[7rem] sm:top-[5.5rem] top-[5.5rem] w-full mx-auto text-center" >
            <main className="px-4 sm:px-6 lg:px-8 z-10 lg:w-[50rem] md:w-[35rem]  mx-auto">
                <div className="text-center">
                    <h2 className="md:text-3xl  text-xl  tracking-tight leading-10 font-bold text-white  lg:text-[2.65rem] px-5 ">
                        {props.title}
                    </h2>

                    <div className="mt-2 sm:mt-7 sm: justify-center">
                        <div className="rounded-md ">
                            <form>
                                <div className="relative flex  justify-center gap-7">
                                    <input type="search" id="default-search" className="block md:w-full w-40 p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-white dark:placeholder-gray-600 placeholder-text-lg dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder="Search by Location or point of interest" />
                                    <button type="submit" className="text-white tracking-wide bg-[#B13634] hover:bg-red-800 focus:ring-1 focus:outline-none focus:ring-[#B13634] font-normal rounded-lg text-xl px-6 py-3 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-[#B13634]">{props.btnTitle}</button>
                                </div>
                                <div className=" inset-y-0 left-0 flex items-center pl-14 pointer-events-none mt-3 text-base tracking-wider text-white">
                                    <svg className="w-4 h-4 text-xs text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                    <span className="pl-2 text-white ">Advanced Search</span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default SearchBar;