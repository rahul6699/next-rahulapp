import Image from "next/image";

const Carousel = (props) => {
    
    return (
        <div id="default-carousel " className="" data-carousel="slide">
            <div className="md:h-[70vh] sm:h-[60vh] h-[60vh] bg-[#0000007d] absolute top-0 right-0 bottom-0 left-0 z-30"></div>
            <div className="overflow-hidden relative  rounded-lg md:h-[70vh] sm:h-[60vh] h-[60vh]">
                {props.images && props.images.map((src, i) => {
                    return (
                        <div className=" duration-700 ease-in-out md:h-[70vh] sm:h-[60vh] h-[60vh] bg-blend-darken" data-carousel-item key={i}>
                            <img src={src} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt={src} />
                        </div>
                    );
                })}
                
            </div>
            <div className=" absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
                {props.images && props.images.map((src, i) => {
                    return (
                        <>
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label={`Slide ${i}`} data-carousel-slide-to={i} key={i}></button>
                        </>
                    );
                })}
            </div>
            <button type="button" className="flex lg:block z-50 hidden absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30  group-focus:ring-4 group-focus:ring-white  group-focus:outline-none">
                    <svg className="w-5 h-5 text-white sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    <span className="hidden">Anterior</span>
                </span>
            </button>
            <button type="button" className="flex  z-50 lg:block hidden absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 0 group-focus:ring-4 group-focus:ring-white  group-focus:outline-none">
                    <svg className="w-5 h-5 text-white sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    <span className="hidden">Siguiente</span>
                </span>
            </button>
        </div>
    )
}

export default Carousel;