import Link from "next/link";

const FeaturSection2 = (props) => {
    return (
        <>
        {props.rightSection && 
        <div className="lg:mx-auto grid max-w-4xl grid-cols-1 items-center  gap-x-2 gap-y-10 md:gap-y-16  lg:max-w-none md:grid-cols-2">
            <div className="lg:pt-4 text-center lg:text-left order-last lg:order-first">
                <p className="mt-6 lg:leading-10 text-xl lg:text-[1.40rem]  text-[#221F20] font-medium  font-maven"><span className="text-2xl lg:text-3xl text-red-700  font-bold font-lato">{props.firstText}</span><br/> {props.secondText}</p>
            </div>
            <div className="relative w-full ml-4 order-first md:order-last" style={{position:'relative'}}>
                <img src={props.img} alt="Product screenshot" className="mx-auto max-w-none rounded-xl  ring-1 ring-gray-400/10 lg:w-[30rem] lg:h-[17rem] md:w-[20rem] w-[25rem] sm:h-[15rem] lg:ml-16" />
            </div>
        </div> }
        {props.leftSection && 
        <div className="mt-14 lg:mt-40 lg:mx-auto grid max-w-4xl grid-cols-1
        gap-y-16  lg:max-w-none md:grid-cols-2">
        <div className="relative w-full" style={{position:'relative'}}>
            <img src={props.img} alt="Product screenshot" className="mx-auto max-w-none rounded-xl  ring-gray-400/10 lg:w-[30rem] lg:h-[17rem] sm:w-[25rem] sm:h-[15rem] md:-ml-4 lg:-ml-0 md:float-left" />
        </div>
        <div className="">
            <div className="ml-[-2rem] text-center lg:text-left">
                <p className="lg:leading-10 text-xl md:text-[1.40rem] sm:leading-7 text-[#221F20] font-medium font-maven md:pr-8">
                <span className="text-xl lg:text-3xl text-red-700 font-bold font-lato">{props.firstText}</span><br/>{props.secondText}
                </p>
            </div>
        </div>
    </div> }
        </>
    )
}

export default FeaturSection2;