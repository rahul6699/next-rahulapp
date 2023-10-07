import TopBarImage from '/public/images&icons/signup/banner1.jpg'
import HeroSection from '@/components/Front/HeroSection';
import FeatureSectionBgImage from '../../../../public/images&icons/signup/pattern1.png'
import ImageANDText from '@/components/Front/ImageANDTextBox';
import Input from '@/components/Front/Input';
import Label from '@/components/Front/Label';
const Signup = () => {
    return (
        <>
            <HeroSection src={TopBarImage.src} title={["Supercharge Your Business with Vendor Guide Advertising!."]} />
            <section id="featurs_section"
                style={{backgroundImage:`url(${FeatureSectionBgImage.src})`, backgroundSize: `100% 100%`}}
                className="py-9 bg-[#F6F7F8]">
                <div className="container mx-auto overflow-hidden pt-12 xl:px-10">
                    <div className="mx-auto max-w-7xl">
                        <div className="lg:mx-auto  max-w-4xl grid grid-cols-2 sm:gap-x-16 sm:gap-y-10 md:gap-y-16  lg:max-w-none">
                            <div className="md:col-span-1 col-span-12 lg:-mr-16 order-2 sm:order-1 ">
                                <div className=" lg:pt-4 text-center lg:text-left ">
                                    <p className="lg:mt-1 md:mt-6 mt-10 lg:leading-10 md:text-[1.02rem] text-[1.02rem] lg:text-[1.45rem]  text-[#221F20] font-medium  font-maven">
                                        <span className="text-xl lg:text-[1.80rem] text-[#B13634] font-bold font-lato">Ready to take
                                            your business to new heights?</span><br />
                                        Join Vendor Guide&apos;s exclusive network and propel your brand
                                        forward. Our platform offers you the tools and opportunities
                                        you need to effortlessly manage your listings and secure
                                        valuable bid requests.
                                    </p>
                                </div>
                                <ImageANDText src="/images&icons/signup/icon1.png" title={[`<span
                                class="text-xl lg:text-[1.95rem] text-[#221F20]  font-bold font-lato">Unparalleled
                                Exposure<br class="md:block hidden"/>
                                & Impact</span>`,`<br/>`,`Join Vendor Guide's exclusive network and propel your brand
                            forward. Our platform offers you the tools and opportunities
                            you need to effortlessly manage your listings and secure
                            valuable bid requests..`]} />
                            <ImageANDText src="/images&icons/signup/icon2.png" title={[`<span class="text-xl lg:text-[1.95rem] text-[#221F20]  font-bold font-lato">Effortless Management<br class="md:block hidden"/> & Bid Requests</span>`,`<br/>`,`Through your intuitive Vendor Guide dashboard, you can easily update your information and receive bid requests that matter and make meaningful connections with property managers actively seeking your services.`]} />
                            <ImageANDText src="/images&icons/signup/icon3.png" title={[`<span
                                class="text-xl lg:text-[1.95rem] text-[#221F20]  font-bold font-lato">Empowerment
                                through<br class="md:block hidden"/>
                                Data Insights</span>`,`<br/>`,`Gain a competitive edge with Vendor Guide's
                                        insights. Understand trends, preferences, and
                                        demands within your industry, enabling you to tailor
                                        your offerings effectively.`]} />
                                
                            </div>

                            <div className="md:col-span-1 col-span-12   order-1 sm:order-2  sm:gap-x-5 lg:ps-24">
                                <div className="shadow-lg rounded-2xl overflow-hidden shadow-lg flex flex-col  bg-white">
                                    <div className=" items-center p-3 bg-[#B13634]">
                                        <p className="text-center text-white font-medium md:text-lg md:text-2xl tracking-wide">Sign
                                            Up Today</p>
                                    </div>
                                    <div className="lg:px-8 px-3 lg:pb-8 pb-3  lg:pt-5 pt-2">
                                        <form className="">
                                            <div className="grid grid-cols-12 mb-4 items-center  ">
                                                <div className="col-span-12 lg:col-span-12 mb-2">
                                                    <select name="package"
                                                        className=" w-full border-2  border-[#171717] py-2.5 md:text-[0.77rem] text-[0.55rem] px-2 text-[#171717] font-bold ">
                                                        <option className="">Elite Advertising Package</option>
                                                        <option>Large select</option>
                                                        <option>Small select</option>
                                                    </select>
                                                </div>

                                            </div>
                                            <div className="grid grid-cols-12 mb-3 items-center  border-b-2 border-[#221F20]">
                                                <div className="col-span-12 lg:col-span-12 mb-4">
                                                    <div
                                                        className="grid grid-cols-4 text-sm md:text-[1.09rem] text-[#B13634]  font-bold font-lato">
                                                        <div className="col-span-3 pb-2">
                                                            Elite Package x 12 Months
                                                        </div>
                                                        <div className="col-span-1 text-center">
                                                            $2,688
                                                        </div>
                                                    </div>
                                                    <p
                                                        className="md:mt-0 mt-0 md:leading-6 leading-5 md:text-[1.02rem] text-sm text-[#221F20] font-normal  font-maven">
                                                        Includes Tier 1 Rank Priority, Company Logo,12 photos, Request Bid, and
                                                        Web Link
                                                        for one year</p>
                                                </div>
                                                <div className="col-span-12 lg:col-span-12 mb-4">
                                                    <div
                                                        className="grid grid-cols-4 text-sm text-[#B13634]  md:text-[1.09rem]  font-bold font-lato">
                                                        <div className="col-span-3 pb-2">
                                                            Featured Listing x 12 Months
                                                        </div>
                                                        <div className="col-span-1 text-center">
                                                            $250
                                                        </div>
                                                    </div>
                                                    <p
                                                        className="md:mt-0  mt-0 md:leading-6 leading-5 md:text-[1.02rem] text-sm text-[#221F20] font-normal  font-maven  ">
                                                        Request a spot among the top five search results for
                                                        maximum visibility and impact.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-12 items-center ">
                                                <div className="col-span-12">
                                                    <h2 className="text-right font-bold text-[#221F20] md:text-[1.08rem] text-sm">
                                                        Sub Total: $2,938.00
                                                    </h2>
                                                </div>
                                            </div>

                                            <h4
                                                className="text-left text-[#221F20] md:text-lg text-sm font-semibold mb-3 -tracking-tight">
                                                Billing
                                                Details</h4>
                                            <div className="grid grid-cols-12 mb-4 items-center  ">
                                                <div className="col-span-12 lg:col-span-12 mb-4 relative">
                                                    <Input type="text" name="fullname" id="fullname"
                                                        className="appearance-none w-full   border-solid border-2 border-black  dark:text-zinc-100 p-2 text-[0.55rem] md:text-[0.77rem]" placeholder="" />

                                                    <Label for="name"
                                                        className="absolute top-2 left-0 text-black pointer-events-none transition duration-200 ease-in-outbg-white px-3 text-grey-darker font-bold  text-[0.55rem]  md:text-[0.77rem]" name="Full
                                                        Name" />
                                                </div>
                                                <div className="col-span-12 lg:col-span-12 mb-4 relative">
                                                    <Input type="text" name="companyname" id="companyname"
                                                        className="w-full  placeholder:text-sm border-solid border-2 border-black p-2 text-[0.55rem] md:text-[0.77rem]" placeholder="" />
                                                    <Label for="companyname"
                                                        className="absolute top-2 left-0 text-black pointer-events-none transition duration-200 ease-in-outbg-white px-3 text-grey-darker font-bold text-[0.55rem] md:text-[0.77rem]" name="Company
                                                        Name" />

                                                </div>

                                                <div className="col-span-12 lg:col-span-12 mb-4 relative">
                                                        <Input type="url" name="cwebsite" id="cwebsite"
                                                        className="w-full  placeholder:text-sm border-solid border-2 border-black  text-[0.55rem] md:text-[0.77rem] p-2" placeholder="" />
                                                        <Label for="cwebsite"
                                                        className="absolute top-2.5 left-0 text-black pointer-events-none transition duration-200 ease-in-outbg-white px-3 text-grey-darker font-bold  text-[0.55rem] md:text-[0.77rem]" name="Company
                                                        Website" />

                                                </div>
                                            </div>
                                            <div className="grid grid-cols-12 lg:gap-7 mb-4 items-center ">
                                                <div className="col-span-12 lg:col-span-12 mb-4 relative">
                                                    <Input type="tel" name="cphone" id="cphone"
                                                        className="w-full  placeholder:text-sm border-solid border-2 border-black    p-2 text-[0.55rem] md:text-[0.77rem]" placeholder="" />
                                                    <Label for="cphone"
                                                    className="absolute top-2.5 left-0 text-black pointer-events-none transition duration-200 ease-in-outbg-white px-3 text-grey-darker font-bold  text-[0.55rem] md:text-[0.77rem]" name="Phone" />
                                                </div>

                                                <div className="col-span-12 lg:col-span-12 mb-4 relative">
                                                    <Input type="email" name="cemail" id="cemail"
                                                        className="w-full  placeholder:text-sm border-solid border-2 border-black    p-2 text-[0.55rem] md:text-[0.77rem]" placeholder="" />
                                                    <Label for="cemail"
                                                        className="absolute top-2.5 left-0 text-black pointer-events-none transition duration-200 ease-in-outbg-white px-3 text-grey-darker font-bold text-[0.55rem] md:text-[0.77rem]" name="Email" />
                                                </div>
                                            </div>
                                            <h4
                                                className="text-left text-[#171717] md:text-lg text-sm font-semibold mb-3 -tracking-tight">
                                                Payment Method
                                            </h4>
                                            <div className="grid grid-cols-12 mb-4 items-center ">
                                                <div className="col-span-12 lg:col-span-12 mb-4 relative">
                                                    
                                                    <Input type="text" name="cardno" id="cardno"
                                                        className="w-full  placeholder:text-sm border-solid border-2 border-black   p-2 text-[0.55rem] md:text-[0.77rem]" placeholder="" />
                                                    <Label for="cardno"
                                                        className="absolute top-2.5 left-0 text-black pointer-events-none transition duration-200 ease-in-outbg-white px-3 text-grey-darker font-bold text-[0.55rem] md:text-[0.77rem]" name="Credit Card Number" />
                                                </div>

                                                <div className="col-span-12 lg:col-span-12">
                                                    <div className="grid grid-cols-12 lg:gap-x-7 gap-x-2 mb-4 items-center ">
                                                        <div className="col-span-4 lg:col-span-4 mb-4 relative">
                                                                <Input type="text" name="carddate" id="carddate"
                                                                className="w-full  placeholder:text-sm border-solid border-2 border-black  p-2 text-[0.55rem]" placeholder="" />
                                                                <Label for="carddate"
                                                                    className="absolute top-2.5 left-0 text-black pointer-events-none transition duration-200 ease-in-outbg-white px-3 text-grey-darker font-bold text-[0.55rem] md:text-[0.77rem]" name="Exp.
                                                                    Date" />
                                                        </div>
                                                        <div className="col-span-4 lg:col-span-4 mb-4 relative">
                                                            <Input type="year" name="cardyear" id="cardyear"
                                                                className="w-full  placeholder:text-sm border-solid border-2 border-black  p-2 text-[0.55rem]" placeholder="" />
                                                            <Label for="cardyear"
                                                                className="absolute top-2.5 left-0 text-black pointer-events-none transition duration-200 ease-in-outbg-white px-3 text-grey-darker font-bold  text-[0.55rem] md:text-[0.77rem]" name="Year" />
                                                        </div>
                                                        <div className="col-span-4 lg:col-span-4 mb-4 relative">
                                                            <Input type="text" name="secretcode" id="secretcode"
                                                                className="w-full  placeholder:text-sm border-solid border-2 border-black  dark:bg-zinc-700/50 dark:border-zinc-600 dark:placeholder:text-zinc-100 dark:text-zinc-100 p-2 text-[0.55rem]" placeholder="" />
                                                            <Label for="secretcode"
                                                                className="absolute top-2.5 left-0 text-black pointer-events-none transition duration-200 ease-in-outbg-white px-3 text-grey-darker font-bold  text-[0.55rem] md:text-[0.77rem]" name="CVV" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="block text-center">
                                                <buttom type="submit" name="save"
                                                    className="px-10 md:px-5 py-2 text-center flex-none rounded-md bg-[#B13634] md:text-lg text-sm tracking-wide font-medium font-lato text-white shadow-sm hover:bg-[#B13634] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#221F20]">
                                                    Place Order
                                                </buttom>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* next section  */}
                    <div className="relative isolate overflow-hidden pt-10 lg:pt-32">
                        <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
                            <div className="mx-auto  max-w-2xl grid-cols-1  lg:max-w-none lg:grid-cols-2">
                                <div className="mx-auto text-center">
                                    <h2 className="text-lg md:text-2xl font-bold  tracking-normal text-[#221F20]  font-lato md:pb-5">Don&apos;t miss this chance to
                                        grow your business – get in touch with us now!</h2>
                                    <div className="py-11 gap-x-4 text-center block ">
                                        <a href="" className="px-10 md:px-16 py-3 md:py-4 text-center flex-none rounded-md bg-[#221F20] md:text-xl text:lg tracking-wide font-medium font-lato text-white shadow-sm hover:bg-[#221F20] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#221F20]">Contact Us Today</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end next section */}
                </div>
            </section>
        </>
    )
}

export default Signup