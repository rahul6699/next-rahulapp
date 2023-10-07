import Image from "next/image";

const BannerSectionCard = ({imgsrc,imgalt,imgclass}) => {
    return (
        <>
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
                <div className="md:w-[97.666667%] lg:w-w-[100.666667%] xl:w-[100.666667%] 2xl:w-9/12">
                    <div className="mt-8 md:mt-0 flex justify-center md:justify-end">
                        <img src={imgsrc} alt={imgalt} className={imgclass} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BannerSectionCard;