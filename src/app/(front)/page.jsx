import BannerSectionCard from "@/components/Front/BannerSectionCard";
import Carousel from "@/components/Front/Carousel";
import FeaturSection from "@/components/Front/FeaturSection";
import PartnerSection from "@/components/Front/PartnerSection";
import SearchBar from "@/components/Front/searchBar";
import Link from "next/link";

export default function Home() {
  const BCardimages = [
    "/images&icons/img1.png",
    "/images&icons/img2.png",
    "/images&icons/img3.png",
    "/images&icons/img4.png",
  ];

  const CarouselImages = [
    "/images&icons/banner1.jpg",
    "/images&icons/banner2.jpg",
    "/images&icons/news1.png",
  ];

  return (
    <>
      <section id="hero_section" className=" bg-cover bg-no-repeat bg-left relative before:content[''] before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:bg-[#0000007d]  md:h-[70vh] sm:h-[60vh] h-[60vh]">
        <Carousel images={CarouselImages} />
        <SearchBar title="Find the perfect vendor for the job." btnTitle="Search" />
      </section>
      <section id="banner_section">
        <div className="container mx-auto py-9 px-2 md:py-12">
          <div className="grid grid-cols-12 gap-8 ">
            {BCardimages.map((src, i) => {
                return (
                  <BannerSectionCard imgsrc={src} imgalt={src} key={i} />
                  );
            })}
          </div>
        </div>
      </section>
      <section id="featurs_section" className="py-10 pt-20" >
        <div className="overflow-hidden bg-white py-7 px-3 ps-16">
          <h2 className="text-2xl lg:hidden block text-center md:text-3xl  font-semibold leading-7 text-grey-500 mb-10">In The News</h2>
          <div className="mx-auto max-w-7xl px-9">
            <FeaturSection mainTitle="In The News" rightSection={true} firstText="Powerful Reach, Profitable Results:" secondText=" Drive Success for Multifamily Vendors through High-Performing Ad Spaces." img="images&icons/news1.png" />
            <FeaturSection leftSection={true} firstText="Mastering Multifamily Marketing:" secondText=" The Key to Unlocking Market Potential." img="images&icons/news2.png" />
            <FeaturSection rightSection={true} firstText="The Winning Formula:" secondText="Leveraging Data and Insights for Effective Multifamily Advertising." img="images&icons/news3.png" />
            <div className="pt-12 lg:float-right text-center">
              <Link href="" className=" text-center tracking-wide flex-none rounded-md bg-[#221F20] px-8 py-3 text-xl font-normal  font-lato text-white shadow-sm hover:bg-[#221F20] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#221F20] mr-9">Explore Our Resource Library</Link>
            </div>
          </div>
        </div>
      </section>
      <section id="partner_section">
        <PartnerSection title="Partner with Vendor Guide." content="Take the step to join our esteemed community by signing up today and becoming a valued member of our trusted vendor network." btnTitle="Get Started" />
      </section>
    </>
  )
}
