import Link from "next/link";
const Footer = () => {
    return (
        <>
            <footer id="dark-theme" className='bg-[#171717] bottom-0 left-0 flex flex-col w-full gap-4  md:gap-8'>
                <div className="px-5 lg:py-0 md:py-2 py-7">
                    <div className='flex items-center gap-7 md:justify-between md:flex-row md:mb-0 mb-4'>
                        <div className='flex flex-col gap-2'>
                            <Link href="" className="flex items-center md:ps-8">
                                <img src="/images&icons/SVG/logo_white.svg" className="mr-3 h-6 sm:h-9" alt="Vendor Guide Logo" />
                            </Link>
                        </div>
                        <div className='flex flex-col gap-4 xsm:flex-row md:p-0 relative float-label-input md:me-8'>
                            <input type="text" id="name" placeholder=" " className="block md:w-full w-48 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md md:py-3 px-7 py-2 block appearance-none leading-normal focus:border-blue-400" />
                            <label htmlFor="name" className="absolute top-3 left-0 text-black pointer-events-none transition duration-200 ease-in-outbg-white px-3 text-grey-darker font-semibold md:text-base text-xs">Subscribe to Our Newsletter</label>
                        </div>
                    </div>
                    <div className='grid gap-2.5 grid-cols-2 justify-items-center 2xsm:grid-cols-2 md:grid-cols-4 lg:mr-48 lg:ml-36'>
                        <div className='flex flex-col'>
                            <label className='text-white  pb-4'>Advertise</label>
                            <ul className='flex flex-col nav_list text-sm'>
                                <li>(952) 460-1916</li>
                                <li>info@VendorGuideUSA.coms</li>
                            </ul>
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-white  pb-4'>Explore</label>
                            <ul className='flex flex-col nav_list text-sm'>
                                <li>Publications</li>
                                <li> Get in Touch</li>
                                <li>Resources</li>
                            </ul>
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-white  pb-4'>Visit</label>
                            <ul className='flex flex-col nav_list text-sm'>
                                <li>10550 Wayzata Blvd STE D,</li>
                                <li>Minnetonka, MN 55305</li>
                            </ul>
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-white  pb-4'>Follow</label>
                            <ul className='flex flex-col nav_list text-sm'>
                                <li>Facebook</li>
                                <li>LinkedIn</li>
                                <li>Instagram</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="copy_right bg-[#ffffff] flex  items-center justify-center md:flex-row md:justify-center">
                    <span className="text-black font-bold text-xs">Powered by</span>
                    <img src="images&icons/SVG/star.svg" className="mr-3 h-16 w-16 sm:h-16" />
                </div>
            </footer>
        </>
    )
}

export default Footer;