import Link from "next/link";

const FeaturSection = (props) => {
    return (
        <>
        {props.rightSection && 
        <div className="lg:mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16  lg:max-w-none md:grid-cols-2">
            <div className="lg:pt-4">
                {props.mainTitle &&
                <h2 className="text-2xl lg:block hidden md:text-3xl  font-semibold leading-7 text-grey-500 mb-10">{props.mainTitle}</h2>}
                <div className="">
                    <p className="sm:mt-20 md:mt-[1rem] text-xl lg:text-2xl  leading-8 text-[#221F20] font-medium font-lato sm:order-1 order-2"><span className="text-red-700  font-semibold">{props.firstText}</span> {props.secondText}</p>

                </div>
            </div>
            <div className="relative w-full order-2 sm:order-1" style={{position:'relative'}}>
                <img src={props.img} alt="Product screenshot" className="max-w-none rounded-xl  ring-1 ring-gray-400/10 lg:w-[30rem] md:w-[20rem]  sm:w-[25rem] md:-ml-4 lg:-ml-0 float-right" width="80%" />
                <img src="images&icons/Asset1.png" className="absolute_className max-w-none absolute lg:block hidden  lg:right-[27.5rem] md:top-28 md:right-72 lg:w-[12rem] sm:w-[9rem]" />
            </div>
        </div> }
        {props.leftSection && 
        <div className="mt-12 lg:mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16  lg:max-w-none md:grid-cols-2">
        <div className="relative w-full" style={{position:'relative'}}>
            <img src={props.img} alt="Product screenshot" className="max-w-none rounded-xl  ring-gray-400/10 lg:w-[30rem] sm:w-[25rem] md:w-[20rem] md:-ml-4 lg:-ml-0 float-left" width="80%"/>
            <img src="images&icons/Asset2.png" className="absolute lg:left-96 md:top-28 md:left-72 lg:block hidden lg:w-[12rem] sm:w-[9rem]"/>
        </div>
        <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
                <p className="mt-20 md:mt-[1rem] text-xl lg:text-2xl lg:leading-10 sm:leading-7 text-[#221F20] font-medium font-lato"><span className="text-red-700 font-semibold">{props.firstText}</span><br/>{props.secondText}</p>
            </div>
        </div>
    </div> }
        </>
    )
}

export default FeaturSection;