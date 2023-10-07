import Link from "next/link";
import Logo from "/public/images&icons/SVG/logo.svg"
import Image from "next/image";
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react";

const Header = () => {
    const [showMenu,setShowMenu] = useState(false);
    const toggleMenu = event => {
        setShowMenu((current) => !current);
        event.target.parentNode.nextElementSibling.classList.toggle('hidden')
    };
    return (
        <>
            <header>
                <nav className="bg-white border-gray-200 px-4 lg:px-6  p-7 dark:bg-gray-800">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xxl">
                        <Link href="/" className="flex items-center md:ps-20">
                            <Image src={Logo} className="mr-3 h-6 sm:h-9" alt="Vendor Guide Logo" />
                        </Link>
                            <div className="flex items-center lg:order-2">
                                <Link href="" className="text-white bg-[#B13634]
                hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-normal rounded-lg text-[1.100rem] px-4 lg:px-5 py-2 lg:py-2.5 md:mr-2 dark:bg-[#B13634] dark:hover:bg-[#B13634] focus:outline-none dark:focus:ring-[#B13634]">Request Quote Now</Link>
                                <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                                    <span className="sr-only">Open main menu</span>
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </button>
                            </div>
                            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                                <ul className="flex flex-col mt-4 font-semibold lg:flex-row lg:space-x-8 lg:mt-0 text-base text-[#221F20]">
                                    <li>
                                        <Link href="/" className="text-base text-[#221F20] font-semibold block py-2 pr-4 pl-3 text-gray-700 border-b border-grey-300  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Home</Link>
                                    </li>
                                    <li>
                                        <div className="head_dropdown inline-block relative">
                                            <button type="button" className="text-base text-[#221F20] font-semibold flex items-center  dropdown-toggle dark:bg-zinc-700 dark:border-zinc-600 dark:text-gray-100 pl-3" id="page-header-user-dropdown" onClick={toggleMenu}>
                                                <span className="fw-medium  xl:block pr-2">Resources</span>
                                                <FontAwesomeIcon icon={faAngleDown} className="text-[#B13634]" />
                                            </button>
                                            <ul className={`head_dropdown-menu absolute hidden text-gray-700 pt-1 w-[8rem] z-50 bg-white mt-1 shadow-solid-primary`}>
                                                <li className="py-1 hidden">
                                                    <Link className=" px-3 pt-2 text-sm font-bold hover:bg-gray-50/50 block dark:hover:bg-zinc-700/50" href="resources">
                                                    <i className="mdi mdi-face-man text-16 align-middle mr-1"></i> Job Listings</Link></li>
                                                <li className="py-1">
                                                    <Link className="px-3 text-sm font-bold hover:bg-gray-50/50 block dark:hover:bg-zinc-700/50" href="resources">
                                                    <i className="mdi mdi-lock text-16 align-middle mr-1"></i> Resource
                                                </Link></li>

                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <Link href="advertise" className="text-base text-[#221F20] font-semibold block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Advertise</Link>
                                    </li>
                                    <li>
                                        <Link href="search" className="text-base text-[#221F20] font-semibold block py-2 pr-4 pl-3 text-gray-700 border-b border-grey-300  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Search</Link>
                                    </li>
                                    <li>
                                        <Link href="about" onClick={(e)=>{e.preventDefault()}} className="text-base text-[#221F20] font-semibold block py-2 pr-4 pl-3 text-gray-700 border-b border-grey-300  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About</Link>
                                    </li>
                                    <li>
                                        <Link href="contact" onClick={(e)=>{e.preventDefault()}} className="text-base text-[#221F20] font-semibold block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
                                    </li>
                                    <li>
                                        <Link href="signup" className="text-base text-[#221F20] font-semibold block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Sign Up</Link>
                                    </li>
                                </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;