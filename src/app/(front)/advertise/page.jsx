import TopBarImage from 'public/images&icons/advertise/banner1.jpg'
import FeaturSection2 from '@/components/Front/FeaturSection2';
import AdvertiseTable from '@/components/Front/AdvertiseTable';
import Link from 'next/link';
import HeroSection from '@/components/Front/HeroSection';

const Advertise = () =>{
    return (
        <>
            <HeroSection src={TopBarImage.src} title={["We connect multifamily vendors with", `<br className="md:block hidden"/>`,"the property management professionals who need them."]} />
            <section id="featurs_section" className="py-9">
                <div className="overflow-hidden bg-white py-12 px-3 lg:ps-16">
                    <div className="mx-auto max-w-7xl px-9">
                        <FeaturSection2 rightSection={true} firstText="Effortless Management & Bid Requests" secondText="Managing your listing has never been simpler! Through your
                VendorGuide account and dashboard, easily update your
                information and receive valuable bid requests. Stay in control
                of your opportunities and make meaningful connections with
                property managers in need of your services." img="images&icons/advertise/img1.png" />
                        <FeaturSection2 leftSection={true} firstText="Effortless Management & Bid Requests" secondText="Managing your listing has never been simpler! Through your
                        VendorGuide account and dashboard, easily update your
                        information and receive valuable bid requests. Stay in control
                        of your opportunities and make meaningful connections with
                        property managers in need of your services." img="images&icons/advertise/img1.png" />
                        <FeaturSection2 rightSection={true} firstText="Effortless Management & Bid Requests" secondText="Managing your listing has never been simpler! Through your
                        VendorGuide account and dashboard, easily update your
                        information and receive valuable bid requests. Stay in control
                        of your opportunities and make meaningful connections with
                        property managers in need of your services." img="images&icons/advertise/img1.png" />
                    </div>
                </div>
            </section>
            <section id="advertise_section">
                <div className="container mx-auto  py-12 md:px-16 md:ps-16 overflow-x-auto">
                    <div className="max-w-7xl px-9grid grid-cols-12 gap-5">
                        <div className="col-span-12 xl:col-span-6">
                            <div className="card dark:bg-zinc-800 dark:border-zinc-600">
                                <div className="card-body pb-14">
                                    <h6 className="mb-1 text-3xl md:text-4xl text-[#221F20] font-bold dark:text-gray-100 font-lato">Choose Your Advertising Package:</h6>
                                </div>
                                <div className="card-body">
                                    <div className="relative overflow-x-auto">
                                        <AdvertiseTable />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="partner_section">
                <div className="relative isolate overflow-hidden lg:pt-14">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto  max-w-2xl grid-cols-1  lg:max-w-none lg:grid-cols-2">
                            <div className="mx-auto text-center">
                                <h2 className="text-2xl md:text-3xl font-bold  tracking-normal text-[#221F20]  font-lato md:pb-5">Don&apos;t miss this chance to
                                    grow your business – get in touch with us now!</h2>
                                <div className="py-11 pb-20 gap-x-4 text-center block ">
                                    <Link href="" onClick="" className="px-10 md:px-16 py-3 text-center flex-none rounded-md bg-[#221F20] text-xl tracking-wide font-medium font-lato text-white shadow-sm hover:bg-[#221F20] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#221F20]">Contact Us Today</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Advertise