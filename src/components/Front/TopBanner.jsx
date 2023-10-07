
const TopBanner = (props) => {
    return (
        <>
            <section className="top_banner relative">
                <div className="md:h-80 h-[40vh] bg-cover bg-no-repeat" style={{backgroundImage:`url(${props.image})`}}>
                    <div className=" isolate px-6 md:pt-14 pt-20 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:py-32 md:pt-[5rem] sm:pb-48 lg:pt-20">
                            <div className="text-center ">
                                <h1 className="lg:text-5xl text-2xl font-bold tracking-tight text-gray-50 sm:text-5xl">{props.title}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TopBanner