
// import PaginationBar from "@/components/Front/Pagination";
import ResourceListCards from "@/components/Front/ResourceListCards";
import ResourceTopCards from "@/components/Front/ResourceTopCards";
import TopBarImage from 'public/images&icons/resources/banner2.jpg'


    
    
    
const Resources =  () => {


    return (
        <>
            <div style={{background: 'linear-gradient(to bottom, #ffffff 55%, #F6F7F8 50%)' }}>
                <section className="top_banner relative">
                    <div className="lg:h-[90vh] h-[65vh] bg-cover bg-no-repeat" style={{backgroundImage: `url(${TopBarImage.src})`}}>
                        <div className=" isolate px-6 pt-14 lg:px-8">
                            <div className="mx-auto max-w-2xl lg:py-32 md:pt-10 sm:py-48 lg:pt-20">
                                <div className="text-center">
                                    <h1 className="lg:text-5xl text-2xl font-bold tracking-tight text-gray-50 sm:text-5xl">Resources</h1>
                                    <p className="lg:mt-3 mt-1 lg:text-xl text-sm leading-5 text-gray-50">Tap into the wisdom of insiders and
                                        vendors who&apos;ve harnessed<br/> the Vendor Guide to grow their businesses.</p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -mt-16 lg:px-10 md:px-2 pt-5 pb-16  lg:m-10 m-5 xlg:top-[22rem] top-[16rem]">
                            <div className="grid grid-cols-3 gap-5 lg:grid-cols-3 lg:gap-[3.12rem]">
                                <ResourceTopCards img="/images&icons/resources/img1.jpg" buttonTitle="Blog" date="August 22, 2023" firstTitle="Powerful Reach, Profitable Results:" secondTitle="Drive Success for Multifamily Vendors through High-Performing Ad Spaces" />
                                <ResourceTopCards img="/images&icons/resources/img1.jpg" buttonTitle="Blog" date="August 22, 2023" firstTitle="Powerful Reach, Profitable Results:" secondTitle="Drive Success for Multifamily Vendors through High-Performing Ad Spaces" />
                                <ResourceTopCards img="/images&icons/resources/img1.jpg" buttonTitle="Blog" date="August 22, 2023" firstTitle="Powerful Reach, Profitable Results:" secondTitle="Drive Success for Multifamily Vendors through High-Performing Ad Spaces" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="product_section ">
                    <ResourceListCards />
                                          
                    
                    <div className="flex items-center justify-between  px-4 py-3 sm:px-6">
                            
                        {/* <div className="flex flex-1 justify-between sm:hidden">
                            <a href="#"
                                className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
                            <a href="#"
                                className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
                        </div> */}
                        
                        <div className="sm:flex sm:flex-1 sm:items-center sm:justify-center pb-10">
                            <div>
                            
                                {/* <Pagination count={dCount} page={page} hidePrevButton hideNextButton  onChange={handleChange} /> */}
                                {/* <Pagnation totalPostCount={resourceCardList.length} /> */}
                                {/* <a href="#" aria-current="page" className="relative  border-b-2 border-red-400 z-10 inline-flex items-center px-2 py-2 text-sm font-semibold text-black focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>
                                <a href="#" className="relative inline-flex items-center px-2 py-2 text-sm font-semibold text-gray-900  hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
                                <a href="#" className="relative hidden items-center px-2 py-2 text-sm font-semibold text-gray-900  hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
                                <span className="relative inline-flex items-center px-2 py-2 text-sm font-semibold text-gray-700  focus:outline-offset-0">4</span>
                                <a href="#" className="relative hidden items-center px-2 py-2 text-sm font-semibold text-gray-900  hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">5</a> */}
                                {/* <a href="#" className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-900  hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                    <span className="sr-only">Next</span>
                                    <i className="fa fa-angle-right font-bold" aria-hidden="true"></i>
                                </a> */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Resources