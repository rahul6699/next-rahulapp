const ImageANDText = (props) =>{
    return (
        <>
            <div class="md:pt-10 pt-10 lg:pt-24 text-center lg:text-left ">
                <div class="grid grid-cols-4">
                    <div class="md:col-span-1 col-span-4 align-top">
                        <img src={props.src} alt="Product screenshot"
                            class="md:max-w-none md:w-[4rem] mx-auto" />
                    </div>
                    <div class="md:col-span-3 col-span-4">
                        <p
                            class="md:mt-0 mt-6 lg:leading-10 text-[1.02rem] lg:text-[1.35rem]  text-[#221F20] font-medium  font-maven">
                            {props.title}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageANDText