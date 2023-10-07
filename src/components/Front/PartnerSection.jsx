import Link from "next/link";

const PartnerSection = (props) => {
    return (
        <>
        <div className="relative isolate overflow-hidden ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto  max-w-2xl grid-cols-1  lg:max-w-none lg:grid-cols-2">
                    <div className="max-w-2xl  mx-auto text-center">
                        <h2 className="text-3xl font-bold  tracking-normal text-[#B13634]  font-lato">{props.title}</h2>
                        <p className="mt-3 text-[1.400rem] leading-8 text-[#221F20] font-medium  font-lato">{props.content}</p>
                        <div className="py-11 gap-x-4 text-center block ">
                            <Link href="" className="text-center flex-none rounded-md bg-[#B13634] px-11 py-3 text-lg tracking-wide font-medium font-lato text-white shadow-sm hover:bg-[#B13634] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B13634]">{props.btnTitle}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default PartnerSection;