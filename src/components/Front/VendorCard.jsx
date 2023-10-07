"use client"
import { useEffect, useState } from "react"

const VendorCard = (props) =>{
    const [vendorData,setVendorData] = useState([
        {
            img:"images&icons/search_result/img1.jpg",
            title:"American Surface Restoration(ASR)tub fusion",
            phone:"952-220-2604",
            content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            url1:"#",
            url2:"#"

        },
        {
            img:"images&icons/search_result/img2.jpg",
            title:"America's Floor sources",
            phone:"952-220-2604",
            content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            url1:"#",
            url2:"#"

        },
        {
            img:"images&icons/search_result/img3.jpg",
            title:"All, Inc.",
            phone:"952-220-2604",
            content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            url1:"#",
            url2:"#"

        }
    ]) 


    return (
        <>
        {   vendorData.map((row,index) => {
            return(
                <div className="col-span-12 md:col-span-6 xl:col-span-4 h-full" key={index} >
                    <div className="card dark:bg-zinc-800 dark:border-zinc-600 mb-0 bg-white px-3  shadow h-full relative">
                        <div className="card-body">
                            <div className="mb-4">
                                <div className="w-36  pt-2 mx-auto text-center">
                                    <img className="w-full" src={row.img} alt="Sunset in the mountains"/>
                                </div>
                            </div>
                            <div className="text-center xl:px-2 xl:min-h-[40vh] lg:min-h-[35vh] md:min-h-[49vh] min-h-[40vh]">
                                <h5 className="text-16 text-gray-700 mb-1"><a href="#" className="text-[#B13634] font-bold">{row.title}</a></h5>
                                <p className="text-black font-bold dark:text-zinc-100 mb-2 pt-5">{row.phone}</p>
                                <p className="text-gray-400 font-normal text-sm">
                                {row.content}
                                </p>
                            </div>
                            <div className="py-10 absolute bottom-0 left-0 right-0" role="group">
                                <div className="lg:flex flex md:block items-center justify-center gap-x-6 md:text-center">
                                    <div>
                                        <a href={row.url1} className="rounded-[0.7rem] md:inline-block px-3.5 py-1 text-sm border-solid border-[1px] border-black font-semibold text-black shadow-sm hover:bg-[#B13634 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Learn More</a>
                                    </div>
                                    <div className="lg:mt-0 md:mt-3 mt-0"> 
                                        <a href={row.url2} className="rounded-[0.7rem] md:inline-block  px-3.5 py-1 text-sm border-solid border-[1px] border-black font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Request Quote</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
            })
        }
        </>
    )
}

export default VendorCard