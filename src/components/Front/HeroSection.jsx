const HeroSection = (props) => {
    return (
        <section id="hero_section" className="bg-cover bg-no-repeat bg-left relative before:content[''] before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:bg-[#3c373799] lg:h-[101vh] md:h-[72vh] sm:h-[80vh] h:[80vh]" style={{backgroundImage:`url(${props.src})`, backgroundSize: `100% 100%`}}>
            <div className="m:h-[80vh] md:h-[72vh] lg:h-[101vh] h-[50vh] w-full flex items-center justify-center text-center">
                <main className="px-4 sm:px-6 lg:px-8 z-10">
                    <div className="text-center ">
                        <h2 className="md:text-xl sm:text-lg text:sm lg:text-3xl -tracking-tight md:leading-10 lg:leading-[3.5rem] font-semibold  text-white  lg:text-[2.50rem] font-lato px-10">
                            {props.title}
                        </h2>
                    </div>
                </main>
            </div>
        </section>
    )
}

export default HeroSection